import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import Link from 'next/link'
function Navbar() {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
      
       <Image src={logo} alt="logo" width={200} height={150} />
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base  justify-center">
      <Link href="/About" className="mr-5 text-gray-400 cursor-pointer hover:text-gray-200">About</Link>
      <Link href="/Contact" className="mr-5 text-gray-400 cursor-pointer hover:text-gray-200">Contact</Link>
      <Link href="/Feedback" className="mr-5 text-gray-400 cursor-pointer hover:text-gray-200">Feedback</Link>
    </nav>
    
  </div>
</header>

  )
}

export default Navbar