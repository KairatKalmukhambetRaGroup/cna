import PostCard from "./PostCard";

import '@/styles/post.scss';
import Sort from "./Sort";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import axios from "axios";
import AdvertisementCard from "../AdvertisementCard";

const Posts = ({prefix='', posts, title='', total=0, formData, handleChange, loading}) => {
    const [ads, setAds] = useState(null);
    const getAds = async () => {
        const {data} = await axios.get(`/api/advertisements`,{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAds(data);
    }
    useEffect(()=>{
        if(!ads)
            getAds();
    }, [ads])
    return (
        <div id="posts">
            <div className="heading">
                <div className="medium-24-28 text-black">
                    {prefix}
                    {title === 'apartment' && ' квартир'}
                    {title === 'house' && ' домов'}
                    {title === 'commercial' && ' коммерческих недвижимостей'}
                </div>
                <div className="regular-16-20 text-black">Найдено объявлений: {total}</div>
            </div>
            <div className="posts">
                <Sort formData={formData} handleChange={handleChange} />         
                {posts ? 
                    posts.length === 0 ?
                        (
                            <div className="none">
                                По вашему запросу ничего не найдено
                            </div>
                        ) :
                        posts.map((post, key)=>(
                            <div key={key}>
                                <PostCard post={post}/>
                                {(Number(key+1) % 5 === 0 && ads && ads.length > 0) && (
                                    <AdvertisementCard ad={ads[(Number(key+1)/5-1) % ads.length]}/>
                                )}
                            </div>
                        ))
                    :
                    <Loading />
                }
            </div>
        </div>
    );
};

export default Posts;