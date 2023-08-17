'use client'
import '@/styles/filter.scss';
import Select from "../Inputs/Select";
import NumberRange from "../Inputs/NumberRange";
import { PLACEMENTS, PURPOSES } from '@/constants';
import MultiSelect from '../Inputs/MultiSelect';
const housings = [
    'Кватиры',
    'Дома',
    'Коммерческие недвижимости'
]


const ComercialFilter = ({formData, handleChange, regions, handleSubmit, cities}) => {
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
        <div id="filter" className="commercial">
            <div className="navbar">
                <div className="container">
                <div className="nav">
                        <div onClick={(e)=>{e.preventDefault(); handleChange('housing', 'apartment')}}>
                        Квартиры
                        </div>
                        <div onClick={(e)=>{e.preventDefault(); handleChange('housing', 'house')}}>
                        Дома
                        </div>
                        <div className='active'>
                        Коммерческая недвижимость
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="top">
                    <div className="container">
                        <div className="content">
                            <span className='mobile'>
                                <Select name="housing" options={housings} value={'Коммерческие недвижимости'} handleChange={handleHousingChange} />
                            </span>
                            <MultiSelect name="purpose" placeholder='Не важно' label='Назначение' options={PURPOSES} value={formData.purpose} handleChange={handleChange} />
                            <Select name="city" placeholder='Не важно' options={cities} value={formData.city} handleChange={handleChange} />
                            {regions && regions.length > 0 && (
                                <Select name="region" placeholder='Не важно' options={regions} value={formData.region} handleChange={handleChange} />
                            )}
                            <NumberRange name="price" label="Цена" param="тг" value={formData.price} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="container">
                        <div className="content">
                            <div className="col">
                                <MultiSelect name="placement" label='Где размещен объект' placeholder='Не важно' options={PLACEMENTS} value={formData.placement} handleChange={handleChange} labeled={true} />
                            </div>
                            <div className="col">
                                <NumberRange name="total_area" label="Общая площадь" param="м2" value={formData.total_area} handleChange={handleChange} labeled={true} />
                            </div>
                            <div className="col">
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

export default ComercialFilter;