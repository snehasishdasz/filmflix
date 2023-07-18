import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';


const Header = () => {
  return (
    <div className='text-3xl flex justify-between items-center font-bold p-3 border-b-2 '>
        <span><span className='text-red-500'>F</span>ilm<span className='text-red-500'>F</span>lix</span>
        <h1 className='text-lg text-white '><AddBoxIcon className='mr-2' color='inherit' />Add New</h1>
    </div>
  )
}

export default Header