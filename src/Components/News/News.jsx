import React from 'react'
import Navbar from '../Navbar'
import CustomCursor from '../Cursor'
import NewsLeft from './NewsLeft'
import NewsRight from './NewsRight'
import NewsHomePage from './NewsHomePage'

const News = () => {
  return (
    <>
      <Navbar/>
      <CustomCursor/>
      <NewsHomePage/>
      
    </>
  )
}

export default News