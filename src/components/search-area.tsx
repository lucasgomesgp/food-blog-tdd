'use client'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { SearchInputContext } from '@/context/search'
import { XCircle } from '@phosphor-icons/react'
import { useContext } from 'react'

export function SearchArea() {
  const { searchInput, setSearchInput } = useContext(SearchInputContext)

  return (
    <div className="flex flex-col items-center justify-center mt-28 gap-[10px] text-center">
      <h1 className="font-black text-5xl text-blue-principal">
        The Food Ninja Blog
      </h1>
      <p className="text-gray-principal text-xl">
        A blog about food, experiences, and recipes.
      </p>
      <div className="relative w-96 h-14 max-w-full px-2 md:px-0">
        <input
          type="text"
          placeholder="Search for articles"
          value={searchInput}
          onChange={event => {
            setSearchInput(event.target.value)
          }}
          className="border rounded-md mt-5 border-gray-icons w-full h-full outline-none pl-7 max-w-full"
        />
        {searchInput ? (
          <button
            className="absolute right-5 top-[50%] translate-y-[30%]"
            type="button"
            onClick={() => {
              setSearchInput('')
            }}
          >
            <XCircle size={25} className="text-red-600" />
          </button>
        ) : (
          <button
            className="absolute right-5 top-[50%] translate-y-[30%] "
            type="button"
            disabled
          >
            <MagnifyingGlass size={25} className="text-blue-principal" />
          </button>
        )}
      </div>
    </div>
  )
}
