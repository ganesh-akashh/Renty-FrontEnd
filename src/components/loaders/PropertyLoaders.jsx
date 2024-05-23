import React from 'react'
import { Skeleton } from "../ui/skeleton"
import { Card, CardContent, CardHeader } from '../ui/card'

const PropertyLoader = () => {
    return (
        <Card className="mt-10">
            <CardHeader className="bg-gray-300" />
            <CardContent className="flex justify-center items-center">
                <div className="rounded-full bg-gray-300 h-24 w-24  -mt-8 border-8 border-white" />
            </CardContent>
            <CardContent >
                <div className="cursor-pointer space-y-3 ">
                    <Skeleton className="h-[100px] " />
                    <Skeleton className="h-4 " />
                    <Skeleton className="h-3 w-5/12 " />
                </div>
            </CardContent>
        </Card>
    )
}

export default PropertyLoader