import React from 'react'
import { useState, useEffect } from 'react';
import gsap from 'gsap';

const Loader = ({name}) => {

    const [bgColor, setBgColor] = useState('bg-zinc-700');
    useEffect(() => {
        const timer = setTimeout(() => {
            setBgColor('bg-green-500');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.loder', { y: '-100%', duration: 1, delay: 2 });

        return () => tl.kill();
    }, []);





  return (

    <div className='loder h-screen w-full flex justify-center items-center absolute z-50 bg-zinc-900'>
        <h1 className='text-[7vw] border-y-[1px] w-full border-zinc-700 p-56 text-center font-bold '> {name} </h1>
        <span style={{boxShadow:" 0 0 0.25em #0FF19"}} className={`h-3 w-3 ${bgColor} absolute rounded-full top-[40%] left-[65%]`}></span>


    </div>
  )
}

export default Loader