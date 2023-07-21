'use client'
import React, { useEffect, useState } from 'react';
import '@/styles/filter.scss';
import TextInput from "../Inputs/TextInput";
import Select from "../Inputs/Select";
import MultiNumberInput from "../Inputs/MultiNumberInput";
import NumberRange from "../Inputs/NumberRange";
import axios from 'axios';

const initFormData = {
    housing: 'Квартиру',
    rooms: [],
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
        if(name === 'housing' && value === 'Коммерческую недвижимость'){
            setFormData({...formData, rooms: [], housing: value});
        }
    }
    const [regions, setRegions] = useState(null);
    const getRegions = async () => {
        const {data} = await axios.get('/api/regions', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setRegions(data.map((region)=>region.short));
    }
    useEffect(()=>{
        if(!regions)
            getRegions();
    }, [regions]);


    return (
        <div id="filter" className="simple">
            <div className="container">
                <div className="content">
                    <form onSubmit={(e)=>{e.preventDefault();handleSubmit(formData);}}>
                        <div className="regular-14-16">Купить</div>
                        <Select mobile={true} name="housing" options={['Квартиру', 'Дом', 'Коммерческую недвижимость']} value={formData.housing} handleChange={handleChange} />
                        <Select name="region" placeholder='Не важно' options={regions} value={formData.region} handleChange={handleChange} />
                        {formData.housing !== 'Коммерческую недвижимость' && (
                            <MultiNumberInput name="rooms" label="- комн." value={formData.rooms} handleChange={handleChange} />
                        )}
                        <NumberRange name="price" label="Цена" param="тг" value={formData.price} handleChange={handleChange} />
                        <input type="submit" className="submit-btn" value="Найти" />
                    </form>
                </div>
            </div> 
        </div>
    );
};

export default SimpleFilter;