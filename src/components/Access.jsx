import AccessCard from './Cards/AccessCard'
import {ReactComponent as Folder1} from "../assets/svg/Folder1.svg";
import {ReactComponent as Folder2} from "../assets/svg/Folder2.svg";
import {ReactComponent as Folder3} from "../assets/svg/Folder3.svg";

const Access = () => {
  return (
    <section className='my-14 bg-[#F9F9F9] px-5 lg:px-32 flex flex-col gap-10 lg:gap-20 lg:grid grid-cols-2 lg:items-center'>
      <div>
        <h1 className='font-bold text-3xl md:text-center lg:text-start lg:text-5xl lg:leading-[70px]'>Access your files from anywhere worldwide</h1>
        <p className='my-6 lg:my-16 text-[15px] lg:text-2xl leading-6 lg:leading-[45px]'>HashCloud uses an Interplanetary File System (IPFS) decentralizes storage network to store users&apos; files. Files are stored on multiple servers around the world instead of a single, centralized server. Making our product more resistant to outages and other issues that may affect other traditional, centralized cloud storage services.</p>
        <button className='px-8 py-3 lg:px-16 lg:py-5 rounded-xl bg-[#2067E4] lg:text-xl font-medium text-white'>Sign Up for free</button>
      </div>
      <div className='flex flex-col gap-5 bg-[#F9F9F9] drop-shadow-xl rounded-lg my-5 p-6 lg:p-10'>
        <AccessCard title="Product Files" icon={<Folder1/>} fontSize="text-xl lg:text-[43px]"/>
        <AccessCard title="Design Files" icon={<Folder2/>} fontSize="lg:text-4xl"/>
        <AccessCard title="New Folder 1" icon={<Folder3/>} fontSize="lg:text-4xl"/>
      </div>
    </section>
  )
}

export default Access
