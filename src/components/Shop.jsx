import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import dog from "../assets/dog.png"
import cat from "../assets/cat.png"
import bird from "../assets/brid.png"
import fish from "../assets/fish.png"

const categories = [
  {
    title: 'Dogs',
    color: 'bg-[#7C5A4D]',
    items: ['Food & Treats', 'Toys', 'Beds & Furniture', 'Outdoor Supplies', 'Clothing'],
    img: dog,
    text: 'text-white',
  },
  {
    title: 'Cats',
    color: 'bg-[#F0B870]',
    items: ['Food & Treats', 'Toys', 'Beds & Furniture'],
    img: cat,
    text: 'text-black',
  },
  {
    title: 'Birds',
    color: 'bg-[#F1F1F1]',
    items: ['Food & Treats', 'Toys', 'Furniture'],
    img: bird,
    text: 'text-black',
  },
  {
    title: 'Fish',
    color: 'bg-[#5C88C8]',
    items: ['Food', 'Aquariums', 'Rocks & Decorations'],
    img: fish,
    text: 'text-white',
  },
]

const Shop = () => {
  return (
    <div className='max-w-[1440px] mx-auto' id="shop">
      <div className=''>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center text-3xl text-[#45413e] font-bold py-10'
        >
          Shop by Pet
        </motion.h1>

        <div className="flex flex-wrap justify-center items-stretch gap-6 p-6 ">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${cat.color} ${cat.text} rounded-2xl w-full sm:w-[270px] flex flex-col justify-between p-6 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <motion.img
                src={cat.img}
                alt={cat.title}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: index * 0.2 }}
                className="h-40 mx-auto mb-4"
              />

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">{cat.title}</h2>
                <ul className="text-sm space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 bg-white text-black px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition"
              >
                Shop All <span className="material-icons-outlined text-base">arrow_forward</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
