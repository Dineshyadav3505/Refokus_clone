import React from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';

const Product = ({ elem, mover, index, }) => {

  let col=[
    {col:"bg-[#9159EC]", }
  ]

  return (

    <motion.div whileHover={{backgroundColor: elem.col}} onMouseEnter={() => mover(index)}   className={`w-full h-[20rem] p-16 flex justify-between items-center overflow-hidden  `}>
      <h1 className='text-[4vw] capitalize'>{elem.name}</h1>
      <div className="w-1/3">
        <h5 className='mr-5vw mb-5'>{elem.desc}</h5>
        <div className="button flex gap-2">
          {elem.button1 && <Button title='Live Website' />}
          {elem.button2 && <Button title='Case Study' />}
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
