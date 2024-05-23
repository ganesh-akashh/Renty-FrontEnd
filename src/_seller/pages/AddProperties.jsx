import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { userDetails } from '@/reducers/user';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { addProperty } from '@/utils';

const AddProperties = () => {

  const [loading, setLoading] = useState(false);

  const user = useSelector(userDetails);

  const initialValues = {
    name: '',
    address: '',
    features: '',
    price: 0,
    area: "",
    noOfBathRooms: 0,
    noOfBedRooms: 0,
    location: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    features: Yup.string().required('Features is required'),
    price: Yup.number().min(1, 'Invalid').required('Price is required'),
    area: Yup.string(),
    noOfBathRooms: Yup.number().min(1, 'Number of bathrooms must be greater than or equal to 0').required('Number of bathrooms is required'),
    location: Yup.string().required("Enter the location"),
    noOfBedRooms: Yup.number().min(1, 'Number of bedrooms must be greater than or equal to 0').required('Number of bedrooms is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {

    try {
      setLoading(true);
      const propertyData = {
        ...values,
        imgUrl: "https://a0.muscache.com/im/pictures/4ac2fa8a-7fe5-47e5-beb3-3df2823f2734.jpg?im_w=1920",
        seller: user, 
        createdAt: new Date().toISOString(),
        noOfLikes: 0,
      };

      console.log(propertyData);

      const response = await addProperty(propertyData);
      if (response.data) {
        toast(`${response.data.name} added successfully !!`);
        resetForm();
      }

    } catch (error) {
      toast("Something went wrong !!")
      console.log(error);
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className='p-8 ml-0 md:ml-10 '>
      <div className="rounded-sm border p-4  md:p-8 w-full  bg-white ">
        <div className="border-b py-4 px-6.5 ">
          <h3 className="font-normal text-xl md:text-2xl">
            Add Property
          </h3>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="p-6.5 mt-10 ">
              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label htmlFor='name' className="mb-2.5 block">
                    Name
                  </label>
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="on"
                    placeholder="Enter property name"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 font-light text-sm" />
                </div>

                <div className="w-full xl:w-1/2">
                  <label htmlFor='price' className="mb-2.5 block">
                    Price
                  </label>
                  <Field
                    id="price"
                    type="number"
                    name="price"
                    autoComplete="on"
                    placeholder="Enter price"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="price" component="div" className="text-red-500 font-light text-sm" />
                </div>
              </div>

              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label htmlFor='noOfBathRooms' className="mb-2.5 block">
                    Number of Bathrooms
                  </label>
                  <Field
                    id="noOfBathRooms"
                    type="number"
                    name="noOfBathRooms"
                    autoComplete="on"
                    placeholder="Enter number of bathrooms"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="noOfBathRooms" component="div" className="text-red-500 font-light text-sm" />
                </div>
                <div className="w-full xl:w-1/2">
                  <label htmlFor='noOfBedRooms' className="mb-2.5 block">
                    Number of Bedrooms
                  </label>
                  <Field
                    id="noOfBedRooms"
                    type="number"
                    name="noOfBedRooms"
                    autoComplete="on"
                    placeholder="Enter number of bedrooms"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="noOfBedRooms" component="div" className="text-red-500 font-light text-sm" />
                </div>
              </div>


              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label htmlFor='features' className="mb-2.5 block">
                    Features
                  </label>
                  <Field
                    as="textarea"
                    id="features"
                    type="text"
                    name="features"
                    autoComplete="on"
                    placeholder="Enter property features"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="features" component="div" className="text-red-500 font-light text-sm" />
                </div>
                <div className="w-full xl:w-1/2">
                  <label htmlFor='address' className="mb-2.5 block">
                    Address
                  </label>
                  <Field
                    as="textarea"
                    id="address"
                    type="text"
                    name="address"
                    autoComplete="on"
                    placeholder="Enter property address"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="address" component="div" className="text-red-500 font-light text-sm" />
                </div>
              </div>

              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label htmlFor='area' className="mb-2.5 block">
                    Area
                  </label>
                  <Field
                    id="area"
                    type="text"
                    name="area"
                    autoComplete="on"
                    placeholder="Enter property area"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="area" component="div" className="text-red-500 font-light text-sm" />
                </div>
                <div className="w-full xl:w-1/2">
                  <label htmlFor='location' className="mb-2.5 block">
                    Location
                  </label>
                  <Field
                    id="location"
                    type="text"
                    name="location"
                    autoComplete="on"
                    placeholder="Enter the location"
                    className="w-full font-light rounded border-[1.5px]  bg-transparent py-3 px-5 outline-none transition focus:border-primary-500 active:border-primary-500 disabled:cursor-default"
                  />
                  <ErrorMessage name="location" component="div" className="text-red-500 font-light text-sm" />
                </div>
              </div>

              <button type="submit" className="flex mt-10 w-full md:w-64 justify-center text-white rounded-md bg-primary-500 p-3 font-light ">
                {loading ? "Adding Property..." : "Add Property"}
              </button>
            </div>
          </Form>

        </Formik>
      </div>
    </div>
  )
}

export default AddProperties