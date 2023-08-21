import {ReactComponent as Copy} from "../assets/svg/IconEmpty.svg";
import {ReactComponent as Edit} from "../assets/svg/IconEdit.svg";
import {ReactComponent as Security} from "../assets/svg/IconSecurity.svg";
import BenefitCard from './Cards/BenefitCard';

const Benefits = () => {
  return (
    <section className='px-5 bg-[#F9F9F9] lg:px-32 pt-52 lg:pt-[430px] flex flex-col lg:flex-row gap-6 lg:gap-10'>
      <BenefitCard title="Automatic file Organization" description="Hashcloud uses learning algorithms to automatically categorize user files based on their content and file type." color="bg-[#C4FFDD]" icon={<Copy/>}/>
      <BenefitCard title="Built-in File editor" description="We have a suite of basic file editing tools built-in, allowing users to make quick file changes online." color="bg-[#FFE5E5]" icon={<Edit/>}/>
      <BenefitCard title="Enhanced Security" description="Built with the blockchain technology, HashCloud uses encryption techniques to protect files." color="bg-[#D4E2FB]" icon={<Security/>}/>
    </section>
  )
}

export default Benefits
