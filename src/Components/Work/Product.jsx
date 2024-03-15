import React from 'react';
import Button from '../Button';

const Product = ({elem, val }) => {
  return (
    <>
        <div onMouseEnter={()=>{mover(index)}} className={`w-full  p-16 flex justify-between h-[20rem]  items-center overflow-hidden  hover:${elem.hover} `} style={{hover: elem.col}} >
                <h1 className='text-[4vw] capitalize'>{elem.name}</h1>
                <div className="w-1/3 ">
                    <h5 className=' mr-[5vw] mb-5'>{elem.desc}</h5>
                    <div className="button flex gap-2 ">
                        {elem.button1 && <Button title='Live Website' />}
                        {elem.button2 && <Button title='Case Study'/>}
                    </div>

                </div>
        </div>    
    </>
  );
}

export default Product;
