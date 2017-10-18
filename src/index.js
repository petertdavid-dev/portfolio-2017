import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './App.css';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioDetail from './components/PortfolioDetail';
import About from './components/About';
import NotFound from './components/NotFound';

const Root = () => {
  return (
	<Router>
		<div>
			<header>
				<h1>Peter David: Web developer</h1> 
				<Link to="/">Home</Link> 
				<Link to="/portfolio">Portfolio</Link> 
				<Link to="/about">About</Link> 
			</header>

			<main>
			<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/portfolio/" component={Portfolio} />
					<Route exact path="/portfolio/:projectId" component={PortfolioDetail} />
					<Route exact path="/about" component={About} />
					<Route component={NotFound}/>
			</Switch>
			</main>
		</div>
	</Router>
  )
}

render(<Root/>, document.querySelector('#root'));
