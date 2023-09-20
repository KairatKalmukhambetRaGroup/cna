import '@/styles/phonebook.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Menu from './Menu';


const PhoneBook = ({query}) => {

    const [contacts, setContacts] = useState(null);
    const [categories, setCategories] = useState([]);

    const getContacts = async () => {
        const {data} = await axios.get(`/api/phonebook?q=${query.q ? query.q : ''}&category=${query.category ? query.category : ''}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setContacts(data);
    }

    useEffect(()=>{
        getCategories();
    },[])
    useEffect(()=>{
        getContacts();
    },[query])


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
                        <PhoneBookFilter categories={categories} query={query}/>
                        <div className="contacts">
                            {contacts ? 
                                contacts.length > 0 ? 
                                    contacts.map((contact, key) => (
                                        <PhoneBookCard contact={contact} key={key} />
                                    ))
                                    : (
                                        <div className="none">
                                            none
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
const PhoneBookFilter = ({categories, query}) => {
    const router = useRouter();
    const [formData, setFormData] = useState(initFormData);

    useEffect(()=>{
        setFormData({...formData, ...query});
    }, [query])

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }

    const clear = () => {
        setFormData(initFormData);
        router.push('?q=&category=');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`?q=${formData.q}&category=${formData.category}`);
    }

    return (
        <form id="phonebookfilter" onSubmit={handleSubmit}>
            <div className="heading">
                Фильтр
            </div>
            <div className="inputs">
                <div className="form-group">
                    <label>Поиск</label>
                    <input type="text" name='q' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Специализация</label>
                    <select name="category" onChange={handleChange} value={formData.category}>
                        <option value="">Неважно</option>
                        {categories.map((category, key)=> (
                            <option value={category._id} key={key}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="btns">
                <input className='btn' type="submit" value="Искать" />
                <div className="btn clear" onClick={clear}>Сбросить</div>
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
                    {contact.category.name}
                </div>
            </div>
            <div className="card-footer">
                <Link href={`/phonebook/${contact._id}`} className='btn' >
                    Подробнее
                </Link>
            </div>
        </div>
    );
}