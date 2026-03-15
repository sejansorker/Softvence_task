import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div className='bg-[url(/banner.png)] bg-cover bg-center bg-no-repeat lg:pt-[213px] lg:pb-[279px] pt-25 pb-35'>
        <Container>
          <div className="lg:w-9/12 w-full">
          <h2 className='lg:text-[80px] text-[35px] text-white font-main font-normal lg:leading-[114px] leading-[60px]'>Turning Your Real Estate Dreams into Reality</h2>
          <p className='lg:pt-2.5 lg:pb-10.5 lg:text-[20px] pt-1.5 pb-5 text-[15px] text-white font-main  font-normal lg:w-[696px] w-full'>Forget clunky application forms. We offer a modern, user-friendly platform that makes applying for a job a breeze.</p>
          <div className="relative">
            <input type="text" placeholder='Search your dream real estate' className='text-[16px] text-[#0A0915] bg-white py-5.5 pl-6 w-[619px] font-main font-normal rounded-lg outline-0'/>
            <button className='py-2.5 cursor-pointer px-6 bg-[#203F30] text-[16px] text-white font-main font-normal rounded-lg absolute top-3 right-95 '>Search for booking</button>
          </div>
          </div>
        </Container>
    </div>
  )
}
export default Banner



