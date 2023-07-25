'use client'

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
    useEffect(()=>{
        if(!posts)
            getPosts();
    }, [posts])
    return (
        <div id="admin">
            <div className='cards'>
                <div className='card'>
                    <div className='title'>
                        Квартиры
                    </div>
                    <div className='number'>
                        {(posts && posts.apartments) ? posts.apartments : (<Loading />)}                    
                    </div>
                </div>
                <div className='card'>
                    <div className='title'>
                        Дома
                    </div>
                    <div className='number'>
                        {(posts && posts.houses) ? posts.houses : (<Loading />)}
                    </div>
                </div>
                <div className='card'>
                    <div className='title'>
                        Коммерческие недвижимости
                    </div>
                    <div className='number'>                    
                        {(posts && posts.commercials) ? posts.commercials : (<Loading />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;