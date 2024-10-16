import { BALCONY, BATHROOMS, ELECTRICITY, FURNISHED, GAS, HEATINGS, INTERNET, MATERIALS, PLACEMENTS, PURPOSES, SEWERAGES, STATES, TELEPHONE, WATER } from '@/constants';
import '@/styles/admin/postform.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RichText from '../Inputs/RichText';

const initFormData = {
    housing: 'apartment',
    city: '',
    region: '',
    rooms: 0,
    price: 0,
    adress: '',
    description: '',
    material: '',
    year: '',
    floor: 0,
    floors: 0,
    state: '',
    roofing: '',
    sewerage: '',
    fencing: '',
    electricity: '',
    heating: '',
    gas: '',
    water: '',
    plot: '',
    realtor: {
        name: '',
        phone: ''
    },
    area: {
        total: '',
        kitchen: '',
        living: ''
    },
    bathroom: '',
    balcony: {
        value: '',
        glazed: false
    },
    telephone: '',
    internet: '',
    furnished: '',
    commercial: {
        purpose: '',
        placement: ''
    },


    posttype: 'sell',
    rentPeriod: 'По часам'
};


const modalSuccessCreation = {
    type: 'success',
    title: 'Объявление успешно создано',
}
const modalSuccessEdit = {
    type: 'success',
    title: 'Объявление успешно изменена',
}
const modalFail = {
    type: 'fail',
    title: 'Что-то пошло не так',
    subtitle: 'Попробуйте позже или обновите страницу.'
}

