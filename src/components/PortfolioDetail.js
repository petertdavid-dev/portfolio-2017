import React, { Component } from 'react';
import projectData from './project-data';

class PortfolioPic extends Component {
	render() {

		const photo = require('../images/' + this.props.src);

		return (
		  <li className="PortfolioPic">
		  	<a href={ this.props.src } >
				<img src={photo} alt={this.props.alt} />
		  	</a>
		  </li>
		);
	}
}

class PortfolioDetail extends Component {

	constructor(props) {
		super(props);

		const thisProject = this.props.match.params.projectId;
		this.state = projectData[thisProject];
	}

	render() {

		const heroDesktop = require('../images/' + this.state.heroDesktop);
		const heroMobile = require('../images/' + this.state.heroMobile);

		let tagMarkup = this.state.tags.map(function(name){
                        return <li key={name} className="PortfolioDetail__tag" >{name}</li>;
                      })

		return (
			<div className="PortfolioDetail">

				<h3>{this.state.name}</h3>
				<ul>
					{ tagMarkup }
				</ul>
				<p><a href={this.state.url} >{this.state.url}</a></p>
				<p><strong>{this.state.tagline}</strong></p>
				<div dangerouslySetInnerHTML={{__html: this.state.desc }} />

				<img src={heroDesktop} alt={this.state.name + ' Desktop'} />
				<img src={heroMobile} alt={this.state.name + ' Mobile'} />

				<ul>
		            {
						Object
						.keys(this.state.images)
						.map(key => <PortfolioPic key={key} index={key} alt={this.state.name + ' ' + key} src={this.state.images[key]} />)
					}
				</ul>

			</div>
		);
	}
}

export default PortfolioDetail;
