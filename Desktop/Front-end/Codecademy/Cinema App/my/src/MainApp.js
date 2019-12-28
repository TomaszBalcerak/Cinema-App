import React from 'react';
import './App.css';
import starwars from './Images/starwars.jpg'
import jumanji from './Images/jumanji.jpg'
import krainalodu from './Images/kraina-lodu.jpg'

class MovieTab extends React.Component{
	constructor(props){
	super(props);
}
	render(){
	return (
		<div className="movieContainer">
  			<img src={this.props.image} alt={this.props.alt}/>
  			<p className="MovieTitle">{this.props.title}</p>
  			<button onClick={this.props.handleClick} className="MovieButton">Rezerwuj</button>
  		</div>
 )
}};

class MainApp extends React.Component{
	constructor(props){
	super(props);
	this.state = {showMe:true};
	this.handleClick=this.handleClick.bind(this);
	}

	handleClick = () =>{
		this.setState({showMe:false});
		}

	render(){
		if(this.state.showMe){
  return(
    <div>
      <div className="main">
  		<MovieTab handleClick = {this.handleClick} image={starwars} alt="Star Wars Poster" title="Star Wars: The Rise of Skywalker"/>
  		<MovieTab handleClick = {this.handleClick} image={jumanji} alt="Jumanji Poster" title="Jumanji"/>
  		<MovieTab handleClick = {this.handleClick} image={krainalodu} alt="Frozen Poster" title="Frozen"/>
      </div>
    </div>
  );
  } else {
	return(
	<div className="CinemaRoom">
		<div className="screen"><p>Ekran</p></div>
		<div className="seats">1</div>
		<div className="seats">2</div>
		<div className="seats">3</div>
		<div className="seats">4</div>
		<div className="seats">5</div>
		<div className="seats">6</div>
		<div className="seats">7</div>
		<div className="seats">8</div>
		<div className="seats">9</div>
		<div className="seats">10</div>
		<div className="seats">11</div>
		<div className="seats">12</div>
		<div className="seats">13</div>
		<div className="seats">14</div>
		<div className="seats">15</div>
		<div className="seats">16</div>
		<div className="seats">17</div>
		<div className="seats">18</div>
		<div className="seats">19</div>
		<div className="seats">20</div>
		<div className="seats">21</div>
		<div className="seats">22</div>
		<div className="seats">23</div>
		<div className="seats">24</div>
		<div className="seats">25</div>
		<div className="seats">26</div>
		<div className="seats">27</div>
		<div className="seats">28</div>
		<div className="seats">29</div>
		<div className="seats">30</div>
		<div className="seats">31</div>
		<div className="seats">32</div>
		<div className="seats">33</div>
		<div className="seats">34</div>
		<div className="seats">35</div>
		<div className="seats">36</div>
		<div className="seats">37</div>
		<div className="seats">38</div>
		<div className="seats">39</div>
		<div className="seats">40</div>
		<div className="seats">41</div>
		<div className="seats">42</div>
		<div className="seats">43</div>
		<div className="seats">44</div>
		<div className="seats">45</div>
	</div>
	)
}}};

export default MainApp;