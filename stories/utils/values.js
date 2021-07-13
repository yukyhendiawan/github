export const GLOBAL_COLORS_DEFAULT = {
	activePalette: 'base',
	palettes: {
		base: {
			name: 'Base',
			allowDeletion: false,
			colors: {
				'nv-primary-accent': '#0366d6',
				'nv-secondary-accent': '#0e509a',
				'nv-site-bg': '#ffffff',
				'nv-light-bg': '#ededed',
				'nv-dark-bg': '#14171c',
				'nv-text-color': '#393939',
				'nv-text-dark-bg': '#ffffff',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		darkMode: {
			name: 'Dark Mode',
			allowDeletion: false,
			colors: {
				'nv-primary-accent': '#26bcdb',
				'nv-secondary-accent': '#1f90a6',
				'nv-site-bg': '#121212',
				'nv-light-bg': '#1a1a1a',
				'nv-dark-bg': '#1a1a1a',
				'nv-text-color': '#ffffff',
				'nv-text-dark-bg': 'rgba(255, 255, 255, 0.81)',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
	},
};
export const GLOBAL_COLORS_FILLED = {
	activePalette: 'palette6',
	palettes: {
		base: {
			name: 'Base',
			allowDeletion: false,
			colors: {
				'nv-primary-accent': '#0366d6',
				'nv-secondary-accent': '#0e509a',
				'nv-site-bg': '#ffffff',
				'nv-light-bg': '#ededed',
				'nv-dark-bg': '#14171c',
				'nv-text-color': '#393939',
				'nv-text-dark-bg': '#ffffff',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		darkMode: {
			name: 'Dark Mode',
			allowDeletion: false,
			colors: {
				'nv-primary-accent': '#8bff05',
				'nv-secondary-accent': '#1fa848',
				'nv-site-bg': '#121212',
				'nv-light-bg': '#1a1a1a',
				'nv-dark-bg': '#1a1a1a',
				'nv-text-color': '#ffffff',
				'nv-text-dark-bg': 'rgba(255,255,255,0.81)',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		palette3: {
			name: 'Palette 3',
			allowDeletion: true,
			colors: {
				'nv-primary-accent': '#ffbf00',
				'nv-secondary-accent': '#a87d1f',
				'nv-site-bg': '#121212',
				'nv-light-bg': '#1a1a1a',
				'nv-dark-bg': '#1a1a1a',
				'nv-text-color': '#ffffff',
				'nv-text-dark-bg': 'rgba(255,255,255,0.81)',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		palette4: {
			name: 'Palette 4',
			allowDeletion: true,
			colors: {
				'nv-primary-accent': '#d84303',
				'nv-secondary-accent': '#0e509a',
				'nv-site-bg': '#ffffff',
				'nv-light-bg': '#ededed',
				'nv-dark-bg': '#14171c',
				'nv-text-color': '#393939',
				'nv-text-dark-bg': '#ffffff',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		palette5: {
			name: 'Palette 5',
			allowDeletion: true,
			colors: {
				'nv-primary-accent': '#9305ff',
				'nv-secondary-accent': '#1fa848',
				'nv-site-bg': '#121212',
				'nv-light-bg': '#1a1a1a',
				'nv-dark-bg': '#1a1a1a',
				'nv-text-color': '#ffffff',
				'nv-text-dark-bg': 'rgba(255,255,255,0.81)',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		palette6: {
			name: 'Palette 6',
			allowDeletion: true,
			colors: {
				'nv-primary-accent': '#d8034f',
				'nv-secondary-accent': '#0e509a',
				'nv-site-bg': '#ffffff',
				'nv-light-bg': '#ededed',
				'nv-dark-bg': '#14171c',
				'nv-text-color': '#393939',
				'nv-text-dark-bg': '#ffffff',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
	},
};
export const MULTISELECT_DEFAULT = ['page', 'post'];
export const MULTISELECT_FULL = [
	'attachment',
	'neve_custom_layouts',
	'page',
	'post',
];
export const MULTISELECT_CHOICES = {
	attachment: 'Media',
	neve_custom_layouts: 'Custom Layouts',
	page: 'Pages',
	post: 'Posts',
};
export const SOCIAL_ICONS_DEFAULT = [
	{
		visibility: 'yes',
		title: 'Facebook',
		icon: 'facebook',
		url: '#',
		icon_color: '#fff',
		background_color: '#3b5998'
	},
	{
		visibility: 'yes',
		title: 'Twitter',
		icon: 'twitter',
		url: '#',
		icon_color: '#fff',
		background_color: '#1da1f2'
	},
	{
		visibility: 'yes',
		title: 'Youtube',
		icon: 'youtube-play',
		url: '#',
		icon_color: '#fff',
		background_color: '#cd201f'
	},
	{
		visibility: 'yes',
		title: 'Instagram',
		icon: 'instagram',
		url: '#',
		icon_color: '#686868',
		background_color: '#e1306c'
	}
]

export const FIELDS = {
	title: {
		type: 'text',
		label: 'Title'
	},
	icon: {
		type: 'icon',
		label: 'Icon'
	},
	url: {
		type: 'text',
		label: 'Link'
	},
	icon_color: {
		type: 'color',
		label: 'Icon Color'
	},
	background_color: {
		type: 'color',
		label: 'Background Color'
	},
	item_type: {
		type: 'select',
		label: 'Type',
		choices: [
			{ text: 'Text' },
			{ email: 'Email' },
			{ phone: 'Phone' },
		]
	},
	social_network: {
		type: 'select',
		label: 'Social Network',
		choices: [
			{ facebook: 'Facebook' },
			{ twitter: 'Twitter' },
			{ email: 'Email' },
			{ pinterest: 'Pinterest' },
			{ linkedin: 'LinkedIn' },
			{ tumblr: 'Tumblr' },
			{ reddit: 'Reddit' },
			{ whatsapp: 'WhatsApp' },
			{ sms: 'SMS' },
			{ vk: 'VKontakte' }
		]
	},
	display_desktop: {
		type: 'checkbox',
		label: 'Show on Desktop'
	},
	display_mobile: {
		type: 'checkbox',
		label: 'Show on Mobile'
	}
}

export const CONTACT_DEFAULT = [
	{
		title: 'email@example.com',
		icon: 'envelope',
		item_type: 'email',
		visibility: 'yes'
	},
	{
		title: '202-555-0191',
		icon: 'phone',
		item_type: 'phone',
		visibility: 'yes'
	},
	{
		title: '499 Pirate Island Plaza',
		icon: 'map-marker',
		item_type: 'text',
		visibility: 'yes'
	}
]

export const SHARING_ICONS_DEFAULT = [
	{
		visibility: 'yes',
		title: 'Facebook',
		social_network: 'facebook',
		display_desktop: true,
		display_mobile: true
	},
	{
		visibility: 'yes',
		title: 'Twitter',
		social_network: 'twitter',
		display_desktop: true,
		display_mobile: true
	},
	{
		visibility: 'yes',
		title: 'Email',
		social_network: 'email',
		display_desktop: true,
		display_mobile: true
	}
]

export const ORDERING_DEFAULT = ['title', 'thumbnail'];
export const ORDERING_NO_TOGGLES = [
	'title',
	'thumbnail',
	'content',
	'tags',
	'comments',
];
export const ORDERING_COMPONENTS = {
	title: 'Title & Meta',
	thumbnail: 'Thumbnail',
	content: 'Content',
	tags: 'Tags',
	comments: 'Comments',
};
export const TYPEFACE_DEFAULT = {
	fontSize: {
		suffix: {
			mobile: 'px',
			tablet: 'px',
			desktop: 'px',
		},
		mobile: 10,
		tablet: 20,
		desktop: 30,
	},
	lineHeight: {
		suffix: {
			mobile: 'em',
			tablet: 'em',
			desktop: 'em',
		},
		mobile: 1,
		tablet: 1.3,
		desktop: 1.6,
	},
	letterSpacing: {
		mobile: 0.5,
		tablet: 0.6,
		desktop: 0.8,
	},
	fontWeight: 'none',
	textTransform: 'none',
};
export const TYPEFACE_EMPTY = {
	fontSize: {
		suffix: {
			mobile: 'px',
			tablet: 'px',
			desktop: 'px',
		},
		mobile: '',
		tablet: '',
		desktop: '',
	},
	lineHeight: {
		suffix: {
			mobile: 'em',
			tablet: 'em',
			desktop: 'em',
		},
		mobile: '',
		tablet: '',
		desktop: '',
	},
	letterSpacing: {
		mobile: '',
		tablet: '',
		desktop: '',
	},
	fontWeight: 'none',
	textTransform: 'none',
};
import presetOne from '../assets/img/ButtonItem.jpg';
import presetTwo from '../assets/img/Classic.jpg';
import presetThree from '../assets/img/SearchField.jpg';
export const PRESETS = [
	{
		label: 'Button Item',
		image: presetOne,
		setup: '{"theme_mod":"preset_value_1"}',
	},
	{
		label: 'Classic',
		image: presetTwo,
		setup: '{"theme_mod":"preset_value_2"}',
	},
	{
		label: 'Search Field',
		image: presetThree,
		setup: '{"theme_mod":"preset_value_3"}',
	},
];

export const RADIO_IMAGE_CHOICES = {
	default: {
		name: 'List',
		image:
			'data:image/png;base64,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',
	},
	covers: {
		name: 'Covers',
		image:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAB5CAYAAACwe5bgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7d1PTxNBGMfxp1JTLH8ExXAg8eDNd+Xr9eaNg8FEQxSpgIVSKBTccdMEaElnO535PYfvJ9lLQ8j0y3ZKuzu7rfuKobgXBgnCixBehPAihBchvAjhRQgvQngRwosQXqQd80PXt2a9gbmws27WWXn82O2d2dG5ubDdNeu+nP9z0eEP++bC5up0+PGdn/F12nHhmWpECC9CeBHCixBehPAihBchvAjhRQgvQngRwosQXoTwIoQXIbwI4UWijkA9tLNWbV3LZv/Ykmx0zPY2LZtvp/URuVSNw4fDbuHwm1fexzfROPxxddD7/Nrc6ldj2/9t2Sxjbw8ahx+N680r7+ObaBx++1W9LSr3KybM8e/WbGGnw3rLrXH4cOrCTsIT619V4S2fMMenjC9MJS7DnwzT5rl+5veH8PsP/tjCBjdWROPww5t68yrM771Lc48PUCKt2HWuy/o3KtVKNYe3W9OPex/fUy0WGGsw1YgQXoTwItHnx3v5fmarO/3mFRYmnBX40BMjfHLuRFSNDn9wYi58bNdP7qGwMMHL+D68iQvPVCNCeBHCixBehPAihBchvAjhRQgvQngRwosQXoTwIoQXIbwI4UUIL0J4kcan8LWrP9VKxj9X6olJ3sc30Tj87rrZ3mvL5vMPS7K1Wh33fGvZfPkpWooTjuh7OV1ulvG97/FNNA5/dFFvXpVaWJCKN1eRxnt8WMqYMseHRQM5z18PS0FT5vjDv2UuHsoeL9J4jw97g5fLyc4SXk2sCMGzovb48IHk6fmKKs99OPIyvk7kHMKKEBGmGhHCixBehPAiUe/BlyOz72fmwvvt6VtBhC/uvvbMhd2NuItsRIUPT6zvZA1UWHYz6zEv44u9gAVTjQjhRQgvQngRwosQXoTwIoQXIbwI4UUIL0J4EcKLEF6E8CKEFyG8SPGTVudJXZiQetLqPMtamMAeL8JJqyLs8SLF7wP16yLvVVFT7wP1/xUzsOyK3wcq95NKHV+pS/kWvw/UYGRZpd4H6qrQikHuAyXCm6sICxNE2ONFCC9CeBHCixBehPAihBchvAjhRQgvQniR8O3kJ0Nx/wAXONq4kNEpFQAAAABJRU5ErkJggg==',
	},
	grid: {
		name: 'Grid',
		image:
			'data:image/jpeg;base64,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',
	},
};

export const DYNAMIC_FIELDS_OPTIONS = [
	{
		label: 'Single',
		controls: {
			current_single_title: {
				label: 'Current Single Title',
				type: 'string',
			},
			current_single_excerpt: {
				label: 'Current Single Excerpt',
				type: 'string',
			},
			current_single_url: { label: 'Current Single URL', type: 'url' },
			current_post_meta: { label: 'Current Post Meta', type: 'string' },
			meta_author: { label: 'Author meta', type: 'string' },
			meta_date: { label: 'Date meta', type: 'string' },
			meta_category: { label: 'Category meta', type: 'string' },
			meta_comments: { label: 'Comments meta', type: 'string' },
			meta_time_to_read: { label: 'Time to read meta', type: 'string' },
		},
	},
	{
		label: 'Archive',
		controls: {
			archive_description: {
				label: 'Archive Description',
				type: 'string',
			},
			archive_title: { label: 'Archive Title', type: 'string' },
			archive_url: { label: 'Archive URL', type: 'url' },
		},
	},
	{
		label: 'Author',
		controls: {
			author_bio: { label: 'Author Bio', type: 'string' },
			author_name: { label: 'Author Name', type: 'string' },
			author_url: { label: 'Author URL', type: 'url' },
		},
	},
	{
		label: 'Current User',
		controls: {
			user_nicename: { label: 'User Nice Name', type: 'custom_user' },
			display_name: { label: 'Display Name', type: 'custom_user' },
			user_email: { label: 'User Email', type: 'custom_user' },
		},
	},
	{
		label: 'Global',
		controls: {
			site_title: { label: 'Site Title', type: 'string' },
			site_tagline: { label: 'Site Tagline', type: 'string' },
			home_url: { label: 'Home URL', type: 'url' },
			current_year: { label: 'Current Year', type: 'string' },
		},
	},
	{
		label: 'Cart',
		controls: {
			cart_total_currency_symbol: {
				label: 'Total + Currency Symbol',
				type: 'custom_cart',
			},
			cart_total: { label: 'Total', type: 'custom_cart' },
			currency_name: { label: 'Currency Name', type: 'custom_cart' },
			currency_symbol: { label: 'Currency Symbol', type: 'custom_cart' },
		},
	},
	{
		label: 'WooCommerce',
		controls: {
			product_price: { label: 'Product Price', type: 'string' },
			product_title: { label: 'Product Title', type: 'string' },
			cart_link: { label: 'Cart URL', type: 'url' },
			checkout_link: { label: 'Checkout URL', type: 'url' },
		},
	},
];
export const FONTS = {
	System: [
		'Arial, Helvetica, sans-serif',
		'Arial Black, Gadget, sans-serif',
		'Bookman Old Style, serif',
		'Comic Sans MS, cursive',
		'Courier, monospace',
		'Georgia, serif',
		'Garamond, serif',
		'Impact, Charcoal, sans-serif',
		'Lucida Console, Monaco, monospace',
		'Lucida Sans Unicode, Lucida Grande, sans-serif',
		'MS Sans Serif, Geneva, sans-serif',
		'MS Serif, New York, sans-serif',
		'Palatino Linotype, Book Antiqua, Palatino, serif',
		'Tahoma, Geneva, sans-serif',
		'Times New Roman, Times, serif',
		'Trebuchet MS, Helvetica, sans-serif',
		'Verdana, Geneva, sans-serif',
		'Paratina Linotype',
		'Trebuchet MS',
	],
	Google: [
		'ABeeZee',
		'Abel',
		'Abhaya Libre',
		'Abril Fatface',
		'Aclonica',
		'Acme',
		'Actor',
		'Adamina',
		'Advent Pro',
		'Aguafina Script',
		'Akronim',
		'Aladin',
		'Alata',
		'Alatsi',
		'Aldrich',
		'Alef',
		'Alegreya',
		'Alegreya SC',
		'Alegreya Sans',
		'Alegreya Sans SC',
		'Aleo',
		'Alex Brush',
		'Alfa Slab One',
		'Alice',
		'Alike',
		'Alike Angular',
		'Allan',
		'Allerta',
		'Allerta Stencil',
		'Allura',
		'Almarai',
		'Almendra',
		'Almendra Display',
		'Almendra SC',
		'Amarante',
		'Amaranth',
		'Amatic SC',
		'Amethysta',
		'Amiko',
		'Amiri',
		'Amita',
		'Anaheim',
		'Andada',
		'Andika',
		'Angkor',
		'Annie Use Your Telescope',
		'Anonymous Pro',
		'Antic',
		'Antic Didone',
		'Antic Slab',
		'Anton',
		'Arapey',
		'Arbutus',
		'Arbutus Slab',
		'Architects Daughter',
		'Archivo',
		'Archivo Black',
		'Archivo Narrow',
		'Aref Ruqaa',
		'Arima Madurai',
		'Arimo',
		'Arizonia',
		'Armata',
		'Arsenal',
		'Artifika',
		'Arvo',
		'Arya',
		'Asap',
		'Asap Condensed',
		'Asar',
		'Asset',
		'Assistant',
		'Astloch',
		'Asul',
		'Athiti',
		'Atma',
		'Atomic Age',
		'Aubrey',
		'Audiowide',
		'Autour One',
		'Average',
		'Average Sans',
		'Averia Gruesa Libre',
		'Averia Libre',
		'Averia Sans Libre',
		'Averia Serif Libre',
		'B612',
		'B612 Mono',
		'Bad Script',
		'Bahiana',
		'Bahianita',
		'Bai Jamjuree',
		'Balsamiq Sans',
		'Baloo',
		'Baloo 2',
		'Baloo Bhai',
		'Baloo Bhai 2',
		'Baloo Bhaijaan',
		'Baloo Bhaina',
		'Baloo Bhaina 2',
		'Baloo Chettan',
		'Baloo Chettan 2',
		'Baloo Da',
		'Baloo Da 2',
		'Baloo Paaji',
		'Baloo Paaji 2',
		'Baloo Tamma',
		'Baloo Tamma 2',
		'Baloo Tammudu',
		'Baloo Tammudu 2',
		'Baloo Thambi',
		'Baloo Thambi 2',
		'Balthazar',
		'Bangers',
		'Barlow',
		'Barlow Condensed',
		'Barlow Semi Condensed',
		'Barriecito',
		'Barrio',
		'Basic',
		'Baskervville',
		'Battambang',
		'Baumans',
		'Bayon',
		'Be Vietnam',
		'Bebas Neue',
		'Belgrano',
		'Bellefair',
		'Belleza',
		'Bellota',
		'Bellota Text',
		'BenchNine',
		'Bentham',
		'Berkshire Swash',
		'Beth Ellen',
		'Bevan',
		'Big Shoulders Display',
		'Big Shoulders Text',
		'Bigelow Rules',
		'Bigshot One',
		'Bilbo',
		'Bilbo Swash Caps',
		'BioRhyme',
		'BioRhyme Expanded',
		'Biryani',
		'Bitter',
		'Black And White Picture',
		'Black Han Sans',
		'Black Ops One',
		'Blinker',
		'Bokor',
		'Bonbon',
		'Boogaloo',
		'Bowlby One',
		'Bowlby One SC',
		'Brawler',
		'Bree Serif',
		'Bubblegum Sans',
		'Bubbler One',
		'Buda',
		'Buenard',
		'Bungee',
		'Bungee Hairline',
		'Bungee Inline',
		'Bungee Outline',
		'Bungee Shade',
		'Butcherman',
		'Butterfly Kids',
		'Cabin',
		'Cabin Condensed',
		'Cabin Sketch',
		'Caesar Dressing',
		'Cagliostro',
		'Cairo',
		'Caladea',
		'Calistoga',
		'Calligraffitti',
		'Cambay',
		'Cambo',
		'Candal',
		'Cantarell',
		'Cantata One',
		'Cantora One',
		'Capriola',
		'Cardo',
		'Carme',
		'Carrois Gothic',
		'Carrois Gothic SC',
		'Carter One',
		'Catamaran',
		'Caudex',
		'Caveat',
		'Caveat Brush',
		'Cedarville Cursive',
		'Ceviche One',
		'Chakra Petch',
		'Changa',
		'Changa One',
		'Chango',
		'Charm',
		'Charmonman',
		'Chathura',
		'Chau Philomene One',
		'Chela One',
		'Chelsea Market',
		'Chenla',
		'Cherry Cream Soda',
		'Cherry Swash',
		'Chewy',
		'Chicle',
		'Chilanka',
		'Chivo',
		'Chonburi',
		'Cinzel',
		'Cinzel Decorative',
		'Clicker Script',
		'Coda',
		'Coda Caption',
		'Codystar',
		'Coiny',
		'Combo',
		'Comfortaa',
		'Comic Neue',
		'Coming Soon',
		'Concert One',
		'Condiment',
		'Content',
		'Contrail One',
		'Convergence',
		'Cookie',
		'Copse',
		'Corben',
		'Cormorant',
		'Cormorant Garamond',
		'Cormorant Infant',
		'Cormorant SC',
		'Cormorant Unicase',
		'Cormorant Upright',
		'Courgette',
		'Courier Prime',
		'Cousine',
		'Coustard',
		'Covered By Your Grace',
		'Crafty Girls',
		'Creepster',
		'Crete Round',
		'Crimson Pro',
		'Crimson Text',
		'Croissant One',
		'Crushed',
		'Cuprum',
		'Cute Font',
		'Cutive',
		'Cutive Mono',
		'DM Mono',
		'DM Sans',
		'DM Serif Display',
		'DM Serif Text',
		'Damion',
		'Dancing Script',
		'Dangrek',
		'Darker Grotesque',
		'David Libre',
		'Dawning of a New Day',
		'Days One',
		'Dekko',
		'Delius',
		'Delius Swash Caps',
		'Delius Unicase',
		'Della Respira',
		'Denk One',
		'Devonshire',
		'Dhurjati',
		'Didact Gothic',
		'Diplomata',
		'Diplomata SC',
		'Do Hyeon',
		'Dokdo',
		'Domine',
		'Donegal One',
		'Doppio One',
		'Dorsa',
		'Dosis',
		'Dr Sugiyama',
		'Droid Sans',
		'Droid Sans Mono',
		'Droid Serif',
		'Duru Sans',
		'Dynalight',
		'EB Garamond',
		'Eagle Lake',
		'East Sea Dokdo',
		'Eater',
		'Economica',
		'Eczar',
		'El Messiri',
		'Electrolize',
		'Elsie',
		'Elsie Swash Caps',
		'Emblema One',
		'Emilys Candy',
		'Encode Sans',
		'Encode Sans Condensed',
		'Encode Sans Expanded',
		'Encode Sans Semi Condensed',
		'Encode Sans Semi Expanded',
		'Engagement',
		'Englebert',
		'Enriqueta',
		'Epilogue',
		'Erica One',
		'Esteban',
		'Euphoria Script',
		'Ewert',
		'Exo',
		'Exo 2',
		'Expletus Sans',
		'Fahkwang',
		'Fanwood Text',
		'Farro',
		'Farsan',
		'Fascinate',
		'Fascinate Inline',
		'Faster One',
		'Fasthand',
		'Fauna One',
		'Faustina',
		'Federant',
		'Federo',
		'Felipa',
		'Fenix',
		'Finger Paint',
		'Fira Code',
		'Fira Mono',
		'Fira Sans',
		'Fira Sans Condensed',
		'Fira Sans Extra Condensed',
		'Fjalla One',
		'Fjord One',
		'Flamenco',
		'Flavors',
		'Fondamento',
		'Fontdiner Swanky',
		'Forum',
		'Francois One',
		'Frank Ruhl Libre',
		'Freckle Face',
		'Fredericka the Great',
		'Fredoka One',
		'Freehand',
		'Fresca',
		'Frijole',
		'Fruktur',
		'Fugaz One',
		'GFS Didot',
		'GFS Neohellenic',
		'Gabriela',
		'Gaegu',
		'Gafata',
		'Galada',
		'Galdeano',
		'Galindo',
		'Gamja Flower',
		'Gayathri',
		'Gelasio',
		'Gentium Basic',
		'Gentium Book Basic',
		'Geo',
		'Geostar',
		'Geostar Fill',
		'Germania One',
		'Gidugu',
		'Gilda Display',
		'Girassol',
		'Give You Glory',
		'Glass Antiqua',
		'Glegoo',
		'Gloria Hallelujah',
		'Goblin One',
		'Gochi Hand',
		'Gorditas',
		'Gothic A1',
		'Gotu',
		'Goudy Bookletter 1911',
		'Graduate',
		'Grand Hotel',
		'Grandstander',
		'Gravitas One',
		'Great Vibes',
		'Grenze',
		'Grenze Gotisch',
		'Griffy',
		'Gruppo',
		'Gudea',
		'Gugi',
		'Gupter',
		'Gurajada',
		'Habibi',
		'Halant',
		'Hammersmith One',
		'Hanalei',
		'Hanalei Fill',
		'Handlee',
		'Hanuman',
		'Happy Monkey',
		'Harmattan',
		'Headland One',
		'Heebo',
		'Henny Penny',
		'Hepta Slab',
		'Herr Von Muellerhoff',
		'Hi Melody',
		'Hind',
		'Hind Guntur',
		'Hind Madurai',
		'Hind Siliguri',
		'Hind Vadodara',
		'Holtwood One SC',
		'Homemade Apple',
		'Homenaje',
		'IBM Plex Mono',
		'IBM Plex Sans',
		'IBM Plex Sans Condensed',
		'IBM Plex Serif',
		'IM Fell DW Pica',
		'IM Fell DW Pica SC',
		'IM Fell Double Pica',
		'IM Fell Double Pica SC',
		'IM Fell English',
		'IM Fell English SC',
		'IM Fell French Canon',
		'IM Fell French Canon SC',
		'IM Fell Great Primer',
		'IM Fell Great Primer SC',
		'Ibarra Real Nova',
		'Iceberg',
		'Iceland',
		'Imprima',
		'Inconsolata',
		'Inder',
		'Indie Flower',
		'Inika',
		'Inknut Antiqua',
		'Inria Sans',
		'Inria Serif',
		'Inter',
		'Irish Grover',
		'Istok Web',
		'Italiana',
		'Italianno',
		'Itim',
		'Jacques Francois',
		'Jacques Francois Shadow',
		'Jaldi',
		'Jim Nightshade',
		'Jockey One',
		'Jolly Lodger',
		'Jomhuria',
		'Jomolhari',
		'Josefin Sans',
		'Josefin Slab',
		'Jost',
		'Joti One',
		'Jua',
		'Judson',
		'Julee',
		'Julius Sans One',
		'Junge',
		'Jura',
		'Just Another Hand',
		'Just Me Again Down Here',
		'K2D',
		'Kadwa',
		'Kalam',
		'Kameron',
		'Kanit',
		'Kantumruy',
		'Karla',
		'Karma',
		'Katibeh',
		'Kaushan Script',
		'Kavivanar',
		'Kavoon',
		'Kdam Thmor',
		'Keania One',
		'Kelly Slab',
		'Kenia',
		'Khand',
		'Khmer',
		'Khula',
		'Kirang Haerang',
		'Kite One',
		'Knewave',
		'KoHo',
		'Kodchasan',
		'Kosugi',
		'Kosugi Maru',
		'Kotta One',
		'Koulen',
		'Kranky',
		'Kreon',
		'Kristi',
		'Krona One',
		'Krub',
		'Kufam',
		'Kulim Park',
		'Kumar One',
		'Kumar One Outline',
		'Kumbh Sans',
		'Kurale',
		'La Belle Aurore',
		'Lacquer',
		'Laila',
		'Lakki Reddy',
		'Lalezar',
		'Lancelot',
		'Lateef',
		'Lato',
		'League Script',
		'Leckerli One',
		'Ledger',
		'Lekton',
		'Lemon',
		'Lemonada',
		'Lexend Deca',
		'Lexend Exa',
		'Lexend Giga',
		'Lexend Mega',
		'Lexend Peta',
		'Lexend Tera',
		'Lexend Zetta',
		'Libre Barcode 128',
		'Libre Barcode 128 Text',
		'Libre Barcode 39',
		'Libre Barcode 39 Extended',
		'Libre Barcode 39 Extended Text',
		'Libre Barcode 39 Text',
		'Libre Baskerville',
		'Libre Caslon Display',
		'Libre Caslon Text',
		'Libre Franklin',
		'Life Savers',
		'Lilita One',
		'Lily Script One',
		'Limelight',
		'Linden Hill',
		'Literata',
		'Liu Jian Mao Cao',
		'Livvic',
		'Lobster',
		'Lobster Two',
		'Londrina Outline',
		'Londrina Shadow',
		'Londrina Sketch',
		'Londrina Solid',
		'Long Cang',
		'Lora',
		'Love Ya Like A Sister',
		'Loved by the King',
		'Lovers Quarrel',
		'Luckiest Guy',
		'Lusitana',
		'Lustria',
		'M PLUS 1p',
		'M PLUS Rounded 1c',
		'Ma Shan Zheng',
		'Macondo',
		'Macondo Swash Caps',
		'Mada',
		'Magra',
		'Maiden Orange',
		'Maitree',
		'Major Mono Display',
		'Mako',
		'Mali',
		'Mallanna',
		'Mandali',
		'Manjari',
		'Manrope',
		'Mansalva',
		'Manuale',
		'Marcellus',
		'Marcellus SC',
		'Marck Script',
		'Margarine',
		'Markazi Text',
		'Marko One',
		'Marmelad',
		'Martel',
		'Martel Sans',
		'Marvel',
		'Mate',
		'Mate SC',
		'Maven Pro',
		'McLaren',
		'Meddon',
		'MedievalSharp',
		'Medula One',
		'Meera Inimai',
		'Megrim',
		'Meie Script',
		'Merienda',
		'Merienda One',
		'Merriweather',
		'Merriweather Sans',
		'Metal',
		'Metal Mania',
		'Metamorphous',
		'Metrophobic',
		'Michroma',
		'Milonga',
		'Miltonian',
		'Miltonian Tattoo',
		'Mina',
		'Miniver',
		'Miriam Libre',
		'Mirza',
		'Miss Fajardose',
		'Mitr',
		'Modak',
		'Modern Antiqua',
		'Mogra',
		'Molengo',
		'Molle',
		'Monda',
		'Monofett',
		'Monoton',
		'Monsieur La Doulaise',
		'Montaga',
		'Montez',
		'Montserrat',
		'Montserrat Alternates',
		'Montserrat Subrayada',
		'Moul',
		'Moulpali',
		'Mountains of Christmas',
		'Mouse Memoirs',
		'Mr Bedfort',
		'Mr Dafoe',
		'Mr De Haviland',
		'Mrs Saint Delafield',
		'Mrs Sheppards',
		'Mukta',
		'Mukta Mahee',
		'Mukta Malar',
		'Mukta Vaani',
		'Muli',
		'Mulish',
		'MuseoModerno',
		'Mystery Quest',
		'NTR',
		'Nanum Brush Script',
		'Nanum Gothic',
		'Nanum Gothic Coding',
		'Nanum Myeongjo',
		'Nanum Pen Script',
		'Neucha',
		'Neuton',
		'New Rocker',
		'News Cycle',
		'Niconne',
		'Niramit',
		'Nixie One',
		'Nobile',
		'Nokora',
		'Norican',
		'Nosifer',
		'Notable',
		'Nothing You Could Do',
		'Noticia Text',
		'Noto Sans',
		'Noto Sans HK',
		'Noto Sans JP',
		'Noto Sans KR',
		'Noto Sans SC',
		'Noto Sans TC',
		'Noto Serif',
		'Noto Serif JP',
		'Noto Serif KR',
		'Noto Serif SC',
		'Noto Serif TC',
		'Nova Cut',
		'Nova Flat',
		'Nova Mono',
		'Nova Oval',
		'Nova Round',
		'Nova Script',
		'Nova Slim',
		'Nova Square',
		'Numans',
		'Nunito',
		'Nunito Sans',
		'Odibee Sans',
		'Odor Mean Chey',
		'Offside',
		'Old Standard TT',
		'Oldenburg',
		'Oleo Script',
		'Oleo Script Swash Caps',
		'Open Sans',
		'Open Sans Condensed',
		'Oranienbaum',
		'Orbitron',
		'Oregano',
		'Orienta',
		'Original Surfer',
		'Oswald',
		'Over the Rainbow',
		'Overlock',
		'Overlock SC',
		'Overpass',
		'Overpass Mono',
		'Ovo',
		'Oxanium',
		'Oxygen',
		'Oxygen Mono',
		'PT Mono',
		'PT Sans',
		'PT Sans Caption',
		'PT Sans Narrow',
		'PT Serif',
		'PT Serif Caption',
		'Pacifico',
		'Padauk',
		'Palanquin',
		'Palanquin Dark',
		'Pangolin',
		'Paprika',
		'Parisienne',
		'Passero One',
		'Passion One',
		'Pathway Gothic One',
		'Patrick Hand',
		'Patrick Hand SC',
		'Pattaya',
		'Patua One',
		'Pavanam',
		'Paytone One',
		'Peddana',
		'Peralta',
		'Permanent Marker',
		'Petit Formal Script',
		'Petrona',
		'Philosopher',
		'Piedra',
		'Pinyon Script',
		'Pirata One',
		'Plaster',
		'Play',
		'Playball',
		'Playfair Display',
		'Playfair Display SC',
		'Podkova',
		'Poiret One',
		'Poller One',
		'Poly',
		'Pompiere',
		'Pontano Sans',
		'Poor Story',
		'Poppins',
		'Port Lligat Sans',
		'Port Lligat Slab',
		'Pragati Narrow',
		'Prata',
		'Preahvihear',
		'Press Start 2P',
		'Pridi',
		'Princess Sofia',
		'Prociono',
		'Prompt',
		'Prosto One',
		'Proza Libre',
		'Public Sans',
		'Puritan',
		'Purple Purse',
		'Quando',
		'Quantico',
		'Quattrocento',
		'Quattrocento Sans',
		'Questrial',
		'Quicksand',
		'Quintessential',
		'Qwigley',
		'Racing Sans One',
		'Radley',
		'Rajdhani',
		'Rakkas',
		'Raleway',
		'Raleway Dots',
		'Ramabhadra',
		'Ramaraja',
		'Rambla',
		'Rammetto One',
		'Ranchers',
		'Rancho',
		'Ranga',
		'Rasa',
		'Rationale',
		'Ravi Prakash',
		'Recursive',
		'Red Hat Display',
		'Red Hat Text',
		'Red Rose',
		'Redressed',
		'Reem Kufi',
		'Reenie Beanie',
		'Revalia',
		'Rhodium Libre',
		'Ribeye',
		'Ribeye Marrow',
		'Righteous',
		'Risque',
		'Roboto',
		'Roboto Condensed',
		'Roboto Mono',
		'Roboto Slab',
		'Rochester',
		'Rock Salt',
		'Rokkitt',
		'Romanesco',
		'Ropa Sans',
		'Rosario',
		'Rosarivo',
		'Rouge Script',
		'Rowdies',
		'Rozha One',
		'Rubik',
		'Rubik Mono One',
		'Ruda',
		'Rufina',
		'Ruge Boogie',
		'Ruluko',
		'Rum Raisin',
		'Ruslan Display',
		'Russo One',
		'Ruthie',
		'Rye',
		'Sacramento',
		'Sahitya',
		'Sail',
		'Saira',
		'Saira Condensed',
		'Saira Extra Condensed',
		'Saira Semi Condensed',
		'Saira Stencil One',
		'Salsa',
		'Sanchez',
		'Sancreek',
		'Sansita',
		'Sarabun',
		'Sarala',
		'Sarina',
		'Sarpanch',
		'Satisfy',
		'Sawarabi Gothic',
		'Sawarabi Mincho',
		'Scada',
		'Scheherazade',
		'Schoolbell',
		'Scope One',
		'Seaweed Script',
		'Secular One',
		'Sedgwick Ave',
		'Sedgwick Ave Display',
		'Sen',
		'Sevillana',
		'Seymour One',
		'Shadows Into Light',
		'Shadows Into Light Two',
		'Shanti',
		'Share',
		'Share Tech',
		'Share Tech Mono',
		'Shojumaru',
		'Short Stack',
		'Shrikhand',
		'Siemreap',
		'Sigmar One',
		'Signika',
		'Signika Negative',
		'Simonetta',
		'Single Day',
		'Sintony',
		'Sirin Stencil',
		'Six Caps',
		'Skranji',
		'Slabo 13px',
		'Slabo 27px',
		'Slackey',
		'Smokum',
		'Smythe',
		'Sniglet',
		'Snippet',
		'Snowburst One',
		'Sofadi One',
		'Sofia',
		'Solway',
		'Song Myung',
		'Sonsie One',
		'Sora',
		'Sorts Mill Goudy',
		'Source Code Pro',
		'Source Sans Pro',
		'Source Serif Pro',
		'Space Mono',
		'Spartan',
		'Special Elite',
		'Spectral',
		'Spectral SC',
		'Spicy Rice',
		'Spinnaker',
		'Spirax',
		'Squada One',
		'Sree Krushnadevaraya',
		'Sriracha',
		'Srisakdi',
		'Staatliches',
		'Stalemate',
		'Stalinist One',
		'Stardos Stencil',
		'Stint Ultra Condensed',
		'Stint Ultra Expanded',
		'Stoke',
		'Strait',
		'Stylish',
		'Sue Ellen Francisco',
		'Suez One',
		'Sulphur Point',
		'Sumana',
		'Sunflower',
		'Sunshiney',
		'Supermercado One',
		'Sura',
		'Suranna',
		'Suravaram',
		'Suwannaphum',
		'Swanky and Moo Moo',
		'Syncopate',
		'Syne',
		'Tajawal',
		'Tangerine',
		'Taprom',
		'Tauri',
		'Taviraj',
		'Teko',
		'Telex',
		'Tenali Ramakrishna',
		'Tenor Sans',
		'Text Me One',
		'Thasadith',
		'The Girl Next Door',
		'Tienne',
		'Tillana',
		'Timmana',
		'Tinos',
		'Titan One',
		'Titillium Web',
		'Tomorrow',
		'Trade Winds',
		'Trirong',
		'Trocchi',
		'Trochut',
		'Trykker',
		'Tulpen One',
		'Turret Road',
		'Ubuntu',
		'Ubuntu Condensed',
		'Ubuntu Mono',
		'Ultra',
		'Uncial Antiqua',
		'Underdog',
		'Unica One',
		'UnifrakturCook',
		'UnifrakturMaguntia',
		'Unkempt',
		'Unlock',
		'Unna',
		'VT323',
		'Vampiro One',
		'Varela',
		'Varela Round',
		'Varta',
		'Vast Shadow',
		'Vesper Libre',
		'Viaoda Libre',
		'Vibes',
		'Vibur',
		'Vidaloka',
		'Viga',
		'Voces',
		'Volkhov',
		'Vollkorn',
		'Vollkorn SC',
		'Voltaire',
		'Waiting for the Sunrise',
		'Wallpoet',
		'Walter Turncoat',
		'Warnes',
		'Wellfleet',
		'Wendy One',
		'Wire One',
		'Work Sans',
		'Yanone Kaffeesatz',
		'Yantramanav',
		'Yatra One',
		'Yellowtail',
		'Yeon Sung',
		'Yeseva One',
		'Yesteryear',
		'Yrsa',
		'ZCOOL KuaiLe',
		'ZCOOL QingKe HuangYou',
		'ZCOOL XiaoWei',
		'Zeyada',
		'Zhi Mang Xing',
		'Zilla Slab',
		'Zilla Slab Highlight',
	],
};
