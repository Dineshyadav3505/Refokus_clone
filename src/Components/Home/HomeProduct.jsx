import React from 'react'
import Button from '../Button'


const HomeProduct = ({data}) => {

  
  return (
    <div className={`max-w-screen-xl min-h-screen mx-auto bg-zinc-500  flex rounded-xl mt-10`} style={{ background : data.background}}  >
        <div className=" h-full w-1/2 p-10  ">
            <img className=' w-36 py-5' src={data.icon} alt="" />
            <div className="flex justify-end">
                <img className=' h-[19vw] rounded-xl ml-56 mt-5' src={data.img1} alt="//" />
            </div>
            <img className='h-full rounded-xl mt-5' src={data.img2} alt="//" />

        </div>
        <div className=" h-full w-1/2 p-10 ">

            <video className='h-full rounded-xl' loop muted autoPlay src={data.img3}></video>
            <h4 className='text-[1vw] font-thin text-zinc-300 mt-10 ' >{data.h4}</h4>
            <h3 className='text-[1.35vw] mt-2'>{data.h3}</h3>
            <div className=" w-[13vw] mt-10 ">
                <Button title='Visit Website' />
            </div>
        </div>

    </div>
  )
}

export default HomeProduct