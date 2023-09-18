import React from 'react'
import { Link } from 'react-router-dom'

const products= [
    {
        id:1,
        src:"cosmetic1.jpg",
        name: "gel-v34",
        price: "120$"       
    },
    {
        id:2,
        src:"cosmetic2.jpg",
        name: "nbvy-v34",
        price: "250$"       
    },
    {
        id:3,
        src:"cosmetic3.jpg",
        name: "nftyj-v34",
        price: "720$"       
    },
    {
        id:4,
        src:"lipstick1.jpg",
        name: "lip-v34",
        price: "1654$"       
    },
    {
        id:5,
        src:"lipstick2.jpg",
        name: "lipstick-9w2",
        price: "120$"       
    },
    {
        id:6,
        src:"rimmel1.jpg",
        name: "rimmel-v34",
        price: "820$"       
    },
]
  

export default function Products() {
  return (

   <div className='flex flex-col  text-center'>
        <h1 className='text-white text-5xl font-extrabold mb-10'>محصولات </h1>
    <div className='grid grid-cols-3 text-stone-200 gap-5 ml-40'>     
{
    products.map(product=>

    <div className='text-center  justify-center flex flex-col relative w-80 h-96 'key={product.id}>
        <img src={product.src} alt={product.name} className='rounded-2xl  h-96 w-80 opacity-50 relative'/>
        <div className='absolute left-1/2 -translate-x-1/2 '>
        <h1 className='my-5 font-bold text-4xl'>{product.name}</h1>
        <p className='my-5 font-bold text-yellow-400' >{product.price}</p>
        <button className='opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-125'>buy</button>   
        <p>
            <Link to={`${product.id}`} >more...</Link>
        </p>
        
        </div>
    </div> 

    )
}
</div>
  </div>

  )
}
