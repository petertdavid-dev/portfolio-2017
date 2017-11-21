// linter ignore linkedin.in.js function
/*global IN*/

import React, { Component } from 'react';


class About extends Component {


	componentWillMount() {
			console.log( IN.init );

		if (typeof IN.init === "function") {
			console.log('yes');
			// IN.parse( document.getElementById("linkedinProfile") );
			IN.init(); 
		}

	}

	render() {
		return (
			<div className="About">
				<div className="row">
					<div className="half">
						<h2>Get in contact</h2>
						<p>I'm a web developer in Portland, OR who generally focuses on the front end. I enjoy working with PHP, JS, HTML, CSS, SASS, Grunt, jQuery, React, Wordpress, Fender Precision Bass, Hammond Organ, Apple Logic, various bicycles, photography, building responsive frameworks that work like Bootstrap, Twitter Bootstrap, Sublime Text, Transmit FTP, Sequel Pro, Bitbucket, GIT, Photoshop, Illustrator, and other things because the web is always changing.</p>
						<big>Feel free to contact me about any opportunities to work with your team.</big>
						<h3>About the design</h3>
						<p>I gathered the colors from a swatch on Adobe Color called Life Aquatic because I had just rewatched the movie and, it's so good and surprisingly heavy.</p>
						<p>The printer was based on an Apple Image Writer II. Not in an exact sense, but more in a general way. I color picked an image of one to get the shading right, but an exact copy would have been a little too much in the skewmorphic relm, and let's face it, that's just a little too iPhone 4 to put on a current portfolio.</p>
						<p>Email: <a href="mailto:petertdavid@gmail.com?subject=Let's work together">petertdavid@gmail.com</a></p>
						<p>Phone: #206-617-9415</p>
						
					</div>
					<div id="linkedinProfile" className="half">
						<script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/petertdavid" data-format="inline" data-related="false"></script>
					</div>				

				</div>
			</div>
		);
	}
}

export default About;
