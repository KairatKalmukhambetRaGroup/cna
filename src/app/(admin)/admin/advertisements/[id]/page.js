'use client'

import AdvertisementForm from "@/components/Admin/AdvertisementForm"
import axios from "axios"
import { useEffect, useState } from "react";

import '@/styles/admin/advertisements.scss';

const EditAdvertisement = ({params}) => {
    const {id} = params;
    const [ad, setAd] = useState();
    const getAd = async () => {
        const {data} = await axios.get(`/api/advertisements/${id}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAd(data);
    }
    useEffect(()=>{
        if(id && !ad){
            getAd();
        }
    }, [id]);
    return (
        <div id="createAd">
            <div className="heading">
                Изменить данные баннера
            </div>
            {ad && (
                <AdvertisementForm ad={ad} />
            )}
        </div>
    );
};

export default EditAdvertisement;