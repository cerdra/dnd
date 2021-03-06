$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'DnD Rules',

		// Tagline for your site
		siteTagline: '',

		// Email address
		siteEmail: '',

		// Name
		siteAuthor: '',

		// Navigation items
		siteNavItems: [
			{ name: 'Github Repo', href: 'https://github.com/cerdra/dnd', newWindow: false}
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'cerdra',
			repo: 'dnd'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
