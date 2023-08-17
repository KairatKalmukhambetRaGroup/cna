'use client'

import Loading from '@/components/Loading';
import { useState, useEffect } from 'react';

import axios from 'axios';
import '@/styles/admin/cities.scss';
import CityForm from '@/components/Admin/CityForm';
import Link from 'next/link';

const initFormData = {
    name: ''
}
const Cities = () => {
    const [formData, setFormData] = useState(initFormData);
    const [cities, setCities] = useState(null);
    const getCities = async () => {
        const {data} = await axios.get('/api/cities', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCities(data);
    }
    useEffect(()=> {
        if(!cities)
            getCities();
    }, [cities]);

    const editCity = (city) => {
        setFormData(city);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData._id) {
            const {data} = await axios.patch('/api/cities', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setCities(data)
        }else{
            const {data} = await axios.post('/api/cities', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setCities(data);
        }
        clear(e);
    }
    const clear = (e) => {
        e.preventDefault();
        setFormData(initFormData);
    }


    return (
        <div id='cities'>
            <div className='heading'>
                Города
            </div>
            <CityForm formData={formData} setFormData={setFormData} clear={clear} handleSubmit={handleSubmit} />
            <div className='cities'>
                {cities ? 
                    cities.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Название</th>
                                        <th>Действие</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cities.map((city, key)=>(
                                        <tr key={key}>
                                            <td>
                                                {Number(key) + 1}
                                            </td>
                                            <td>
                                                {city.name}
                                            </td>
                                            <td className='actions'>
                                                <Link className='action' href={`/admin/cities/${city._id}`}>
                                                    Районы
                                                </Link>
                                                <div className='action' onClick={(e)=>{e.preventDefault(); editCity(city);}}>
                                                    Изменить
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className='none'>
                                NONE
                            </div>
                        )
                    : (
                        <Loading />
                    )
                }   
            </div>
        </div>
    );

};

export default Cities;