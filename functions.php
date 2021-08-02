<?php

/**
 * Create custom category for gutenberg blocks listing
 *
 * @since Version 1.0
 *
 * @return void
 */
function upeshv_customblocks_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'custom-blocks',
				'title' => __( 'Custom Blocks', 'upeshv' ),
			),
		)
	);
}

// Support for Older Version of Gutenberg Category Filter
if ( version_compare( $GLOBALS['wp_version'], '5.8-alpha-1', '<' ) ) {
	add_filter( 'block_categories', 'upeshv_customblocks_category', 10, 2 );
} else {
	// Support for new version of Gutenberg Category Filter
	add_filter( 'block_categories_all', 'upeshv_customblocks_category', 10, 2 );
}


/**
 * Create custom Hero Block
 *
 * @since Version 1.0
 *
 * @return void
 */

function upeshv_hero_blocks() {
	
	wp_register_script( 
		__( 'custom-hero-block-js', 'upeshv' ), 
		get_theme_file_uri( '/build/index.js' ),
		array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n'),
		wp_get_theme()->get( 'Version' )
	);

	register_block_type( 'upeshv/hero', [
		'editor_script' => 'custom-hero-block-js'
	]);

}
add_action( 'init', 'upeshv_hero_blocks' );