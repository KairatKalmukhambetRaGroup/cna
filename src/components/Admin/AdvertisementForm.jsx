import '@/styles/admin/advertisements.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const initFormData = {
    name: '',
    description: '',
    link: ''
};

const modalSuccessCreation = {
    type: 'success',
    title: 'Баннер успешно создан',
}
const modalSuccessEdit = {
    type: 'success',
    title: 'Баннер успешно изменен',
}
const modalFail = {
    type: 'fail',
    title: 'Что-то пошло не так',
    subtitle: 'Попробуйте позже или обновите страницу.'
}

const AdvertisementForm = ({ad=null}) => {
    const [formData, setFormData] = useState(initFormData);
    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState(null);
    const [modalText, setModalText] = useState(null);

    useEffect(()=>{
        if(ad && ad._id){
            setFormData({...formData, ...ad});
            setPreview(`/uploads/${ad.image}`);
        }
    }, [ad]);

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value});
    }
    const clear = (e)=>{
        e.preventDefault();
        if(ad && ad._id){
            setFormData({...initFormData, ...ad});
        }else{
            setFormData(initFormData);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        save();
    }
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const save = async () => {
        const fd = new FormData();
        for(let i in formData){
            let value = formData[i];
            fd.append(i, value);
        }
        if(image){
            fd.append('image', image);
        }


        if(ad && ad._id){
            const {data, status} = await axios.patch(`/api/advertisements/${ad._id}`, fd, {validateStatus: function (status) { return true }, headers: {"Content-Type": "multift/form-data" }});
            if(status === 200){
                setFormData({...formData,...data});
                setModalText(modalSuccessEdit)
            }else{
                setModalText(modalFail)
            }

        }else{
            const {data, status} = await axios.post(`/api/advertisements`, fd, {validateStatus: function (status) { return true }, headers: {"Content-Type": "multipart/form-data" }});
            if(status === 200){
                setModalText(modalSuccessCreation)
                // await delay(3000);
                // router.push(`/admin/posts/${data._id}`);
            }else{
                setModalText(modalFail)
            }
        }

    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const fileType = file['type'];
        const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (validImageTypes.includes(fileType)) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        } 
    }
    const deleteImage = (e) => {
        e.preventDefault();
        setImage(null);
        setPreview(null);    
    }

    return (
        <div id="adForm">
            <SuccessModal text={modalText} setText={setModalText} />
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="row">
                        <div className="col">
                            <div className="image-container">
                                <div className="preview">
                                    {preview ? (
                                        <img src={preview} alt='prev'/>
                                    ) : (
                                        <div className="noimage">Нет изображения</div>
                                    )}
                                </div>
                                <div className="btns">
                                    <div className="btn clear" onClick={deleteImage}>
                                        Удалить изображение
                                    </div>
                                    <label className="btn save">
                                        Загрузить
                                        <input type="file" name="images" onChange={handleImageUpload} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Название</label>
                                <input type="text" name='name' required value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Ссылка</label>
                                <input type="url" name='link' value={formData.link} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label>Описание</label>
                            <textarea name="description"style={{width: '100%'}} rows="10" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <div className="btn clear" onClick={clear}>
                        {(ad && ad._id) ? 'Сбросить изменения' : 'Очистить'}
                    </div>
                    <input type="submit" className='btn save' value="Сохранить" />
                </div>
            </form>
        </div>
    );
}

export default AdvertisementForm;

const SuccessModal = ({text, setText}) => {
    const close = (e) => {
        e.preventDefault();
        setText(null);
    }

    if(!text)
        return ;
    return (
        <div className="modal">
            <div className={`content ${text?.type}`}>
                <i></i>
                <div className="text">
                    <div className="title">
                        {text?.title}
                    </div>
                    {text && text.subtitle && (
                        <div className="subtitle">
                            {text.subtitle}
                        </div>
                    )}
                </div>
                <div className="btn" onClick={close}>ОК</div>
            </div>
        </div>
    );
};