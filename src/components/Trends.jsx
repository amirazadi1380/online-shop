import React, { useState } from 'react'

export default function Trends() {
  const trendsPic = ['lipstick1.jpg','lipstick2.jpg','rimmel1.jpg','rimmel2.jpg','spray4.jpg','cosmetic2.jpg','spray1.jpg','spray2.jpg']
  return (
    <main className=' h-96 text-center'>
      <h1 className='text-stone-400 p-5 mb-5  text-3xl t font-black font-serif'>محصولات پر فروش هفته</h1>
      <div className='flex'>
     {trendsPic.map(item=><div className='m-2' key={Math.random() * 1000}><img src={item} alt={item} className='w-52 hover:scale-125 h-56 rounded-lg opacity-60 cursor-pointer hover:opacity-100 transition-all duration-200'/></div>)}
      </div>
    </main>
  )
}
