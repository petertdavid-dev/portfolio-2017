import React, { Component } from 'react';
// import logo from '../logo.svg';
import Lorem from './Lorem';

class Home extends Component {
  render() {
    return (
      <div className="Home">
		<h2>Welcome</h2>
      	<Lorem></Lorem>
      </div>
    );
  }
}

export default Home;
