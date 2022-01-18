import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href="/" passHref>
        <a className='navbar_logo'>PHILIP OBOSI</a>
      </Link>
      <div>Menu</div>
    </nav>
  )
}

export default Navbar
