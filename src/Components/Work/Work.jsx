import React, { useState } from 'react'
import Products from './Products'
import Marquees from '../Marquees'
import Cards from './Cards'

import Navbar from '../Navbar';
import Loader from '../Loader';
import Marquess2 from '../Marquess2';
import WorkLandingPage from './WorkLandingPage';
import CustomCursor from '../Cursor';




const Work = () => {


  return (
    <>
    <Loader name={"Work."}/>
    <Navbar />
    <CustomCursor/>
      <div className='w-full '>
        <WorkLandingPage/>


        
        <Marquess2/>


        <Products/>

        <Marquees/>

        <Cards/>


        <p>---</p>




        

        

      </div>
    </>
  )
}

export default Work