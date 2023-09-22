import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/Firebase'; 
import { addDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';

const Review = ({id}) => {
  const [rating,setRating]= useState(0);
  const [loading,setLoading]=useState(false);
  const[form,setForm]=useState("");

  const sendReview = async() =>{
    setLoading(true);
    try{
      await addDoc(reviewsRef,{
        movieid: id,
        name: "bikash",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime()
      })
      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 3000
    })
    }catch(error){
      swal({
        title: error.message ,
        icon: "error",
        buttons: false,
        timer: 3000
    })
    }
    setLoading(false);
  }

  return (
    <div className='mt-4 border-t-2 border-gray-700 w-full'>
    <ReactStars
          size={30}
          half={true}
          value={rating}
          onChange={(rate)=> setRating(rate)}
        />
      <input 
      value={form}
      onChange={(e)=> setForm(e.target.value)}
        placeholder='Shae your thoughts here...'
        className='w-full p-2 outline-none bg-gray-800'
      />
      <button onClick={sendReview} className='w-full p-2 flex justify-center bg-green-600'>{loading ? <TailSpin height={20} color='white'/> : "Share" }</button>
    </div>
  )
}

export default Review