import React from 'react';
import NewsLeft from './NewsLeft';
import NewsRight from './NewsRight';

const NewsHomePage = () => {
  return (
    
    <div className=" w-full ">
        <div className="h-full max-w-screen-xl mx-auto pt-16 flex gap-10  ">

          <NewsLeft/>

          <NewsRight/>
          
          

        </div>
      </div>
  );
}

export default NewsHomePage;
