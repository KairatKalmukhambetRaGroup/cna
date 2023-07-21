import PostCard from "./PostCard";

import '@/styles/post.scss';
import Sort from "./Sort";
import { useEffect } from "react";
import Loading from "../Loading";

const Posts = ({posts, title='', total=0, formData, handleChange}) => {
    return (
        <div id="posts">
            <div className="heading">
                <div className="medium-24-28 text-black">
                    {title === 'apartment' && 'Продажа квартир'}
                    {title === 'house' && 'Продажа домов'}
                    {title === 'commercial' && 'Продажа коммерческих недвижимостей'}
                </div>
                <div className="regular-16-20 text-black">Найдено объявлений: {total}</div>
            </div>
            <div className="posts">
                <Sort formData={formData} handleChange={handleChange} />
                {posts ? 
                    posts.length>0 ? 
                        posts.map((post, key)=>(
                            <PostCard post={post} key={key} />
                        ))
                        : (
                            <div className="none">
                                По вашему запросу ничего не найдено
                            </div>
                        )
                    : (
                        <Loading />
                    )
                }
            </div>
        </div>
    );
};

export default Posts;