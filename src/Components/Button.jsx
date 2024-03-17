import { motion } from 'framer-motion'
import { gsap } from 'gsap';
import React from 'react'

const Button = ({title = "Start a Project"}) => {

  return (
    

    <div  className="button ">
            <a className='button px-5 py-1 flex gap-2 justify-evenly items-center text-zinc-900 text-[1.1vw] font-exterthin rounded-2xl bg-zinc-100  '> {title} <img className='w-[1vw] ' src="src/Img/corner-down-right-line.svg" alt="" /> </a>
    </div>
  )
}

export default Button
