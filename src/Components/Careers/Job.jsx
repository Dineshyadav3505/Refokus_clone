import React from 'react'
import Button from '../Button'

const Job = ({data}) => {
  return (
    <div className='flex gap-20 items-center p-10 border-b-[1px] border-zinc-700'>
        <h1 className='c capitalize text-[3vw] w-[20vw]'>{data.name}</h1>
        <div className=" w-[50vw]">
            <h3 className=''>{data.postion}</h3>
            <div className="flex gap-5">
                <h6 >{data.way}</h6>
                <a className='c capitalize' href=''>{data.time}</a>
            </div>
        </div>
        <Button title='Open'/>
    </div>
  )
}

export default Job