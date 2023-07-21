import styles from '@/styles/header.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="navbar">
                    <Link href="/" className="logo">CNA</Link>
                    <div className="nav">
                        <Link href="/posts" >Продажа</Link>
                        <Link href="/#about" >О нас</Link>
                        <Link href="/#contacts" >Контакты</Link>
                        <a href="tel:+77055621546" className="btn" ><i></i> Подать объявление</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;