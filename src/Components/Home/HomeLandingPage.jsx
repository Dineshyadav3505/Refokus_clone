import React from 'react'

const HomeLandingPage = () => {
  return (
    <div className='w-full h-screen relative  '>
      <spline-viewer url="https://prod.spline.design/uJKBqJn78FNgcX0u/scene.splinecode"></spline-viewer>
      
        <div className='max-w-screen-xl mx-auto text-[5vw] h-screen absolute top-0'>
          <div className="h-1/3 flex justify-end items-end pr-16 ">
            <img className=' select-none' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg" alt="" />
          </div>
          <div className="h-1/2 flex gap-40 items-end ">
            <h1 className='text-[13vw] leading-none font-bold select-none '>Unique Websites</h1>
            <h4 className='text-[1.3vw] font-thin text-right select-none '>Refokus is a new breed of digital agency that combines design, innovation, and forward-thinking to help brands create better experiences, not just more of the same old same old.</h4>

          </div>
          
        </div>
    </div>
  )
}

export default HomeLandingPage