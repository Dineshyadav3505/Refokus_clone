import React from 'react'
import Jobs from './Jobs'
import Footer from '../Footer'
import Loader from '../Loader'
import Navbar from '../Navbar'
import CustomCursor from '../Cursor'
import CareersHomePage from './CareersHomePage'

const Careers = () => {
  return (
    <div className="re relative" >
    <Loader name={"Careers."}  />
    <Navbar/>
    <CustomCursor/>
    <div className='max-w-screen-xl mx-auto '>
      <CareersHomePage/>
      

      <Jobs/>

      <Footer/>


    </div>
    </div>
  )
}

export default Careers