'use client'
import React, { useEffect, useState } from 'react';
import '@/styles/filter.scss';
import TextInput from "../Inputs/TextInput";
import Select from "../Inputs/Select";
import MultiNumberInput from "../Inputs/MultiNumberInput";
import NumberRange from "../Inputs/NumberRange";
import axios from 'axios';

const initFormData = {
    operation: 'Купить', 
    housing: 'Квартиру',
    rooms: [],
    city: '',
    region: '',
    price: {
        from: '',
        to: ''
    },
};

const SimpleFilter = ({handleSubmit}) => {
    const [formData, setFormData] = React.useState(initFormData);
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
        if(name === 'city' && formData.city !== value){
            for (let i = 0; i < cityObjects.length; i++) {
                const city = cityObjects[i];
                if(city.name === value){
                    setRegions(city.regions.map((region)=>region.short));
                }
            }
        }

        if(name === 'housing' && value === 'Коммерческую недвижимость'){
            setFormData({...formData, rooms: [], housing: value});
        }
    }
    const [regions, setRegions] = useState(null);
    const [cities, setCities] = useState(null);
    const [cityObjects, setCityObjects] = useState(null);
    const getCities = async () => {
        const {data} = await axios.get('/api/cities', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCityObjects(data);
        setCities(data.map((region)=>region.name));
    }
    // useEffect(()=>{
    //     if(!regions)
    //         getRegions();
    // }, [regions]);
    
    
    useEffect(()=>{
        if(!cities)
            getCities();
        else{
            setFormData({...formData, city: cities[0]})
            setRegions(cityObjects[0].regions.map((region)=>region.short));
        }
    }, [cities])

    return (
        <div id="filter" className="simple">
            <div className="container">
                <div className="content">
                    <form onSubmit={(e)=>{e.preventDefault();handleSubmit(formData);}}>
                        <Select mobile={true} name='operation' options={['Купить', 'Арендовать']} value={formData.operation} handleChange={handleChange} />
                        <Select mobile={true} name="housing" options={['Квартиру', 'Дом', 'Коммерческую недвижимость']} value={formData.housing} handleChange={handleChange} />
                        <Select mobile={true} name="city" options={cities} value={formData.city} handleChange={handleChange} />
                        {regions && regions.length > 0 && (
                            <Select name="region" placeholder='Не важно' options={regions} value={formData.region} handleChange={handleChange} />
                        )}
                        {formData.housing !== 'Коммерческую недвижимость' && (
                            <MultiNumberInput name="rooms" label="- комн." value={formData.rooms} handleChange={handleChange} />
                        )}
                        <NumberRange name="price" label="Цена" param="тг" value={formData.price} handleChange={handleChange} />
                        <input type="submit" className="submit-btn" value="Фильтр" />
                    </form>
                </div>
            </div> 
        </div>
    );
};

export default SimpleFilter;