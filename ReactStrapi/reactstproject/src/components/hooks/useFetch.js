import { useEffect,useState } from "react";


const useFetch = (url)=>{
const [data,setData]=new useState([]);
const [error,setError]=new useState(null);
const [loading,setLoading]=new useState(true);

useEffect(()=>{
    const fetchData=async ()=>{
       

        try{
            const response = await fetch(url);
            const json= await response.json();
            setData(json);

                setLoading(false);   
            
            
        }
        catch(e){
            console.log(e);
        }

    }

    fetchData();
},[url])

return {loading,error,data}
}
export default useFetch;