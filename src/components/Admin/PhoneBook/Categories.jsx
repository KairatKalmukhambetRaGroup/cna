import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import Link from "next/link";
import '@/styles/admin/phonebook.scss';

const initFormData = {
    name: ''
}
const PhoneBookCategories = () => {
    const [formData, setFormData] = useState(initFormData);
    const [categories, setCategories] = useState(null);
    const getCategories = async () => {
        const {data} = await axios.get('/api/phonebook/category', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCategories(data);
    }

    useEffect(()=>{
        if(!categories)
            getCategories();
    }, [categories]);

    const editCategory = (category) => {
        setFormData(category);
    }
    const clear = (e) => {
        e.preventDefault();
        setFormData(initFormData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData._id) {
            const {data} = await axios.patch('/api/phonebook/category', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setCategories(data)
        }else{
            const {data} = await axios.post('/api/phonebook/category', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setCategories(data);
        }
        clear(e);
    }

    return (
        <div id="phonebookcategories">
            <div className="heading">
                Справочник - Категории
            </div>
            <CategoryForm formData={formData} setFormData={setFormData} clear={clear} handleSubmit={handleSubmit} />
            <table className="categories">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {categories ? 
                        categories.length > 0 ? 
                            categories.map((item, key) => (
                                <tr key={key}>
                                    <td>{Number(key) + 1}</td>
                                    <td>{item.name}</td>
                                    <td className="actions">
                                        <Link className='action' href={`/admin/phonebook/category/${item._id}`}>
                                            Контакты
                                        </Link>
                                        <div className='action' onClick={(e)=>{e.preventDefault(); editCategory(item);}}>
                                            Изменить
                                        </div>
                                    </td>
                                </tr>
                            ))
                           : (
                                <tr>
                                    <td className="center" colSpan={3}> Нет категории </td>
                                </tr>
                            )
                        : (
                            <tr>
                                <td className="center" colSpan={3}> <Loading /> </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PhoneBookCategories;


const CategoryForm = ({formData, setFormData, clear, handleSubmit}) => {
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }

    return (
        <form id="categoryForm" className={formData._id ? 'edit' : ''} onSubmit={handleSubmit}>
            <div className="heading">
                {formData._id ? 'Изменить Категорию' : 'Добавить Категорию'}
            </div>            
            <div className="inputs">
                <div className="form-group">
                    <label>
                        Название
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="btn clear" onClick={clear}>{formData._id ? 'Отменить' : 'Очистить'}</div>
                <input className="btn save" type="submit" value={`${formData._id ? 'Изменить' : 'Добавить'}`} />
            </div>
        </form>
    );
}