// linter ignore linkedin.in.js function
// global IN

import React, { Component } from 'react';

class About extends Component {

	render() {
		return (
			<div className="About">
				<h2>Get in contact</h2>
				<p><big className="clear" >I'm a web developer in Portland, OR who generally focuses on the front end. I enjoy working with PHP, JS, HTML, CSS, SASS, Grunt, jQuery, React, Wordpress, Fender Precision Bass, Hammond Organ, Apple Logic, various bicycles, photography, building responsive frameworks that work like Bootstrap, Twitter Bootstrap, Sublime Text, Transmit FTP, Sequel Pro, Bitbucket, Git, Photoshop, Illustrator, and other things because the web is always changing.</big></p>

				<p><big>What can I do for your business or development team?</big></p>

				<div className="row">
					<div className="half">
						
						<h3>Web Development</h3>
						<ul>
							<li>HTML / HTML5</li>
							<li>CSS / CSS3</li>
							<li>JS / jQuery</li>
							<li>PHP</li>
							<li>React JS</li>
						</ul>

						<h3>SEO & Performance</h3>
						<ul>
							<li>Performance Tuning</li>
							<li>Schema</li>
							<li>Google Search Strategies</li>
							<li>Marketing Campaign Development</li>
						</ul>

						<h3>Tools & Practices</h3>
						<ul>
							<li>Front end build systems</li>
							<li>Responsive / Mobile First Design</li>
							<li>Atomic Design Practices</li>
							<li>Git</li>
						</ul>
						
					</div>
					<div className="half">

						<h3>Wordpress</h3>
						<ul>
							<li>Theme Development</li>
							<li>Plugin Development</li>
							<li>Custom Functionality</li>
							<li>WP VIP Coding Standards</li>
						</ul>

						<h3>Design</h3>
						<ul>
							<li>Animation</li>
							<li>Typographic & Design Sensibility</li>
							<li>Photoshop & Illustrator</li>
						</ul>

					</div>
				</div>

				<p>Feel free to contact me about any opportunities to work with your team.</p>

				<p><a href="mailto:petertdavid@gmail.com?subject=Let's work together">petertdavid@gmail.com</a> • <a href="https://www.linkedin.com/in/petertdavid/">LinkedIn</a> • <a href="https://github.com/petertdavid-dev">Github</a>
				</p>

			</div>
		);
	}
}

export default About;
