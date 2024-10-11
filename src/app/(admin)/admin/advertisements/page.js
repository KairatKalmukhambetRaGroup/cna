'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import '@/styles/admin/advertisements.scss';
import Loading from '@/components/Loading';
import Link from 'next/link';


const Advertisements = () => {
    const [ads, setAds] = useState(null);
    const getAds = async () => {
        const {data} = await axios.get('/api/advertisements', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAds(data);
    } 
    const [deleteId, setDeleteId] = useState(null);

    useEffect(()=>{
        if(!ads)
            getAds();
    }, [ads])

    const deleteAdvertisement = async (e) => {
        e.preventDefault();
        if(deleteId){
            const {data} = await axios.delete(`/api/advertisements/${deleteId}`,{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setDeleteId(null);
            setAds(null);
            setAds(data);   
        }
    }

    return (
        <div id="ads">
            <div className='heading'>
                Рекламные баннеры
                <Link href="/admin/advertisements/new" className='new-ad'>
                    Добавить баннер
                </Link>   
            </div>
            {deleteId && (
                <div className='deleteModal'>
                    <div className='modal'>
                        <div className='h1'>Удалить рекламный баннер</div>
                        <div className='p'>Вы уверены что хотите удалить этот баннер?  После удаления его будет невозможно востановить!</div>
                        <div className='btns'>
                            <div className='btn delete' onClick={deleteAdvertisement}>Удалить</div>
                            <div className='btn' onClick={(e)=>{e.preventDefault(); setDeleteId(null)}}>Отмена</div>
                        </div>
                    </div>
                </div>
            )}
            <div className='content'>
                {ads ? 
                    ads.length > 0 ? 
                        ads.map((ad, key)=> (
                            <div className='ad' key={key}>
                                <div className='ad-content'>
                                    <div className='image'>
                                        {ad.image && (
                                            <img src={ad.image} alt=""/>
                                        )}
                                    </div>
                                    <div className='info'>
                                        <div className="title">{ad.name}</div>
                                        {ad.description && (
                                            <div className="description">{ad.description}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='actions'>
                                    <Link href={`/admin/advertisements/${ad._id}`} className='btn edit'>
                                        Изменить
                                    </Link>
                                    <div className='btn delete' onClick={(e)=>{e.preventDefault(); setDeleteId(ad._id)}}>
                                        Удалить
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className='none'>
                                NONE
                            </div>
                        )
                    : (
                        <Loading />
                    )}
            </div>
        </div>
    );
};

export default Advertisements;