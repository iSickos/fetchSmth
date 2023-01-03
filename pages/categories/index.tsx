import React from 'react'
import Link from 'next/link';
import Nav from '../../components/nav/Nav'

export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();

    return { props: { categories: data } }
}

function index({ categories }: { categories: any }) {

    let categoryAlt = categories.slice();

    for (let i = 0; i < categoryAlt.length; i++) {
        categoryAlt[i] = categoryAlt[i].replace(/[^A-Z0-9]+/ig, "_");
    }

    // categoryAlt.map((alt: string) => alt.replace(/[^A-Z0-9]+/ig, "_"));

    console.log(categoryAlt);

    return (
        <div className=' h-screen'>
            <Nav />
            <div className=' flex flex-col items-center justify-center space-y-5'>
                {categories.map((category: any, i: number) => {
                    return (
                        <p key={category} className=' font-normal'><Link href={"/categories/" + categoryAlt[i]}>{category}</Link></p>
                    )
                })}
            </div>

        </div>
    )
}

export default index