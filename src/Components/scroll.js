import React from 'react';
import '../card.css';
const Scroll = (props) =>{
	return (
		<div style={{overflowY: 'scroll' , height: '800px', border:'2px solid #bf5145'}} >
			{props.children}
		</div>
	);
};

export default Scroll;