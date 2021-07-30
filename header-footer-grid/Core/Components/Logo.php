<?php
/**
 * Custom Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Core\Settings\Config;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Class Logo.
 *
 * @package HFG\Core\Components
 */
class Logo extends Abstract_Component {


	const COMPONENT_ID = 'logo';
	const CUSTOM_LOGO  = 'custom_logo';
	const USE_SAME     = 'same_logo';
	const DISPLAY      = 'display';
	const MAX_WIDTH    = 'max_width';
	const SHOW_TITLE   = 'show_title';
	const SHOW_TAGLINE = 'show_tagline';
	const DISABLE_LINK = 'disable_link';
	const COLOR_ID     = 'color';

	/**
	 * Default spacing value
	 *
	 * @var array
	 */
	protected $default_padding_value = array(
		'mobile'       => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'tablet'       => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'desktop'      => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Logo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Logo & Site Identity', 'neve' ) );
		$this->set_property( 'description', __( 'Display your company logo here or simply use words to describe your business.', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'component_slug', 'hfg-logo' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'icon', 'admin-appearance' );
		$this->set_property( 'section', 'title_tagline' );
		$this->set_property( 'preview_image', esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/component-site-logo.jpg' ) );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() . ' .site-logo' );

		add_action( 'wp_enqueue_scripts', [ $this, 'load_scripts' ] );
	}

	/**
	 * Method to check that the component is active.
	 *
	 * @return bool
	 */
	private function is_component_active() {
		$builders = Main::get_instance()->get_builders();
		foreach ( $builders as $builder ) {
			if ( $builder->is_component_active( $this->get_id() ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Load Component Scripts
	 *
	 * @return void
	 */
	public function load_scripts() {
		if ( $this->is_component_active() || is_customize_preview() ) {
			wp_add_inline_script( 'neve-script', $this->toggle_script() );
		}
	}

	/**
	 * Get JS contents from file to use as inline script.
	 *
	 * @return string
	 */
	public function toggle_script() {
		$main_logo = get_theme_mod( 'custom_logo' );

		$conditional_logo = json_decode( Mods::get( $this->get_id() . '_' . self::COMPONENT_ID, self::sanitize_logo_json( $main_logo ) ), true );
		$main_logo        = isset( $conditional_logo['light'] ) ? $conditional_logo['light'] : $main_logo;

		if ( ! empty( $conditional_logo ) ) {
			$logo_light_id = isset( $conditional_logo['light'] ) ? $conditional_logo['light'] : $main_logo;
			$logo_dark_id  = isset( $conditional_logo['dark'] ) ? $conditional_logo['dark'] : $logo_light_id;

			$variants = array(
				'light' => array(
					'src'    => wp_get_attachment_image_url( $logo_light_id, apply_filters( 'hfg_logo_image_size', 'full' ), false ),
					'srcset' => wp_get_attachment_image_srcset( $logo_light_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
					'sizes'  => wp_get_attachment_image_sizes( $logo_light_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
				),
				'dark'  => array(
					'src'    => wp_get_attachment_image_url( $logo_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ), false ),
					'srcset' => wp_get_attachment_image_srcset( $logo_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
					'sizes'  => wp_get_attachment_image_sizes( $logo_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
				),
			);
		}

		$script = "
	var html = document.documentElement;
	var theme = html.getAttribute('data-neve-theme') || 'light';

	function setCurrentTheme( theme ) {
		var isConditional = " . ( $conditional_logo['same'] ? 'true' : 'false' ) . ";
		var pictures = document.getElementsByClassName( 'neve-main-logo' );
		for(var i = 0; i<pictures.length; i++) {
			var picture = pictures.item(i);
			if( ! picture ) {
				continue;
			};
			if ( theme === 'light' || isConditional ) {
				picture.src = '" . esc_attr( $variants['light']['src'] ) . "';
				picture.srcset = '" . esc_attr( $variants['light']['srcset'] ) . "';
				picture.sizes = '" . esc_attr( $variants['light']['sizes'] ) . "';
				continue;
			};
			picture.src = '" . esc_attr( $variants['dark']['src'] ) . "';
			picture.srcset = '" . esc_attr( $variants['dark']['srcset'] ) . "';
			picture.sizes = '" . esc_attr( $variants['dark']['sizes'] ) . "';
		};
	};

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == 'attributes') {
				theme = html.getAttribute('data-neve-theme');
				setCurrentTheme(theme);
			};
		});
	});

	//setCurrentTheme(theme);
	observer.observe(html, {
		attributes: true
	});";

		return $script;
	}

	/**
	 * Sanitize the logo json
	 *
	 * @param string $input A json data for the logo component.
	 *
	 * @return string
	 */
	public static function sanitize_logo_json( $input ) {
		$inputs = json_decode( $input, true );
		if ( is_array( $inputs ) && ! empty( $inputs ) && ! empty( $input ) ) {
			return $input;
		}

		return wp_json_encode(
			array(
				'light' => get_theme_mod( 'custom_logo' ),
				'dark'  => get_theme_mod( 'custom_logo' ),
				'same'  => true,
			)
		);
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {

		if ( $this->get_class_const( 'COMPONENT_ID' ) === 'logo' ) {
			SettingsManager::get_instance()->add_controls_to_tabs(
				$this->get_class_const( 'COMPONENT_ID' ),
				array(
					SettingsManager::TAB_GENERAL => array(
						// self::CUSTOM_LOGO => array(),
						'blogname'        => array(),
						'blogdescription' => array(),
						'site_icon'       => array(),
					),
				)
			);
		}

		$custom_logo_args = get_theme_support( 'custom-logo' );
		$default          = array(
			'light' => get_theme_mod( 'custom_logo' ),
			'dark'  => get_theme_mod( 'custom_logo' ),
			'same'  => true,
		);
		SettingsManager::get_instance()->add(
			[
				'id'                => self::COMPONENT_ID,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				// 'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'transport'         => 'refresh',
				'sanitize_callback' => array( $this, 'sanitize_logo_json' ),
				'default'           => wp_json_encode( $default ),
				'label'             => __( 'Logo base', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\React\Logo_Palette',
				'options'           => [
					'priority'    => 0,
					'input_attrs' => [
						'builderListen' => 'hfg_header_layout' . ( neve_is_new_builder() ? '_v2' : '' ),
						'compChange'    => PaletteSwitch::COMPONENT_ID,
						'sameLabel'     => __( 'Use one logo for both modes', 'neve' ),
						'height'        => isset( $custom_logo_args[0]['height'] ) ? $custom_logo_args[0]['height'] : null,
						'width'         => isset( $custom_logo_args[0]['width'] ) ? $custom_logo_args[0]['width'] : null,
						'flexHeight'    => isset( $custom_logo_args[0]['flex-height'] ) ? $custom_logo_args[0]['flex-height'] : true,
						'flexWidth'     => false, // this can not flex as to allow correct cropping
					],
				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::DISPLAY,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_builder_id(),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => 'default',
				'label'              => __( 'Display', 'neve' ),
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'options'            => [
					'priority'      => - 1,
					'is_for'        => 'logo',
					'large_buttons' => true,
				],
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::SHOW_TAGLINE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Show Site Tagline', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::SHOW_TITLE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Show Site Title', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::MAX_WIDTH,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => array( $this, 'sanitize_responsive_int_json' ),
				'default'           => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				'label'             => __( 'Logo max width', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\React\Responsive_Range',
				'options'           => [
					'priority'                 => 12,
					'hide_responsive_switches' => true,
					'media_query'              => true,
					'step'                     => 1,
					'input_attrs'              => [
						'min'        => 0,
						'max'        => 350,
						'units'      => [ 'px' ],
						'defaultVal' => [
							'mobile'  => 120,
							'tablet'  => 120,
							'desktop' => 120,
						],
					],
				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::DISABLE_LINK,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => false,
				'label'              => __( 'Disable Homepage Link', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                    => self::COLOR_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_colors',
				'label'                 => __( 'Text Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'     => '--color',
						'selector' => '.builder-item--' . $this->get_id(),
					],
					[
						'selector' => $this->default_selector . ' .brand .nv-title-tagline-wrap',
						'prop'     => 'color',
						'fallback' => 'inherit',
					],
				],
				'conditional_header'    => true,
			]
		);
	}

	/**
	 * Render logo section.
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-logo' );
	}

	/**
	 * Method to add Component css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {
		if ( ! neve_is_new_skin() ) {
			return $this->add_legacy_style( $css_array );
		}

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id(),
			Dynamic_Selector::KEY_RULES    => [
				'--maxWidth' => [
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::MAX_WIDTH,
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				],
				'--color'    => [
					Dynamic_Selector::META_KEY => $this->get_id() . '_' . self::COLOR_ID,
				],
			],
		];

		return parent::add_style( $css_array );
	}

	/**
	 * Add legacy style.
	 *
	 * @param array $css_array css array.
	 *
	 * @return array
	 */
	private function add_legacy_style( $css_array ) {
		$selector = '.builder-item--' . $this->get_id() . ' .site-logo img';

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector,
			Dynamic_Selector::KEY_RULES    => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::MAX_WIDTH,
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				],
			],
		];
		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_selector . ' .brand .nv-title-tagline-wrap',
			Dynamic_Selector::KEY_RULES    => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => $this->get_id() . '_' . self::COLOR_ID,
			],
		];

		return parent::add_style( $css_array );
	}
}
