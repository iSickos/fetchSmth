import React from 'react'
import Link from 'next/link'
// import { useEffect, useState } from 'react';


function Nav(categories) {

    // useEffect(() => {
    //     fetchCategoryData()
    // }, [])

    // const fetchCategoryData = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products/categories');
    //     const data = await res.json();

    //     setCategories(data);
    // }

    // const [Categories, setCategories] = useState();

    // console.log(Categories)

    return (
        <div className=' flex items-center justify-center p-6'>
            <div className=' flex space-x-6 '>
                <p className='border-b border-black font-semibold'><Link href={"/"}>Home</Link></p>
                <p className='border-b border-black font-semibold'><Link href={"/categories"}>Categories</Link></p>
                {/* {Categories && Categories.map((category) => {
                    return (
                        <p key={category}>{category}</p>
                    )
                })} */}
            </div>
        </div>
    )
}

export default Nav