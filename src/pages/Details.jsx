import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
   const {id} =  useParams()
 
  
  return (
    <div className='text-white'>you chose item  <span className='text-red-600'>{id}</span></div>
  )
}
