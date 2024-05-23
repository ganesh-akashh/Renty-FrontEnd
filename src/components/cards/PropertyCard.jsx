import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, type }) => {

    const { location, address, name, price, noOfBedRooms, noOfBathRooms, imgUrl, id, noOfLikes } = property;

    const link = type === "seller" ? `/seller/property/${id}` : `/buyer/property/${id}`

    return (
        <Link to={link} className='relative md:ml-2 border-primary-500 p-2 flex min-h-[380px] hover:scale-105 w-full max-w-[400px]  flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]'>
            <div
                href="/products/solar1"
                className="flex items-center justify-center flex-grow bg-gray-50  text-grey-500"
            >
                <img
                    src={imgUrl}
                    height={500}
                    width={500}
                    alt={name}
                    className="bg-cover max-w-[500] max-h-[300]"
                />
            </div>
            <div
                className="flex min-h-[150px] flex-col gap-2 p-5 md:gap-3"
            >
                <div className="flex gap-2">
                    <p className="font-bold text-xl text-gray-800  md:text-2xl">
                        {name}
                    </p>
                </div>
                <div className='flex flex-col mb-2  justify-center gap-2'>
                    <div className='flex gap-2 items-center'>
                        <span className="text-[14px] flex mt-1 w-min rounded-full bg-blue-100 px-4 py-1 text-blue-800 font-semibold leading-[20px]"> ₹{price}</span>
                        <span className="text-[14px] flex flex-row-reverse items-center gap-2 mt-1 w-min rounded-full bg-blue-100 px-4 py-1 text-blue-800 font-semibold leading-[20px]"> {noOfBathRooms}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bath"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" /></svg></span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className="text-[14px] flex items-center gap-2 mt-1 w-min rounded-full bg-blue-100 px-4 py-1 text-blue-800 font-semibold leading-[20px]"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M12 4v6" /><path d="M2 18h20" /></svg>{noOfBedRooms}</span>
                        <span className="text-[14px] flex items-center gap-2 mt-1 w-min rounded-full bg-red-100 px-4 py-1 text-red-800 font-semibold leading-[20px]">{noOfLikes}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg></span>
                    </div>
                </div>
                <p className="text-base items-center flex gap-1 mb-1 text-gray-800  md:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide font-bold text-red-900 lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> {location}
                </p>
                <div className="flex flex-col ">
                    <p className="text-base items-center flex gap-1 mb-1 text-gray-800  md:text-lg">
                        Address
                    </p>
                    <p className="font-light" >
                        {address}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard