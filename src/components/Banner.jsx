import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div className='bg-[url(/banner.png)] bg-cover bg-center bg-no-repeat pt-[213px] pb-[279px]'>
        <Container>
          <div className="w-9/12">
          <h2 className='text-[80px] text-white font-main font-normal'>Turning Your Real Estate Dreams into Reality</h2>
          <p className='pt-2.5 pb-10.5 text-[20px] text-white font-main font-normal'>Forget clunky application forms. We offer a modern, user-friendly platform that makes applying for a job a breeze.</p>
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