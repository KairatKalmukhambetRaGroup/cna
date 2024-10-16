import '@/styles/slideshow.scss';
import { useState } from 'react';

const Slideshow = ({images=null}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentModal, setCurrentModal] = useState(null);

    const changeCurrent = (index) =>{
        setCurrentImage(index);
    }
    const next = (e) => {
        e.preventDefault();
        let nextIndex = currentImage + 1;
        if(nextIndex >= images.length)
            nextIndex = 0;
        setCurrentImage(nextIndex);
    }
    const prev = (e) => {
        e.preventDefault();
        let prevIndex = currentImage - 1;
        if(prevIndex < 0)
            prevIndex = images.length - 1;
        setCurrentImage(prevIndex);
    }

    if(!images || images.length == 0)
        return ;
    return (
        <div id="slideshow">
            <ModalSlideshow images={images} current={currentModal} setCurrent={setCurrentModal} />
            <div className="current">
                {images && images.length>0 && (
                    <img src={images[currentImage]} alt="currentimage" 
                    onClick={(e)=>{e.preventDefault(); setCurrentModal(currentImage)}} />
                )}
                <i className="crnt-left" onClick={prev}></i>
                <i className="crnt-right" onClick={next}></i>
                {images && images.length>0 && (
                    <div className="crnt-count">{(Number(currentImage)+1)} / {Number(images.length)}</div>
                )}
            </div>
            {images && images.length>0 && (
                <div className="previews">
                    {images.map((img, key)=>(
                        <div className={`preview ${currentImage===key ? 'active': ''}`} key={key} 
                            onMouseEnter={(e)=>{e.preventDefault(); changeCurrent(key);}} 
                            onClick={(e)=>{e.preventDefault(); setCurrentModal(key)}}>
                            <img src={img} alt={`imgpreview-${key}`}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slideshow;


const ModalSlideshow = ({images, current, setCurrent}) =>{
    
    const next = (e) => {
        e.preventDefault();
        let nextIndex = current + 1;
        if(nextIndex >= images.length)
            nextIndex = 0;
        setCurrent(nextIndex);
    }
    const prev = (e) => {
        e.preventDefault();
        let prevIndex = current - 1;
        if(prevIndex < 0)
            prevIndex = images.length - 1;
        setCurrent(prevIndex);
    }
    const close = (e) =>{
        e.preventDefault();
        setCurrent(null);
    }

    if(current === null || !images)
        return ;
    return (
        <div id="modalSlideshow">
            <div className="content">
                <div className="count">
                {(Number(current)+1)} / {Number(images.length)}
                </div>
                <i className="close" onClick={close}></i>
                <i className="prev" onClick={prev}></i>
                <img src={images[current]} alt="" />
                <i className="next" onClick={next}></i>
            </div>
        </div>
    );
}