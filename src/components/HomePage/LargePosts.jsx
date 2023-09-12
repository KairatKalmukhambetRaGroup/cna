import { useEffect, useState } from "react";
import Loading from "../Loading";
import PostSmall from "../Post/PostSmall";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

const LargePosts = () => {
    const [posts, setPosts] = useState(null);
    const [about, setAbout] = useState(null);

    const getPosts = async () => {
        const {data} = await axios.get('/api/posts?size=lg', {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setPosts(data);
        const {data: aboutText} = await axios.get(`/api/about`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAbout(aboutText);
    }

    useEffect(() => {
        if(!posts)
            getPosts();
    }, [posts])

    return (
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
    );
};

export default LargePosts;