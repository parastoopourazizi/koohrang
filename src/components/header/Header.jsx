import React from 'react'
import Login from './Login'
import Logo from '../../assets/logo'
import Menu from './Menu'

function Header() {
  return (
    <>
    <div className="w-full py-4 px-8 flex items-center justify-between">
        <Login className='p-4 bg-gray-200'></Login>
        <Menu className='p-4 bg-gray-300'></Menu>
    <Logo className='p-4 bg-gray-400'></Logo>
    

    </div>
  
    </> 
  )
}

export default Header