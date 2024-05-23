import useFetch from '@/hooks/useFetch'
import { deletePropertyById, getPropertyById } from '@/utils'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import UpdatePropertyDialog from '@/components/dialog/UpdatePropertyDialog'
import Spinner from '@/components/loaders/Spinner'

const SellerPropertiesDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data, loading, setData } = useFetch(() => getPropertyById(id));
    const { features, address, name, area, price, noOfBedRooms, noOfBathRooms, noOfLikes, imgUrl, seller } = data;
    const handleDelete = async () => {
        try {
            const response = await deletePropertyById(id);
            if (response) {
                toast("Deleted Successfully !!")
                navigate(`/seller/properties/${seller.id}`)
            }
        } catch (error) {
            toast("Something went wrong !!")
            console.log(error);
        }
    }

    return (
        <div className='p-4 md:p-8'>
            <>

                {loading ? (
                   <div className='mt-10 flex justify-center items-center'>
                        <Spinner />
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-center lg:mt-10 font-bold text-xl md:text-3xl  text-blue-800 '>{name}</h1>
                        <div className=' mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl p-2 rounded-md  shadow-md transition-all hover:shadow-lg'>
                            <img
                                src={imgUrl}
                                alt={name}
                                width={1000}
                                height={1000}
                                className="h-full min-h-[300px] object-cover object-center"
                            />

                            <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
                                <div className=' flex gap-4 justify-end items-end'>
                                    <div className='text-red-800 flex  items-center justify-center flex-row gap-2   bg-red-200 px-2.5 py-2 rounded-md'>
                                        {noOfLikes}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    </div>
                                    <UpdatePropertyDialog data={data} setData={setData} />
                                    <button onClick={handleDelete} className=' rounded-3xl cursor-pointer bg-red-100 p-1.5 text-red-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                    </button>
                                </div>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className="font-semibold text-[20px]  text-grey-600">Address:</h3>
                                        <p className='ml-3'>{address}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-semibold text-[20px] text-grey-600">Features:</h3>
                                        {features.split('.').map((feature, index) => (
                                            <ul key={index} className='ml-5 list-item'>
                                                {feature}
                                            </ul>
                                        ))}
                                    </div>
                                    <div className='flex flex-row  items-center  gap-2'>
                                        <h3 className="font-semibold text-[20px]  text-grey-600">Area:</h3>
                                        <p>{area}</p>
                                    </div>
                                    <div className='flex flex-row  items-center  gap-2'>
                                        <h3 className="font-semibold text-[20px]  text-grey-600">Price:</h3>
                                        <p>₹{price}</p>
                                    </div>
                                    <div className='flex flexrowl  items-center  gap-2'>
                                        <h3 className="font-semibold text-[20px]  text-grey-600">Bedrooms:</h3>
                                        <p>{noOfBedRooms}</p>
                                    </div>
                                    <div className='flex flex-row items-center   gap-2'>
                                        <h3 className="font-semibold text-[20px]  text-grey-600">Bathrooms:</h3>
                                        <p>{noOfBathRooms}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </>
        </div>
    )
}

export default SellerPropertiesDetail