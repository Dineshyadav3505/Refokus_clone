import React from 'react'

const ForwardLink = ({data}) => {
  return (
    <div className='h-[2.5vw] flex gap-4 items-center  pl-10'>
        <img className='h-[1.3vw]' src="src/Img/corner-down-g-right-line.svg" alt="" />
        <h5 className='text-[1.2vw] font-light'>{data.name}</h5>
    </div>
  )
}

export default ForwardLink