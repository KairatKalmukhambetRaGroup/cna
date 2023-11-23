import { createTitle, dateConvert, numberRearange } from "@/utilFunctions/dateConvert";
import draftToHtml from "draftjs-to-html";
import { useRouter } from "next/navigation";


const PostCard = ({post}) => {
    const router = useRouter();    

    return (
        <div className="postcard" onClick={(e)=>{e.preventDefault(); router.push(`/posts/${post._id}`)}}>
            <div className="postimage">
                {(post.images && post.images.length > 0) ? (
                    <img loading="lazy" src={`https://cna.kz/uploads/${post.images[0]}`} alt="preview" />
                ) : (
                    <img loading="lazy" src={`/noimage.png`} alt="noimage" />
                )}
            </div>
            <div className="info">
                <div className="top">
                    <div className="title">
                        {createTitle(post)}
                    </div>
                    <div className="price">{numberRearange(post.price)} 〒</div>
                </div>
                <div className="addres">
                {post.region.name}, {post.adress}
                </div>
                {post.description && (
                    <div className="description" dangerouslySetInnerHTML={{__html: draftToHtml(JSON?.parse(post?.description))}} ></div>
                )}  
                <div className="date"><span>
                    {post.city.name} 
                    </span>
                    {dateConvert(post.createdAt)}
                    {post.visits ? (
                        <div className="visits">
                            <i></i>
                            {post.visits}
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    );
};

export default PostCard;