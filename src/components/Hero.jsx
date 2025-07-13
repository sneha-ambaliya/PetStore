
import hero2 from "../assets/hero2.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='bg-[#F4CFC6] flex justify-center max-w-[1440px] mx-auto items-center gap-40 py-15 max-lg:gap-5 flex-wrap max-md:px-10' id="hero">
            <div className=''data-aos="fade-right" duration="3000">
                <h1 className='text-amber-900 text-2xl max-md:text-xl '>looking for pet?</h1>
                <h1 className='text-5xl font-semibold text-[#45413e] py-5 max-md:text-2xl '>Your One-Stop Shop for <br /> Every <span className='text-amber-600'>Pet's Needs!</span> </h1>
                <div className='flex gap-5 pt-5 flex-wrap'>
                    <button className='text-white bg-[#45413e] py-2 px-5 rounded-2xl'>Shop all Products</button>
                    <button className='text-white bg-[#45413e] py-2 px-5 rounded-2xl'>Book your service</button>
                </div>

            </div>
            <div data-aos="fade-left" duration="3000">
                <img src={hero2} alt="" />
            </div>

        </div>
    )
}

export default Hero