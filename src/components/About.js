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
						<big>Feel free to contact me about any opportunities to work with your team.</big>
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
