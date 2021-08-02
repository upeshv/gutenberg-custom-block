/**
 * Import WP Blocks, WP Editor, WP Components and WP i18n
 * @constructor
 * @param {Object} - custom hero block element.
 */

const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Button } = wp.components;
const { __, _x, _n, _nx } = wp.i18n;

registerBlockType( 'upeshv/hero', {

  // built-in attributes
  title: __('Hero', 'upeshv'),
  description: __('Block to generate a custom Hero banner', 'upeshv'),
  icon: 'id',
  cateogry: 'custom-blocks',


  // custom attributes
  attributes: {

    headline : {
      type: 'string',
      source: 'html',
      selector: 'h4'
    },
    mainText : {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    backgroundImage : {
      type: 'string',
      default: null
    },
    backgroundImageUrl : {
      attribute: 'src',
      selector: '.hero__bgimage'
    },
    foregroundImage : {
      type: 'string',
      default: null
    },
    foregroundImageAlt : {
      attribute: 'alt',
      selector: '.hero__fgimage'
    },
    foregroundImageUrl : {
      attribute: 'src',
      selector: '.hero__fgimage'
    },

  },

  // built-in functions
  edit({ attributes, className, setAttributes }) {

    const {
      headline,
      mainText,
      backgroundImage,
      backgroundImageUrl,
      foregroundImage,
      foregroundImageAlt,
      foregroundImageUrl
    } = attributes;

    // custom functions
    function updateHeadline(newHeadline) {
      setAttributes( { headline: newHeadline } );
    }

    function updateMainText(newMainText) {
      setAttributes( { mainText: newMainText } );
    }

    function getImageButton(openEvent) {
      if(backgroundImageUrl) {
        return (
          <img 
            src={ backgroundImageUrl }
            onClick={ openEvent }
            className="image"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button 
              onClick={ openEvent }
              className="button button-large"
            >
              Add Background Image
            </Button>
          </div>
        );
      }
    }

    function onSelectBgImage(newBgImage) {
      setAttributes( { backgroundImageUrl: newBgImage.url } );
    }

    function getFgImageButton(openFgEvent) {
      if(foregroundImageUrl) {
        return (
          <img 
            src={ foregroundImageUrl }
            onClick={ openFgEvent }
            className="image"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button 
              onClick={ openFgEvent }
              className="button button-large"
            >
              Add Foreground Image
            </Button>
          </div>
        );
      }
    }

    function onSelectFgImage(newFgImage) {
      setAttributes( { foregroundImageUrl: newFgImage.url } );
    }

    return ([

      // Backend Data
      <div class="hero" data-module="hero">
        <RichText key="editable" 
                  tagName="h4" 
                  placeholder="Add Hero headline here.."
                  value={ headline }
                  onChange={ updateHeadline } />
        
        <RichText key="editable" 
                  tagName="p" 
                  placeholder="Add Hero main text here.."
                  value={ mainText }
                  onChange={ updateMainText } />

        <MediaUpload 
          onSelect={ onSelectBgImage }
          type="image"
          value={ backgroundImage }
          render={ ({open}) => getImageButton(open) }
          />

        <MediaUpload 
          onSelect={ onSelectFgImage }
          type="image"
          value={ foregroundImage }
          render={ ({open}) => getFgImageButton(open) }
          />

      </div>

    ]);

  },

  save({ attributes }) {

    const {
      headline,
      mainText,
      backgroundImageUrl,
      foregroundImageAlt,
      foregroundImageUrl
    } = attributes;

    const foregroundImageFn = (src, alt) => {
      if(!src) return null;
  
      if(alt) {
        return (
          <img 
            src={ src }
            alt={ alt }
          /> 
        );
      }
      
      // No alt set, so let's hide it from screen readers
      return (
        <img 
          src={ src }
          alt=""
          aria-hidden="true"
        /> 
      );
    };

    return (

      // Frontend Data
      <div class="hero alignfull" data-module="hero">
        <div class="container">
          <div class="hero-wrapper" style={{ backgroundImage: `url(${backgroundImageUrl})` }} >
            <div class="hero-wrapper__block">
                <h1>{ headline }</h1>
                <RichText.Content tagName="p" 
                                  value={ mainText }
                                    />
            </div>
            <div class="hero-wrapper__block">
              <div class="post__image">
                { foregroundImageFn(foregroundImageUrl, foregroundImageAlt) }
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  },

});