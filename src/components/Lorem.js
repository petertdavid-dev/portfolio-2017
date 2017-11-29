import React, { Component } from 'react';

class Lorem extends Component {

  constructor(props) {
    super(props);

    this.state = {
			words 			: [ 'BID', 'Break it down', 'COB', 'Close of business', 'EOD', 'End of day', 'EOM', 'End of message', 'EOT', 'End of thread', 'EOW', 'End of week', 'ETA', 'Estimated time of arrival', 'FTE', 'Full-time employee', 'FWIW', 'For what it’s worth', 'IAM', 'In a meeting', 'IMO', 'In my opinion', 'KISS', 'Keep it simple stupid', 'LET', 'Leaving early today', 'LMK', 'Let me know', 'MoM', 'Month over month', 'MTD', 'Month to date', 'NIM', 'No internal message', 'OOO', 'Out of office', 'OT', 'Off topic', 'OTP', 'On the phone', 'PA', 'Performance appraisal', 'POC', 'Point of contact', 'PTE', 'Part-time employee', 'PTO', 'Paid time off', 'NRN', 'No reply necessary', 'NSFW', 'Not safe for work', 'NWR', 'Not work related', 'Re', 'Referring to', 'RFD', 'Request for discussion', 'SMART', 'Specific, measurable, attainable, realistic, time-bound', 'SME', 'Subject matter expert', 'TED', 'Tell me, explain to me, describe to me', 'TL;DR', 'Too long, didn’t read', 'TLTR', 'Too long to read', 'TOS', 'Terms of service', 'TYT', 'Take your time', 'WFH', 'Work from home', 'WIIFM', 'What’s in it for me', 'WOM', 'Word of mouth', 'YTD', 'Year to date', 'ACCT', 'Account', 'AP', 'Accounts payable', 'AR', 'Accounts receivable', 'BS', 'Balance sheet', 'CPU', 'Cost per unit', 'CR', 'Credit', 'DR', 'Debit', 'EPS', 'Earnings per share', 'FIFO', 'First in, first out', 'IPO', 'Initial public offering', 'LIFO', 'Last in, first out', 'LWOP', 'Leave without pay', 'NAV', 'Net assets value', 'P-card', 'Purchase card', 'ROA', 'Return on assets', 'ROE', 'Return on equity', 'ROI', 'Return on investment', 'P/E', 'Price to earnings', 'P&L', 'Profit and loss', 'API', 'Application program interface', 'CPU', 'Central processing unit', 'CSS', 'Cascading style sheet', 'FTP', 'File transport protocol', 'HTML', 'HyperText markup language', 'HTTP', 'HyperText transfer protocol', 'HTTPS', 'HyperText transfer protocol secure', 'IM', 'Instant messaging', 'IP', 'Internet protocol', 'ISP', 'Internet service provider', 'OS', 'Operating system', 'QA', 'Quality assurance', 'UI', 'User interface', 'URL', 'Universal resource locator', 'UX', 'User experience', 'VPN', 'Virtual private network', 'RAM', 'Random-access memory', 'ROR', 'Ruby on Rails', 'RSS', 'Rich site summary or really simple syndication', 'WYSIWYG', 'What you see is what you get', 'AIDA', 'Attention, interest, desire, action', 'B2B', 'Business to business', 'B2C', 'Business to consumer', 'BR', 'Bounce rate', 'CMS', 'Content management system', 'CPC', 'Cost per click', 'CTA', 'Call to action', 'CTR', 'Click through rate', 'CR', 'Conversion rate', 'CRM', 'Customer relationship management', 'DM', 'Direct message or direct mail', 'ESP', 'Email service provider', 'GA', 'Google Analytics', 'KPI', 'Key performance indicator', 'PPC', 'Pay per click', 'PV', 'Page view', 'RFP', 'Request for proposal', 'ROS', 'Run of site', 'RT', 'Retweet', 'SaaS', 'Software as a service', 'SEO', 'Search engine optimization', 'SM', 'Social media', 'SMB', 'Small to medium business', 'SWOT', 'Strengths, weaknesses, opportunities, threats', 'UV', 'Unique visitor', 'BD', 'Business development', 'CAO', 'Chief analytics officer', 'CDO', 'Chief data officer', 'CEO', 'Chief executive officer', 'CFO', 'Chief financial officer', 'CIO', 'Chief information officer', 'CMO', 'Chief marketing officer', 'COO', 'Chief operating officer', 'CPA', 'Certified public accountant', 'CSO', 'Chief security officer', 'CSR', 'Corporate social responsibility', 'CTO', 'Chief technology officer', 'CFP', 'Certified financial planner', 'DOE', 'Depending on experience', 'GC', 'General counsel', 'HR', 'Human resources', 'PM', 'Project manager', 'PR', 'Public relations', 'R&D', 'Research and development', 'TPS', 'Testing Procedure Specification', 'Peter David is a rockstar', 'you should hire Peter', 'SCSS', 'CSS', 'PHP', 'JS', 'HTML', 'Grunt', 'jQuery', 'React', 'Wordpress', 'Bootstrap', 'Sublime Text', 'FTP', 'Transmit FTP', 'Sequel Pro', 'Bitbucket', 'GIT', 'Photoshop', 'Illustrator', 'Adobe', 'SVG', 'npm' ],
			default 		: '<div><h1>I focus on creating high quality responsive websites and exceptional user experience</h1><p>WordPress & Front-end Developer | UX and UI design | Strategic Tech Solutions</p><p class="lorem__text--default-links"><a href="/about">About</a> • <a href="/portfolio">Work</a></p></div>',
			output 			: '',
			outputClass 	: '',
			paragraphs 		: 3,
			length 			: 3
		}


		this.handleParagraphChange = this.handleParagraphChange.bind(this);
		this.handleLengthChange = this.handleLengthChange.bind(this);
		this.generateLorem = this.generateLorem.bind(this);
		this.defaultLorem = this.defaultLorem.bind(this);

		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.defaultLorem( null );
	}

