import Link from "next/link";
import '@/styles/menu.scss';
const Menu = () => {
    return (
        <div id="menu">
            <Link href='/' className="menu-item">
                <i className="home"></i>
                Главная
            </Link>
            <a href='tel:+77055621546' className="menu-item new">
                <i className="new"></i>
                Подать
            </a>
            <Link href='/about' className="menu-item">
                <i className="about"></i>
                О нас
            </Link>
        </div>
    );
};

export default Menu;