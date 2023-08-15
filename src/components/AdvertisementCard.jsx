import '@/styles/advertisements.scss';

const AdvertisementCard = ({ad}) => {
    console.log(ad);
    return (
        <a className="adcard" href={ad.link}>
            <div className="adimage">
                {ad.image ? (
                    <img src={`https://cna.kz/public/uploads/${ad.image}`} alt="preview" />
                    // <img src={`/uploads/${ad.image}`} alt="preview" />
                ) : (
                    <img src={`/noimage.png`} alt="noimage" />
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