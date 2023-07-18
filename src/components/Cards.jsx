import React, { useState } from 'react'
import ReactStars from 'react-stars';
const Cards = () => {
    const[data,setData]=useState([
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 5,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 4,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 3,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 2,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 1,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 3.5,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 1.5,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
        {
            name: "Avenger Endgame",
            year: "2018",
            rating: 5,
            img: "https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90"
        },
    ]);
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2 '>
        {data.map((e,i) => {
            return(
                <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointe  mt-6 transition-all duration-500'>
                <img className="h-72" src={e.img} alt="" />
                <h1><span className='text-gray-500'>Name:</span> {e.name}</h1>
                <h1 className='flex items-center'><span className='text-gray-500 mr-1'>Rating:</span> 
                <ReactStars size={20} half={true} value={e.rating} edit={false} />
                </h1>
                <h1><span className='text-gray-500'>Year:</span> {e.year}</h1>
            </div>
            )})}
            
        </div>
    )
}

export default Cards