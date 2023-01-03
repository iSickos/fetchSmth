import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

function ProductCard({ id, title, description, image, price, rate, count }) {
    return (
        <Link href={"/product/" + id}>
            <motion.div className=' cursor-pointer w-72 border border-black  rounded-2xl h-96 flex flex-col justify-end shadow-lg'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "12rem 18rem",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                whileHover={{ scale: [null, 1.08, 1.06] }}
                transition={{ duration: 0.2 }}>
                <div className='bg-[rgba(0,0,0,0.5)] p-3 backdrop-blur-sm rounded-b-2xl text-white select-none'>
                    <div className='font-semibold text-xl'>{price + " €"}</div>
                    <div className=' line-clamp-1 font-normal text-base'>{title}</div>
                    <div className=' text-neutral-200 line-clamp-1 font-normal text-xs'>{description}</div>
                    {/* <div>{rate + "* / " + count}</div> */}
                </div>
            </motion.div>
        </Link>

    )
}

export default ProductCard