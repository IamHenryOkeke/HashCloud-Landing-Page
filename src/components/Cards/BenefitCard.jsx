import React from 'react'

const BenefitCard = ({title, description, icon, color}) => {
  return (
    <div className='flex flex-col gap-4 bg-[#F9F9F9] p-6 rounded-xl'>
        <div className='flex gap-3 items-center'>
          <div className={"p-3 rounded-2xl " + color}>
            {icon}
          </div>
          <h1 className='font-bold lg:text-2xl'>{title}</h1>
        </div>
        <p className='lg:text-xl lg:leading-9'>{description}</p>
      </div>
  )
}

export default BenefitCard
