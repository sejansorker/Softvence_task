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
                    <div className="w-2/3">
                        <div className="flex items-center">
                            <div className="">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="">
                                <ul className='flex items-center gap-x-6 pl-13 text-white'>
                                    <li className='py-1 px-4 border-2 border-white'>Projects</li>
                                    <li>Sercive</li>
                                    <li>Contact</li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                    <div className="flex items-center">
                        <p>+21 934 748 392</p>
                        <button><IoIosSearch /></button>
                        <button className='flex items-center'>Get a Quote <FaArrowRightLong /></button>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar