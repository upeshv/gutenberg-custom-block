/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	RichText, 
	InspectorControls, 
	MediaPlaceholder 
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	TextControl 
} from '@wordpress/components';

/**
 * The edit function describes the structure of block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 *
 * @param {Object}   props               Properties passed to the block.
 * @param {Object}   props.attributes    The attributes of the block.
 * @param {Function} props.setAttributes Function to update block attributes.
 *
 * @return {Element} The element to render in the editor.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { 
		headline, 
		mainText, 
		backgroundImageUrl, 
		foregroundImageUrl, 
		foregroundImageAlt 
	} = attributes;

	/**
	 * Handles the selection of the background image from the Media Library.
	 * Updates the block attributes with the image ID and URL.
	 *
	 * @param {Object} media     The media object returned from the WP Media Library.
	 * @param {number} media.id  The attachment ID of the image.
	 * @param {string} media.url The URL of the image.
	 */
	const onSelectBackground = ( media ) => {
		setAttributes( { 
			backgroundImage: media.id, 
			backgroundImageUrl: media.url 
		} );
	};

	/**
	 * Handles the selection of the foreground image from the Media Library.
	 * Updates the block attributes with the image ID, URL, and Alt text for accessibility.
	 *
	 * @param {Object} media     The media object returned from the WP Media Library.
	 * @param {number} media.id  The attachment ID of the image.
	 * @param {string} media.url The URL of the image.
	 * @param {string} media.alt The alternative text of the image.
	 */
	const onSelectForeground = ( media ) => {
		setAttributes( { 
			foregroundImage: media.id, 
			foregroundImageUrl: media.url,
			foregroundImageAlt: media.alt || ''
		} );
	};

	// Level 1: Block Props (Includes the background image style)
	const blockProps = useBlockProps( {
		className: 'uv-custom-hero-block',
		style: {
			backgroundImage: backgroundImageUrl ? `url(${ backgroundImageUrl })` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}
	} );

	return (
		<> 
			{/* --- SIDEBAR CONTROLS --- */}
			<InspectorControls>
				<PanelBody title={ __( 'Accessibility Settings', 'gutenberg-custom-block' ) }>
					<TextControl
						label={ __( 'Foreground Image Alt Text', 'gutenberg-custom-block' ) }
						value={ foregroundImageAlt }
						onChange={ ( val ) => setAttributes( { foregroundImageAlt: val } ) }
						help={ __( 'Describe the image for screen readers.', 'gutenberg-custom-block' ) }
					/>
				</PanelBody>
			</InspectorControls>

			{/* --- EDITOR CANVAS AREA --- */}
			<div { ...blockProps }>
				
				{/* Background Image Selector: Only shown if no background is set */}
				{ ! backgroundImageUrl && (
					<MediaPlaceholder
						onSelect={ onSelectBackground }
						allowedTypes={ [ 'image' ] }
						multiple={ false }
						labels={ { title: __( 'Set Background Image', 'gutenberg-custom-block' ) } }
					/>
				) }

				{/* LEVEL 2: Inner Container */}
				<div className="uv-block-container">
					
					{/* LEVEL 3: Text Column */}
					<div className="uv-content-section">
						<RichText
							tagName="h2"
							value={ headline }
							onChange={ ( val ) => setAttributes( { headline: val } ) }
							placeholder={ __( 'Write Headline...', 'gutenberg-custom-block' ) }
							className="uv-headline"
						/>
						<RichText
							tagName="p"
							value={ mainText }
							onChange={ ( val ) => setAttributes( { mainText: val } ) }
							placeholder={ __( 'Write description text...', 'gutenberg-custom-block' ) }
							className="uv-main-text"
						/>
					</div>

					{/* LEVEL 3: Image Column */}
					<div className="uv-image-section">
						{ foregroundImageUrl ? (
							<img 
								src={ foregroundImageUrl } 
								alt={ foregroundImageAlt } 
								className="uv-foreground-preview" 
							/>
						) : (
							<MediaPlaceholder
								onSelect={ onSelectForeground }
								allowedTypes={ [ 'image' ] }
								multiple={ false }
								labels={ { title: __( 'Upload Foreground Image', 'gutenberg-custom-block' ) } }
							/>
						) }
					</div>
					
				</div>
			</div>
		</>
	);
}
