import React from 'react'

const CareersHomePage = () => {
  return (
    <div>
    <div className=" w-full border-b-[1px] border-zinc-700 py-10  ">
        <h1 className='text-[10vw] text-right pt-14'>Careers</h1>
    </div>
    <div className="mt-5">
        <button className='button px-4 py-1 capitalize border-[1px] rounded-2xl mr-5 hover:bg-zinc-100 hover:text-zinc-900 '  >all</button>
        <button className='button px-4 py-1 capitalize border-[1px] rounded-2xl mr-5 hover:bg-zinc-100 hover:text-zinc-900 '  >EU</button>
        <button className='button px-4 py-1 capitalize border-[1px] rounded-2xl mr-5 hover:bg-zinc-100 hover:text-zinc-900 '  >US</button>
    </div>
    </div>
  )
}

export default CareersHomePage