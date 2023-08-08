'use client'

import RichText from '@/components/Inputs/RichText';
import Loading from '@/components/Loading';
import '@/styles/admin/admin.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Admin = () => {
    const [posts, setPosts] = useState();
    const getPosts = async () => {
        const {data} = await axios.get(`/api/posts?count=true`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPosts(data);
    }
    
    const getAbout = async () => {
        const {data} = await axios.get('/api/about',  {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAbout(data);
    }

    useEffect(()=>{
        if(!posts){
            getPosts();
            getAbout();
        }
    }, [posts])




    const [about, setAbout] = useState('');
    const handleChange = (value) => {
        setAbout(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, status} = await axios.post(`/api/about`, {text: about}, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAbout(data);
        // if(status === 200){
        //     setModalText(modalSuccessCreation)
        //     await delay(3000);
        //     // router.push(`/admin/posts/${data._id}`);
        // }else{
        //     setModalText(modalFail)
        // }
    }
    return (
        <div id="admin">
            <div className='cards'>
                <div className='card'>
                    <div className='title'>
                        Квартиры
                    </div>
                    <div className='number'>
                        {posts ? 
                            posts.apartments > 0 ?
                                posts.apartments : 0 
                            : (<Loading small={true} />)}                    
                    </div>
                </div>
                <div className='card'>
                    <div className='title'>
                        Дома
                    </div>
                    <div className='number'>
                        {posts ? 
                            posts.houses > 0 ?
                                posts.houses : 0
                            : (<Loading small={true} />)}
                    </div>
                </div>
                <div className='card'>
                    <div className='title'>
                        Коммерческие недвижимости
                    </div>
                    <div className='number'>                    
                        {posts ? 
                            posts.commercials > 0 ?
                                posts.commercials : 0
                            : (<Loading small={true} />)}
                    </div>
                </div>
            </div>
            <div className='about-content'>
                <div className='heading'>
                    О нас
                </div>
                <RichText key='rich1' value={about} handleChange={handleChange} />
                <div className='btns'>
                    <div className='btn reset' onClick={(e)=>{e.preventDefault(); getAbout()}}>
                        Сбросить изменения
                    </div>
                    <div className='btn save' onClick={handleSubmit}>
                        Сохранить
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;