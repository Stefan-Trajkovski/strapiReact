import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../components/hooks/useFetch';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './homepage.css';

export default function Homepage() {

  const { data, loading, error } = useFetch("http://localhost:1337/api/products?populate=*");
  const [positions, setPositions] = useState({});

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  function right(id, currentImageIndex, length) {
    setPositions((prev) => {
      console.log(prev);
      if (currentImageIndex == length - 1) {
        return {
          ...prev, [id]: { "length": length, "position": 0 }
        }
      }
      else {
        return {
          ...prev, [id]: { "length": length, "position": currentImageIndex + 1 }
        }
      }
    })
  }

  function left(id, currentImageIndex, length) {

    setPositions((prev) => {
      console.log(prev);
      if (currentImageIndex == 0) {
        return {
          ...prev, [id]: { "length": length, "position": length - 1 }
        }
      }
      else {
        return {
          ...prev, [id]: { "length": length, "position": currentImageIndex - 1 }
        }
      }
    })


  }

  return (
    <div className="m-auto h-auto mt-20 w-12/12  md:w-11/12 max-w-screen-2xl    flex flex-row  ">

      <div className=' w-3/12 hidden md:block'>
        <p className='p-3'>53 items</p>
        <hr />
        <div>

          <button className='p-3 '>Category</button>

        </div>
        <hr />
        <div>  <button className='p-3 '>Style</button></div>
        <hr />
        <div>  <button className='p-3 '>Color</button></div>
        <hr />
        <div>  <button className='p-3 '>Price</button></div>
        <hr />
      </div>


      <div className='w-12/12  md:w-9/12 grid  grid-cols-2   md:grid-cols-3  gap-1  md:gap-3  md:p-6 ' >

        {data.data.map((x) => {
          // if (x.id >= 4) {
          //   return null;
          // }

          const currentImageIndex = positions[x.id]?.position ?? 0; // Default to 0 if `undefined` or not present


          return (
            <div key={x.id} className=" w-fit      ">
            {  console.log(x)}
              <div className='  kaka  md:h-4/5 w-auto  relative '>
                <div className='container  hidden '>


                  <div className='  absolute top-1/2 text-3xl text-violet-900 cursor-pointer' >
                    <span className=' text-4xl text-slate-50 ' onClick={() => { left(x.id, currentImageIndex, x.attributes.picture.data.length) }}><IoIosArrowDropleftCircle />
                    </span> </div>



                    <Link to={`/details/${x.id}`} className="text-teal-700">
                  <div className='absolute hey text-xs w-3/5 p-2 text-center top-2/4 left-2/4 rounded slate bg-milkyWhite'>
                   
                      Посети
                    
                  </div>
                  </Link>

                  <div className=' absolute  inset-y-2/4 right-0 text-3xl text-violet-900 cursor-pointer'  >
                    <span className=' text-4xl text-slate-50 ' onClick={() => { right(x.id, currentImageIndex, x.attributes.picture.data.length) }}><IoIosArrowDroprightCircle /> </span>
                  </div>






                </div>
                <img className='max-h-full min-h-full min-w-full' src={"http://localhost:1337" + x.attributes.picture.data[currentImageIndex].attributes.url}></img>
              </div>






              <div className=" p-2">

                <p className="ker text-lg font-pek text-blue-400">{x.attributes.name}</p>


                <p className="mt-3 ker">

                 
                 Цена: {x.attributes.price}  ден
                </p>
              
              </div>
            </div>
          )

        })}

      </div>
    </div>
  );
}
