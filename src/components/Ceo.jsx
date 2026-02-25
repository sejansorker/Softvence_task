import React from 'react'
import Container from './Container'
import Ce from "../assets/ceo.png"
const Ceo = () => {
  return (
    <div>
        <Container>
            <div className="text-center w-[754px] mx-auto">
                <h2 className='text-[48px]  pb-4 text-[#0A0915] font-normal font-main '>A message from our CEO</h2>
                <p className='text-[16px] text-[#52525A] font-normal font-main '>With years of experience in the real estate industry, we are dedicated to helping individuals and families discover the perfect property that aligns with their lifestyle and needs.</p>
            </div>
            <div className="flex justify-center pt-14 pb-30">
                <img className='cursor-pointer' src={Ce} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Ceo