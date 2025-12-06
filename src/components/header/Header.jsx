import React from 'react'
import Login from './Login'
import Logo from '../../assets/logo'
import Menu from './Menu'

function Header() {
  return (
    <>
<div className="w-full py-4 px-8 flex items-center justify-between">

  
  <div className="flex items-center gap-4">
    <Logo className="p-4 bg-gray-400" />
    <Menu className="p-4 bg-gray-300" />
  </div>

  
  <Login className="p-4 bg-gray-200" />

</div>
  
    </> 
  )
}

export default Header