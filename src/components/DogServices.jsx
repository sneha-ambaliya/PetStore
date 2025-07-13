import React, { useEffect } from 'react'
import groomingImg from '../assets/ser1.png'
import boardingImg from '../assets/ser2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const services = [
    {
        title: "Dog Grooming",
        description: "Tail-wagging transformations are our specialty.",
        image: groomingImg,
        items: [
            { name: "Coat Care", price: "$80" },
            { name: "Nail Care", price: "$16" },
            { name: "Doggie Deluxe Spa Day", price: "$180" },
        ],
        bg: "bg-gradient-to-l from-[#A0CED3] to-[#5B949D]",
    },
    {
        title: "Dog Boarding",
        description: "Where fun and care never take a day off.",
        image: boardingImg,
        items: [
            { name: "Doggie Daycare", price: "$80" },
            { name: "Nail Care", price: "$16" },
            { name: "Short Term Boarding", price: "$80" },
        ],
        bg: "bg-gradient-to-r from-[#DBA6A4] to-[#E4D8A4]",
    },
]

const DogServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (

        <>

            <h1 className='text-3xl text-center text-[#45413e] mt-20 font-bold' id="dogservice">Our Services</h1>
            <div className='flex justify-center'>

                <div className="py-12 px-4 md:px-10 flex max-sm:flex-wrap gap-6  items-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[1100px] flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
                            data-aos="zoom-out"
                        >

                            <div className={`md:w-1/2 w-full flex items-center justify-center ${service.bg} p-6`}>
                                <img src={service.image} alt={service.title} className="h-32 object-contain" />
                            </div>


                            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                                    <ul className="text-sm space-y-2">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex justify-between">
                                                <span>{item.name}</span>
                                                <span className="font-semibold">{item.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="mt-6 bg-black text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                                    <span className="material-icons-outlined text-sm">event</span>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DogServices
