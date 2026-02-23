import React from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { IoIosSearch } from 'react-icons/io'
import { FaArrowRightLong } from 'react-icons/fa6'
const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full'>
            <Container>
                <div className="flex items-center pt-8">
                    <div className="w-2/4 ">
                        <div className="flex items-center">
                            <div className="">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="">
                                <ul className='flex items-center gap-x-6 pl-13 text-white font-main text-[16px] font-normal'>
                                    <li className='py-1 px-4 border-2 border-white rounded-[30px]'>Projects</li>
                                    <li>Sercive</li>
                                    <li>Contact</li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4 ">
                    <div className="flex items-center justify-end">
                        <p className='text-[16px] font-normal font-main text-white pr-8'>+21 934 748 392</p>
                        <button className='p-3.5 rounded-full mr-2  bg-[rgba(255,255,255,0.37)]'><IoIosSearch className='text-[20px] text-white ' /></button>
                        <button className='flex items-center font-main text-[16px] font-medium bg-[#DBFB1E] py-3 px-6 rounded-[50px]'><span className='pr-3'>Get a Quote</span> <FaArrowRightLong  /></button>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar