import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import ReactTransitionGroup from 'react-addons-transition-group';
import me from '../images/me.png';
import Lorem from './Lorem';
// import { TweenMax } from 'gsap';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Home extends Component {


  render() {
    return (

      <div className="Home page" >
        <ReactCSSTransitionGroup 
          component="div" 
          className="lorem__wrap" 
          transitionName="lorem-anim"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
          <Lorem />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup 
          component="div" 
          className="me__wrap" 
          transitionName="me-anim"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
          <img src={me} alt="Peter David" />
        </ReactCSSTransitionGroup>              


      </div>


    );
  }
}

export default Home;
