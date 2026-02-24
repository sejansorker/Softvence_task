
// import React from 'react'
import Container from './Container'
import Im from "../assets/image.png"
import Im1 from "../assets/image (1).png"
import Im2 from "../assets/image (2).png"
import Im3 from "../assets/image (3).png"
import Im4 from "../assets/image (4).png"
import Im5 from "../assets/image (5).png"

import Mini from "../assets/Object.png"
import Mini1 from "../assets/Object (1).png"
import Mini2 from "../assets/Object (2).png"
import Mini3 from "../assets/Object (3).png"
import Mini4 from "../assets/Object (4).png"
import Mini5 from "../assets/Object (5).png"

const Cart = () => {
  return (
    <div className='pt-30'>
        <Container>
            <div className="">
                <h2 className='pb-16 text-[48px] text-black font-main font-normal text-center'>Exclusive properties by HomeQuest</h2>
            </div>
            <div className="flex items-center justify-between gap-y-12 flex-wrap">
              <div className="w-[32%]">
                <div className="">
                  <img className='pb-6' src={Im} alt="" />
                  <p className='pb-2 text-[16px] text-[#203F30] font-main font-normal'>$1,405,000</p>
                  <h4 className='pb-6 text-[24px] text-[#0A0915] font-main font-medium'>Modern 3-Bedroom Apartment in Gulshan, Dhaka</h4>
                  <img src={Mini} alt="" />
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <img className='pb-6' src={Im1} alt="" />
                  <p className='pb-2 text-[16px] text-[#203F30] font-main font-normal'>$12,000/mo</p>
                  <h4 className='pb-6 text-[24px] text-[#0A0915] font-main font-medium'>Luxury 4-Bedroom Villa in Downtown,  Mumbai</h4>
                  <img src={Mini1} alt="" />
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <img className='pb-6' src={Im2} alt="" />
                  <p className='pb-2 text-[16px] text-[#203F30] font-main font-normal'>$2,100,000</p>
                  <h4 className='pb-6 text-[24px] text-[#0A0915] font-main font-medium'>Luxury 2-Bedroom Villa in Salt Lake, West Bengal</h4>
                  <img src={Mini2} alt="" />
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <img className='pb-6' src={Im3} alt="" />
                  <p className='pb-2 text-[16px] text-[#203F30] font-main font-normal'>$1,405,000</p>
                  <h4 className='pb-6 text-[24px] text-[#0A0915] font-main font-medium'>Chic 1-Bedroom Apartment in Kuala Lumpur, Malaysia</h4>
                  <img src={Mini3} alt="" />
                </div>
              </div>
            </div>
        </Container>
    </div>
  )
}
export default Cart