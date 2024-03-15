import React from 'react';

const NewsLeft = () => {
  return (
    <div className="w-1/4 h-full ">
            <div className="h-14 border-b-[1px] border-zinc-700 flex items-end pl-2 pb-2">
              <div className='h-1 w-1 bg-zinc-50 rounded-full'></div>
            </div>

            <div className="py-5 flex flex-col h-full gap-28 ">
              <div className="h-3/4 bg-cyan-200 relative rounded-lg overflow-hidden">
                <img className='' src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2slMjBncm91bmQlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D" alt="//"/> 
                
              </div>


              <div className=" flex gap-2 ">
                <div className="h-[2vw] w-[2vw] bg-zinc-600 rounded-full flex justify-center items-center"><i class="ri-linkedin-fill"></i></div>
                <div className="h-[2vw] w-[2vw] bg-zinc-600 rounded-full flex justify-center items-center"><i class="ri-twitter-x-line"></i></div>
                <div className="h-[2vw] w-[2vw] bg-zinc-600 rounded-full flex justify-center items-center"><i class="ri-instagram-line"></i></div>
              </div>
            </div>

    </div>
  );
}

export default NewsLeft;
