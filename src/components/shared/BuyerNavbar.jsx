import React from 'react'
import { Link } from 'react-router-dom'
import NavDropDown from './NavDropDown'
import { useSelector } from 'react-redux'
import { userDetails } from '@/reducers/user'
import logo from "../../assets/logo.svg"

const BuyerNavbar = () => {
    const userInfo = useSelector(userDetails);
    return (
        <header className='container border-b-2 flex justify-between px-4 py-4 items-center mx-auto'>
            <Link to={`/buyer/landing/${userInfo.id}`} className='flex items-center justify-center gap-2'>
                <img src={logo} className='w-8 h-8' alt='LogoImage' />
                <h1 className='logoName  text-2xl font-bold text-gray-800  md:text-3xl'>Rently.</h1>
            </Link>
            <div
                className='flex items-center gap-3 '
            >
                <div className='rounded-full p-2 border opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <h1 className=' hidden md:block text-base'>{userInfo.firstName}</h1>
                <NavDropDown />
            </div>
        </header>
    )
}

export default BuyerNavbar