import React,{ Component } from 'react';
import Pokedata from './pokedata';
import '../card.css';
class App extends Component {
	render(){
		return(
			<div>
				<h1 className='header'>POKEDEX</h1>
				<Pokedata/>
			</div>
		)
	}
}
export default App