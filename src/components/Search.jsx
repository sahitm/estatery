import React from 'react'

function Search() {
  return (
    <div className='flex justify-evenly py-5 px-12 mt-16'>
      <h1 className='font-bold text-5xl'>Search Properties to rent</h1>
      <input className=' sm:m-6 md:m-0 border-2 p-1' placeholder='search with bar'></input>
    </div>
  )
}

export default Search