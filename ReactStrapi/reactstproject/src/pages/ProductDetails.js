import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/hooks/useFetch';
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

export default function ProductDetails() {
  const {id} =useParams();
  const {data,loading,error}=useFetch("http://localhost:1337/api/products?populate=*")
  console.log(data)
  if(loading){
    return <p>Loading...</p>
  }
  const element=data.data.find((x)=>x.id=id);
  console.log(element)

  return (

    <div className='border-2 border-indigo-400 w-11/12 m-auto flex max-w-screen-2xl'>

      
      
 

            <div className='border-2 border-red-400 w-8/12 h-full grid grid-cols-2 gap-3 '> 
              <h1>{element.id}</h1>
            <div className=' '>  <img className='' src={"http://localhost:1337" + element.attributes.picture.data[0].attributes.url} alt="slika"></img></div>
            <div className=''>  <img src={"http://localhost:1337" + element.attributes.picture.data[1].attributes.url} alt="slika"></img></div>
            <div>  <img src={"http://localhost:1337" + element.attributes.picture.data[2].attributes.url} alt="slika"></img></div>
            <div>  <img src={"http://localhost:1337" + element.attributes.picture.data[3].attributes.url} alt="slika"></img></div>


            </div>

            <div className='border-4 border-indigo-400 w-4/12 p-3  pt-0'>
            <div>
              <div className=''> Ryobi</div>
             
              <div className='text-xl '>
                {element.attributes.name} 
                </div>

                <div className='flex p-1 pl-0'>
                <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                </div>
                <div>
                  {element.attributes.price} Ден.
                </div>
            </div>
          
            <div>
              <div>Color {element.attributes.Color} </div>
              <div className='flex '>
                < FaRegCircle  style={{  backgroundColor:'red' }}/>
                <FaRegCircle /> 
                </div>
            </div>
            </div>



{
  data.data.map((x)=>{
    console.log(x)
  })
}





         
         
         
        
      
      
      
     
      
      
      
      
      
      
      </div>
  )
}
