import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  return (
    <div className="w-full absolute z-20 ">
      <div className='max-w-screen-xl px-2 py-6 mx-auto flex justify-between border-b-[1px] border-zinc-700  '>
        <div className="left flex items-center">
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt=""/>

            <div className="link flex items-center capitalize gap-10 ml-20">
                <NavLink to="/"           className=' flex items-center font-light text-[1vw]  gap-1' >   {window.location.pathname === '/'        && <span style={{boxShadow: "0 0 0.25em #0FF19"}} className='inline-block rounded-full h-1 w-1 bg-green-500'></span> } home</NavLink>
                <NavLink to="/work"       className=' flex items-center font-light text-[1vw]  gap-1' >   {window.location.pathname === '/work'    && <span style={{boxShadow: "0 0 0.25em #0FF19"}} className='inline-block rounded-full h-1 w-1 bg-green-500'></span>}   work</NavLink>
                <NavLink to="/Careers"    className=' flex items-center font-light text-[1vw]  gap-1' >   {window.location.pathname === '/Careers' && <span style={{boxShadow: "0 0 0.25em #0FF19"}} className='inline-block rounded-full h-1 w-1 bg-green-500'></span>} Careers</NavLink>
                <span className='h-4 border-[.2px] border-zinc-700 '></span>
                <NavLink to="/news"       className=' flex items-center font-light text-[1vw]  gap-1' >   {window.location.pathname === '/news'    && <span style={{boxShadow:" 0 0 0.25em #0FF19"}} className='inline-block rounded-full h-1 w-1 bg-green-500'></span>}  news</NavLink>
            </div>
        </div>
        <Button/>
      </div>
    </div>

  );
}

export default Navbar;
