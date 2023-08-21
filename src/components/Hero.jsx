import HeroImageMobile from "../assets/images/MockupMobile.png"
import HeroImage from "../assets/images/Mockup.png"

const Hero = () => {
  return (
    <div className='bg-[#16171B] px-5 lg:px-32 text-white text-center pb-30'>
        <div className='flex flex-col gap-4 md:gap-6'>
            <h1 className='text-2xl md:text-4xl lg:text-7xl font-extrabold leading-[40px] lg:leading-[100px]'>Experience the future of cloud storage with HashCloud</h1>
            <p className='text-[10px] md:text-xl lg:text-2xl'>Secure, Decentralized storage for all your important files.</p>
            <button className='transition-all ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2067E4] duration-300 self-center px-6 py-2 rounded-xl bg-[#2067E4]'>Sign Up for free</button>
        </div>
        <img className='shadow-2xl translate-y-20 md:translate-y-36 mx-auto border-4 border-slate-500 rounded-xl md:w-[80%] lg:hidden' src={HeroImageMobile} alt="Hero image" />
        <img className='shadow-2xl hidden mx-auto lg:block translate-y-80 border-8 border-slate-500 rounded-xl w-[90%]' src={HeroImage} alt="Hero image" />
    </div>
  )
}

export default Hero
