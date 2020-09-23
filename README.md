# Prologue 

As part of [Ritter Insurance Marketing](https://ritterim.com)'s software development team, RIMdev, our frontend folks started Platform UI as a CSS framework for faster, more efficient development. Our suite of agent and staff tools have benefitted greatly, along with our team.

Platform UI has evolved in scope to include a base icon font family, Platform Icons, UI kits based in Adode XD, and, our philosophies and practices SPAs, static sites, and application development. 

We hope you find it as useful and easy to use as we do.


# Getting Started

## Quick Start


If you're not downloading or building, then CDN access via [UNPKG](https://unpkg.com/) is fast and easy to start working wityh Platform UI in your project!

### CSS

```html
<link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css">

```

### JS

Platform UI doesn't bring a lot of JS to the party as it was built as a companion to VueJS. That said, we ship with fully functional vanilla JS to get you started.

```html
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js"></script>
```

### Starter Templates

This is the basic template to get started for any HTML project.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>We're using Platform UI!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css">

  </head>
  <body>
    <h1>So cool!</h1>
  </body>
  <script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js"></script>
</html>
```
 
Looking for a little more to get going? 


```html
<!doctype html>
<html lang="en">

<head>
  <title>Holy Grail layout | Platform UI!</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- load fonts -->		
  <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css">
</head>

<body class="flex flex--column">
  <header class="py-6 px-3">
    <h1>Header</h1>
  </header>
  <main class="block-container flex--grow">
    <aside class="block lg-tablet-up-2">
      <h1>Side Menu</h1>
    </aside>
    <section class="block lg-tablet-up-8">
      <h1 class="text-base">Main Content</h1>
    </section>
    <aside class="block lg-tablet-up-2">
      <h1>Aside</h1>
    </aside>
  </main>
  <footer class="py-6 px-3">
    <h1>Footer</h1>
  </footer>
</body>
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js"></script>

</html>
```
 

## Download version xxx

Get platform UI in the flavour that best suites your project!

### Compiled CSS and JS

Compiled minified versions of Sass and JS source. 

[Download]()

### Source Files

You can also download the source files, uncompiled Sass and JS, to compile on your own. 

**This method gives you access to the Sass config file to implement your own custom theming**

[Download Source]()

### NPM

Add Platform UIs source files to your build. [Autoprefixer](https://github.com/postcss/autoprefixer), [Normalize](https://github.com/necolas/normalize.css/), and version 1.23 or higher of the [Sass](https://www.npmjs.com/package/sass) compiler will be needed to successfully build Platform UI.

```
$ npm install @ritterim/platform-ui
```

### CDN

While we don't host a dedicated CDN version of Platform UI, if you prefer, you can always access any npm package using [UNPKG](https://unpkg.com/).

## Theming

Both the downloaded and npm versions of Platform UI give you access to the config file `_config.scss`. Color maps, component and base defaults, and, breakpoints for Platfrom UI are set here. Direct access to this file in your custom build allow you to customize the compiled feel of Platform UI.

```scss
// _config.scss

@use "sass:map";
@use "sass:meta";

// Needed maps whether populated below of not. //-- DO NOT DELETE
$config-colors: () !default;
$platform-colors: () !default;


// ------------------
// Colors
// ------------------
// Add custom colors here to support your theme.

$brand-colors: (
  'navy':   #003f70,
  'skyblue':#91b9dc,
  'lightblue': #E5F5FF,
  'med-blue': #3f7bad,
  'beige':  #ecd7b1,
  'peach':  #dfa278,
  'salmon': #e58967,
  'brown':  #866657,
  'orange': #f48418
) !default;

$secondary-colors: (
  'red':    tomato,
  'olive':  #b5cc18,
  'purple': lighten(purple, 10%),
  'yellow': #FBBD08, // semantic-ui yellow
  'pink': pink,
  'cyan':   cyan,
  'violet': #6435C9,
  'blue':   dodgerblue,
  'green': #21BA45,
  'teal': teal,
  'gold': #ffcc00
) !default;

// $brand-colors and $secondary colors will be made available as text and background colors
// e.g., .text--{color} .background--{color}

// Comment out if not using a secondary-colors map

@if meta.variable-exists('secondary-colors') {
  $config-colors: map.merge($brand-colors, $secondary-colors);
} @else {
  $config-colors: map.merge($brand-colors, $config-colors);
}

// Default colors used in the Ritter Platform

$platform-focus-color: map.get($config-colors, 'med-blue') !default;
$platform-menu-color: map.get($config-colors, 'navy') !default;
$platform-link-color: map.get($config-colors, 'med-blue') !default;
$platform-help-color: map.get($config-colors, 'lightblue') !default;
$platform-note-color: #FFFDF5 !default;
$platform-help-text-color: map.get($config-colors, 'navy') !default;

// Platform colors need to be placed back in a map
// Removing platform-colors will not affect compilation


$platform-colors-vars: (
  'focus' : $platform-focus-color,
  'menu' : $platform-menu-color,
  'link' : $platform-link-color,
  'help' : $platform-help-color,
  'note' : $platform-note-color,
  'help-text' : $platform-help-text-color
) !default;

@if meta.type-of($platform-colors-vars) == 'map' {
  $platform-colors: map.merge($platform-colors-vars, $platform-colors);
}


// --------------------
// Breakpoints
// --------------------

// Breakpoints map used in our breakpoints mixin
// as well as some of our utility classes

$breakpoints: (
  mobile: 	0px,
  tablet: 	768px,
  lg-tablet: 	991px,
  laptop: 	1240px,
  desktop: 	1800px
);




// --------------------
// Sizes
// --------------------

// image radius
$image-size: (
  'small' : 100px,
  'medium': 150px,
  'large':  200px
);

// Some height variables
$menu-height: 4.5rem;
$menu-banner-height: 14rem;

$max-height: 600px; // NOTE: define where we're using this

$radius: (
  'button': 5rem,
  'default': .3rem,
  'round': 50%
);




// --------------------
// Timing
// --------------------

// milliseconds; animations, transitions

$duration: .2s;
$transitions: .2s;
$hue-threshold: .1;   // NOTE: Set to .1 to use with math.percentage
$opacity: .9;




// --------------------
// Fonts
// --------------------

@import url('https://rsms.me/inter/inter-ui.css');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500|Roboto+Slab|Roboto:300i,400,500,700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css');

$fonts: (
  'base': #{'Inter UI', sans-serif},
  'base-alt': #{'Inter UI var alt', sans-serif},
  'code': #{'Lucida Console', 'Courier New', 'Courier', monospace},
  'color': #333333,
  'headline': #{'Roboto', sans-serif},
  'headline-slab': #{'Roboto Slab', serif},
  'post-headline': #{'Raleway', sans-serif},
  'size': 1rem
);




// --------------------
// Drawers
// --------------------

$drawer-background: #fff !default;

$drawer-primary-padding: 2rem;

$drawer-right-height: calc(100% - #{$menu-height});
$drawer-right-width: 27rem;




// --------------------
// Button specific
// --------------------

$button-border-radius: 5rem !default;

$button-primary-background: #FFFFFF !default;
$button-primary-color: #666666 !default;
$button-secondary-background: map.get($config-colors, 'salmon') !default;
$button-secondary-color: #FFFFFF !default;
$button-filter-color: map.get($brand-colors, 'med-blue') !default;

$button-primary-padding: .25rem 1rem;
$button-large-padding: .5rem 1rem;
$button-group-margin: 0 .25rem;




// --------------------
// Cards
// --------------------

$card-padding: 1rem;
$card-footer-top-margin: 1rem;
$card-min-height: 23rem;




// --------------------
// Loader
// --------------------

$loader-color-primary: map.get($config-colors, "navy") !default;
$loader-border-top-primary: transparent !default;
$loader-color-inverted: #fff !default;
$loader-border-top-inverted: transparent !default;

$loader-colors: (
  'primary': $loader-color-primary,
  'primary-top': $loader-border-top-primary,
  'inverted': $loader-color-inverted,
  'inverted-top': $loader-border-top-inverted
) !default;

```

## Third Parties

There are a few third party choices we've incorporated into Platform UI, these are part of the compiled version only. If you choose to build Platform UI from source, you'll need to consider the following.

### Animate.css

We started to build our own animations, but why bother when [Animate.css](https://daneden.github.io/animate.css/) is around? It fits all of our needs and plays nicely with VueJS. 

**If you're using Platform UI in your own build process, you'll need to include Animate.css.**

For a list of supported More from the Animate.css [docs](https://github.com/daneden/animate.css#animatecss------).

Simple usage:

```html
<div class="animated {animation name} delay-2s">Example</div>
```

Combining Animate.css with Vue transitions:

```html
<transition
	name="custom-classes-transition"
	enter-active-class="animated {animation name}"
	leave-active-class="animated {animation name}"
>
```  
### Highlight.js

Platform UI handles inline code, `<code></code>`, highlights, however we leverage [Highlight.js](https://highlightjs.org/) during the build to add a more complete syntax highlighting solutions. 	 

**If you're using Platform UI in your own build process, you'll need to include Normalize.css.**

### Normalize.css

The nature of browsers and their vendors often require a reset to normalize behavious for standard HTML tags, so we include [Normalize.css](https://necolas.github.io/normalize.css/) as part of Patform UIs build process.

**If you're using Platform UI in your own build process, you'll need to include Normalize.css.**

### Postcss

In the same spirit as Normalize.css, we also leverage [Postcss](https://github.com/postcss/postcss) and [Autoprefixer](https://github.com/postcss/autoprefixer) to reduce browser inconsistencies. 

**If you're using Platform UI in you're own build process, you'll need to include Postcss. Likewise, if you prefer greater browser support, you will have to build Platform UI from source.**

Our current browser support settings:

```js
"browserslist": [
	"last 2 version",
	"> 2%"
]
```  

# Content

## Fonts


Platform UI also considers font strategy; Specific to legibility in the scope of our appliactions, we've chosen the following Google webfonts:

| Usage | Font Family | 
|-------|-------------|
| Body  | [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)| 
| Headline | [Roboto Medium](https://fonts.google.com/specimen/Roboto)|
| Code | [Inconsolata](https://fonts.google.com/specimen/Inconsolata) | 


Nunito and Roboto both being members of Google fonts [Superfamilies](https://fonts.google.com/featured/Superfamilies). Combined link reference:

### Standard embed

Include a `<link>` reference in your document `<head>`:

```html
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Inconsolata&display=swap" rel="stylesheet">
```

### @import

If your incorporating Platform UI into your own build pipeline, you may want to consider importing this font stack via a seperate css sheet.

```css
/* fonts.css or _fonts.scss */
@import url(`https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Inconsolata&display=swap`);
```

## Icons

Platform UI has a specific scope when considering icon fonts. While there's little doubt as to Font Awesome's formidable library, it's grown quite large for our needs, so we've developed a smaller companion icon font to Platform UI...Platform icons.


As with our Font usage, we recommend downloading and storing Platform Icons locally.

[Download]()

## Typography

### Headlines

### Paragraphs

## Utilities

### Borders
### Close action

_**Move this over to buttons, it's NOT a utility.**_

_**The example does not relfect a clear close action.**_

### Background Colors
### Inverted
### Transparent
### Pointer (not Cursor pointer)
### Display

Not everything works the way you want it to, so we've provided utilities for print and responsive display.

To hide altogether via `hidden`, or a print specifc consideration, to `show-` or `hide-print` it's fairly simple.

#### Display and @print

| Target    | class        | display | 
|-----------|--------------|---------|
| All       | `hidden`     | `none`  |
| `@print`  | `show-print` | `block` |
| `@print`  | `hide-print` | `none`  |

#### Responsive display 

Responsive display becomes more complex. Intent to `show-` or `hide-`, then determine your target resolution e.g., `mobile-only`. 

If you only want a button to display at tablet resolution, it would look like this:

```html
<div class="block-container">
  <button class="button hide-tablet-only show-laptop-up">Click</button>
</div>
```

The table below should help you determine other responsive combinations.

| Breakpoints            | Target                 | Class prefix<br>Hide<br>`display:none` | Class prefix<br>Show<br>`display: block`            | Class suffix     |
|:----------------------:|:----------------------:|:--------------------:|:---------------:|:----------------:| 
| 0px &lt;         	     | mobile                 | `hide-`              | `show-`         | `mobile-up`      |
| 0px &lt;&gt; 767px     | &gt; tablet            | `hide-`              | `show-`         | `mobile-only`    |
| &ge; 768px             | &lt; tablet            | `hide-`              | `show-`         | `tablet-up`      |
| 768px &lt;&gt; 990px   | tablet &lt;&gt; tablet | `hide-`              | `show-`         | `tablet-only`    |
| &lt; 990px             | tablet only            | `hide-`              | `show-`         | `tablet-down`    |
| &ge; 991px             | large tablet           | `hide-`              | `show-`         | `lg-tablet-up`   |
| 991px &lt;&gt; 1239px  | large tablet only      | `hide-`              | `show-`         | `lg-tablet-only` |
| &lt; 1239px            | &gt; large tablet      | `hide-`              | `show-`         | `lg-tablet-down` |
| &ge; 1240px            | &gt; laptop            | `hide-`              | `show-`         | `laptop-up`      |
| 1240px &lt;&gt; 1799px | laptop &lt;&gt; desktop| `hide-`              | `show-`         | `laptop-only`    |
| &lt; 1799px            | &gt; desktop           | `hide-`              | `show-`         | `laptop-down`    |
| &ge; 1800px            | &gt; desktop           | `hide-`              | `show-`         | `desktop-up`     |


```html
<!-- 
The button will be hidden at laptop resolution and greater, 
It will be displayed lg-laptop and lower
-->

<button class="hide-laptop-up">Click</button>

<!-- 
The button will be show only on mobile resolution.
-->

<button class="show-mobile-only">Click</button>
```

### Flex

Leveraging flexbox is easy with Platform UI. For more on [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

...

### Position

Position fixed, `pos-fix`, takes an element out of the natural DOM order.

When positioning an element absolute, the element will position according to the closest parent element that has position: relative. For this you can use the class , `pos-rel` on the parent element you want to position the absolute, `pos-abs`, element. Combine these with our pinning utility to absolutley position child elements.

||||
|:---:|:---:|:---:|
|`pin-top` <br>`pin-left` | `pin-top`<br>`pin-center-top` | `pin-top`<br>`pin-right` |




### Color

Color is one of the largest extensions of utilities in Platform UI. All colors set in the `_config.scss`, along with Platform UI's default greyscale, are generated into utilities for `color` (text) and `background-color`. 

Usage will be governed by color naming conventions set either by Platform UI, or in your own custom `_config.scss` file.


| Target | Class Structure | Example |
|-------|-----------|---------|
| Font color | `text-{color name}` | `text-salmon`|
| Background color | `background-{color name}` | `background-navy`|


#### CSS variables

Not every design system, or framework, covers every need. There may be that custom-thing-you-want, but you'd still like to incorporate the style of what you've already built.

**Every color and greyscale class or utility generated by Platform UI is also generated by key-name as a native CSS variable.**

If you want to use the compiled, or CDN, version of Platform UI, we give you access to all CSS colors to leverage in a supplimental style sheet.

`--pui-{ color name }`

The example below gives our widget a background color of the Platform UI hex value for `navy`. 

```css
.widget {
  background-color: var(--pui-navy); /* #003f70 */
}
```

For more on what we expose as CSS variables, [click here]().

## Layout

### Block Grid

Blocks are Platform UI's core structural component. Here are some of the features and concepts behind our grid.

- Blocks are based on a 12 column grid, they allow content to be evenly distributed. **They are a mobile first approach.** 
- All block grids start with a wrapper of `block-container` that is set to `display: flex` with `flex-wrap: wrap`.
- `block-container` can also act as a row.
- `block-container` has modifiers to allow auto-placement based on responsive breakpoints.
- Using `block-container` and adding `block` children will give you an evenly distributed block grid.
- If a resposive pattern is not placed on `block-container tablet-up-4`, responsive modifiers can be placed on the `block-{number}` level item as well. The `block-{number}` will always reflect the mobile, smallest breakpoint, value.

#### 12 Columns

```html
<div class="block-container blocks-px-2 blocks-py-2">
  <div class="block block-1">
    <div class="pui-card">
    block-1    
    </div>  
  </div>
  <div class="block block-11">
    <div class="pui-card">
    block-11  
    </div>  
  </div>
  <div class="block block-2">
    <div class="pui-card">
    block-2    
    </div>  
  </div>
  <div class="block block-10">
    <div class="pui-card">
    block-10  
    </div>
  </div>
  <div class="block block-3">
    <div class="pui-card">
    block-3    
    </div>
  </div>
  <div class="block block-9">
    <div class="pui-card">
    block-9    
    </div>  
  </div>
  <div class="block block-4">
    <div class="pui-card">
    block-4    
    </div>  
  </div>
  <div class="block block-8">
    <div class="pui-card">
    block-8    
    </div>  
  </div>
  <div class="block block-5">
    <div class="pui-card">
    block-5    
    </div>  
  </div>
  <div class="block block-7">
    <div class="pui-card">
    block-7    
    </div>  
  </div>
  <div class="block block-6">
    <div class="pui-card">
    block-6    
    </div>  
  </div>
  <div class="block block-6">
    <div class="pui-card">
    block-6    
    </div>  
  </div>
  <div class="block block-7">
    <div class="pui-card">
    block-7    
    </div>  
  </div>
  <div class="block block-5">
    <div class="pui-card">
    block-5    
    </div>  
  </div>
  <div class="block block-8">
    <div class="pui-card">
    block-8    
    </div>  
  </div>
  <div class="block block-4">
    <div class="pui-card">
    block-4    
    </div>  
  </div>
  <div class="block block-9">
    <div class="pui-card">
    block-9    
    </div>  
  </div>
  <div class="block block-3">
    <div class="pui-card">
    block-3    
    </div>  
  </div>
  <div class="block block-10">
    <div class="pui-card">
    block-10  
    </div>
  </div>
  <div class="block block-2">
    <div class="pui-card">
    block-2    
    </div>  
  </div>
  <div class="block block-11">
    <div class="pui-card">
    block-11  
    </div>
  </div>
  <div class="block block-1">
    <div class="pui-card">
    block-1    
    </div>  
  </div>
  <div class="block block-12">
    <div class="pui-card">
    block-12  
    </div>
  </div>
</div>
```
#### Standard Grid

```html
<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block block--shrink">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
</div>
```

#### Responsive Grid with Flex

```html
<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block block--fill">
    <div class="pui-card">
      Test
    </div>
  </div>
</div>

<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block block--shrink">
    <div class="pui-card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      Test
    </div>
  </div>
</div>
```


### Block grid breakpoints

Spacing in Platform UI is based on `rem` values with the exception of breakpoints.

| Breakpoints | 0px>         | >768px       | >991px          | >1240px      | >1800px       |
|-------------|--------------|--------------|-----------------|--------------|---------------|
| label       | mobile       | tablet       | lg-tablet       | laptop       | desktop       |
| prefix      | `mobile-up-` | `tablet-up-` | `lg-tablet-up-` | `laptop-up-` | `desktop-up-` |

