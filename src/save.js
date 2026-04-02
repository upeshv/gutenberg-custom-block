/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 *
 * @param {Object} props            Properties passed to the block.
 * @param {Object} props.attributes The attributes of the block.
 * @return {Element} The element to render on the frontend.
 */
export default function save( { attributes } ) {
	const { 
		headline, 
		mainText, 
		backgroundImageUrl, 
		foregroundImageUrl, 
		foregroundImageAlt 
	} = attributes;

	// Apply wrapper classes and inline styles for the background
	const blockProps = useBlockProps.save( {
		className: 'uv-custom-hero-block',
		style: {
			backgroundImage: backgroundImageUrl ? `url(${ backgroundImageUrl })` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}
	} );

	return (
		<section { ...blockProps }>
			<div className="uv-block-container">
				
				<div className="uv-content-section">
					{/* Conditionally render RichText content to avoid empty tags */}
					{ headline && (
						<RichText.Content 
							tagName="h2" 
							value={ headline } 
							className="uv-headline" 
						/>
					) }
					{ mainText && (
						<RichText.Content 
							tagName="p" 
							value={ mainText } 
							className="uv-main-text" 
						/>
					) }
				</div>

				<div className="uv-image-section">
					{/* Conditionally render the image only if one is selected */}
					{ foregroundImageUrl && (
						<figure className="uv-foreground-figure">
							<img 
								src={ foregroundImageUrl } 
								alt={ foregroundImageAlt } 
								className="uv-foreground-img" 
							/>
						</figure>
					) }
				</div>

			</div>
		</section>
	);
}
