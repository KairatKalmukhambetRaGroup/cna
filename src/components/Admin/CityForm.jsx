const CityForm = ({formData, setFormData, clear, handleSubmit}) => {
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }
    return (
        <form id="cityForm" className={`${formData._id ? 'edit' : ''}`} onSubmit={handleSubmit}>
            <div className="heading">
                {formData._id ? 'Изменить Город' : 'Добавить Город'}
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
    )
};

export default CityForm;