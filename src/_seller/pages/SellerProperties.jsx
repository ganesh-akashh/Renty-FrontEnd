import PropertyCard from '@/components/cards/PropertyCard';
import PropertyLoader from '@/components/loaders/PropertyLoaders';
import Empty from '@/components/shared/Empty';
import useFetch from '@/hooks/useFetch';
import { userDetails } from '@/reducers/user';
import { getAllPropertiesBySeller } from '@/utils';
import React from 'react'
import { useSelector } from 'react-redux';

const SellerProperties = () => {
  const userInfo = useSelector(userDetails);


  const { data, loading} = useFetch(() => getAllPropertiesBySeller(userInfo.id));



  return (
    <div className='p-4 md:p-8'>
    <h1 className='text-2xl xl:text-3xl flex font-semibold p-4 text-gray-700 rounded-md'>
        Welcome Back, {userInfo.firstName} 👋
      </h1>
      <>
        {loading ? (
          <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            <PropertyLoader />
            <PropertyLoader />
            <PropertyLoader />
            <PropertyLoader />
          </div>
        ) : (
          <div>
            {data && data?.length > 0 ? (
              <div className='grid mt-10 grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {data?.map(property => (
                  <PropertyCard key={property.id} property={property} type="seller" />
                ))}
              </div>
            ) : (
              <Empty text="No properties found !!" />
            )}
          </div>
        )
        }
      </>
    </div>
  )
}

export default SellerProperties