import AOS from 'aos'
import 'aos/dist/aos.css'
import React,{useEffect} from 'react'

const Location = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='max-w-[1440px] mx-auto flex justify-center items-center my-30' id="location">
            <div className='bg-[#F4CFC6] text-center py-18 cursor-pointer shadow-xl w-[90%] rounded-2xl max-sm:px-4 'data-aos="zoom-in" duration="3000">
                <h1 className='text-4xl text-[#45413E] font-bold max-sm:text-3xl'>Location & Hours</h1>
                <p className='text-black text-xl py-10 max-sm:text-sm'>Our knowledgeable and friendly staff is always ready<br /> to assist you in making the best choices for your furry,<br /> feathered, or finned friends.</p>
                <div className='flex gap-5 pt-5 flex-wrap justify-center'>
                    <button className='text-white bg-[#45413e] py-4 font-bold max-sm:py-2 px-10 rounded-4xl hover:bg-[#DB7F67]'>Find a store</button>
                    <button className='text-[#45413e] bg-[#F4CFC6] border-2 max-sm:py-2  font-bold hover:bg-[#DB7F67] hover:text-white hover:border-[#DB7F67] border-[#45413e] py-4  px-10 rounded-4xl'>Contact us </button>
                </div>
            </div>
        </div>
    )
}

export default Location