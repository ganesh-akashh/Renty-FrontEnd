import React from 'react'
import emptyImg from "../../assets/empty.png"

const Empty = ({ text }) => {

    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={emptyImg} alt='EmptyImage' className='w-[400px] mt-20' />
            <p className='mt-6 text-xl md:text-2xl font-light'>{text}</p>
        </div>
    )
}

export default Empty