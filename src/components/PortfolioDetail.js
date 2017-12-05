import React, { Component } from 'react';
import projectData from './project-data';

class PortfolioPic extends Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	active : false
		}

		this.photoPop = this.photoPop.bind(this);
		this.photoClose = this.photoClose.bind(this);
	}

	photoPop( e ) {

		if ( e !== null ){
			e.preventDefault();		
		}

		// const thisPop = this.refs.thisPop;
		const thisPopInner = this.refs.thisPopInner;
		const thisTrigger = this.refs.thisTrigger;

		thisPopInner.innerHTML = ' <img src="' + thisTrigger.getAttribute("href") + '" >';

		if ( this.state.active ) {
			this.setState({active: false}); 
			thisPopInner.innerHTML = '';
		} else {
			this.setState({active: true}); 
		}

	}

	photoClose( e ) {
		if ( e !== null ){
			e.preventDefault();		
		}

		const thisPopInner = this.refs.thisPopInner;
		thisPopInner.innerHTML = '';

		this.setState({active: false}); 
	}

	render() {

		const photo = require('../images/' + this.props.src);
		const thumb = require('../images/' + this.props.thumb);
		const isActive = ( this.state.active ) ? 'active' : '';

		return (
		  <li className="PortfolioPic"  >
		  	<a className="PortfolioPic__link" ref="thisTrigger" onClick={ this.photoPop } href={ photo } >
				<img src={ thumb } alt={ this.props.alt } />
		  	</a>
		  	<div className={ 'PortfolioPic__pop ' + isActive } ref="thisPop" >
			  	<a className="PortfolioPic__close" onClick={ this.photoClose } href={ photo } >Close</a>
			  	<div ref="thisPopInner"></div>
		  	</div>
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

		const tagMarkup = this.state.tags.map(function(name){
                        return <li key={name} className="PortfolioDetail__tag" >{name}</li>;
                      });

		return (
			<div className="PortfolioDetail">
				<a href="/portfolio"  className="PortfolioDetail__back" >⇦ Back to Portfolio</a>

				<div className="row">

					<div className="one-third">
						<div className="PortfolioDetail__herowrap">
							<img className="PortfolioDetail__desktopimg" src={heroDesktop} alt={this.state.name + ' Desktop'} />
							<img className="PortfolioDetail__mobileimg" src={heroMobile} alt={this.state.name + ' Mobile'} />
						</div>
					</div>

					<div className="two-thirds">
						<h2>{this.state.name}</h2>
						<ul className="PortfolioDetail__tags">
							{ tagMarkup }
						</ul>
						<p><a href={this.state.url} >{this.state.url}</a></p>
						<p><strong>{this.state.tagline}</strong></p>
						<div dangerouslySetInnerHTML={{__html: this.state.desc }} />
					</div>

				</div>


				<ul className="PortfolioDetail__gallery">
		            {
						Object
						.keys(this.state.images)
						.map(key => <PortfolioPic key={key} index={key} alt={this.state.name + ' ' + key} src={this.state.images[key][0]} thumb={this.state.images[key][1]} />)
					}
				</ul>

			</div>
		);
	}
}

export default PortfolioDetail;
