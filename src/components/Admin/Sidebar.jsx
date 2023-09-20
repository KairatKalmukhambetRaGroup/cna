import { useUserContext } from '@/app/(admin)/admin/layout';
import '@/styles/admin/sidebar.scss';
import Link from 'next/link';
import { useState } from 'react';

const AdminSidebar = () => {
    const {logout} = useUserContext();
    const [showMenu, setShowMenu] = useState(true);
    const toggleMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }
    return (
        <div id="sidebar" className={`${showMenu ? '' : 'hide'}`}>
            <div className="header">
                    <Link href="/" className='logo'>
                        CNA
                    </Link>
                    <i onClick={toggleMenu}></i>
            </div>
            <div className="content">
                <nav>
                    <Link href="/admin">
                        Панель администратора
                    </Link>
                    <Link href="/admin/advertisements">
                        Рекламные баннеры
                    </Link>
                    <Link href="/admin/posts">
                        Объявления
                    </Link>
                    <Link href="/admin/cities">
                        Города
                    </Link>
                    <Link href="/admin/phonebook">
                        Справочник
                    </Link>
                </nav>
                <div className="logout" onClick={logout}>
                    Выйти
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;