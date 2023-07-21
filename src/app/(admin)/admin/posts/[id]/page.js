'use client'

import PostForm from "@/components/Admin/PostForm";
import axios from "axios";
import { useEffect, useState } from "react";

import '@/styles/admin/createpost.scss';


const EditPost = ({params}) => {
    const {id} = params;
    const [post, setPost] = useState(null);

    const getPost = async ()=> {
        const {data} = await axios.get(`/api/posts/${id}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPost(data);
    }

    useEffect(()=>{
        if(id && !post){
            getPost();
        }
    }, [id]);

    return (
        <div id="edit-post">
            <div className="heading">
                Изменить данные объявления
            </div>
            {post && (
                <PostForm post={post} />
            )}
        </div>
    )
};

export default EditPost;