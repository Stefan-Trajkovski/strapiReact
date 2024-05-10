import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/hooks/useFetch';

export default function ReviewDetails() {
  const {id} =useParams();
  const {data,loading,errror}=useFetch("http://localhost:1337/api/reviews")
  if(loading){
    return <p>Loading...</p>
  }
  return (
    <div>

      {
        data.data.map((x) => (
         (x.id == id) ?  
          <div>
              <h1>{x.attributes.Title}</h1>

            </div>
         
         
         
         
         : ""





        ))
      }
      
      
      
      
      
      
      
      
      
      </div>
  )
}
