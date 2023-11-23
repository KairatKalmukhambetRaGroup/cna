'use client'

import axios from "axios";
import { useEffect, useState } from "react";

import Post from "@/components/Post/Post";

const PostContent = ({params}) => {
    const {id} = params;
    const [post, setPost] = useState(null);
    const getPost = async ()=> {
        const {data} = await axios.get(`/api/posts/${id}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        console.log(data.ip, data.ip2, data.ip3)
        setPost(data.post);
    }

    useEffect(()=>{
        if(id && !post){
            getPost();
        }
    }, [id])

    return (
        <Post post={post} />
    )
};

export default PostContent;
