import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Logos from '../components/Logos'
import Trends from '../components/Trends'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Trends/>
        <Logos/>
    </div>
  )
}
