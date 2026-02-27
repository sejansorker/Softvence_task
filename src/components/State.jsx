import React from 'react'
import Container from './Container'

const State = () => {
    return (
        <div className='bg-[url(/pagenation.png)] pt-[72px] pb-[127px] bg-cover bg-center bg-no-repeat '>
            <Container>
                <div className="w-2/5 bg-white h-[691px]">
                   <div className="pt-12 px-10 pb-10">
                    <h3 className='text-[48px] text-[#0A0915] font-main font-normal pb-4 leading-[125%]'>Turning your real estate dreams true!</h3>
                    <p className='text-[#52525A] text-[18px] font-main font-normal pb-8'>Have questions or ready to take the next step? Whether you’re buying, selling, or just exploring options.</p>
                    <button className='text-[#203F30] text-[16px] font-main font-medium py-2.5 px-6 border-1 border-[#1629321a] rounded-full mb-22'>Get a Quote</button>
                   </div>
                </div>
            </Container>
        </div>
    )
}

export default State