import { type Dispatch, type SetStateAction, createContext } from 'react'

interface ISearchContext {
  searchInput: string
  setSearchInput: Dispatch<SetStateAction<string>>
}

export const SearchInputContext = createContext({} as ISearchContext)
