import React from 'react'
import ReactStars from 'react-stars'

const Detail = () => {
  return (
    <div className='p-4 mt-4 flex w-full justify-center'>
        <img src="https://rukminim2.flixcart.com/image/850/1000/k2gh30w0/poster/h/n/8/medium-avengers-endgame-hd-poster-wall-decor-size-12x18-inch-original-imafht6wyfzfjzcb.jpeg?q=90" alt="" className="h-96" />
        <div className="ml-4 w-1/2">
            <h1 className='text-3xl font-bold text-gray-400'>Star Wars <span className='text-xl'>(2014)</span></h1>
            <ReactStars size={20} half={true} value={5} edit={false} />
            <p className='mt-3'>Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side.
            Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side.
            Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side.</p>
        </div>
    </div>
  )
}

export default Detail