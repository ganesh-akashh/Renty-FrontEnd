import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { getPropertyById, updateProperty } from '@/utils';
import Spinner from '@/components/loaders/Spinner';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";
import { userDetails } from '@/reducers/user';
import { useSelector } from 'react-redux';


const BuyerPropertyDetail = () => {

    const [intrested, setIntrested] = useState(false);
    const userInfo = useSelector(userDetails);
    const [emailLoading, setEmailLoading] = useState(false);

    console.log(userInfo.email);

    const [liked, setLiked] = useState(false);

    const { id } = useParams();
    const { data, loading } = useFetch(() => getPropertyById(id));

    const { features, address, name, area, price, noOfBedRooms, noOfBathRooms, noOfLikes, imgUrl, seller } = data;

    const handleInterested = async () => {
        setEmailLoading(true);
        const message = `
    Property Name: ${name}
    Address: ${address}
    Features: ${features}
    Area: ${area} sq.ft
    Price: ₹${price}
    Bedrooms: ${noOfBedRooms}
    Bathrooms: ${noOfBathRooms}

    Seller Information:
    Name: ${seller.firstName} ${seller.lastName}
    Email: ${seller.email}
    Phone: ${seller.mobileNumber}
  
`;

        const sellerMessage = `
    Property Name: ${name}
    Address: ${address}
    Features: ${features}
    Area: ${area} sq.ft
    Price: ₹${price}
    Bedrooms: ${noOfBedRooms}
    Bathrooms: ${noOfBathRooms}

    Buyer Information:
    Name: ${userInfo.firstName} ${userInfo.lastName}
    Email: ${userInfo.email}
    Phone: ${userInfo.mobileNumber}
  
`;

        try {
            //Buyer Email.
            await emailjs.send(
                'service_76hhcpq',
                'template_jz0h6xk',
                {
                    from_name: seller.firstName,
                    to_name: userInfo.firstName,
                    from_email: seller.email,
                    to_email: userInfo.email,
                    message,
                },
                '6ORizV0HXZbbdxisK'
            );
            //Seller Email.
               await emailjs.send(
                'service_76hhcpq',
                'template_jz0h6xk',
                {
                    from_name: userInfo.firstName,
                    to_name: seller.firstName,
                    from_email: userInfo.email,
                    to_email: seller.email,
                    sellerMessage,
                },
                '6ORizV0HXZbbdxisK'
            );
            toast("Email sent successfully !!!");
            setIntrested(true);
        } catch (error) {
            console.error(error);
            toast("Something went wrong !!");
        } finally {
            setEmailLoading(false);
        }
    }

    const handleLikeClick = async () => {
        try {
            if (!liked) {
                const updatedProperty = { ...data, noOfLikes: noOfLikes + 1 };
                const response = await updateProperty(updatedProperty);
                if (response) {
                    setLiked(!liked);
                }
            }
        } catch (error) {
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
                        <h1 className='text-center mt-5 lg:mt-10 font-bold text-2xl md:text-3xl  text-blue-800 '>{name}</h1>
                        <div className=' mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl p-2 rounded-md  shadow-md transition-all hover:shadow-lg'>
                            <img
                                src={imgUrl}
                                alt={name}
                                width={1000}
                                height={1000}
                                className="h-full min-h-[300px] object-cover object-center"
                            />
                            <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
                                <div className='flex justify-end items-end'>
                                    <div onClick={handleLikeClick} className='text-red-800 flex cursor-pointer items-center justify-center flex-row gap-2   bg-red-200 px-2.5 py-2 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide ${liked && "fill-red-900"}  lucide-heart`}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    </div>
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
                                        <h3 className="font-semibold text-lg md:text-[20px]  text-grey-600">Area:</h3>
                                        <p>{area}</p>
                                    </div>
                                    <div className='flex flex-row  items-center  gap-2'>
                                        <h3 className="font-semibold text-lg md:text-[20px]  text-grey-600">Price:</h3>
                                        <p>₹{price}</p>
                                    </div>
                                    <div className='flex flexrowl  items-center  gap-2'>
                                        <h3 className="font-semibold text-lg md:text-[20px]  text-grey-600">Bedrooms:</h3>
                                        <p>{noOfBedRooms}</p>
                                    </div>
                                    <div className='flex flex-row items-center   gap-2'>
                                        <h3 className="font-semibold text-lg md:text-[20px]  text-grey-600">Bathrooms:</h3>
                                        <p>{noOfBathRooms}</p>
                                    </div>
                                </div>
                                {intrested &&
                                    <div>
                                        <h3 className="font-semibold text-[20px]  text-grey-600">Seller Details:</h3>
                                        <div className='flex gap-2'>
                                            <p className=' font-medium'>Name :</p>
                                            <p>{seller.email}</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className=' font-medium'>Email :</p>
                                            <p>{seller.firstName}</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className=' font-medium'>Mobile Number :</p>
                                            <p>{seller.mobileNumber}</p>
                                        </div>
                                    </div>
                                }
                                {!intrested &&
                                    <button onClick={handleInterested} className='bg-blue-800 text-white font-light px-2 py-2.5 rounded-md'>
                                       {emailLoading ? "Sending .." : "Intrested"}
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                )
                }
            </>
        </div>
    )
}

export default BuyerPropertyDetail