
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

export default function SearchBar(){
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();
    navigate(`search/${searchTerm}`);
  }

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="false" className="p-2 text-gray-400
      focus-within:text-gray-600 mb-8">
        
        <div className="flex flex-row justify-start items-center relative">
          <FiSearch className='w-5 h-5 ml-4 absolute left-1'/>
          <input 
            name='searchTerm'
            autoComplete='false'
            placeholder='Search all songs'
            type='search'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            className='flex-1 bg-transparent rounded-full outline-none
            placeholder-slate-500 text-base text-white p-4 pl-14 hover:border hover:border-solid border-slate-500'
          />
        </div>
      </form>
    </>
  )
}