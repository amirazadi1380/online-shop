import React from 'react'

export default function Logos() {
  return (
    <div className='flex justify-between font-serif  h-80 bg-gray-600'>
        <div className='flex flex-col justify-center text-center w-40 ml-20'>
            <img src="truck.png" alt="truck" className='w-60' />
            <h1 className='text-white mb-5  text-3xl t font-black'>ارسال محصول</h1>
            <p className='text-stone-300 my-1'>ارسال محصول در کوتاه ترین زمان ممکن حدود دو الی سه روز کاری</p>
        </div>
        <div className='flex flex-col justify-center text-center w-40'>
            <img src="handshake.png" alt="handshake" className='w-60' />
            <h1 className='text-white mb-5  text-5xl font-black'>امنیت </h1>
            <p className='text-stone-300 my-1 '>امنیت بالا و میزان اعتماد و رضایت مشتریان ضمانت کننده هستند</p>
        </div>
        <div className='flex flex-col justify-center text-center w-40 mr-20'>
            <img src="support.png" alt="support" className='w-60'/>
            <h1 className='text-white mb-5  text-5xl font-black'>پشتیبانی</h1>
            <p className='text-stone-300 my-1 '>پشتیبانی و راهنمایی خرید 24 ساعته و در هر روز هفته انجام می شود</p>
        </div>

    </div>
  )
}
