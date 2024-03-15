import React, { useState } from 'react'
import Button from '../Button'
import Product from './Product'
import { motion } from 'framer-motion'


const Products = () => {
    let products =[
        {name:"arqitel",     hover:"bg-[#0B0468]",          url:'',desc:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',                                                        button1:true,   button2:false, },
        {name:"Cula",        hover:"bg-[#41536C]",          url:'',desc:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", button1:true,   button2:false, },
        {name:"Layout Land", hover:"bg-[#1322E7]",          url:'',desc:'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.',                                                                     button1:true,   button2:true, },
        {name:"TTR",         hover:"bg-[#32267E]",          url:'',desc:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",                                       button1:true,   button2:false, },
        {name:"Maniv",       hover:"bg-[#27BD6D]",          url:'',desc:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",                                     button1:true,   button2:true, },
        {name:"YIR 2022",    hover:"bg-[#9159EC]",          url:'',desc:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",                                       button1:true,   button2:false, },
    ]


    let [pos, setpos] = useState(0);

    let mover = (val)=>{
      setpos(val*20);
    }


  return (
    
    <div className=' w-full mt-28 min-h-screen relative '>
        {products.map((elem, index)=> (
            <Product key={index} elem={elem} mover={mover} index={index} />
        ))}
        <div className="absolute top-0 h-full w-full pointer-events-none ">
          <motion.div 
            initial={{y: pos, x:"-50%" } } 
            animate = {{y:pos+`rem`}} 
            className="window absolute w-[32rem]  bg-slate-400 h-[20rem] left-[44%] -translate-x-[50%] overflow-hidden ">

            <div className="w-full h-full bg-slate-900"></div>
            <div className="w-full h-full bg-slate-400"></div>
            <div className="w-full h-full bg-slate-900"></div>
            <div className="w-full h-full bg-slate-400"></div>
            <div className="w-full h-full bg-slate-900"></div>
            <div className="w-full h-full bg-slate-400"></div>

          </motion.div>

        </div>


    </div>
  )
}
export default Products