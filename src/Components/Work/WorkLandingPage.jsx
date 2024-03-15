import React, { useState } from 'react'
import Products from './Products'
import Marquees from '../Marquees'
import Cards from './Cards'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Navbar from '../Navbar';
import Loader from '../Loader';
import Marquess2 from '../Marquess2';


const WorkLandingPage = () => {


    const [img, setimg] = useState([
        {img:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png',            top:'30%',   left:'42%',    isActive:false },
        {img:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png',              top:'35%',   left:'38%',    isActive:false },
        {img:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png',                        top:'25%',   left:'45%',    isActive:false },
        {img:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png',                     top:'40%',   left:'41%',    isActive:false },
        {img:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png',                       top:'35%',   left:'47%',    isActive:false },
        {img:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png',    top:'30%',   left:'40%',    isActive:false },
      ]);
    
      
    
    
      const { scrollYProgress } = useScroll()
    
      scrollYProgress.on("change",(data) => {
        function imagesShow(arr){
          setimg(prev => (
            prev.map((item, index)=>(
              arr.indexOf(index)===-1 ?(
                {...item, isActive: false}
              ):
              ({...item, isActive: true})
            ))
          ))

        }
        
        switch (Math.floor(data*100)){
          case 0:
            imagesShow([]);
            break;
          case 1:
            imagesShow([0]);

            break;
          case 3:
            imagesShow([0,1]);

            break;
          case 5:
            imagesShow([0,1,2]);
    
            break;
          case 7:
            imagesShow([0,1,2,3]);

            break;
          case 9:
            imagesShow([0,1,2,3,4]);
            break;
          case 9:
              imagesShow([0,1,2,3,4,5]);
            break;
        }
      })
 
      

  return (
    <div className=" max-w-screen-xl mx-auto  relative mb-10 py-14   ">
          <h1 className='text-[40vw] leading-none text-center select-none font-medium '>work</h1>


          <div className='w-full h-full absolute top-0   '>
            {img.map((img, index)=> img.isActive && (
              <img key={index} className='h-[25vw] rounded-3xl absolute object-cover' style={{top: img.top, left: img.left,}}  src={img.img} alt="" />
            ))}
          </div>

    </div>
  )
}

export default WorkLandingPage