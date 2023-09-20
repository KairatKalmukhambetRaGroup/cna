'use client'

import PhoneBookContact from "@/components/PhoneBookContact";
import axios from "axios"
import { useEffect, useState } from "react";

const PhoneBookContactPage = ({params}) => {
    const {id} = params;
    const [contact, setContact] = useState(null);
    const getContact = async () => {
        const {data} = await axios.get(`/api/phonebook/${id}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});

        setContact(data);
    }

    useEffect(()=>{
        if(id && !contact){
            getContact();
        }
    }, [id])

    return (
        <PhoneBookContact contact={contact} />
    )
};

export default PhoneBookContactPage;