import React from 'react'
import { Header } from '../../components/Home/Header'
import { SearchBar } from '../../components/Home/SearchBar'

const Home = () => {
  return (
    <div>
      {/*Page Header*/}
      <Header/>

      {/*Search bar*/}
      <SearchBar/>

      {/*Blog list & Empty list*/}
    </div>
  )
}

export default Home