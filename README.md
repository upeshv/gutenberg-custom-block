# Custom Hero Block (Feature Highlight)

Hey there! 👋 This is a custom Gutenberg block I built to demonstrate modern WordPress development practices. 

My goal with this project wasn't just to make something that looks good on the live website, but to build a component that provides a native, intuitive experience for the content editors using the WordPress backend.

## 🛠️ How I built this (and why)

I moved away from legacy PHP block registration and used the modern `@wordpress/scripts` workflow. Here are the core features I focused on:

* **Modern Block API (v3):** I used `block.json` as the single source of truth for registering the block. It keeps the codebase clean and lets me use WordPress Core's native theme supports (like spacing and typography) instead of writing unnecessary custom CSS.
* **Editor UX First:** There's nothing worse than adding a block and just seeing a blank white box. I used native `<MediaPlaceholder>` components to guide users to upload their images, and RichText fields so they get that true WYSIWYG editing experience.
* **Built-in Accessibility (A11y):** Accessibility shouldn't be an afterthought. I added a custom sidebar panel using `InspectorControls` specifically so editors can easily add `alt` text to the foreground image for screen readers.
* **Semantic Frontend:** The `save.js` file outputs clean, semantic HTML (`<section>`, `<figure>`, `<h2>`, `<p>`) to keep the DOM clean and SEO-friendly.
* **Responsive CSS Grid:** Instead of relying on old float or flexbox hacks, I used a mobile-first CSS Grid approach. It handles the 50/50 desktop split effortlessly and stacks perfectly on mobile devices.

## 🚀 Want to test it out?

You don't need to run a build process to test this out. I've included the compiled `build` folder in the repo so you can plug and play:

1. Download this repository as a `.zip` file.
2. Upload and extract it into your local WordPress `wp-content/plugins/` folder.
3. Activate the plugin from your WordPress dashboard.
4. **Important:** Open any page/post, click the `+` (Block Inserter), and search for **"Feature Highlight"** to add the block.

## 📦 What's under the hood?

The block handles these core attributes, saving the text directly into the HTML to keep it searchable in the database:
* `headline` & `mainText`
* `backgroundImage` (ID and URL)
* `foregroundImage` (ID, URL, and Alt text)

## 📸 Interface Previews

**1. The Backend Editor Experience**
![Editor Screenshot](https://github.com/upeshv/gutenberg-custom-block/blob/master/demo-images/backend.png?raw=true)

**2. The Frontend Result**
![Frontend Screenshot](https://github.com/upeshv/gutenberg-custom-block/blob/master/demo-images/frontend.png?raw=true)

## 🔒 Compatibility and Security

I take code quality and site security seriously. This project reflects that through:
* **Coding Standards:** Strictly follows [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/) for both PHP and JavaScript (ES6+). I utilize `@wordpress/scripts` for automated linting to ensure consistent, enterprise-grade code quality.
* **Data Integrity:** All user input is managed via the Block API, ensuring data is properly sanitized, escaped, and validated before rendering.
* **Version Support:** Optimized for **WordPress 6.0+** and **PHP 7.4+** to utilize the latest block editor features and performance improvements.
* **Global Ready:** The plugin is completely translation-ready, utilizing the `@wordpress/i18n` package and a strict text-domain.
* **A11y Compliant:** Engineered for **WCAG 2.1 AA** compatibility, featuring dedicated controls for `alt` text management to ensure the web stays accessible.

## 💻 Local Development

If you want to pull it down and tinker with the React/SCSS source files:

```bash
# Install the required packages
npm install

# Watch for changes while coding
npm run start

# Compile for production
npm run build
```

<br>
<br>

**Happy Coding :smiley:**
