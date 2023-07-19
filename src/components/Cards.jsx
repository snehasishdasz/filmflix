import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Audio,Dna,Grid } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import { getDoc } from 'firebase/firestore';
import { moviesRef } from '../firebase/Firebase';


const Cards = () => {
    const[data,setData]=useState([]);
    const [loading, setLoading] = useState(false);

     useEffect(() =>{
        async function getData(){
            setLoading(true);
            const _data = await getDocs(moviesRef);
            _data.forEach((doc)=>{
                setData((prv)=>[...prv,doc.data()])
            })
            setLoading(false);
        }
        getData();
    },[])

    return (
        <div className='flex flex-wrap justify-between p-3 mt-2 '>
        {loading ?<div className="w-full flex justify-center items-center h-96 "><Grid color="#8B5CF6"  height={80} width="150"  /></div> :
        
        data.map((e,i) => {
            return(
                <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointe  mt-6 transition-all duration-500'>
                <img className="h-72" src={e.image} alt="" />
                <h1><span className='text-gray-500'>Name:</span> {e.title}</h1>
                <h1 className='flex items-center'><span className='text-gray-500 mr-1'>Rating:</span> 
                <ReactStars size={20} half={true} value={5} edit={false} />
                </h1>
                <h1><span className='text-gray-500'>Year:</span> {e.year}</h1>
            </div>
            )})
        }
            
        </div>
    )
}

export default Cards