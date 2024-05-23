
import React from 'react'
import { removeUser } from '@/reducers/user'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const NavDropDown = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogoutClick = () => {
        toast("Logout Successfull !!")
        navigate("/");
        dispatch(removeUser());
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></DropdownMenuTrigger>
            <DropdownMenuContent className="w-10 mr-8 mt-3">
                <DropdownMenuItem onClick={handleLogoutClick}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavDropDown