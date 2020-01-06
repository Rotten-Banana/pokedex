import React from 'react';
import './card.css';
const SearchBox = ({searchChange}) => {
	return(
		<div className='search'>
			<input
			 type='search'
			 placeholder='Search Pokemon(Name)'
			 onChange={searchChange}
			 />
		</div>
	);
}

export default SearchBox;