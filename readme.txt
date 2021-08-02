# Gutenberg Custom Hero Block

Custom blocks consist of four fields, Main Title, Description, Background Image, and Foreground Image.

One of the main features of all the custom blocks is that they are reusable and easy to access on any page with just a few clicks from the backend.

Have also created a custom block category under which I have listed this Hero Block.

Below is the list of features that are used to customized this block and block category.

* Custom Block Category
* Custom Hero Block
* Dependency Files
* Bult-in attributes
* Custom attributes
* Built-in Edit functions
* Built-in Save functions

<br>
<br>

**Custom Block Category Filter**
```
  upeshv_customblocks_category()
```

**Custom Hero Block**
```
  upeshv_hero_blocks()
```

**Dependency Files**
```
  const { registerBlockType } = wp.blocks;
  const { RichText, MediaUpload, PlainText } = wp.editor;
  const { Button } = wp.components;
  const { __, _x, _n, _nx } = wp.i18n;
```

**Bult-in attributes**
```
  title: __('Hero', 'upeshv'),
  description: __('Block to generate a custom Hero banner', 'upeshv'),
  icon: 'id',
  cateogry: 'custom-blocks',
```

**Custom attributes**
```
  attributes: {

    headline : {
      ....
    },
    mainText : {
      ...
    },
    backgroundImage : {
      ...
    },
    backgroundImageUrl : {
      ...
    },
    foregroundImage : {
      ...
    },
    foregroundImageAlt : {
      ...
    },
    foregroundImageUrl : {
      ...
    },

  },
```

**Built-in Edit functions**
```
  edit({ attributes, className, setAttributes }) {...}
```

**Built-in Save functions**
```
  save({ attributes }) {...}
```
<br>
<br>
<br>
<br>


## Screenshots

Below are the Screenshot for demo purpose.

1. Backend Screenshot.

  ![Screenshot](https://github.com/upeshv/gutenberg-custom-block/blob/master/demo-images/backend.png?raw=true)

2. Frontend Screenshot.

  ![Screenshot](https://github.com/upeshv/gutenberg-custom-block/blob/master/demo-images/frontend.png?raw=true)


## Note: 
I haven't spend much time in styling the backend fields, since this was not the part of this task requirements.


## Compatibility and security

* Have followed the defined [WordPress coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/)
* All the Data is been Sanitized, Escaped, and Validated.
* The features is compatible with WordPress version 5.0 and latest and PHP versions 5.6.0 and latest.
* The plugin is translation-ready.
* WCAG 2.0 Compatible


<br>
<br>
**Happy Coding :smiley:**