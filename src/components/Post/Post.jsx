import '@/styles/post.scss';
import Slideshow from '../Slideshow';
import draftToHtml from 'draftjs-to-html';
import { createTitle, dateConvert, numberRearange } from '@/utilFunctions/dateConvert';

const Post = ({post, visits}) => {

    return post && (
        <div id="post">
            <div className="container">
                <div className="content">
                    <div className="title">
                        {`${createTitle(post)}, ${post.adress}`}
                    </div>
                    <div className="info">
                        <div className="sidebar">
                            <div className="sidebar-content">
                                {post.posttype === 'sell' ? 
                                    <div className="price">{numberRearange(post.price)} 〒</div>
                                    :
                                    <div className="price">{numberRearange(post.price)} 〒 / 
                                        {post.rentPeriod === 'По часам' && ' час'}
                                        {post.rentPeriod === 'Посуточно' && ' сутки'}
                                        {post.rentPeriod === 'Помесячно' && ' месяц'}
                                    </div>
                                }
                                <div className="parameters">
                                    {post.city && <SidebarParam label="Город" value={post.city.name} />}
                                    {post.region && <SidebarParam label="Район" value={post.region.name} />}
                                    {post.year && <SidebarParam label="Год постройки" value={post.year} />}
                                    {post.material && <SidebarParam label="Тип дома" value={post.material} />}
                                    {(!!post.floors && !post.floor) && <SidebarParam label="Этажей" value={post.floors} />}
                                    {!!post.floor && <SidebarParam label="Этаж" value={`${post.floor}${!!post.floors ? ' из ' + post.floors: ''}`} />}
                                    {!!post.state && <SidebarParam label="Состояние" value={post.state} />}
                                    {(post.area && post.area.total) && <SidebarParam label={<span>Площадь, м<sup>2</sup></span>} value={<>{post.area.total} м<sup>2</sup></>} />}
                                    {post.bathroom && <SidebarParam label="Санузел" value={post.bathroom} />}
                                    {post.commercial && post.commercial.placement && <SidebarParam label="Размещение объекта" value={post.commercial.placement} />}
                                </div>
                                {(post.realtor && (post.realtor.name || post.realtorPhone)) && (
                                    <div className="realtor">
                                        <div className="name">{post.realtor.name}</div>
                                        <div className="agent">
                                        Специалист
                                        </div>
                                        <a href={`tel:${post.realtor.phone.replace(' ', '')}`} target='_blank' className='btn'><i></i>{post.realtor.phone}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        {post.realtor && post.realtor.phone && (
                            <a className='mobile-phone' target='_blank' href={`tel:${post.realtor.phone}`}>Позвонить</a>
                        )}
                        <div className="post-content">
                            <Slideshow images={post.images} />
                            <div className="price">{numberRearange(post.price)} 〒</div>
                            <div className="about">
                                <div className="title">
                                    {post.housing.slug === 'apartment' && 'О квартире'}
                                    {post.housing.slug === 'house' && 'О доме'}
                                    {post.housing.slug === 'commercial' && 'Параметры'}
                                </div>
                                <div className="parameters">
                                    <div className="mobile">
                                        {post.city && <ContentParam label="Город" value={post.city.name} />}
                                        {post.region && <ContentParam label="Район" value={post.region.name} />}
                                        {post.year && <ContentParam label="Год постройки" value={post.year} />}
                                        {post.material && <ContentParam label="Тип дома" value={post.material} />}
                                        {(!!post.floors && !post.floor) && <ContentParam label="Этажей" value={post.floors} />}
                                        {!!post.floor && <ContentParam label="Этаж" value={`${post.floor}${!!post.floors ? ' из ' + post.floors: ''}`} />}
                                        {!!post.state && <ContentParam label="Состояние" value={post.state} />}
                                        {(post.area && post.area.total) && <ContentParam label={<span>Площадь, м<sup>2</sup></span>} value={<>{post.area.total} м<sup>2</sup></>} />}
                                        {post.bathroom && <ContentParam label="Санузел" value={post.bathroom} />}
                                        {post.commercial && post.commercial.placement && <ContentParam label="Размещение объекта" value={post.commercial.placement} />}
                                    </div>

                                    {post.balcony && post.balcony.value && <ContentParam label="Балкон" value={post.balcony.value} />}
                                    {post.balcony && post.balcony.value && post.balcony.glazed &&  <ContentParam label="Балкон остеклен" value={post.balcony.value ? 'Да' : 'Нет'} />}
                                    {!!post.furnished && <ContentParam label="Мебелирована" value={post.furnished} />}
                                    {!!post.plot && <ContentParam label="Участок" value={`${post.plot} сот.`} />}
                                    {!!post.fencing && <ContentParam label="Как огорожен участок" value={post.fencing} />}
                                    {!!post.roofing && <ContentParam label="Покрытие крыши" value={post.roofing} />}
                                    {!!post.water && <ContentParam label="Вода" value={post.water} />}
                                    {!!post.electricity && <ContentParam label="Электричество" value={post.electricity} />}
                                    {!!post.sewerage && <ContentParam label="Канализация" value={post.sewerage} />}
                                    {!!post.heating && <ContentParam label="Отопление" value={post.heating} />}
                                    {!!post.gas && <ContentParam label="Газ" value={post.gas} />}
                                    {!!post.telephone && <ContentParam label="Телефон" value={post.telephone} />}
                                    {!!post.internet && <ContentParam label="Интернет" value={post.internet} />}
                                </div>
                            </div>
                            <div className="description" >
                                <div className="title">
                                    Описание
                                </div>
                                {post.description && (
                                    <div className="text" dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(post.description))}}></div>
                                )}
                            </div>

                            {(post.realtor && (post.realtor.name || post.realtorPhone)) && (
                                <div className="realtor">
                                    <div className="name">{post.realtor.name}</div>
                                    <div className="agent">
                                        Специалист
                                    </div>
                                </div>
                            )}
                            <div className="additional-info">
                                <div className="date">
                                    {dateConvert(post.createdAt)}
                                </div>
                                <div className="visits">
                                    <i></i>
                                    {visits}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Post;


const SidebarParam = ({label, value}) => {
    return (
        <div className="parameter">
            <div className="label">
                {label}
                <span className='hl'></span>
            </div>
            <div className="value">{value}</div>
        </div>
    );
}

const ContentParam = ({label, value}) => {
    return (
        <div className="parameter">
            <div className="label">
                {label}
            </div>
            <div className="value">{value}</div>
        </div>
    );
}