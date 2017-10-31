import React, { Component } from 'react';
import projectData from './project-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PortfolioCard extends Component {
	render() {

		const logo = require('../images/' + this.props.details.logo);

		return (
		  	<a className="PortfolioCard" style={{backgroundColor: this.props.details.color}} href={ '/portfolio/' + this.props.index } >
				<img src={logo} alt={ this.props.details.name } />
		  	</a>
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
	        <ReactCSSTransitionGroup 
	          component="div" 
	          className="PortfolioCard__wrapper" 
	          transitionName="card-anim"
	          transitionAppear={true}
	          transitionAppearTimeout={1000}
	          transitionEnter={false}
	          transitionLeave={false} >
	            {
	              Object
	                .keys(this.state.projects)
	                .map(key => <PortfolioCard key={key} index={key} details={this.state.projects[key]} />)
	            }
			</ReactCSSTransitionGroup>
		  </div>
		);
	}
}

export default Portfolio;
