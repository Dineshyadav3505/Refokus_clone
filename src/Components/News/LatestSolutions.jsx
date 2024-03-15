import React from 'react';

const LatestSolutions = () => {

    let data=[
        {img:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63b367d26549c23dcc919499_webflow%20tools.png",       h3:'Refokus Tools',        h4:'The best tools and integrations to power-up Webflow.'},
        {img:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/63b367f07459c61bcb8b6c04_styleguide.png",            h3:'Webflow Styleguide',  h4:'How we name and structure classes in Webflow.'},
        {img:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64514eab4f6fc343ec1cb531_GSAP-text-animator.jpg",    h3:'GSAP Text Animator' ,  h4:'Create and test GSAP text animations visually.'},
    ]

  return (
    
    <div className="w-1/3 p-5">
         <h6 className='text-[1vw] font-extralight text-zinc-500' >Latest Solutions</h6>

         {data.map((data, index)=>(
            <div key={index} className="mt-10 flex gap-3">
                <img className='h-12' src={data.img} alt="/" />
                <div className="">
                    <h3 className='text-[1.1vw]'>{data.h3}</h3>
                    <h4 className='text-[1vw] text-zinc-500'>{data.h4}</h4>
                </div>
            </div>
         ))}

 
    </div>
  );
}

export default LatestSolutions;
