'use client'

import Filter from '@/components/Filter';
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

    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [postCount, setPostCount] = useState(0);

    const [query, setQuery] = useState('');

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
            const q = dataToQuery({[name]: value});
            router.push(`${q}`);
            setQuery(q);
        }else if(name === 'sort'){
            const q = dataToQuery({...formData, [name]: value});
            router.push(`${q}`);
            setQuery(q);
        }
    }
    
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        setLoading(true);
        console.log(page, query);
        const {data} = await axios.get(`/api/posts/sell${query.includes('?') ? query : '?' + query}&page=${page}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        
        const newPosts = data.posts;
        console.log(newPosts)
        setTotalPages(data.totalPages);
        setPostCount(data.count);
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
        setLoading(false);
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
        getPosts();
    }, [page])
    useEffect(()=>{
        setPosts([]);
        setLoading(true);
        setPage(1);
    }, [query])

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) 
            return;
        setPage(prevPage => prevPage + 1);
    } 

    useEffect(()=>{
        if(page < totalPages){
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [loading])

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
        const q = search.toString();
        const data = queryToData(q);
        if(!data.housing)
            data.housing = 'apartment'
        setFormData({...formData, ...data});
        // if(data.city){
        //     getRegions(data.city);
        // }
        setQuery(q);
    }, [search])

    const handdleSubmit = (e) => {
        e.preventDefault();
        const q = dataToQuery(formData);
        router.push(`${q}`);
        // setQuery(q);
    }

    return (
        <div id="allposts">
            <Menu />
            <Filter prefix='Покупка' housing={formData.housing} cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handdleSubmit} />
            <div className='container'>   
                <div className='content'>                
                    <Posts posts={posts} loading={loading} title={formData.housing} formData={formData} handleChange={handleChange} total={postCount}  />
                    <Sidebar />
                </div>         
            </div>
        </div>
    )
}

export default AllPosts;