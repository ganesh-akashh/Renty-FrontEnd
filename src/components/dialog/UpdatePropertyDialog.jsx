import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { updateProperty } from '@/utils';
import { toast } from 'sonner';

const UpdatePropertyDialog = ({ data, setData }) => {

    const [values, setValues] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleUpdateClick = async () => {
        try {
            const response = await updateProperty(values);
            if(response){
                setData(values);
                toast(` ${values.name} updated successfully !!`)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w'>
            <Dialog>
                <DialogTrigger className='' asChild>
                    <button className='rounded-3xl cursor-pointer bg-orange-100 p-1.5 text-orange-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                    </button>
                </DialogTrigger>
                <DialogContent className="border-2">
                    <DialogHeader>
                        <DialogTitle>Update Property</DialogTitle>
                        <DialogDescription>
                            Update the corresponding Property Details
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="name" className="text-center">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={values.name}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="address" className="text-center">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                value={values.address}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="noOfBedRooms" className="text-center">
                                Number of Bedrooms
                            </label>
                            <input
                                type="number"
                                id="noOfBedRooms"
                                name="noOfBedRooms"
                                value={values.noOfBedRooms}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="noOfBathRooms" className="text-center">
                                Number of Bathrooms
                            </label>
                            <input
                                type="number"
                                id="noOfBathRooms"
                                name="noOfBathRooms"
                                value={values.noOfBathRooms}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="features" className="text-center">
                                Features
                            </label>
                            <input
                                id="features"
                                name="features"
                                value={values.features}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="area" className="text-center">
                                Area
                            </label>
                            <input
                                id="area"
                                name="area"
                                value={values.area}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="price" className="text-center">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={values.price}
                                autoComplete="on"
                                className="col-span-3 border-2 px-2 py-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <DialogClose onClick={handleUpdateClick} className="bg-primary-500 font-light rounded-md w-full hover:bg-primary-500 px-2 py-2 text-white">
                        Update
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdatePropertyDialog
