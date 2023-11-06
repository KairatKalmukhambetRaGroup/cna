import axios from "axios";
import { useEffect, useState } from "react";

const initFormData = {
    name: '',
    parent: ''
}

const CategoryForm = ({category, setCategory, setCategories}) => {
    const [formData, setFormData] = useState(initFormData);

    useEffect(()=>{
        if(category){
            setFormData(category);
        }
    }, [category]);

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(formData._id) {
            const {data} = await axios.patch('/api/phonebook/category', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            // setCategories(data)
            setCategories(data);
        }else{
            const {data} = await axios.post('/api/phonebook/category', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            // setCategories(data);
            setCategories(data);
        }
        clear(e);
    }

    const clear = (e) => {
        e.preventDefault();
        setFormData(initFormData);
        setCategory(null)
    }

    if(!category)
        return ;
    return (
        <div id="categoryForm" >
            <div className="container">
                <div className="content">
                    <form className={formData._id ? 'edit' : ''} onSubmit={handleSubmit}>
                        <div className="heading">
                            {`${formData._id ? 'Изменить' : 'Добавить'} ${formData.parent ? 'Категорию' : 'Раздел'}`}
                        </div>            
                        <div className="inputs">
                            <div className="form-group">
                                <label>
                                    Название
                                </label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="btns">
                                <div className="btn clear" onClick={clear}>Отмена</div>
                                <input className="btn save" type="submit" value={`${formData._id ? 'Изменить' : 'Добавить'}`} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CategoryForm