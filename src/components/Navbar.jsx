import { useState } from "react";
import {ReactComponent as MenuOpenIcon} from "../assets/svg/MenuOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../assets/svg/MenuClose.svg";
import {ReactComponent as LogoIcon} from "../assets/svg/Logo.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className={`bg-[#16171B] text-white pt-12 px-5 lg:px-32 ${navbar ? "pb-20" : "pb-20"}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer">
            <LogoIcon/>
            <p className="font-bold text-xl md:text-3xl">
              HashCloud
            </p>
        </div>
        <div className='hidden text-xl lg:flex gap-12'>
            <a className='hover:text-[#1BA9B5] cursor-pointer'>Home</a>
            <a className='hover:text-[#1BA9B5] cursor-pointer'>Product</a>
            <a className='hover:text-[#1BA9B5] cursor-pointer'>Plan & Pricing</a>
            <a className='hover:text-[#1BA9B5] cursor-pointer'>FAQs</a>
        </div>
        <div className="hidden lg:flex gap-6 text-xl duration-300">
          <button className='transition-all ease-in-out delay-150 border px-8 py-3 hover:-translate-y-1 border-white rounded-xl'>Login</button>
          <button className='transition-all ease-in-out delay-150 px-8 py-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2067E4] rounded-xl bg-[#2067E4] duration-300'>Register</button>
        </div>
        <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
          {navbar ? <MenuCloseIcon className = "fill-white"/> : <MenuOpenIcon className = "fill-white"/>}
        </div>
      </div>
      <div className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-5 bg-[#2067E4] mt-5 rounded-xl`}>
          <div className='flex flex-col items-center gap-5'>
            <a className='hover:text-[#1BA9B5]'>Home</a>
            <a className='hover:text-[#1BA9B5]'>Product</a>
            <a className='hover:text-[#1BA9B5]'>Plan & Pricing</a>
            <a className='hover:text-[#1BA9B5]'>FAQs</a>
          </div>
          <div className="flex gap-4">
            <button className='border px-6 py-2 border-white rounded-xl'>Login</button>
            <button className='px-6 py-2 rounded-xl bg-[#16171B]'>Register</button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
