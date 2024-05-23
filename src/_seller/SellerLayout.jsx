import Sidebar from "@/components/shared/Sidebar"
import { Outlet } from "react-router-dom"
import SellerNavbar from "@/components/shared/SellerNavbar"


const SellerLayout = () => {
  return (
    <div className="h-full relative">
     <SellerNavbar />
      <div className='hidden md:flex mt-16 w-24 fixed flex-col inset-y-0'>
        <Sidebar />
      </div>
      <main className='md:pl-20 pt-16 h-full bg-[#f7f9fc]'>
        {/* //display it's child components. */}
        <Outlet />
      </main>
    </div>
  )
}

export default SellerLayout