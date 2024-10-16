import '@/styles/post.scss';
import { createTitle, priceToMils } from '@/utilFunctions/dateConvert';
import { useRouter } from 'next/navigation';

const PostSmall = ({post}) => {
    const router = useRouter();
    return (
        <div className="postsmall" onClick={(e)=>{e.preventDefault(); router.push(`/posts/${post._id}`)}}>
            <div className="postimage">
                {(post.images && post.images.length > 0) ? (
                    <img loading='lazy' src={post.images[0]} alt="" />
                ) : (
                    <img loading='lazy' src={`/noimage.png`} alt="noimage" />
                )}
                <div className="price">
                    {priceToMils(post.price) } 〒
                </div>
            </div>
            <div className="title">
                {createTitle(post)}
            </div>
        </div>
    )
};

export default PostSmall;