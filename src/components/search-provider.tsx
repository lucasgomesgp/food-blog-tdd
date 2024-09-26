'use client'
import { SearchInputContext } from '@/context/search'
import { type ReactNode, useState } from 'react'

export function SearchInputProvider({ children }: { children: ReactNode }) {
  const [searchInput, setSearchInput] = useState('')
  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  )
}
