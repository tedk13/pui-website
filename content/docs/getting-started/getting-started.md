---
title: Getting Started
date: 2018-07-20T12:59:15-04:00
---
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