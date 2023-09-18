import React from 'react'

export default function Login() {
  return (
    <div className='w-screen  h-screen justify-center flex items-center '>

    <form className='shadow-2xl bg-gray-900 w-2/4 text-2xl rounded-lg h-1/2 text-center flex flex-col ' >
        <h1 className='font-serif font-extrabold  text-3xl mb-5 text-stone-100'>ورود</h1>
        <label className='text-stone-500 mb-5'>
            <span className='mr-2'>ایمیل :</span>
            <input type="text" className='w-48 h-8 placeholder:text-sm placeholder:p-2 rounded-md text-stone-600' placeholder='your email....'/>
        </label>
        <label className='text-stone-500 mb-5'>
            <span className='mr-2'>پسورد :</span>
            <input type="password"  className='w-48 h-8 placeholder:text-sm placeholder:p-2 rounded-md text-stone-600' placeholder='your password....'/>
        </label>
        <p className='
        text-blue-600 text-xs font-serif cursor-pointer'>فراموشی رمز عبور</p>
    </form>
    </div>
  )
}
