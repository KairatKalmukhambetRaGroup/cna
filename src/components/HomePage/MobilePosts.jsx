import axios from "axios";
import AdvertisementCard from "../AdvertisementCard";
import Loading from "../Loading";
import PostCard from "../Post/PostCard";
import { useEffect, useState } from "react";

const MobilePosts = () => {
    const [ads, setAds] = useState(null);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const getAds = async () => {
        const {data} = await axios.get(`/api/advertisements`,{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAds(data);
    }
    const getPosts = async () => {
        setLoading(true);
        const {data} = await axios.get(`/api/posts?size=sm&page=${page}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        const newPosts = data.posts;
        setTotalPages(data.totalPages);
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
        setLoading(false);
    }

    useEffect(()=>{
        if(!ads)
            getAds();
    },[ads])

    useEffect(()=>{
        getPosts();
    }, [page])

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


    return (
        <div className="mobileposts">
            {posts.map((post,key) => (
                <div className="col" key={key}>
                    <PostCard post={post} />
                    {(Number(key+1) % 5 === 0 && ads && ads.length > 0) && (
                        <AdvertisementCard ad={ads[(Number(key+1)/5-1) % ads.length]} />
                    )}
                </div>
            ))}
            {loading && <Loading />}
        </div>            
    );
};

export default MobilePosts;