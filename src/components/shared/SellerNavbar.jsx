import React, { useState } from 'react';

import MobileSidebar from './MobileSideBar.jsx';
import NavDropDown from './NavDropDown.jsx';
import { userDetails } from '../../reducers/user.js';
import { useSelector } from 'react-redux';
import logo from "../../assets/logo.svg"

const SellerNavbar = () => {
    const userInfo = useSelector(userDetails);

    return (
        <nav className='fixed w-full bg-white z-50 flex justify-between items-center py-2 px-4 border-b h-16  '>
            <div className='flex gap-1 items-center'>
                <MobileSidebar />
                <img src={logo} className='w-5 h-5' alt='LogoImage' />
                <h1 className='logoName  text-2xl font-bold text-gray-800  md:text-2xl'>Rently.</h1>
            </div>
            <div className='flex items-center gap-x-6  p-0 md:px-8'>
                <div className='relative'>
                    <div
                        className='flex items-center gap-3 '
                    >
                        <div className='rounded-full p-2 border opacity-70'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <h1 className=' hidden md:block text-base'>{userInfo.firstName}</h1>
                        <NavDropDown />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SellerNavbar;