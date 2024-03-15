import React from 'react'
import HomeProduct from './HomeProduct'

const HomeProdects = () => {



  let data = [
    {icon:'https://assets-global.website-files.com/64997ddd4e68f4e3552abfb1/65034ca122636d3914f9c870_arqitel-logo.svg',            img1:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp',                               img2:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp' ,                                img3:'https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm',         h4:'Concept, Design, 3D, Webflow+WebGL Development',                         h3:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',                                     background: 'bg-[#5255ED]' },
    {icon:'https://assets-global.website-files.com/651309ab2c6e146a99437841/651316fb2aac845871dd407e_logo.svg',                    img1:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-800.webp",        img2:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp' ,         img3:"https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",                    h4:'Concept, Design, Webflow Development',                                   h3:'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.',                                                  background: 'bg-zinc-100' },
    {icon:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg',          img1:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg',                                img2:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg' ,                                 img3:'https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm',           h4:'Concept, Design, 3D, Webflow+WebGL Development, AI Integrations',        h3:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",                    background: 'bg-zinc-100' },
    {icon:'src/Img/maniy.png  ',                                                                                                   img1:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png',                         img2:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png' ,                          img3:'https://cdn.refokus.com/website/Maniv-Compressed.mp4',                                 h4:'Branding, Design, Webflow+GSAP Development',                             h3:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",                  background: 'bg-zinc-100' },
    {icon:'https://assets-global.website-files.com/6462b9f508a3cf04f201948d/6463bbf2935ab4f2d9b9c42c_Silvr_logo_black.svg',        img1:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg',                                img2:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg' ,                                 img3:'https://cdn.refokus.com/website/2022/videos/Silvr.webm',                               h4:'Design, Webflow Development',                                            h3:"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",                                                             background: 'bg-zinc-100' },
  ]

  return (
    <div className='w-full my-16'>
        {data.map((data, index)=>(
            <HomeProduct key={index} data={data} sty />
        ))}
        

    </div>
  )
}

export default HomeProdects