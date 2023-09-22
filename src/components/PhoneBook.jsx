import '@/styles/phonebook.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Menu from './Menu';


const PhoneBook = () => {

    const [contacts, setContacts] = useState(null);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState(initFormData);

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
                        <PhoneBookFilter categories={categories} formData={formData} setFormData={setFormData}/>
                        <div className="contacts">
                            {contacts ? 
                                contacts.length > 0 ? 
                                    contacts.filter(item => item.name.toLowerCase().includes(
                                            formData.q.toLowerCase()) && 
                                            (formData.category ? item.category._id === formData.category : true)
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

const initFormData = {q: '', category: ''};
const PhoneBookFilter = ({categories, formData, setFormData}) => {
    // const [formData, setFormData] = useState(initFormData);

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }

    const clear = () => {
        setFormData(initFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form id="phonebookfilter" onSubmit={handleSubmit}>
            <div className="heading">
                Фильтр
            </div>
            <div className="inputs">
                {/* <div className="form-group">
                    <label>Поиск</label>
                    <input type="text" name='q' onChange={handleChange} />
                </div> */}
                <div className="form-group">
                    <label>Специализация</label>
                    <select name="category" onChange={handleChange} value={formData.category}>
                        <option value="">Выберите специализацию</option>
                        {categories.map((category, key)=> (
                            <option value={category._id} key={key}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* <div className="btns">
                <input className='btn' type="submit" value="Искать" />
                <div className="btn clear" onClick={clear}>Сбросить</div>
            </div> */}
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
                <div className="address">
                    <i></i> {contact.address}
                </div>
            </div>
            <div className="card-footer">
                {contact.phone && 
                    <a href={`tel:${contact.phone}`} className='phone'>
                        <i></i>
                        {contact.phone}
                    </a>
                }
                {contact.telegram && 
                    <a href={`${contact.telegram}`} className='telegram'>
                        <i></i>
                    </a>
                } 
                {contact.whatsapp && 
                    <a href={`${contact.whatsapp}`} className='whatsapp'>
                        <i></i>
                    </a>
                }
                {/* <Link href={`/phonebook/${contact._id}`} className='btn' >
                    Подробнее
                </Link> */}
            </div>
        </div>
    );
}