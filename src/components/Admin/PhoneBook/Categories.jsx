import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import Link from "next/link";
import '@/styles/admin/phonebook.scss';
import { DeleteContactModal, PhoneBookForm } from "./Category";
import CategoryForm from "./CategoryForm";

const initContactFormData = {
    name: '',
    phone: [''],
    whatsapp: '',
    telegram: '',
    email: '',
    address: '',
    description: '',
    category: ''
}
const PhoneBookCategories = () => {
    const [contactFormData, setContactFormData] = useState(initContactFormData);
    const [categories, setCategories] = useState(null);
    const [contacts, setContacts] = useState(null);

    const [activeCategory, setActiveCategory] = useState(null);

    const [categoryForm, setCategoryForm] = useState(null);
    const [deleteId, setDeleteId] = useState(null);


    const getCategories = async () => {
        const {data} = await axios.get('/api/phonebook/category', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCategories(data);
    }

    const getContacts = async () => {
        const {data} = await axios.get(`/api/phonebook`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setContacts(data);
    }


    const editContact = (contact) => {
        setContactFormData(contact);
    }


    useEffect(()=>{
        getContacts();
        if(!categories)
            getCategories();
    }, [categories]);

    useEffect(()=>{
        // if(!activeCategory){
            setContactFormData(initContactFormData);
        // }
    }, [activeCategory])

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        if(contactFormData._id){
            const {data} = await axios.patch('/api/phonebook', contactFormData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setContacts(data);
        }else{
            let d = {...contactFormData, category: activeCategory}
            const {data} = await axios.post('/api/phonebook', d, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setContacts(data);
        }
        clearContactForm();
    }
    const clearContactForm = () => {
        setContactFormData(initContactFormData);
    }

    const deleteContact = async (e) => {
        e.preventDefault();

        if(deleteId){
            const {data} = await axios.delete(`/api/phonebook/${deleteId}`,{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setDeleteId(null)
            setContacts(data);
        }
    }

    return (
        <div id="phonebookcategories">
            <DeleteContactModal deleteId={deleteId} setDeleteId={setDeleteId} deleteContact={deleteContact} />
            <CategoryForm category={categoryForm} setCategory={setCategoryForm} setCategories={setCategories}/>
            <div className="content">
                <div className="sidebar">
                    <div className="wrapper">
                        <div className="heading">
                            Справочник
                        </div>
                        <div className="btn create-section" onClick={(e)=>{setCategoryForm({name: ''})}}>
                            Добавить раздел <i></i>
                        </div>
                        <div className="categories">
                            {categories ? 
                                categories.length > 0 ? 
                                    categories.map((item, key) => (
                                        <div className="category" key={key}>
                                            <div className="category-name">
                                                {item.name}
                                                <div className="actions">
                                                    <i className="edit" onClick={(e)=>{setCategoryForm({_id: item._id, name: item.name})}}></i>
                                                    <i className="add" onClick={(e)=>{setCategoryForm({parent: item._id})}}></i>
                                                </div>
                                            </div>
                                            {item.sub.length > 0 && (
                                                <div className="subcategories">
                                                    {item.sub.map((sub, j) => (
                                                        <div key={j} className={`subcategory ${activeCategory === sub._id ? 'active' : ''}`} onClick={(e) => setActiveCategory(sub._id)}>
                                                            {sub.name}
                                                            
                                                            {activeCategory === sub._id && 
                                                                <i className="edit" onClick={(e)=>{setCategoryForm({_id: sub._id, name: sub.name, parent: item._id})}}></i>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                    : 
                                    'Нет категории'
                                    
                                : 
                                <Loading />
                            }
                        </div>
                    </div>
                </div>

                <div className="contacts">
                    {activeCategory && (
                        <PhoneBookForm activeCategory={activeCategory} formData={contactFormData} setFormData={setContactFormData} clear={clearContactForm} handleSubmit={handleContactSubmit} />
                    )}
                        <div className="phonenumbers">    
                            {contacts ? 
                                contacts.length > 0 ? 
                                contacts.filter(item => item.category._id === activeCategory).map((item, key) => (
                                        <div className="phonenumber" key={key}>
                                            <div className="body">
                                                <div className="name">
                                                    {item.name}
                                                </div>
                                                {item.description && 
                                                    <div className="description">
                                                        {item.description}
                                                    </div>
                                                }
                                                <nav className="info">
                                                    <li>
                                                        <span className="title">
                                                            Телефон:
                                                        </span>
                                                        {item.phone ? item.phone.join(', ') : 'Нет'}
                                                    </li>
                                                    <li>
                                                        <span className="title">
                                                            Э-почта:
                                                        </span>
                                                        {item.email || 'Нет'}
                                                    </li>
                                                    <li>
                                                        <span className="title">
                                                            Адрес:
                                                        </span>
                                                        {item.address || 'Нет'}
                                                    </li>
                                                    <li>
                                                        <span className="title">
                                                            Whatsapp:
                                                        </span>
                                                        {item.whatsapp ? `wa.me/${item.whatsapp}` : 'Нет'}
                                                    </li>
                                                    <li>
                                                        <span className="title">
                                                            Telegram:
                                                        </span>
                                                        {item.telegram ? `t.me/${item.telegram}` : 'Нет'}
                                                    </li>
                                                </nav>
                                            </div>
                                            <div className="actions">
                                                <div className='action' onClick={(e)=>{e.preventDefault(); editContact(item);}}>
                                                    Изменить
                                                </div>
                                                <div className='action delete' onClick={(e)=>{e.preventDefault(); setDeleteId(item._id);}}>
                                                    Удалить
                                                </div>
                                            </div>
                                        </div>
                                    )) : (
                                        <div className="center">
                                            Нет категории 
                                        </div>
                                    )   
                                : (
                                    <div className="center">
                                        <Loading />
                                    </div>
                                )
                            }

                            {!activeCategory && <div className="center">
                                Выберите категорию
                            </div>}
                        </div>                        
                </div>
            </div>
        </div>
    );
};

export default PhoneBookCategories;