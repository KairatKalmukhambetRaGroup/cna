'use client'
import { useEffect, useLayoutEffect, useState } from "react"
// import {useDispatch, useSelector} from 'react-redux';

import SimpleFilter from "@/components/Filter/SimpleFilter";
// import { getPosts } from "../actions/post";

import '@/styles/home.scss';
import axios from "axios";
import PostSmall from "@/components/Post/PostSmall";
import { useRouter } from 'next/navigation';
import { dataToQuery } from '@/utilFunctions/dateConvert';
import Loading from "@/components/Loading";
import PostCard from "@/components/Post/PostCard";
import '@/styles/post.scss';
import draftToHtml from "draftjs-to-html";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const Home = () => {
    const [width, height] = useWindowSize();
    // const {posts} = useSelector((state) => state.posts);
    // const dispatch = useDispatch();
    const [size, setSize] = useState('sm');
    const router = useRouter();
    const [posts, setPosts] = useState(null);
    const [about,setAbout] = useState(null);
    const getPosts = async () => {
        const {data} = await axios.get(`/api/posts?size=${size}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPosts(data);
        const {data: aboutText} = await axios.get(`/api/about`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAbout(aboutText);
    }
    useEffect(()=> {
        if(!posts)
            getPosts();
    }, [posts]);


    useEffect(()=>{
        if(width){
            if(width < 992)
                setSize('sm');
            else    
                setSize('lg');
        }
    }, [width])
    useEffect(()=>{
        if(size)
            getPosts();
    }, [size])


    const handleSubmit = async (formData) => {
        // e.preventDefault();
        let housing = '';
        switch (formData.housing) {
            case 'Дом':
                housing = 'house';
                break;
            case 'Коммерческую недвижимость':
                housing = 'commercial'
                break;
            default:
                housing = 'apartment'
                break;
        }
        const query = dataToQuery({...formData, housing: housing});
        router.push(`/posts${query}`);
    }



    return (
        <div id="home">
            <SimpleFilter handleSubmit={handleSubmit} />
            <div className="container">
                <div className="medium-24-28 text-black">
                    Последние предложения недвижимости
                </div>
                {size === 'lg' && (
                    <>
                        <div className="smallposts">
                            <div className="apartments">
                                <div className="medium-24-28 text-black">
                                    Квартиры
                                </div>
                                <div className="row">
                                    {(posts && posts.apartments) ? posts.apartments.map((post,key) => (
                                        <div className="col" key={key}>
                                            <PostSmall post={post} />
                                        </div>
                                    )) : (
                                        <Loading />
                                    )}
                                </div>
                            </div>
                            <div className="houses">
                                <div className="medium-24-28 text-black">
                                    Дома
                                </div>
                                <div className="row">
                                    {(posts && posts.houses) ? posts.houses.map((post,key) => (
                                        <div className="col" key={key}>
                                            <PostSmall post={post} />
                                        </div>
                                    )) : (
                                        <Loading />
                                    )}
                                </div>
                            </div>
                            <div className="commercials">
                                <div className="medium-24-28 text-black">
                                    Коммерческие недвижимости
                                </div>
                                <div className="row">
                                    {(posts && posts.commercials) ? posts.commercials.map((post,key) => (
                                        <div className="col" key={key}>
                                            <PostSmall post={post} />
                                        </div>
                                    )) : (
                                        <Loading />
                                    )}
                                </div>
                            </div>
                        </div>
                        {about && (
                            <div id="about">
                                <div className="medium-24-28 text-black">
                                    О нас
                                </div>
                                <div className="regular-16-20 text-black" dangerouslySetInnerHTML={{__html: draftToHtml(JSON?.parse(about))}} />
                            </div>
                        )}
                    </>
                )}
                {size === 'sm' && (
                    <div className="mobileposts">                    
                        {(posts && posts.length > 0) ? posts.map((post,key) => (
                            <div className="col" key={key}>
                                <PostCard post={post} />
                            </div>
                        )) : (
                            <Loading />
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Home;