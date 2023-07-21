'use client'
import '@/styles/filter.scss';
import Select from "../Inputs/Select";
import MultiNumberInput from "../Inputs/MultiNumberInput";
import NumberRange from "../Inputs/NumberRange";
import { HEATINGS, MATERIALS, SEWERAGES } from '@/constants';
import MultiSelect from '../Inputs/MultiSelect';

const HouseFilter = ({formData, handleChange, regions, handleSubmit}) => {
    return (
        <div id="filter" className="house">
            <div className="navbar">
                <div className="container">
                <div className="nav">
                        <div onClick={(e)=>{e.preventDefault(); handleChange('housing', 'apartment')}}>
                        Квартиры
                        </div>
                        <div className='active'>
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
                            <div className="regular-14-16">Дома</div>
                            <Select name="region" placeholder='Не важно' options={regions} value={formData.region} handleChange={handleChange} />
                            <MultiNumberInput name="rooms" label="- комн." value={formData.rooms} handleChange={handleChange} />
                            <NumberRange name="price" label="Цена" param="тг" value={formData.price} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="container">
                        <div className="content">
                            <div className="col">
                                <MultiSelect name="material" label='Тип строения' placeholder='Не важно' options={MATERIALS} value={formData.material} handleChange={handleChange} labeled={true} />
                                <NumberRange name="floors" label="Этажей в доме" value={formData.floors} handleChange={handleChange} labeled={true} />
                                <NumberRange name="year" label="Год постройки" value={formData.year} handleChange={handleChange} labeled={true}/>
                            </div>
                            <div className="col">
                                <NumberRange name="plot" label="Этаж" value={formData.plot} handleChange={handleChange} labeled={true} />
                                <MultiSelect name="heating" label='Отопление' placeholder='Не важно' options={HEATINGS} value={formData.heating} handleChange={handleChange} labeled={true}  />
                                <MultiSelect name="sewerage" label='Канализация' placeholder='Не важно' options={SEWERAGES} value={formData.sewerage} handleChange={handleChange} labeled={true}  />
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

export default HouseFilter;