'use client'
import axios from "axios";
import draftToHtml from "draftjs-to-html";
import { useState, useEffect } from "react";

const AboutPage = () => {
    const [about, setAbout] = useState(null);

    const getAbout = async () => {
        const {data} = await axios.get(`/api/about`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setAbout(data);
    }
    useEffect(()=>{
        if(!about)
            getAbout();
    }, [about]);
    return (
        <div id="aboutpage">
            <div className="container">
                <div className="content">
                    <div className="medium-24-28 text-black">
                        О нас
                    </div>
                    {about && (
                        <div className="regular-16-20 text-black" dangerouslySetInnerHTML={{__html: draftToHtml(JSON?.parse(about))}} />
                    )}
                </div>
            </div>
        </div>
    )
};

export default AboutPage;