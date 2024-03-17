import { motion } from 'framer-motion'
import React from 'react'

const Marquee2 = ({imagesurls}) => {
  return (
    
    <div  className="flex w-full overflow-hidden">
        <motion.div initial={{x:"-100%"}} animate={{x: '0%'}} transition={{ease: "linear", duration:30, repeat: Infinity   }} className="flex flex-shrink-0 gap-40 py-10 pr-40">
            {imagesurls.map(((url,index) => <img src={url} key={index} className='flex-srink-0 h-8'  /> ))}
        </motion.div>
        <motion.div initial={{x:"-100%"}} animate={{x: '0%'}} transition={{ease: "linear", duration:30, repeat: Infinity }} className="flex flex-shrink-0 gap-40 py-10 pr-40">
            {imagesurls.map(((url,index) => <img  src={url} key={index} className='flex-srink-0 h-8'  /> ))}
        </motion.div>

    </div>
  )
}

export default Marquee2