import '@/styles/advertisements.scss';

const AdvertisementCard = ({ad}) => {
    return (
        <a className="advertcard" href={ad.link}>
            <div className="adimage">
                {ad.image ? (
                    <img loading='lazy' src={ad.image} alt="preview" />
                ) : (
                    <img loading='lazy' src={`/noimage.png`} alt="noimage" />
                )}
            </div>
            <div className="info">
                <div className="title">
                    {ad.name}
                </div>
                {ad.description && (
                    <div className="description">{ad.description}</div>
                )}  
                <div className="tag">Реклама</div>
            </div>
        </a>
    )
};

export default AdvertisementCard;