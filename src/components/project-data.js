const projects = {
	advancedtravelnursing: {
		name: 			'Advanced Travel Nursing',
		tagline: 		'Role: Front and back end Wordpress development.',
		url: 			'https://www.advancedtravelnursing.com/',
		logo: 			'atn-logo.jpg',
		tags: 			['PHP','JS'],
		desc: 			'<p>This is the nursing wing of Advanced staffing. The site was launched about year ago and has been a healthy work in progress since. In this time we\'ve climbed up google rankings, and I\'ve built out features that have addressed various lead generating efforts.</p><h4>Features</h4><p>Theme Framework: The theme is a responsive framework called Chassis that I spearheaded the creation of during my time at Staffing Robot (the business was later aquired by Advanced). The theme framework was designed to be used again and again with different clients. It features <a href="http://getbem.com/" target="_blank" >BEM naming conventions</a>, a set of bootstrap-like shortcodes that can be customized per client, and an architecture that aligned with the <a href="http://atomicdesign.bradfrost.com/" target="_blank" >Brad Frost\'s atomic design principals</a>.</p><p><a href="https://www.advancedtravelnursing.com/nursing-events-calendar/" target="_blank" >Events:</a> The client wanted to create a community around the temps they placed, so we created a feature in the form of an events plugin. I kicked off development of this plugin with the excellent <a href="https://wppb.me/" target="_blank" >Wordpress Plugin Boilerplate Generator</a> and then customized from there. It\'s a custom post type that utilizes the <a href="https://github.com/kylestetz/CLNDR" target="_blank" >clndr js plugin</a> to render the UI.</p><p><a href="https://www.advancedtravelnursing.com/recruiter-pages" target="_blank" >Recruiter Pages:</a> Rockstar recruiters are granted "recruiter pages". These serve as a promotional tool and a way to foster a connection between nurses and their recruiters. Nurses can give feedback via a Gravity Forms feedback form, then approved feedback is displayed in a slider of users, their reviews, and ratings.</p>',
		heroDesktop: 	'atn-home.jpg',
		heroMobile: 	'atn-mobile.png',
		images: 		['atn-home.jpg','atn-events-cal.jpg','atn-job-board.jpg','atn-recruiter-pages.jpg'] 
	},

	advancedtraveltherapy: {
		name: 			'Advanced Travel Therapy Infographics',
		tagline: 		'Role: Strategy, Design, Front and back end Wordpress plugin development.',
		url: 			'https://www.advancedtraveltherapy.com/',
		logo: 			'att-logo.png',
		tags: 			['PHP','JS'],
		desc: 			'<p><a href="https://www.advancedtraveltherapy.com/" target="_blank" >https://www.advancedtraveltherapy.com/</a></p><p>Currently at Advanced, I work with the marketing team. Our SEO crew and I had a brainstorming meeting as to different directives we could take to increase our Google rankings, and capitalize on the traffic that we were already receiving. </p><p>One of the largest groups of search terms for our organic traffic was <em>"physical therapist salary info"</em>, and other salary-related phrases. We found some data on the Bureau on Labor Statistics, and I proposed a number of different interactive infographics that would attempt to rank for "<a href="https://moz.com/blog/game-of-featured-snippets-how-to-rank-in-position-0" target="_blank" >zero/featured snippet</a>" placement in google results. In addition to these we spec\'d out some gated content apps that we could use as a lead generating mechanism on the site.</p><p>I also developed a lead generating "state salary info" widget. This piece of content captures a lead and then sends that lead an email that has links to different state resource pages on the Advanced Therapy site.</p>',
		heroDesktop: 	'att-home.jpg',
		heroMobile: 	'att-mobile.png',
		images: 		['att-home.jpg','att-state-finder.png','att-purchasing-power.jpg','att-wage-hero.jpg', 'att-wage-rank.jpg'] 
	},

	lensvslens: {
		name: 			'Lens vs Lens',
		tagline: 		'Role: Design, Ideation, Front end development ReactJS, back end Wordpress.',
		url: 			'http://lensvslens.com/',
		logo: 			'lvl-logo.png',
		tags: 			['PHP','JS'],
		desc: 			'<p>I\'m a photography geek and am always daydreaming if another lens purchase would somehow turn me into <a href="http://alecsoth.com/photography/" target="_blank" >Alec Soth</a> (note to self: this will never happen ☺ ). I find a cool lens and then read a bunch of reviews, and then go to Flickr to see what photos from that lens actually look like. One thing that always bothered me was that Flickr doesn\'t allow you to search by shutter speed, aperture, or focal length, despite that it saves EXIF data.</p><p>I designed, developed and marketed this project. Lens vs Lens started out life as an excuse to learn ReactJS. I started by gathering lenses from Amazon and finding Flickr groups dedicated to fans of that lens. The app then has a cron that regulary polls these groups via the Flickr API and adds them to the database. The UI pulls these photos and allows the user to search the photos by shutter speed, aperture and focal length.</p><p>Photography enthusiasts all over the world have blogged about this project and <a href="http://lensvslens.com/" target="_blank" >lensvslens.com</a> has been covered by <a href="https://petapixel.com/2017/03/15/lens-vs-lens-site-lets-compare-lens-quality-using-flickr-photos/" target="_blank" >Peta Pixel</a>, <a href="http://lifehacker.com/lens-vs-lens-helps-you-pick-the-right-camera-lens-by-c-1793309200" target="_blank" >Life Hacker</a>, and <a href="https://www.shutterbug.com/content/lens-vs-lens-helps-you-be-smart-shopper-comparing-photos-taken-different-lenses" target="_blank" >Shutterbug</a>, among others.</p>',
		heroDesktop: 	'lvl-home.jpg',
		heroMobile: 	'lvl-mobile.png',
		images: 		['lvl-home.jpg','lvl-photo-detail.jpg','lvl-ui.jpg'] 
	},


	acronymacronym: {
		name: 			'Acronym Acronym',
		tagline: 		'Role: Design, ideation, development.',
		url: 			'http://acronym-acronym.com/',
		logo: 			'acro-logo.png',
		tags: 			['ReactJS','HTML','Sass'],
		desc: 			'<p>I put together a small feature for this portfolio site below, which is a lorem ipsum generator written in vanilla JS. I considered a few different ways of doing this: jQuery plugin, small ReactJS app, but in the end I decided that this is a simple site, with very few extra libraries, so I decided to code a simple app that is indicative of how I might try and organize code for a larger project.</p>',
		heroDesktop: 	'gwa-home.jpg',
		heroMobile: 	'gwa-home.jpg',
		images: 		[] 
	},

	gowithadvanced: {
		name: 			'Go With Advanced',
		tagline: 		'Role: Front and back end Wordpress development.',
		url: 			'https://www.gowithadvanced.com/',
		logo: 			'gowithadvanced-logo.jpg',
		tags: 			['Wordpress','HTML','Sass'],
		desc: 			'<p>The corporate hub site of Advanced. Features include: home and secondary pages, internal careers, moustache js signature builder.</p>',
		heroDesktop: 	'gwa-home.jpg',
		heroMobile: 	'gowithadvanced-mobile.png',
		images: 		['gwa-home.jpg','gwa-signature-builder.jpg'] 
	},

	ostech: {
		name: 			'OS Technical Staffing',
		tagline: 		'Role: Front and back end Wordpress development.',
		url: 			'https://www.ostechnical.com/',
		logo: 			'ostech-logo.png',
		tags: 			['Wordpress','HTML','Sass'],
		desc: 			'<p>Tech Staffing from Newport Beach, CA. Features include: job board, events feature, 80\'s CRT easter egg, team member sorter.</p>',
		heroDesktop: 	'ost-home.jpg',
		heroMobile: 	'ostech-mobile.png',
		images: 		['ost-home.jpg','ost-events.jpg','ost-team-members.jpg','ost-80s-view.jpg'] 
	},

	coresource: {
		name: 			'Corsource',
		tagline: 		'Role: Front and back end Wordpress development.',
		url: 			'http://www.corsource.com/',
		logo: 			'corsource-logo.png',
		tags: 			['Wordpress','HTML','Sass'],
		desc: 			'<p>Tech staffing in Portland, OR. Features include: Stacked / photo heavy layout, job board, popbot promotional plugin.</p>de: job board, events feature, 80\'s CRT easter egg, team member sorter.</p>',
		heroDesktop: 	'corsource-home.jpg',
		heroMobile: 	'corsource-mobile.png',
		images: 		['corsource-home.jpg','corsource-secondary.jpg','corsource-secondary-2.jpg'] 
	},

	davis: {
		name: 			'Davis Co.',
		tagline: 		'Role: Front and back end Wordpress development.',
		url: 			'http://www.corsource.com/',
		logo: 			'davis-logo.png',
		tags: 			['Wordpress','HTML','Sass'],
		desc: 			'<p>Tech staffing in Portland, OR. Features include: Stacked / photo heavy layout, job board, popbot promotional plugin.</p>de: job board, events feature, 80\'s CRT easter egg, team member sorter.</p>',
		heroDesktop: 	'davis-home.jpg',
		heroMobile: 	'davis-mobile.png',
		images: 		['davis-home.jpg','davis-executives.jpg','davis-jobboard.jpg'] 
	},

	centra: {
		name: 			'Centra Healthcare',
		tagline: 		'Role: Front and back end Wordpress development.',
		url: 			'http://www.centrahealthcare.com/',
		logo: 			'centra-logo.png',
		tags: 			['Wordpress','HTML','Sass'],
		desc: 			'<p>Therapy staffing from Fort Lauderdale, FL. Features include: colorful and photo heavy layout, SVG animations, resource pages, job board. </p>',
		heroDesktop: 	'centra-home.jpg',
		heroMobile: 	'centra-mobile.png',
		images: 		['centra-home.jpg','centra-popup.jpg','centra-secondary.jpg'] 
	}

};

export default projects;