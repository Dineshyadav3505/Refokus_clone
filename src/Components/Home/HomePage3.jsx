import React from 'react'
import ForwardLink from './ForwardLink'

const HomePage3 = () => {

    let data=[
        {name:'Creative Strategy'},
        {name:'Branding & Art Direction'},
        {name:'Web Design'},
        {name:'Webflow Development'},
        {name:'2D/3D Animations'},
        {name:'Creative Development (WebGL, GSAP)'},
        {name:'AI Strategy & Integration'},
    ]

  return (
    <div className="h-screen my-36  ">
    <div className="max-w-screen-xl h-full mx-auto flex  ">
      <div className=" h-full w-1/2 p-10 ">
        <h1 className='text-[6vw] font-medium leading-none'>Forward <br />–Thinking</h1>

        <h5 className='m-20 text-[1.3vw] '>With a world-class team of over 25 experts <br /> working remotely across different time zones, <br /> Refokus built a human-focused approach to all <br /> aspects of the agency.</h5>
        
        {data.map((data, index)=>(
            <ForwardLink key={index} data={data} />
        ))}

      </div>

      <div className=" h-full w-1/2  p-10   ">
        <video className='h-full rounded-lg' loop muted autoPlay src="https://cdn.refokus.com/website/people-short.webm"></video>
      </div>

    </div>

  </div>
  )
}

export default HomePage3