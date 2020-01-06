import React,{Component} from 'react';
import Card from './card';
import SearchBox from './searchbox';
import './card.css';


class Pokedata extends Component {
	constructor(){
		super()
		this.state = {
			poke: [],
			searchField: ''
		}
	}

	async componentDidMount(){
		await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
		.then(response => response.json())
		.then(data => this.setState({ poke: data.results}));
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
				<div className='card'>
					{filter.map(num => {
						return(<Card key={num.name} name={num.name} url={num.url}/>);
					})}
				</div>
			</div>
		);	
	}
}

export default Pokedata