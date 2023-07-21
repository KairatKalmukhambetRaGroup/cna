'use client'

import RegionForm from '@/components/Admin/RegionForm';
import Loading from '@/components/Loading';
import '@/styles/admin/regions.scss';
import Link from 'next/link';

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const initFormData = {
    name: '',
    short: ''
}


const Regions = () => {
    const [formData, setFormData] = useState(initFormData);

    const [regions, setRegions] = useState(null);
    const getRegions = async () => {
        const {data} = await axios.get('/api/regions', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setRegions(data);
    }
    useEffect(()=>{
        if(!regions)
            getRegions();
    }, [regions])

    const editRegion = (region) => {
        setFormData(region);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData._id) {
            const {data} = await axios.patch('/api/regions', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setRegions(data)
        }else{
            const {data} = await axios.post('/api/regions', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
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
            <div className="heading">
                Районы
            </div>
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

export default Regions;