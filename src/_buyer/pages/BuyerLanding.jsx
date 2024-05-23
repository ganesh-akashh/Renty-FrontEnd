import useFetch from '@/hooks/useFetch';
import { getAllPropertiesByPgNo } from '@/utils';
import React, { useState, useEffect } from 'react';
import PropertyLoader from '@/components/loaders/PropertyLoaders';
import PropertyCard from '@/components/cards/PropertyCard';
import Empty from '@/components/shared/Empty';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BuyerLanding = () => {

  const { data, loading, pgno, setPgNo } = useFetch(() => getAllPropertiesByPgNo(pgno));
  const [term, setTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [bathrooms, setBathrooms] = useState([]);  //for filter.
  const [bedrooms, setBedrooms] = useState([]);  //for filter.
  const [prices, setPrices] = useState([]);  //for filter.
  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  console.log(selectedPrice);

  useEffect(() => {
    const filtered = data.filter(property =>
      (property.name && property.name.toLowerCase().includes(term.toLowerCase())) ||
      (property.address && property.address.toLowerCase().includes(term.toLowerCase())) ||
      (property.location && property.location.toLowerCase().includes(term.toLowerCase())) ||
      (property.features && property.features.toLowerCase().includes(term.toLowerCase()))
    ).filter(property =>
      (!selectedBathrooms || property.noOfBathRooms === selectedBathrooms) &&
      (!selectedBedrooms || property.noOfBedRooms === selectedBedrooms) &&
      (!selectedPrice || property.price === selectedPrice)
    );
    setFilteredData(filtered);

    const uniqueBathrooms = [...new Set(data.map(property => property.noOfBathRooms))];
    const uniqueBedrooms = [...new Set(data.map(property => property.noOfBedRooms))];
    const uniquePrices = [...new Set(data.map(property => property.price))];

    setBathrooms(uniqueBathrooms);
    setBedrooms(uniqueBedrooms);
    setPrices(uniquePrices);
  }, [data, term, selectedBathrooms, selectedBedrooms, selectedPrice]);


  const handleChange = e => {
    setTerm(e.target.value);
  };



  return (
    <div className='container mx-auto p-4 mt-10'>
      <>
        <h2 className='font-semibold text-lg mb-2 md:text-2xl'>Featured Properties</h2>
        <p className='text-sm font-normal text-gray-600 mb-4'>
          These are some properties you might want to rent.
        </p>
        <div className='flex flex-col md:flex-row gap-2'>
          <input
            className='w-full md:w-1/2 px-3 py-2.5 border-2 rounded-md font-light text-normal'
            type='text'
            value={term}
            placeholder='Search here'
            onChange={handleChange}
          />
          <Select onValueChange={(value) => setSelectedBathrooms(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="No of Bath Rooms" />
            </SelectTrigger>
            <SelectContent>
              {bathrooms.map((item, index) => (
                <SelectItem key={index} value={item}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className='flex flex-row gap-1'>
            <Select onValueChange={(value) => setSelectedBedrooms(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="No of Bed Rooms" />
              </SelectTrigger>
              <SelectContent>
                {bedrooms.map((item, index) => (
                  <SelectItem key={index} value={item}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setSelectedPrice(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder=" ₹ Price" />
              </SelectTrigger>
              <SelectContent>
                {prices.map((item, index) => (
                  <SelectItem key={index} value={item}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </>
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
            {filteredData && filteredData.length > 0 ? (
              <>
                <div className='grid mt-20 grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-3 gap-5'>
                  {filteredData.map(property => (
                    <PropertyCard key={property.id} property={property} type='buyer' />
                  ))}
                </div>
                <div className='flex mt-10 gap-5 justify-center items-center'>
                  <button
                    onClick={() => setPgNo(Math.max(pgno - 1, 0))}
                    disabled={pgno<=0}
                    className='px-2 w-24 py-3 font-light text-sm text-white bg-gray-600 rounded-md'
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPgNo(pgno+1)}
                    disabled={data.length<3}
                    className='px-2 w-24 py-3 font-light text-sm text-white bg-gray-600 rounded-md'
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <Empty text='No properties found !!' />
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default BuyerLanding;
