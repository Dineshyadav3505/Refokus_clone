import React from 'react'

const Footer = () => {
  return (
    <div className=" max-w-screen-xl mx-auto pb-10 mt-10">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((elem , index) => <a key={index}  className='mr-10' href='/'>{elem}</a>)}
 

    </div>
  )
}

export default Footer