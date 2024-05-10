import React, { useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import useFetch from './hooks/useFetch';
import './header.css'


export default function SiteHeader() {





  return (
    <div className="site-header">
      <div className='h-1/12 border-2 border-indigo-400'>
    <p className='p-3 text-xl  text-center bg-tommyBlue text-white font-medium'>Бесплатна испорака за потрошени 2000ден</p>
      </div>

      <div className=''>
        <div className='  p-3 flex  justify-center'>
          <div>
            <img src="./ryobi.png"></img>
          </div>
        </div>

          
     
        <div className=' w-full   '>
          <ul className='w-8/12 text-center block m-auto color-tommyBlue'>
            <li><a href="#">New Arrivals</a></li>
            <li ><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Shoes & Accessories</a></li>
            <li><a href="#">Underwear</a></li>
            <li><a href="#">Jeans</a></li>
            <li><a href="#">Pre-owned</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>
      </div>



    </div>
  )

}