import React from 'react'
import Navbar from '../Navbar'
import Loader from '../Loader'
import Button from '../Button'
import Products from '../Work/Products'
import Cards from '../Work/Cards'
import Marquees from '../Marquees'
import HomePage3 from './HomePage3'
import Marquess2 from '../Marquess2'
import HomeProdects from './HomeProdects'
import HomeLandingPage from './HomeLandingPage'
import CustomCursor from '../Cursor'

const Home = () => {
  return (
    <>
    
   
    <Loader name={"Home."}/>

    <CustomCursor/>

    <Navbar/>

    <HomeLandingPage/>

    

    <Marquees/>

    <HomeProdects/>

    <div className=" w-full flex justify-center ">
      <Button title='View more Work'/>
    </div>

    <div className=" my-20">
      <Marquess2/>
      <Marquess2/>
    </div>

    <HomePage3/>

    <Cards/>
    </>
  )
}

export default Home