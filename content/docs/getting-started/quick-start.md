---
title: Quick Start
date: 2018-07-20T12:59:15-04:00
weight: 1
---

If you're not downloading or building, then CDN access via [UNPKG](https://unpkg.com/) is fast and easy to start working wityh Platform UI in your project!

## CSS

<div class="mb-4">
{{< highlight html >}}
<link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css">
{{< /highlight >}}
</div>

## JS

Platform UI doesn't bring a lot of JS to the party as it was built as a companion to VueJS. That said, we ship with fully functional vanilla JS to get you started.

<div class="mb-4">
{{< highlight html >}}
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js"></script>
{{< /highlight >}}
</div>

## Starter Templates

This is the basic template to get started for any HTML project.

<div class="mb-4">
{{< highlight html >}}
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
{{< /highlight >}}
</div>
 
Looking for a little more to get going? 


<div class="mb-4">
{{< highlight html >}}
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
{{< /highlight >}}
</div>
 
 ## Third Parties

There are a few third party choices we've incorporated into Platform UI, these are part of the compiled version only. If you choose to build Platform UI from source, you'll need to consider the following.

## Animate.css

We started to build our own animations, but why bother when [Animate.css](https://daneden.github.io/animate.css/) is around? It fits all of our needs and plays nicely with VueJS. 

**If you're using Platform UI in your own build process, you'll need to include Animate.css.**

For a list of supported More from the Animate.css [docs](https://github.com/daneden/animate.css#animatecss------).

Simple usage:

<div class="mb-4">
{{< highlight html >}}
<div class="animated {animation name} delay-2s">Example</div>
{{< /highlight >}}
</div>

Combining Animate.css with Vue transitions:

<div class="mb-4">
{{< highlight html >}}
<transition
	name="custom-classes-transition"
	enter-active-class="animated {animation name}"
	leave-active-class="animated {animation name}"
>
{{< /highlight >}}
</div>
## Highlight.js

Platform UI handles inline code, `<code></code>`, highlights, however we leverage [Highlight.js](https://highlightjs.org/) during the build to add a more complete syntax highlighting solutions. 	 

**If you're using Platform UI in your own build process, you'll need to include Normalize.css.**

## Normalize.css

The nature of browsers and their vendors often require a reset to normalize behavious for standard HTML tags, so we include [Normalize.css](https://necolas.github.io/normalize.css/) as part of Patform UIs build process.

**If you're using Platform UI in your own build process, you'll need to include Normalize.css.**

## Postcss

In the same spirit as Normalize.css, we also leverage [Postcss](https://github.com/postcss/postcss) and [Autoprefixer](https://github.com/postcss/autoprefixer) to reduce browser inconsistencies. 

**If you're using Platform UI in you're own build process, you'll need to include Postcss. Likewise, if you prefer greater browser support, you will have to build Platform UI from source.**

Our current browser support settings:

{{< highlight js >}}
"browserslist": [
	"last 2 version",
	"> 2%"
]
{{< /highlight >}}