const PostForm = ({post=null}) => {
    const [formData, setFormData] = useState(initFormData);
    const [regions, setRegions] = useState(null);
    const [cities, setCities] = useState(null);
    const [cityObjects, setCityObjects] = useState(null);

    const [modalText, setModalText] = useState(null);


    // const getRegions = async () => {
    //     const {data} = await axios.get(`/api/regions`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
    //     setRegions(data);
    // }
    useEffect(()=>{
        if(regions){
            if(!post || !post._id){
                setFormData({...formData, region: regions[0].name});
            }
        }
    }, [regions]);
    const getCities = async () => {
        const {data} = await axios.get('/api/cities', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCityObjects(data);
        setCities(data);
    }
    useEffect(()=>{
        if(!cities)
            getCities();
        else{
            setFormData({...formData, city: cities[0].name})
            setRegions(cityObjects[0].regions);
        }
    }, [cities])
    
    useEffect(() => {
        if(post && post._id){
            setFormData({...formData,...post, region: post.region.name, housing: post.housing.slug});
            // setFormData({...formData,...post, city: post.city.name, region: post.region.name, housing: post.housing.slug});
            setImages(post.images);
        }
    }, [post])

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'city' && formData.city !== value){
            for (let i = 0; i < cityObjects.length; i++) {
                const city = cityObjects[i];
                if(city.name === value){
                    setRegions(city.regions);
                }
            }
            setFormData({...formData, [name]: value, region: null});
        }
        else if(name.includes('_')){
            let f = name.split('_');
            let f1 = f[0];
            let f2 = f[1];
            setFormData({...formData, [f1]: {...formData[f1], [f2]: value}});
        }else{
            setFormData({...formData, [name]: value});
        }
    }
    const handleDescriptionChange = (value) => {
        setFormData({...formData, description: value});
    }
    const clear = (e)=>{
        e.preventDefault();
        if(post && post._id){
            setFormData({...initFormData, ...post, city: post.city.name, region: post.region.name, housing: post.housing.slug});
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

            if(typeof(value) === 'object'){
                for (let j in value) {
                    let subval = formData[i][j];
                    fd.append(`${i}[${j}]`, subval)
                }
            }else{
                fd.append(i, value);
            }
        }
        images.map((img)=>{
            fd.append('images', img);
        })


        if(post && post._id){
            const {data, status} = await axios.patch(`/api/posts/${post._id}`, fd, {validateStatus: function (status) { return true }, headers: {"Content-Type": "multift/form-data" }});
            if(status === 200){
                setFormData({...formData,...data, region: data.region.name, housing: data.housing.slug});
                setModalText(modalSuccessEdit)
            }else{
                setModalText(modalFail)
            }

        }else{
            const {data, status} = await axios.post(`/api/posts`, fd, {validateStatus: function (status) { return true }, headers: {"Content-Type": "multipart/form-data" }});
            if(status === 200){
                setModalText(modalSuccessCreation)
                await delay(3000);
                // router.push(`/admin/posts/${data._id}`);
            }else{
                setModalText(modalFail)
            }
        }

    }

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageUpload = async (e) => {
        const files = e.target.files;
        let imgList = [];
        const promises = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileType = file['type'];
            const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];

            if (validImageTypes.includes(fileType)) {
                const reader = new FileReader();

                promises.push(new Promise((resolve) => {
                    reader.onloadend = () => {
                        resolve(reader.result)
                    };
                    reader.readAsDataURL(file);
                }))
                imgList.push(file);
            } 
        }
        Promise.all(promises).then((base64Strings) => {
            setImages([...images, ...base64Strings]);
        });
    }

    const deleteImage = (index) => {
        const tmpImg = images[index];
        setImages(prev => prev.filter(img=>img != tmpImg));
        setCurrentImage(Math.max(0, index - 1));
    }
    const clearImages = (e) => {
        e.preventDefault();
        setImages([]);
        setCurrentImage(0);
    }

    return (
        <div id="postForm">
            <SuccessModal text={modalText} setText={setModalText} />
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="row">
                        <div className="col">
                            <div className="images-container">
                                <div className="current-image">
                                    {(images && images.length > 0 && images[currentImage]) ? (
                                        <>
                                            <img src={images[currentImage]} alt='prev'/>

                                            <i className="delete" onClick={(e)=>{e.preventDefault(); deleteImage(currentImage)}}></i>
                                        </>
                                    ) : (
                                        <div className="noimage">Нет изображения</div>
                                    )}
                                </div>
                                <div className="images">
                                    {images && images.map((image, key) => (
                                        <div className={`img ${currentImage === key ? 'active' : ''} `} key={key} onClick={(e)=>{e.preventDefault(); setCurrentImage(key)}}>
                                            <img src={image} alt={`prev${key}`}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="btns">
                                <div className="btn clear" onClick={clearImages}>
                                    Очистить изображения
                                </div>
                                <label className='btn save'>
                                    Загрузить
                                    <input type="file" multiple name="images" onChange={handleImageUpload} />
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Имя Риелтора</label>
                                <input type="text" name="realtor_name" required value={formData.realtor.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Тел. Номер Риелтора</label>
                                <input type="text" name="realtor_phone" value={formData.realtor.phone} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Категория</label>
                                <select disabled={post && post._id} name="posttype" value={formData.posttype} required onChange={handleChange}>
                                    <option value="sell">Продажа</option>
                                    <option value="rent">Аренда</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Тип недвижимости</label>
                                <select disabled={post && post._id} name="housing" value={formData.housing} required  onChange={handleChange}>
                                    <option value="apartment">Квартира</option>
                                    <option value="house">Дом</option>
                                    <option value="commercial">Коммерческая недвижимость</option>
                                </select>
                            </div>
                            {formData.posttype === 'rent' && (
                                <div className="form-group">
                                    <label>Периодичность</label>
                                    <select name="rentPeriod" value={formData.rentPeriod} required onChange={handleChange}>
                                        <option value="По часам">По часам</option>
                                        <option value="Посуточно">Посуточно</option>
                                        <option value="Помесячно">Помесячно</option>
                                    </select>
                                </div>
                            )}
                            <div className="form-group">
                                <label>Город</label>
                                <select name="city" value={formData.city} onChange={handleChange} required >
                                    {cities && cities.map((city, key) => (
                                        <option key={key} value={city.name}>{city.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Район</label>
                                <select name="region" value={formData.region} onChange={handleChange} required >
                                    {regions && regions.map((region) => (
                                        <option key={region._id} value={region.name}>{region.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Адрес</label>
                                <input type="text" name="adress" required value={formData.adress} onChange={handleChange} />
                            </div>
                            <div className="form-group number">
                                <label>Цена</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} required/>
                            </div>
                            <div className="form-group number">
                                <label>Год построки:</label>
                                <input type="text" name="year" value={formData.year} onChange={handleChange}/>
                            </div>
                            <div className="form-group number">
                                <label>Количество комнат:</label>
                                <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} required />
                            </div>
                            <div className="form-group number">
                                <label>Этаж:</label>
                                <input type="number" name="floor" value={formData.floor} onChange={handleChange}/>
                            </div>
                            <div className="form-group number">
                                <label>Этажей в зданий:</label>
                                <input type="number" name="floors" value={formData.floors} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group number" required>
                            <label>Общая площадь:</label>
                            <input type="text" name="area_total" inputMode="decimal" pattern="[0-9]*[.,]?[0-9]*" value={formData.area.total} onChange={handleChange}/>
                        </div>
                        {formData.housing !== 'commercial' && (
                            <>
                                <div className="form-group number">
                                    <label>Жилая площадь:</label>
                                    <input type="text" name="area_living" inputMode="decimal" pattern="[0-9]*[.,]?[0-9]*" value={formData.area.living} onChange={handleChange}/>
                                </div>
                                <div className="form-group number">
                                    <label>Площадь кухни:</label>
                                    <input type="text" name="area_kitchen" inputMode="decimal" pattern="[0-9]*[.,]?[0-9]*" value={formData.area.kitchen} onChange={handleChange}/>
                                </div>
                            </>
                        )}
                        {formData.housing !== 'apartment' && (
                            <div className="form-group number">
                                <label>Участок (сот.):</label>
                                <input type="text" name="plot" inputMode="decimal" pattern="[0-9]*[.,]?[0-9]*" value={formData.plot} onChange={handleChange}/>
                            </div>
                        )}
                    </div>

                    <div className="row">    
                        <div className="form-group">
                            <label>Тип строения</label>
                            <select name="material" value={formData.material} onChange={handleChange}>
                                <option value="">не важно</option>
                                {MATERIALS.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Состояние</label>
                            <select name="state" value={formData.state} onChange={handleChange}>
                                <option value="">не важно</option>
                                {STATES.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Санузел</label>
                            <select name="bathroom" value={formData.bathroom} onChange={handleChange}>
                                <option value="">не важно</option>
                                {BATHROOMS.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Мебилирована</label>
                            <select name="furnished" value={formData.furnished} onChange={handleChange}>
                                <option value="">не важно</option>
                                {FURNISHED.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Интернет</label>
                            <select name="internet" value={formData.internet} onChange={handleChange}>
                                <option value="">не важно</option>
                                {INTERNET.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Телефон</label>
                            <select name="telephone" value={formData.telephone} onChange={handleChange}>
                                <option value="">не важно</option>
                                {TELEPHONE.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Балкон</label>
                            <select name="balcony" value={formData.balcony?.value} onChange={handleChange}>
                                <option value="">не важно</option>
                                {BALCONY.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group check">
                            <label>
                                <input type="checkbox" name="balcony_glazed" id="" value={formData.balcony?.glazed} onChange={handleChange} /> 
                                Балкон остеклен
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label>Электричество</label>
                            <select name="electricity" value={formData.electricity} onChange={handleChange}>
                                <option value="">не важно</option>
                                {ELECTRICITY.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Канализация</label>
                            <select name="sewerage" value={formData.sewerage} onChange={handleChange}>
                                <option value="">не важно</option>
                                {SEWERAGES.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Газ</label>
                            <select name="gas" value={formData.gas} onChange={handleChange}>
                                <option value="">не важно</option>
                                {GAS.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Питьевая вода</label>
                            <select name="water" value={formData.water} onChange={handleChange}>
                                <option value="">не важно</option>
                                {WATER.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Отопление</label>
                            <select name="heating" value={formData.heating} onChange={handleChange}>
                                <option value="">не важно</option>
                                {HEATINGS.map((el, key) => (
                                    <option key={key} value={el}>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Покрытие крыши</label>
                            <input type="text" name='roofing' value={formData.roofing} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Как огорожен участок</label>
                            <input type="text" name='fencing' value={formData.fencing} onChange={handleChange} />

                        </div>
                    </div>
                    {formData.housing === 'commercial' && (
                        <div className="row">
                            <div className="form-group">
                                <label>Назначение</label>
                                <select name="commercial_purpose" required value={formData.commercial?.purpose} onChange={handleChange}>
                                    <option value="">не важно</option>
                                    {PURPOSES.map((el, key) => (
                                        <option key={key} value={el}>{el}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Где размещен объект</label>
                                <select name="commercial_placement" value={formData.commercial?.placement} onChange={handleChange}>
                                    <option value="">не важно</option>
                                    {PLACEMENTS.map((el, key) => (
                                        <option key={key} value={el}>{el}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    <RichText key='rich1' value={formData.description} handleChange={handleDescriptionChange} />

                </div>
                <div className="btns">
                    <div className="btn clear" onClick={clear}>
                        {(post && post._id) ? 'Сбросить изменения' : 'Очистить'}
                    </div>
                    <input type="submit" className='btn save' value="Сохранить" />
                </div>
            </form>
        </div>
    );
};

export default PostForm;


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