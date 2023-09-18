import React from 'react'

export default function Header() {
  return (
 <div >
    <header className='px-36 flex font-serif justify-center w-screen'>
        <div className=' flex flex-col justify-center mb-10'>
            <h1 className='text-white mb-5 text-right text-5xl font-black'>بهترین سایت خرید لوازم آرایشی </h1>
            <p className='text-yellow-300 my-1 text-right'>   ما اینجا معروف ترین لوازم ارایشی های ایران را ارایه میدهیم <br />با خیال راحت سفارش لوازم آرایشیتون را به ما بسپارید</p>
            <button className='text-stone-100 mt-5 bg-stone-400 w-28 hover:bg-white hover:text-black transition-all duration-500'>خرید کن</button>
        
        </div>
     <img src="noback1.png" className='text-bold w-96' alt="shop" />
    </header>
 </div>
  )
}
