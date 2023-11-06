import '@/styles/phonebook.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Menu from './Menu';


const PhoneBook = () => {

    const [contacts, setContacts] = useState(null);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState(initFormData);
    const [subcategories, setSubcategories] = useState(null);

    const getContacts = async () => {
        const {data} = await axios.get(`/api/phonebook`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setContacts(data);
    }

    useEffect(()=>{
        getCategories();
        getContacts();
    },[])

    const getCategories = async () => {
        const {data} = await axios.get('/api/phonebook/category', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCategories(data);
    }



    return (
        <div id="phonebook">
            <Menu />
            <div className="container">
                <div className="wrapper">
                    <div className="heading">
                        Справочник специалистов
                    </div>
                    <div className="content">
                        <PhoneBookFilter categories={categories} formData={formData} setFormData={setFormData} setSubcategories={setSubcategories} subcategories={subcategories}/>
                        <div className="contacts">
                            {contacts ? 
                                contacts.length > 0 ? 
                                    contacts.filter(item => 
                                            (
                                                item.name.toLowerCase().includes(formData.q.toLowerCase()) 
                                                ||
                                                item.description.toLowerCase().includes(formData.q.toLowerCase()) 
                                                ||
                                                item.phone.toLowerCase().includes(formData.q.toLowerCase()) 
                                                ||
                                                item.address.toLowerCase().includes(formData.q.toLowerCase()) 
                                                ||
                                                item.category.name.toLowerCase().includes(formData.q.toLowerCase()) 
                                            )
                                            && 
                                            (
                                                formData.subcategory ? 
                                                    item.category._id == formData.subcategory
                                                :
                                                    formData.category ? 
                                                        subcategories.map(sub => sub._id).includes(item.category._id) : true)
                                        ).map((contact, key) => (
                                        <PhoneBookCard contact={contact} key={key} />
                                    ))
                                    : (
                                        <div className="none">
                                            По вашему запосу не найдено контактов
                                        </div>
                                    ) 
                                : <Loading />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneBook;

const initFormData = {q: '', category: '', subcategory: ''};
const PhoneBookFilter = ({categories, formData, setFormData, subcategories, setSubcategories}) => {
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name == 'category'){
            setFormData({...formData, [name]: value, subcategory: ''});
            if(value){
                categories.forEach(category => {
                    if(category._id === value)
                        setSubcategories(category.sub)
                });
            }else{
                setSubcategories(null);
            }
            
        }else{
            setFormData({...formData, [name]: value});
        }
    }
    const clear = () => {
        setFormData(initFormData);
        setSubcategories(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form id="phonebookfilter" onSubmit={handleSubmit}>
            <div className="filter">
                <div className="heading">
                    Фильтр
                </div>
                <div className="inputs">
                    <div className="form-group">
                        <label>Поиск</label>
                        <input type="text" name='q' onChange={handleChange} placeholder='Имя, адрес или номер телефона' />
                    </div>
                    <div className="form-group">
                        <label>Раздел</label>
                        <select name="category" onChange={handleChange} value={formData.category}>
                            <option value="">Выберите раздел</option>
                            {categories.map((category, key)=> (
                                <option value={category._id} key={key}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    {subcategories && 
                        <div className="form-group">
                            <label>Категория</label>
                            <select name="subcategory" onChange={handleChange} value={formData.subcategory}>
                                <option value="">Выберите категорию</option>
                                {subcategories.map((sub, key)=> (
                                    <option value={sub._id} key={key}>{sub.name}</option>
                                ))}
                            </select>
                        </div>
                    }
                </div>
                <div className="btns">
                    {/* <input className='btn' type="submit" value="Искать" /> */}
                    <div className="btn clear" onClick={clear}>Сбросить</div>
                </div>
            </div>
        </form>
    );
}


const PhoneBookCard = ({contact}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="name">
                    {contact.name}
                </div>
                <div className="profession">
                    <i></i>
                    {contact.category.name}
                </div>
                {contact.address && 
                    <div className="address">
                        <i></i> {contact.address}
                    </div>
                }
                {contact.description && 
                    <div className="description">
                        {contact.description}
                    </div>
                }                
            </div>
            <div className="card-footer">
                <div className="social">
                    {contact.telegram && 
                        <a href={`https://t.me/${contact.telegram}`} target='_blank' className='telegram'>
                            <i></i>
                        </a>
                    } 
                    {contact.whatsapp && 
                        <a href={`https://wa.me/${contact.whatsapp}`} target='_blank' className='whatsapp'>
                            <i></i>
                        </a>
                    }
                </div>
                {contact.phone.map((phone, key)=> (

                    <a href={`tel:${contact.phone}`} className='phone'>
                        <i></i>
                        {contact.phone[0]}
                    </a>
                    ))}
                {/* <Link href={`/phonebook/${contact._id}`} className='btn' >
                    Подробнее
                </Link> */}
            </div>
        </div>
    );
}