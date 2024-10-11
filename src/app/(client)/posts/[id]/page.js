'use client'

import axios from "axios";
import { useEffect, useState } from "react";

import Post from "@/components/Post/Post";
import { useUserIp } from "@/utilFunctions/useUserIp";

const PostContent = ({params}) => {
    const {id} = params;
    const [post, setPost] = useState(null);
    const [visits, setVisits] = useState(0);
    const userip = useUserIp();
    const getPost = async ()=> {
        const {data} = await axios.get(`/api/posts/${id}?ip=${userip}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPost(data.post);
        setVisits(data.visits);
    }

    useEffect(()=>{
        if(id && !post){
            getPost();
        }
    }, [id])

    return (
        <Post post={post} visits={visits} />
    )
};

export default PostContent;
