import React from 'react';
import Button from '../Button';

const Card = ({width, h2 , h1, but, h6 ,hover }) => {
  return (
    <div className={`max-w-screen-xl bg-zinc-800 p-5 rounded-xl hover:${hover} ${width}`}>
        <div className="w-full">
            <div className="flex items-center justify-between">
                <h3 className='text-[.9vw] capitalize ' href="/">{h6}</h3>
                <img className='h-3 text-white ' src="src/Img/arrow-right-line.svg" alt="//" />
            </div>
            {
                h2=== true ? (<h2 className='text-[2vw] leading-none pt-7  '>Insights and behind <br /> the scenes</h2>
                ):(<h2 className='text-[2vw] leading-none pt-7  '>let's get it, <br /> toether.</h2>)
            }
        </div>
        <div className=" mt-16">
            {
                h1 === true ? (<h1 className='text-[6.3vw] font-medium '>Start a Project</h1>): null
            }
            
            { but === true ? (
                <button className={`button px-5 py-1 mt-5 text-base rounded-full border-[1px] capitalize `}>Contact us</button>) : ( <p className=' text-[1vw] mt-56 text-zinc-500' >Explore what drives our team.</p>)  
             }
        </div>
      
    </div>
  );
}

export default Card;
