// linter ignore linkedin.in.js function
/*global IN*/

import React, { Component } from 'react';


class About extends Component {


	componentWillMount() {
			console.log( IN.init );

		if (typeof IN.init === "function") {
			// console.log('yes');
			// IN.parse( document.getElementById("linkedinProfile") );
			IN.init(); 
		}

	}

	render() {
		return (
			<div className="About">
				<h2>Get in contact</h2>
				<big className="clear" >I'm a web developer in Portland, OR who generally focuses on the front end. I enjoy working with PHP, JS, HTML, CSS, SASS, Grunt, jQuery, React, Wordpress, Fender Precision Bass, Hammond Organ, Apple Logic, various bicycles, photography, building responsive frameworks that work like Bootstrap, Twitter Bootstrap, Sublime Text, Transmit FTP, Sequel Pro, Bitbucket, GIT, Photoshop, Illustrator, and other things because the web is always changing.</big>

					<h3>What can I do for your business or development team?</h3>

				<div className="row">
					<div className="half">
						
						<p>Web Development</p>
						<ul>
							<li>HTML / HTML5</li>
							<li>CSS / CSS3</li>
							<li>JS / jQuery</li>
							<li>PHP</li>
							<li>React JS</li>
						</ul>

						<p>SEO & Performance</p>
						<ul>
							<li>Performance Tuning</li>
							<li>Schema</li>
						</ul>
						
					</div>
					<div className="half">

						<p>Wordpress</p>
						<ul>
							<li>Theme Development</li>
							<li>Plugin Development</li>
							<li>Custom Functionality</li>
						</ul>

						<p>Code & Graphic Design</p>
						<ul>
							<li>Animation</li>
							<li>Typographic & Design Sensibility</li>
						</ul>

					</div>
				</div>

				<p>Feel free to contact me about any opportunities to work with your team.</p>
				<p><strong>Email:</strong> <a href="mailto:petertdavid@gmail.com?subject=Let's work together">petertdavid@gmail.com</a></p>

				<p><a href="https://www.linkedin.com/in/petertdavid/">LinkedIn</a></p>

			</div>
		);
	}
}

export default About;
