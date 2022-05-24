import React from 'react'
import './styles.css'

export const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => (


    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input type="text" 
            onChange={handleSearchKey} 
            placeholder='Search By Category' 
            value={value}/>
            {value && <span onClick={clearSearch}>x</span>}
            <button>Go</button>
        </form>
    </div>
)
