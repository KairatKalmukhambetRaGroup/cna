import { useState } from "react";


const RegionForm = ({formData, setFormData, clear, handleSubmit}) => {
    
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'housings'){
            const {checked} = e.currentTarget;
            const {housings} = formData;
            if (checked) {
                setFormData({...formData, housings: [...housings, value]});
              }            
              else {
                setFormData({...formData, housings: housings.filter((h) => h !== value)});
              }
        }else{
            setFormData({...formData, [name]: value});
        }
    }
    
    
    return (
        <form id="regionForm" className={`${formData._id ? 'edit' : ''}`} onSubmit={handleSubmit}>
            <div className="heading">
                {formData._id ? 'Изменить Район' : 'Добавить Район'}
            </div>
            <div className="inputs">
                <div className="form-group">
                    <label>
                        Название
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>
                        Короткое название
                    </label>
                    <input type="text" name="short" value={formData.short} onChange={handleChange} />
                </div>
                
            </div>
            <div className="bottom">
                <div className="btn clear" onClick={clear}>{formData._id ? 'Отменить' : 'Очистить'}</div>
                <input className="btn save" type="submit" value={`${formData._id ? 'Изменить' : 'Добавить'}`} />
            </div>
        </form>
    )
};

export default RegionForm;