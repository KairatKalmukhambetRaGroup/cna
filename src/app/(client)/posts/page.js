'use client'

import ApartmentFilter from '@/components/Filter/ApartmentFilter';
import ComercialFilter from '@/components/Filter/ComercialFilter';
import HouseFilter from '@/components/Filter/HouseFilter';
import Menu from '@/components/Menu';
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
    city: '',
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
    const [cities, setCities] = useState();
    const [cityObjects, setCityObjects] = useState(null);
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
        if(name === 'city' && formData.city !== value){
            if(!value)
                setRegions([]);
            for (let i = 0; i < cityObjects.length; i++) {
                const city = cityObjects[i];
                if(city.name === value){
                    setRegions(city.regions.map((region)=>region.short));
                }
            }
        }
        
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
    const getCities = async () => {
        const {data} = await axios.get('/api/cities', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setCityObjects(data);
        setCities(data.map((region)=>region.name));
    }
    // const getRegions = async (city) => {
    //     const {data} = await axios.get(`/api/regions/${city}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
    //     if(data)
    //         setRegions(data.map((region)=>region.short));
    //     else 
    //         setRegions([]);
    // }
    // useEffect(()=>{
    //     if(!regions)
    //         getRegions();
    // }, [regions]);

    useEffect(()=>{
        if(!cities)
            getCities();
        else{
            if(formData.city){
                for (let i = 0; i < cityObjects.length; i++) {
                    const city = cityObjects[i];
                    if(city.name === formData.city){
                        setRegions(city.regions.map((region)=>region.short));
                    }
                }
            }
        }
    }, [cities])

    useEffect(()=>{
        const query = search.toString();
        const data = queryToData(query);
        if(!data.housing)
            data.housing = 'apartment'
        setFormData({...formData, ...data});
        // if(data.city){
        //     getRegions(data.city);
        // }
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
            <Menu />
            {formData.housing === 'apartment' && (
                <ApartmentFilter cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
            )}
            {formData.housing === 'house' && (
                <HouseFilter cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
            )}
            {formData.housing === 'commercial' && (
                <ComercialFilter cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
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