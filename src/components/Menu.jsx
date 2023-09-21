import Link from "next/link";
import '@/styles/menu.scss';
const Menu = () => {
    return (
        <div id="menu">
            {/* <nav className="top">
                <Link href='/posts'  className="menu-item">
                    Купить
                </Link>
                <Link href='/rent'  className="menu-item">
                    Арендовать
                </Link>
            </nav> */}
            <nav className="bottom">
                <Link href='/' className="menu-item">
                    <i className="home"></i>
                    Главная
                </Link>
                <Link href='/posts'  className="menu-item">
                    <i className="post"></i>
                    Купить
                </Link>
                <Link href='/rent'  className="menu-item">
                    <i className="rent"></i>
                    Арендовать
                </Link>
                {/* <Link href='/application' target="_blank" className="menu-item new">
                    <i className="new"></i>
                    Подать
                </Link> */}
                <Link href='/phonebook' className="menu-item">
                    <i className="phonebook"></i>
                    Справочник
                </Link>
                {/* <Link href='/about' className="menu-item">
                    <i className="about"></i>
                    О нас
                </Link> */}
            </nav>
        </div>
    );
};

export default Menu;