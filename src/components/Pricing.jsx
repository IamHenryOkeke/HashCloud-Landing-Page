import {ReactComponent as Ellipse} from "../assets/svg/Ellipse.svg";
import {ReactComponent as Flash} from "../assets/svg/Flash.svg";
import {ReactComponent as Checkmark} from "../assets/svg/Checkmark.svg";

const Pricing = () => {
  return (
    <div className='px-5 lg:px-32 text-center pb-40'>
        <h1 className="font-bold text-2xl lg:text-5xl">
            Choose a plan that works best for you
        </h1>
        <p className="lg:text-2xl my-4">
            Affordable Pricing, handpicked for you. No hidden fees.
        </p>
        <div className="flex items-center gap-3 justify-center">
            <p>Monthly</p>
            <div className="pl-1 pr-4 border-2 flex justify-start rounded-lg">
                <Ellipse className="h-3 w-3"/>
            </div>
            <p>Yearly</p>
            <div className="border-2 flex items-center rounded-3xl px-3 border-[#2067E4] text-sm text-[#2067E4]">
                <Flash className="h-4 w-4"/>
                <p>25% OFF</p>
            </div>
        </div>
        <div className="mt-5 lg:mt-14 flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-20">
            <div className="rounded-lg md:w-[60%] border-2 bg-white transition ease-in-out delay-150 hover:scale-110 duration-300">
                <div className="py-8">
                    <p className="lg:text-2xl">Starter</p>
                    <div className="flex justify-center mt-3 items-center">
                        <h1 className="text-3xl font-extrabold lg:text-7xl">$50</h1>
                        <span className="lg:text-2xl">/mo</span>
                    </div>
                </div>
                <hr/>
                <div className="flex flex-col items-center gap-5 px-12 py-10 lg:text-xl">
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>150 Gigabyte storage</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>Limited Access to File editors </p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File collaboration</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File recommendation</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File categorization</p>
                    </div>
                    <button className='px-6 py-2 rounded-xl bg-[#2067E4] text-white'>Get Starter</button>
                </div>
            </div>
            <div className="rounded-lg md:w-[60%] text-white bg-[#16171B] transition ease-in-out delay-150 hover:scale-110 duration-300">
                <p className="bg-[#2067E4] py-2 rounded-t-lg">RECOMMENDED</p>
                <div className="py-8">
                    <p className="lg:text-2xl">Premium</p>
                    <div className="flex justify-center mt-3 items-center">
                        <h1 className="text-3xl font-extrabold lg:text-7xl">$100</h1>
                        <span>/mo</span>
                    </div>
                </div>
                <hr className="bg-[#1B1E23]"/>
                <div className="flex flex-col items-center gap-5 px-12 py-10 lg:text-xl">
                    <div className="flex gap-3 items-center smd:self-center lg:self-start">
                        <Checkmark/>
                        <p>1 Terabyte storage</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>Full Access to File editors </p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File collaboration</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File recommendation</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File categorization</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File ownership verification</p>
                    </div>
                    <button className='px-6 py-2 rounded-xl bg-[#2067E4] text-white'>Get Starter</button>
                </div>
            </div>
            <div className="rounded-lg md:w-[60%] border-2 bg-white transition ease-in-out delay-150 hover:scale-110 duration-300">
                <div className="py-8">
                    <p className="lg:text-2xl">Enterprise</p>
                    <div className="flex justify-center mt-3 items-center">
                        <h1 className="text-3xl font-extrabold lg:text-7xl">Custom</h1>
                    </div>
                </div>
                <hr/>
                <div className="flex flex-col items-center gap-5 px-12 py-10 lg:text-xl">
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>Unlimited storage</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>Full Access to File editors </p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File collaboration</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File recommendation</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File categorization</p>
                    </div>
                    <div className="flex gap-3 items-center md:self-center lg:self-start">
                        <Checkmark/>
                        <p>File ownership verification</p>
                    </div>
                    <button className='px-6 py-2 rounded-xl bg-[#2067E4] text-white'>Get Enterprise</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing;
