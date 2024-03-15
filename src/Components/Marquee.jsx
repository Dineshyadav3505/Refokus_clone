import React from 'react'

const Marquee = ({imagesurls}) => {
  return (
    <div  className="flex w-full  py-10 gap-20 whitespace-nowrap overflow-hidden">
        {imagesurls.map(((url,index) => <img src={url} key={index} className='flex-srink-0 h-12'  /> ))}
        {imagesurls.map(((url, index) => <img src={url} key={index}  className='flex-srink-0 h-12'  /> ))}
    </div>
  )
}

export default Marquee