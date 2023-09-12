'use client'
import { useEffect, useLayoutEffect, useState } from "react"
// import {useDispatch, useSelector} from 'react-redux';

import SimpleFilter from "@/components/Filter/SimpleFilter";
// import { getPosts } from "../actions/post";

import '@/styles/home.scss';
import { useRouter } from 'next/navigation';
import { dataToQuery } from '@/utilFunctions/dateConvert';
import '@/styles/post.scss';
import Menu from "@/components/Menu";
import MobilePosts from "@/components/HomePage/MobilePosts";
import LargePosts from "@/components/HomePage/LargePosts";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


const Home = () => {
    const [width, height] = useWindowSize();
    const [size, setSize] = useState('sm');
    const router = useRouter();

    useEffect(()=>{
        if(width){
            if(width < 992){
                if(size === 'lg')
                    setSize('sm');
            }
            else{
                if(size === 'sm')
                    setSize('lg');
            }    
        }
    }, [width])


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
        const opt = formData.operation ? formData.operation : 'Купить';

        const query = dataToQuery({...formData, housing: housing, operation: null});

        if(opt === 'Купить')
            router.push(`/posts${query}`);
        else
            router.push(`/rent${query}`);
    }


    return (
        <div id="home">
            <Menu />
            <SimpleFilter handleSubmit={handleSubmit} />
            <div className="container">
                <div className="medium-24-28 text-black">
                    Последние предложения недвижимости
                </div>
                {size === 'lg' && (
                    <LargePosts />
                )}
                {size === 'sm' && (
                    <MobilePosts />
                )}

            </div>
        </div>
    );
};

export default Home;