'use client'
import { useEffect, useState } from "react"
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


const Home = () => {
    // const {posts} = useSelector((state) => state.posts);
    // const dispatch = useDispatch();
    const router = useRouter();
    const [posts, setPosts] = useState(null);
    const getPosts = async () => {
        const {data} = await axios.get('/api/posts', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPosts(data);
    }
    useEffect(()=> {
        if(!posts)
            getPosts();
    }, [posts]);



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
                <div className="smallposts">
                    <div className="apartments">
                        <div className="medium-24-28 text-black">
                            Квартиры
                        </div>
                        <div className="row">
                            {(posts && posts.apartments) ? posts.apartments.map((post,key) => (
                                <div className="col" key={key}>
                                    <PostSmall post={post} />
                                    <PostCard post={post} />
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
                                    <PostCard post={post} />
                                </div>
                            )) : (
                                <Loading />
                            )}
                        </div>
                    </div>
                </div>

                <div id="about">
                    <div className="medium-24-28 text-black">
                        О нас
                    </div>
                    <div className="regular-16-20 text-black">
                        Lorem ipsum dolor sit amet. Et nobis placeat qui perspiciatis voluptas qui consequatur voluptas est quisquam veniam est nemo natus non delectus nemo. Ut galisum voluptatem ab voluptatem quisquam a dicta nemo 33 blanditiis tenetur id odio saepe ut autem facere hic facere culpa. Ut dolorem nesciunt ut repudiandae itaque qui temporibus assumenda ut aliquid iusto et quod deleniti et harum soluta?
                        <br></br>
                        <br></br>
                        Eum voluptatem dolorem et doloribus nesciunt aut excepturi ipsa ut sequi reiciendis aut ullam quidem aut labore laborum sed possimus voluptates! Et ratione quam qui omnis tempore quo dolores repellat ea exercitationem suscipit. Et fugit quis vel quaerat laborum et tenetur officia.
                        <br></br>
                        <br></br>
                        Est sunt natus aut corrupti pariatur et odit quis nam perspiciatis tempora aut quia quia sed quam commodi. Et magni aliquam quo galisum autem aut veritatis nostrum et perferendis facilis rem illo fugiat ut amet dolores.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;