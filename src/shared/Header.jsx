import React from 'react';
import Logo from './../../src/container/Logo';
import Menu from '../container/Menu';


const Header = () => {
  return (
    <>
    <div className='bg-white shadow-sm h-20 flex items-center justify-between px-8'>
        <Logo></Logo>
        <Menu></Menu>
    </div>
    </>
  )
}

export default Header;