	/**
	 * Create paragraphs.
	 *
	 */
	paragraphs( count ) {

		var sentenceNum = this.state.length;

		var html = '';

		for ( var i = 0; i < sentenceNum; i++ ) {
			html += this.sentences();
		}

		return html;
	}

	/**
	 * Create sentences.
	 *
	 */
	sentences() {

		var sentenceLength = Math.floor( Math.random() * 4 ) + 4;
		var words = this.state.words;
		var word = '';
		var html = '';

		for ( var i = 0; i < sentenceLength; i++ ) {
			word = words[ Math.floor( Math.random() * words.length ) ];
			html += ( i === 1 ) ? word.charAt( 0 ).toUpperCase() + word.slice( 1 ) : word;
			html += ( ( i + 1 ) === sentenceLength ) ? '. ' : ' ';
		}

		return html;
	}

	/**
	 * Generate lorem ipsum.
	 *
	 */
	generateLorem( e ) {

		e.preventDefault();

		var paraCount = this.state.paragraphs;
		var html = '';

		for ( var i = 0; i < paraCount; i++ ) {
			html += '<p>';
			html += this.paragraphs();
			html += '</p>';
		}

		this.setState({output: html}); 
		this.setState({outputClass: 'lorem__text lorem__text--lorem' }); 

		setTimeout(function() {
			this.setState({outputClass: 'lorem__text lorem__text--lorem print' })
		}.bind(this), 300);

	}

	// Change the lorem back to the default
	defaultLorem( e ) {

		if ( e !== null ){
			e.preventDefault();		
		}

		console.log(this.refs.output);
		this.setState({output: this.state.default}); 
		this.setState({outputClass: 'lorem__text lorem__text--default' }); 

	}

	handleParagraphChange(event) {
		this.setState({paragraphs: event.target.value});
	}

	handleLengthChange(event) {
		this.setState({length: parseInt( event.target.value, 10 ) });
	}

	render() {

		return (
		  <div className="Lorem">
		  	<form className="lorem__form" onSubmit={this.generateLorem} >
		  		<h3>Bizniss Lorem Ipsum Printer II</h3>
				<div className="lorem__para-num">
					<label><input type="number" className="lorem__paragraphs" min="2" max="8" value={this.state.paragraphs} onChange={this.handleParagraphChange} /> Number of paragraphs</label>
				</div>

				<div className="lorem__para-length">

					<input id="para-length-short" name="para-length" type="radio" value="3" checked={this.state.length === 3} onChange={this.handleLengthChange} />
					<label htmlFor="para-length-short" >Short</label>

					<input id="para-length-medium" name="para-length" type="radio" value="6" checked={this.state.length === 6} onChange={this.handleLengthChange} />
					<label htmlFor="para-length-medium" > Medium</label>

					<input id="para-length-long" name="para-length" type="radio" value="9" checked={this.state.length === 9} onChange={this.handleLengthChange} />
					<label htmlFor="para-length-long" >Long</label>
				</div>

				<button type="submit" className="lorem__submit" >Generate TPS Report</button> &nbsp;&nbsp; 
				<button type="submit" className="lorem__submit" onClick={this.defaultLorem} >Back to Intro</button>
			</form>
			<div className={ this.state.outputClass } ref="output" dangerouslySetInnerHTML={{ __html: this.state.output }} ></div>
		  </div>
		);
	}

}

export default Lorem;
