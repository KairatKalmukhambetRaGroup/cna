'use client'

import Loading from '@/components/Loading';
import PostCard from '@/components/Post/PostCard';
import '@/styles/admin/posts.scss';
import { dateConvert, numberRearange } from '@/utilFunctions/dateConvert';
import axios from 'axios';
import draftToHtml from 'draftjs-to-html';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const Posts = () => {
    const [posts, setPosts] = useState(null); 
    const [postType, setPostType] = useState('apartment');
    const getPosts = async () => {
        const {data} = await axios.get(`/api/posts?housing=${postType}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPosts(data);
    }

    const [deleteId, setDeleteId] = useState(null);

    useEffect(()=>{
        if(!posts)
            getPosts();
    }, [posts]);

    const changePostType = (e) => {
        e.preventDefault();
        const type = e.currentTarget.dataset.value;
        setPostType(type);
        setPosts(null);
    }

    const deletePost = async (e) => {
        e.preventDefault();
        if(deleteId){
            setPosts(null);
            const {data} = await axios.delete(`/api/posts/${deleteId}?housing=${postType}`,{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setDeleteId(null);
            setPosts(data);   
        }
    }

    return (
        <div id="posts">
            <div className='heading'>
                Объявления
            </div>

            {deleteId && (
                <div className='deleteModal'>
                    <div className='modal'>
                        <div className='h1'>Удалить объявление</div>
                        <div className='p'>Вы уверены что хотите удалить это объявление?  После удаления его будет невозможно востановить!</div>
                        <div className='btns'>
                            <div className='btn delete' onClick={deletePost}>Удалить</div>
                            <div className='btn' onClick={(e)=>{e.preventDefault(); setDeleteId(null)}}>Отмена</div>
                        </div>
                    </div>
                </div>
            )}

            <div className='tabs'>
                <div className='tab-nav'>
                    <div data-value="apartment" onClick={changePostType} className={`tab-item ${postType === 'apartment' ? 'active' : ''}`}>
                        Квартиры
                    </div>
                    <div data-value="house" onClick={changePostType} className={`tab-item ${postType === 'house' ? 'active' : ''}`}>
                        Дома
                    </div>
                    <div data-value="commercial" onClick={changePostType} className={`tab-item ${postType === 'commercial' ? 'active' : ''}`}>
                        Коммерческая недвижимость
                    </div>
                    <Link href="/admin/posts/new" className='add-post'>
                        Добавить объявление
                    </Link>                    

                </div>
                <div className={`tab-content ${postType === 'apartment' ? 'btl-0' : ''}`}>
                    {posts ? 
                        posts.length > 0 ? 
                            posts.map((post, key) => (
                                <div className='post' key={key}>
                                    <div className='image'>
                                        {(post.images && post.images.length>0) && (
                                            <img loading='lazy' src={`https://cna.kz/public/uploads/${post.images[0]}`} alt=""/>
                                        )}
                                    </div>
                                    <div className='info'>
                                        <div className='top'>
                                            {post.housing.slug === 'apartment' && (
                                                <div className="title">{post.rooms}-комнатная квартира{post.area && post.area.total && <>, {post.area.total} м<sup>2</sup></>}{post.floor && `, ${post.floor}/${post.floors} этаж`}</div>
                                            )}
                                            <div className="price">{numberRearange(post.price)} 〒</div>
                                        </div>
                                        <div className="addres">
                                            {post.region.name}, {post.adress}
                                        </div>
                                        {post.description && (
                                            <div className="description" dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(post.description))}} ></div>
                                        )}
                                        <div className="date">{dateConvert(post.createdAt)}</div>
                                    </div>
                                    <div className='actions'>
                                        <Link href={`/admin/posts/${post._id}`} className='btn edit'>
                                            Изменить
                                        </Link>
                                        <div className='btn delete' onClick={(e)=>{e.preventDefault(); setDeleteId(post._id)}}>
                                            Удалить
                                        </div>
                                    </div>
                                </div>
                            ))
                            : (
                                <div className='none'>
                                    NONE
                                </div>
                            )
                        : (
                            <Loading />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts;