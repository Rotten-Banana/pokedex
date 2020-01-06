import React,{Component} from 'react'
import './card.css'

class Card extends Component{
	constructor(){
		super()
		this.state = {
			height:'',
			sprite:'',
			abilities:[],
			id:'',
			baseexp:'',
			type: [],
			imgLoading : true
		}
	}

	async componentDidMount(){
		await fetch(this.props.url)
		.then(response => response.json())
		.then(data => {
			this.setState({ height: data.height})
			this.setState({ sprite: data.sprites.front_default})
			this.setState({ abilities: data.abilities})
			this.setState({ id: data.id})
			this.setState({ baseexp: data.base_experience})
			this.setState({ type: data.types})
		});
	}

	render(){
		return(
			<div className='card'>
				<div className='grid'>
					<div className='head'>
						<p>{this.state.id}. <span className='field'>{this.props.name}</span></p>
					</div>
					{this.state.sprite==='' ? 
						(<img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' width='100' height='100' alt='chobi'/>) 
						: (<img src={this.state.sprite}  alt='chobi'/>)
					}
					<div className='attributes'>
						<p><span className='field'>height:</span> {this.state.height}</p>
						<p><span className='field'>abilities:</span> {this.state.abilities.map(num => `${num.ability.name}, `)}</p>
						<p><span className='field'>id:</span> {this.state.id}</p>
						<p><span className='field'>base experience:</span> {this.state.baseexp}</p>
						<p><span className='field'>type:</span> {this.state.type.map(num => `${num.type.name}, `)}</p>
					</div>
				</div>
			</div>
		);
	}
}


export default Card