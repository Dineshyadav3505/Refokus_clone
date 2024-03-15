import React from 'react';
import LatestNews from './LatestNews';
import LatestSolutions from './LatestSolutions';

const NewsRight = () => {
  return (
    <div className="w-3/4 h-full ">
            <div className="h-14 border-b-[1px] border-zinc-700 flex items-end pl-2 pb-2 gap-1">
              <div className='h-1 w-1 bg-zinc-50 rounded-full'></div>
              <div className='h-1 w-1 bg-zinc-50 rounded-full'></div>
            </div>

            <div className="h-full flex">
              <LatestNews/>

              <LatestSolutions/>

              
            </div>


    </div>
  );
}

export default NewsRight;
