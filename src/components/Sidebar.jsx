import '@/styles/sidebar.scss';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="content">
                <div className="banner large">
                    <div className="text">
                        <div className="medium-24-28 text-black">Ищешь покупателя для квартиры?</div>
                        <div className="regular-16-20 text-black">Доверь продажу профессионалам на CNA.KZ! Максимум выгоды, минимум хлопот.</div>
                    </div>
                    <div className="action">
                        <Link href="/applications" target='_blank' className='btn'>
                            Оставить заявку
                        </Link>
                        {/* <a href="tel:+77055621546" target='_blank' className='btn'><i></i> +7 705 562 1546</a>             */}
                        {/* <div className="regular-14-16">Подать объявление</div>              */}
                    </div>
                </div>
                {/* <div className="banner small">
                    <div className="text">
                        <div className="medium-24-28 text-black">Названия Сайта</div>
                        <div className="medium-16-20 text-black">Сайт объявлений недвижимости</div>
                    </div>
                    <div className="action">
                        <a href="+77055621546" target='_blank' className='btn'><i></i> +7 705 562 1546</a>            
                        <div className="regular-14-16">Подать объявление</div>             
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Sidebar;