import React from 'react'
import Nav from '../../../components/nav/Nav'
import { motion } from "framer-motion"

type Product = any;

export async function getServerSideProps(context: { query: any; }) {
    const { query } = context;
    const { id } = query;

    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await res.json();

    return { props: { product: data } }
}

export default function Index({ product }: { product: Product }) {

    console.log(product);

    return (
        <div className=' h-screen'>
            <Nav />
            <div className=' flex h-1/2 justify-center'>
                <div className=" w-2/5 px-5 pb-5 flex flex-col justify-center">
                    <h2 className=' w-max font-bold pb-2'>{product.title}</h2>
                    <span className=' pb-4 font-semibold text-2xl'>{product.price + " €"}</span>
                    <h3 className='pb-4 '>{product.description}</h3>
                    <h3>{product.rating.rate + "⭐ / " + product.rating.count}</h3>
                </div>
                <div className=' w-1/5'>
                    <motion.div className='  h-full'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: "12rem 18rem",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }} />
                </div>
            </div>
        </div>
    )
}
