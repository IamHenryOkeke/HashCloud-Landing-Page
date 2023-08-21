import {ReactComponent as LogoIcon} from "../assets/svg/Logo.svg";
import {ReactComponent as Facebook} from "../assets/svg/Facebook.svg";
import {ReactComponent as Twitter} from "../assets/svg/Twitter.svg";
import {ReactComponent as Instagram} from "../assets/svg/Instagram.svg";

const Footer = () => {
  return (
    <div className='bg-[#16171B] text-white lg:text-2xl'>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] lg:items-center px-5 lg:px-48 gap-20 lg:flex-row">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 cursor-pointer">
                    <LogoIcon/>
                    <p className="font-bold text-xl md:text-3xl">
                        HashCloud
                    </p>
                </div>
                <p className="leading-8 lg:leading-[45px]">
                    Experience the future of cloud storage. Secure, Decentralized storage for all your important files.
                </p>
                <div className="flex gap-5">
                    <Facebook className = "w-8 h-8"/>
                    <Twitter className = "w-8 h-8"/>
                    <Instagram className = "w-8 h-8"/>
                </div>
            </div>
            <div className='grid grid-cols-3 pb-10 mt-6 lg:mt-0'>
                <ul className='flex flex-col gap-4'>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Product</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Features</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">What&apos;s new?</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Pricing</li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Company</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Contact</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Careers</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Blog</li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">About</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Terms of use</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">Privacy Policy</li>
                    <li className="self-start hover:text-[#1BA9B5] cursor-pointer">FAQs</li>
                </ul>
            </div>
        </div>
        <hr className="my-4"/>
        <div className='p-4 text-sm lg:text-base text-[#606060] text-center'>
            <p>HashCloud. Copyright 2023</p>
            <p className="mt-2">Designed by <a href="https://bio.site/Vibesayo" className="hover:text-[#1BA9B5]" target="_blank" rel="noreferrer">Vibesayo</a> and Developed by <a href="http://nmesomahenry.vercel.app" className="hover:text-[#1BA9B5]" target="_blank" rel="noreferrer">NmesomaHenry</a></p>
        </div>
        
    </div>
  )
}

export default Footer
