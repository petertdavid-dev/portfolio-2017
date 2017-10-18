import React, { Component } from 'react';
import projectData from './project-data';

class PortfolioCard extends Component {
	render() {

		const logo = require('../images/' + this.props.details.logo);

		return (
		  <div className="PortfolioCard">
		  	<a href={ '/portfolio/' + this.props.index } >
				<img src={logo} alt={ this.props.details.name } />
				<h2 id="work" className="section-break" >{ this.props.details.name }</h2>
		  	</a>
		  </div>
		);
	}
}

class Portfolio extends Component {
	constructor() {
	    super();

		this.state = {
			projects: projectData
		};

	}

	render() {
		return (
		  <div className="Portfolio">
			<h2 id="work" className="section-break" >Featured Work</h2>
			<big>On my <a href="https://www.linkedin.com/in/petertdavid" target="_blank" rel="noopener noreferrer" >Linkedin profile</a> you can get a general idea of the type of tasks I've done and the places I've worked. On this site I'll show you some interesting bits of my work, and talk about those elements a little more in depth.</big>

	            {
	              Object
	                .keys(this.state.projects)
	                .map(key => <PortfolioCard key={key} index={key} details={this.state.projects[key]} />)
	            }

		  </div>
		);
	}
}

export default Portfolio;
