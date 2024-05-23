import React from 'react'
import { userDetails } from '@/reducers/user'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const user = useSelector(userDetails);
    const uid = user.id;
    const sellerRoutes = [
     
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
            to: `/seller/properties/${uid}`,
            label: "Properties"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
            to: `/seller/add/${uid}`,
            label: 'Add Property',
        },
    ];
    return (
        <aside className="space-y-4 flex flex-col h-full bg-[#111643] text-gray-200">
            <div className="flex-1 flex p-3 justify-center">
                <div className="space-y-2">
                    {
                        sellerRoutes?.map((route) => (
                            <Link
                                key={route.label}
                                to={route.to}
                                className="text-xs group  flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white rounded-lg transition"
                            >
                                <div className="flex flex-col gap-y-2 items-center justify-center text-center flex-1">
                                    {route.icon}
                                    {route.label}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

export default Sidebar