import React from 'react';
import Card from './Card';
import Footer from '../Footer';

const Cards = () => {
    
  return (
    <div className='max-w-screen-xl mx-auto w-full mt-20 '>
        <div className="  flex gap-1 ">
            <Card width={"basis-1/3"} h2={true}   h6={"Up next: News"}  h1={false} w={"basis-26"}   but={false} />
            <Card width={"basis-2/3"} h2={false}  h6={"Get in Touch"}  h1={true}  w={"basis-24"}   but={true}   hover={"bg-[#7442FF]"}/>

            

        </div>
        <Footer/>

        
      
    </div>
  );
}

export default Cards;
