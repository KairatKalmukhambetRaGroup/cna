'use client'

import RegionForm from '@/components/Admin/RegionForm';
import Loading from '@/components/Loading';
import '@/styles/admin/regions.scss';

import { useState, useEffect } from 'react';

import axios from 'axios';

const initFormData = {
    name: '',
    short: ''
}


const Regions = ({params}) => {
    const {id} = params;
    const [city, setCity] = useState(null);
    const [formData, setFormData] = useState(initFormData);

    const [regions, setRegions] = useState(null);
    const getCity = async () => {
        const {data} = await axios.get(`/api/cities/${id}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCity(data.city);
        setRegions(data.regions)
    }

    useEffect(()=>{
        if(id && !city){
            getCity();
        }
    }, [id])


    const editRegion = (region) => {
        setFormData(region);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData._id) {
            const {data} = await axios.patch('/api/regions', {...formData, city: id}, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setRegions(data)
        }else{
            const {data} = await axios.post('/api/regions', {...formData, city: id}, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setRegions(data);
        }
        clear(e);
    }
    const clear = (e) => {
        e.preventDefault();
        setFormData(initFormData);
    }

    return (
        <div id="regions">
            {city && (
                <div className="heading">
                    Районы города {city.name}
                </div>
            )}
            <RegionForm formData={formData} setFormData={setFormData} clear={clear} handleSubmit={handleSubmit}/>
            <div className='regions'>
                {regions ? 
                    regions.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Название</th>
                                        <th>Короткое название</th>
                                        <th>Действие</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {regions.map((region, key)=> (
                                    <tr key={key}>
                                        <td>
                                            {Number(key)+1}
                                        </td>
                                        <td>
                                            {region.name}
                                        </td>
                                        <td>
                                            {region.short}
                                        </td>
                                        <td>
                                            <div className='action' onClick={(e)=>{e.preventDefault(); editRegion(region);}}>
                                                Изменить
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className='none'>
                                Нет данных
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

export default Regions;