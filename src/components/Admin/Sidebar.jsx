import { useUserContext } from '@/app/(admin)/admin/layout';
import '@/styles/admin/sidebar.scss';
import Link from 'next/link';

const AdminSidebar = () => {
    const {logout} = useUserContext();
    return (
        <div id="sidebar">
            <nav>
                <Link href="/" className='logo'>
                    CNA
                </Link>
                <Link href="/admin">
                    Панель администратора
                </Link>
                <Link href="/admin/advertisements">
                    Рекламные баннеры
                </Link>
                <Link href="/admin/posts">
                    Объявления
                </Link>
                <Link href="/admin/regions">
                    Районы
                </Link>
            </nav>
            <div className="logout" onClick={logout}>
                Выйти
            </div>
        </div>
    );
}

export default AdminSidebar;