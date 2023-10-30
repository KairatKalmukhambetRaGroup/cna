import Loading from "@/components/Loading";
import axios from "axios";
import '@/styles/admin/phonebook.scss';

import Link from "next/link";
import { useEffect, useState } from "react";

const initFormData = {
    name: '',
    phone: '',
    whatsapp: '',
    telegram: '',
    email: '',
    address: '',
    description: '',
    category: ''
}

const PhoneBookCategory = ({id}) => {
    const [formData, setFormData] = useState(initFormData);

    const [category, setCategory] = useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(null);

    const [deleteId, setDeleteId] = useState(null);

    const getCategory = async () => {
        const {data} = await axios.get(`/api/phonebook/category/${id}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCategory(data.category);
        setPhoneNumbers(data.numbers);
    }
    useEffect(()=>{
        if(id && !category){
            getCategory();
        }
    }, [id])

    const editNumber = (phoneNumber) => {
        setFormData(phoneNumber);
    }

    const deleteNumber = async (e) => {
        e.preventDefault();

        if(deleteId){
            setPhoneNumbers(null);
            const {data} = await axios.delete(`/api/phonebook/${deleteId}?category=${id}`,{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setDeleteId(null)
            setPhoneNumbers(data);
        }
    }

    const clear = (e) => {
        e.preventDefault();
        setFormData(initFormData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let d = {...formData, category: id};
        if(formData._id) {
            const {data} = await axios.patch('/api/phonebook', d, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setPhoneNumbers(data)
        }else{
            const {data} = await axios.post('/api/phonebook', d, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setPhoneNumbers(data);
        }
        clear(e);
    }

    if(!id) 
        return ;
    return (
        <div id="categoryNumbers">
            {category && (
                <div className="heading">
                    Справочник - {category.name}
                </div>
            )}
            <PhoneBookForm formData={formData} setFormData={setFormData} clear={clear} handleSubmit={handleSubmit}/>

            {deleteId && (
                <div className='deleteModal'>
                    <div className='modal'>
                        <div className='h1'>Удалить Контакт</div>
                        <div className='p'>Вы уверены что хотите удалить этот контакт?  После удаления его будет невозможно востановить!</div>
                        <div className='btns'>
                            <div className='btn delete' onClick={deleteNumber}>Удалить</div>
                            <div className='btn' onClick={(e)=>{e.preventDefault(); setDeleteId(null)}}>Отмена</div>
                        </div>
                    </div>
                </div>
            )}

            <table className="phonenumbers">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Телефон</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {phoneNumbers ? 
                        phoneNumbers.length > 0 ? 
                            phoneNumbers.map((item, key) => (
                                <tr key={key}>
                                    <td>{Number(key) + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td className="actions">
                                        <Link className='action' href={`/admin/phonebook/${item._id}`}>
                                            Подробнее
                                        </Link>
                                        <div className='action' onClick={(e)=>{e.preventDefault(); editNumber(item);}}>
                                            Изменить
                                        </div>
                                        <div className='action delete' onClick={(e)=>{e.preventDefault(); setDeleteId(item._id);}}>
                                            Удалить
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td className="center" colSpan={4}> Нет категории </td>
                                </tr>
                            )   
                        : (
                            <tr>
                                <td className="center" colSpan={4}> <Loading /> </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PhoneBookCategory;


const PhoneBookForm = ({formData, setFormData, clear, handleSubmit}) => {
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }

    return (
        <form id="phoneBookForm" className={formData._id ? 'edit' : ''} onSubmit={handleSubmit}>
            <div className="heading">
                {formData._id ? 'Изменить Контакт' : 'Добавить Контакт'}
            </div>
            <div className="inputs">
                <div className="row">
                    <div className="form-group">
                        <label>
                            Имя Фамилия
                        </label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>
                            Номер телефона
                        </label>
                        <input type="text" name="phone" required value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>
                            Э-почта
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label>
                            Адрес
                        </label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>
                            Whatsapp
                        </label>
                        <div className="input">
                            <div className="prefix">wa.me/</div>
                            <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="77771234567" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            Telegram
                        </label>
                        <div className="input">
                            <div className="prefix">t.me/</div>
                            <input type="email" name="telegram" value={formData.telegram} onChange={handleChange} placeholder="username" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>
                        Описание
                    </label>
                    <textarea rows="3" name="description" value={formData.description} onChange={handleChange} ></textarea>
                    {/* <input type="email" name="telegram" value={formData.telegram} onChange={handleChange} /> */}
                </div>
            </div>
            <div className="bottom">
                <div className="btn clear" onClick={clear}>{formData._id ? 'Отменить' : 'Очистить'}</div>
                <input className="btn save" type="submit" value={`${formData._id ? 'Изменить' : 'Добавить'}`} />
            </div>
        </form>
    );
}