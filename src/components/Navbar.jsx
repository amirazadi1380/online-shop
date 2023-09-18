import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='my-5 flex justify-between text-stone-500 text-xl'>
        <h1 className='font-serif font-extrabold text-3xl text-stone-500 ml-10'>اسم فروشگاه</h1>

        <ul className='flex pb-5 '>
            <li className='mx-5 rounded-2xl hover:bg-stone-300 w-20 h-12 transition-all duration-300 cursor-pointer hover:text-stone-700 font-serif justify-center py-3 text-center'>
                <Link to='products'>محصولات</Link>
            </li>
            <li className='mx-5 rounded-2xl hover:bg-stone-300 w-16 h-12 transition-all duration-300 cursor-pointer hover:text-stone-700 font-serif justify-center py-3 text-center'>
                <Link to='products'>برند</Link>
            </li>
            <li className='mx-5 rounded-2xl hover:bg-stone-300 w-20 h-12 transition-all duration-300 cursor-pointer hover:text-stone-700 font-serif justify-center py-3 text-center'>
                <Link to='categories'>دسته بندی</Link>
            </li>
        </ul>

        <ul className='flex'>
            <li className='mx-5 rounded-2xl hover:bg-stone-300 w-16 h-12 transition-all duration-300 cursor-pointer hover:text-stone-700 font-serif justify-center py-3 text-center'>
                <Link to='login'>عضویت</Link>
            </li>
            <li className='mx-5 rounded-2xl bg-stone-400 text-white hover:bg-stone-300 w-16 h-12 cursor-pointer transition-all duration-300 hover:text-stone-700 font-serif justify-center py-3 text-center'>
                <Link to='login'>ورود</Link>
            </li>
        </ul>
    </nav>
  )
}
