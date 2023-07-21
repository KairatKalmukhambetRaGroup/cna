'use client'

import ApartmentFilter from '@/components/Filter/ApartmentFilter';
import ComercialFilter from '@/components/Filter/ComercialFilter';
import HouseFilter from '@/components/Filter/HouseFilter';
import Posts from '@/components/Post/Posts';
import Sidebar from '@/components/Sidebar';
import '@/styles/home.scss';
import { dataToQuery, queryToData } from '@/utilFunctions/dateConvert';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const initFormData = {
    housing: 'apartments',
    rooms: [],
    purpose: [],
    placement: [],
    region: '',
    price: {
        from: '',
        to: ''
    },
    material: [],
    year: {
        from: '',
        to: ''
    },
    floor: {
        from: '',
        to: ''
    },
    floors: {
        from: '',
        to: ''
    },
    plot: {
        from: '',
        to: '',
    },
    heating: [],
    sewerage: [],
    bathroom: [],
    total_area: {
        from: '',
        to: ''
    },
    kitchen_area: {
        from: '',
        to: ''
    },
    living_area: {
        from: '',
        to: ''
    },
    sort: 'new',
};

const AllPosts = () => {
    const router = useRouter();
    const search = useSearchParams();
    const [formData, setFormData] = useState(initFormData);
    const [regions, setRegions] = useState();
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
        if(name === 'housing'){
            setFormData({...initFormData, [name]: value});
            const query = dataToQuery({[name]: value});
            router.push(`${query}`);
            getPosts(query);
        }else if(name === 'sort'){
            const query = dataToQuery({...formData, [name]: value});
            router.push(`${query}`);
            getPosts(query);
        }
    }
    
    const [posts, setPosts] = useState(null);
    const getPosts = async (query) => {
        setPosts(null)
        const {data} = await axios.get(`/api/posts${query.includes('?') ? query : '?' + query}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPosts(data);
    }
    const getRegions = async () => {
        const {data} = await axios.get('/api/regions', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setRegions(data.map((region)=>region.short));
    }
    useEffect(()=>{
        if(!regions)
            getRegions();
    }, [regions]);

    useEffect(()=>{
        const query = search.toString();
        const data = queryToData(query);
        if(!data.housing)
            data.housing = 'apartment'
        setFormData({...formData, ...data});
        getPosts(query);
    }, [search])

    const handdleSubmit = (e) => {
        e.preventDefault();
        const query = dataToQuery(formData);
        router.push(`${query}`);
        getPosts(query);
    }

    return (
        <div id="allposts">
            {formData.housing === 'apartment' && (
                <ApartmentFilter regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
            )}
            {formData.housing === 'house' && (
                <HouseFilter regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
            )}
            {formData.housing === 'commercial' && (
                <ComercialFilter regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
            )}
            <div className='container'>   
                <div className='content'>                
                    <Posts posts={posts} title={formData.housing} formData={formData} handleChange={handleChange} total={posts ? posts.length : 0} />
                    <Sidebar />
                </div>         
            </div>
        </div>
    )
}

export default AllPosts;