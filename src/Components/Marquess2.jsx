import React from 'react'

const Marquess2 = () => {

    const data =[
        {img: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg' , num:'52'},
        {img: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg' , num:'2'},
        {img: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg' , num:'15'},
        {img: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg' , num:'52'},
        {img: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg' , num:'2'},
        {img: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg' , num:'15'},
      ]


  return (
    <div className=" flex  ">
          {data.map((elem, index)=>(
             <div key={index} className="ox1 h-[5vw] w-[16.6%] border-[1px] border-l-0 border-zinc-700 flex items-center justify-around">
             <img className='h-[30%]' src={elem.img} alt="//" />
             <p className='text-[2vw] '>{elem.num}</p>
           </div>
          ))}         
    </div>
  )
}

export default Marquess2