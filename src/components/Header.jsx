'use client'

import styles from '@/styles/header.scss';
import { useUserIp } from '@/utilFunctions/useUserIp';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
    const [lastVisit, setLastVisit] = useState(null);
    const today = new Date().setUTCHours(0,0,0,0);
    const userip = useUserIp();

    const saveUserVisit = async () => {
        const {data} = await axios.get(`/api?ip=${userip}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        localStorage.setItem('lastvisit',data);
        setLastVisit(data);
    }
    
    useEffect(()=>{
        if(typeof window != 'undefined'){
            let ls = localStorage.getItem('lastvisit')
            if(!ls || ls != today){
                saveUserVisit();
            }else{
                setLastVisit(ls);
            }
        }
    }, [lastVisit])


    return (
        <header className={styles.header}>
            <div className="container">
                <div className="navbar">
                    <Link href="/" className="logo">CNA</Link>
                    <div className="nav">
                        <Link href="/posts" >Продажа</Link>
                        <Link href="/rent" >Аренда</Link>
                        <Link href="/#about" >О нас</Link>
                        <Link href="/phonebook" >Справочник</Link>
                        <Link href="/#contacts" >Контакты</Link>
                        <Link href="/application" target='_blank' className="btn" >Подать объявление</Link>
                        {/* <a href="tel:+77055621546" target='_blank' className="btn" ><i></i> Подать объявление</a> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;