'use client'
import '@/styles/filter.scss';
import Select from "../Inputs/Select";
import MultiNumberInput from "../Inputs/MultiNumberInput";
import NumberRange from "../Inputs/NumberRange";
import { BATHROOMS, MATERIALS } from '@/constants';
import MultiSelect from '../Inputs/MultiSelect';

const housings = [
    'Кватиры',
    'Дома',
    'Коммерческие недвижимости'
]

const ApartmentFilter = ({prefix, formData, handleChange, handleSubmit, regions, cities}) => {
    const handleHousingChange = (name, value) =>{
        switch(value){
            case 'Кватиры':
                handleChange('housing', 'apartment');
                break;
            case 'Дома':
                handleChange('housing', 'house');
                break;
            case 'Коммерческие недвижимости':
                handleChange('housing', 'commercial');
                break;
        }
    }
    return (
        <div id="filter" className="apartment">
            <div className="navbar">
                <div className="container">
                    <div className="nav">
                        <div className='active'>
                        Квартиры
                        </div>
                        <div onClick={(e)=>{e.preventDefault(); handleChange('housing', 'house')}}>
                        Дома
                        </div>
                        <div onClick={(e)=>{e.preventDefault(); handleChange('housing', 'commercial')}}>
                        Коммерческая недвижимость
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="top">
                    <div className="container">
                        <div className="content">
                            <div className="regular-14-16">{prefix}</div>
                            <div className="regular-14-16 not-mobile">Квартиры</div>
                            <span className="mobile">
                                <Select name="housing" options={housings} value={'Квартиры'} handleChange={handleHousingChange} />
                            </span>
                            <Select name="city" placeholder='Не важно' options={cities} value={formData.city} handleChange={handleChange} />
                            {regions && regions.length > 0 && (
                                <Select name="region" placeholder='Не важно' options={regions} value={formData.region} handleChange={handleChange} />
                            )}
                            <MultiNumberInput name="rooms" label="- комн." value={formData.rooms} handleChange={handleChange} />
                            <NumberRange name="price" label="Цена" param="тг" value={formData.price} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="container">
                        <div className="content">
                            <div className="col">
                                <MultiSelect name="material" label='Тип дома' placeholder='Не важно' options={MATERIALS} value={formData.material} handleChange={handleChange} labeled={true} />
                                <NumberRange name="year" label="Год постройки" value={formData.year} handleChange={handleChange} labeled={true}/>
                            </div>
                            <div className="col">
                                <NumberRange name="floors" label="Этажей в доме" value={formData.floors} handleChange={handleChange} labeled={true} />
                                <NumberRange name="floor" label="Этаж" value={formData.floor} handleChange={handleChange} labeled={true} />
                                <MultiSelect name="bathroom" label='Сан узел' placeholder='Не важно' options={BATHROOMS} value={formData.bathroom} handleChange={handleChange} labeled={true}  />

                            </div>
                            <div className="col">
                                <NumberRange name="total_area" label="Общая площадь" param="м2" value={formData.total_area} handleChange={handleChange} labeled={true} />
                                <NumberRange name="kitchen_area" label="Площадь кухни" param="м2" value={formData.kitchen_area} handleChange={handleChange} labeled={true} />
                                <NumberRange name="living_area" label="Жилая площадь" param="м2" value={formData.living_area} handleChange={handleChange} labeled={true} />

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="content">
                            <div className="clear"><i></i> Очистить все</div>
                            <input type="submit" className="submit-btn" value="Показать результаты" />
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ApartmentFilter;