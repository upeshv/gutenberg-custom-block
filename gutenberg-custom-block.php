<?php
/**
 * Plugin Name:       Gutenberg Custom Block
 * Description:       A high-performance, accessible Gutenberg block demonstrating modern WordPress standards.
 * Version:           1.0.0
 * Author:            Upesh Vishwakarma
 * Text Domain:       gutenberg-custom-block
 *
 * @package           GutenbergCustomBlock
 */

// Exit if accessed directly to prevent malicious script execution.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function gutenberg_custom_block_register() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'gutenberg_custom_block_register' );
