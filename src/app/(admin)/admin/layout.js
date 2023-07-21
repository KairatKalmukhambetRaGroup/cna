'use client'
import AdminSidebar from '@/components/Admin/Sidebar';
import { Montserrat } from 'next/font/google'
import '@/styles/admin/index.scss';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Login from '@/components/Admin/Login';

const montserrat = Montserrat({ subsets: ['latin'] })

export const UserContext = React.createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

const AdminLayout = ({children}) => {
    const router = useRouter();

    const [userData, setUserData] = useState(null);


    const logout = () => {
        setUserData(null);
        localStorage.removeItem('userdata');
    }
    const login = (data) => {
        setUserData(data);
        localStorage.setItem('userdata', JSON.stringify(data));
    }

    useEffect(()=>{
        if(!userData && localStorage.getItem('userdata')){
            const data = JSON.parse(localStorage.getItem('userdata'));
            setUserData(data);
        }
    },[userData]);

    const value = {
        userdata: userData,
        login: login,
        logout: logout
    };

    return (
        <UserContext.Provider value={value}>
            {(userData && userData.user) ? (
                <>
                    <AdminSidebar />
                    <main>
                        {children}
                    </main>
                </>
            ) : (
                <Login />
            )}
        </UserContext.Provider>
    );
}

export default AdminLayout;