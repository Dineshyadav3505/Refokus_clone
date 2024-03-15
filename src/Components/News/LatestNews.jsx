import React from 'react';
import Button from '../Button';

const LatestNews = () => {

    let data = [
        {h4:'Time to Refokus',                            h5:'It’s time for a new breed of agency that combining design, innovation and forward-thinking can help brands create better experiences, not just more of the same.',                                                          h6:'June 16, 2023'},
        {h4:'Redefining value in an AI & No-Code world',  h5:"AI is moving so fast, it's breaking necks. By now, no one should doubt the paradigm shifts it will cause across every industry. Along with it, we should ask ourselves, how do we define value in this new digital era?",   h6:'june 8, 2023'},
        {h4:'Jungle Case Study',                          h5:'We thought our timeless project for Jungle Ventures deserved a case study.',                                                                                                                                                h6:'May 17, 2023'},
    ]

  return (
    <div className="w-2/3 p-5">
        <h6 className='text-[1vw] font-extralight text-zinc-500' >Latest News</h6>

        {data.map((data, index)=>(
            <div className=" pt-7">
                <h4 className='text-[1.1vw] font-semibold'>{data.h4}</h4>
                <h5 className='text-[1vw] font-light pt-2'>{data.h5}</h5>
                <h6 className='text-[1vw] font-light pt-2 text-zinc-400'>{data.h6}</h6>
            </div>
        ))}

        <div className=" pt-10 w-[10vw]">  <Button title='show all'/> </div>

       

                


    </div>
  );
}

export default LatestNews;
