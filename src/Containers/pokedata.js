import React,{Component} from 'react';
import Card from './card';
import SearchBox from '../Components/searchbox';
import '../card.css';
import Scroll from '../Components/scroll'


class Pokedata extends Component {
	constructor(){
		super()
		this.state = {
			poke: [],
			searchField: ''
		}
	}

	async componentDidMount(){
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=251')
		const data = await response.json()
		this.setState({ poke: data.results});
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render(){
		const filter = this.state.poke.filter(num => {
			return (num.name.includes(this.state.searchField.toLowerCase()) ? num: null);
		})
		return(
			<div>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<div className='card'>
					{filter.map(num => {
						return(<Card key={num.name} name={num.name} url={num.url}/>);
					})}
				</div>
				</Scroll>
			</div>
		);	
	}
}

export default Pokedata