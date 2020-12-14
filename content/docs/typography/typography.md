---
title: Typography
date: 2018-07-20T12:59:15-04:00
---
{{< heading heading="h2" id="headings">}}
Headings
{{< /heading >}}

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<div class="mt-3 mb-4">
{{< highlight html >}}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="paragraphs">}}
Paragraphs
{{< /heading >}}

<div class="card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <p>Paragraph</p>
  </div>
  <div class="block block-6">
    <p><strong>Note:</strong> Our paragraphs have a default margin-bottom of 1rem</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<p>Paragraph</p>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="typography-utilities">}}
Typography Utilities
{{< /heading >}}
Below are some of our typography utilities.

### Case
Utility classes to modify text case type.

| Type | Modifier Class | Result |
|---|---|---|
| Uppercase | `.text--uppercase` | <p class="text--uppercase">this is uppercase</p> |
| Lowercase | `.text--lowercase` | <p class="text--lowercase">THIS IS LOWERCASE</p> |
| Capitalize Case | `.text--capitalize` | <p class="text--capitalize">this is capitalize case</p> |
| Sentence Case | `.text--uppercase` | <p class="text--sentencecase">This IS senTENCe cASe</p> |

<div class="mb-4">
{{< highlight html >}}
<p class="text--uppercase">this is uppercase</p>
<p class="text--lowercase">THIS IS LOWERCASE</p>
<p class="text--capitalize">this is capitalize case</p>
<p class="text--sentencecase">This IS senTENCe cASe</p>
{{< /highlight >}}
</div>


{{< heading heading="h3" id="color">}}
Color
{{< /heading >}}

`text-{ color }`, `text-{ color }--hover` combines our [greyscale](/section-color.html#kssref-color-greyscale), [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.


| Color | Modifier Class | Hover Class |
|-------|-------|-------|-------|
| <p class="text-white background-black">White</p> | `.text-white` | `.text-white--hover` |
| <p class="text-lighter background-dark">Lighter</p> | `.text-lighter` | `.text-lighter--hover` |
| <p class="text-light-mid background-dark">Light Mid</p> | `.text-light-mid` | `.text-light-mid--hover` |
| <p class="text-light background-dark">Light</p> | `.text-light` | `.text-light--hover` |
| <p class="text-base">Base</p> | `.text-base` | `.text-base--hover` |
| <p class="text-dark">Dark</p> | `.text-dark` | `.text-dark--hover` |
| <p class="text-black">Black</p> | `.text-black` | `.text-black--hover` |
| <p class="text-navy">Navy</p> | `.text-navy` | `.text-navy--hover` |
| <p class="text-skyblue">Skyblue</p> | `.text-skyblue` | `.text-skyblue--hover` |
| <p class="text-med-blue">Med Blue</p> | `.text-med-blue` | `.text-med-blue--hover` |
| <p class="text-beige">Beige</p> | `.text-beige` | `.text-beige--hover` |
| <p class="text-peach">Peach</p> | `.text-peach` | `.text-peach--hover` |
| <p class="text-salmon">Salmon</p> | `.text-salmon` | `.text-salmon--hover` |
| <p class="text-brown">Brown</p> | `.text-brown` | `.text-brown--hover` |
| <p class="text-orange">Orange</p> | `.text-orange` | `.text-orange--hover` |

<div class="mt-3 mb-4">
{{< highlight html >}}
<p class="text-white">White</p> 
<p class="text-lighter">Lighter</p> 
<p class="text-light-mid">Light Mid</p> 
<p class="text-light">Light</p> 
<p class="text-base">Base</p> 
<p class="text-dark">Dark</p> 
<p class="text-black">Black</p> 
<p class="text-navy">Navy</p> 
<p class="text-skyblue">Skyblue</p> 
<p class="text-med-blue">Med Blue</p> 
<p class="text-beige">Beige</p> 
<p class="text-peach">Peach</p> 
<p class="text-salmon">Salmon</p> 
<p class="text-brown">Brown</p> 
<p class="text-orange">Orange</p> 
{{< /highlight >}}
</div>
 
{{< heading heading="h3" id="general">}}
General Utilities
{{< /heading >}}

General utilities add class-based css transforms like `uppercase` and `bold`. See the chart below for the full list.

| Utility | Modifier Class | Result |
|---|---|---|
| Bold Text | `.text--bold` | <p class="text--bold">Hello World!</p> |
| Underline Text | `.text--underline` | <p class="text--underline">Hello World!</p> |
| Hover Underline Text | `.text-underline--hover` | <p><span class="text-underline--hover">Hello World!</span></p> |
| Align Center | `.text--center` | <p class="text--center">Hello World!</p> |
| Align Right | `.text--right` | <p class="text--right">Hello World!</p> |
| No Line Wrap | `.text--nowrap` | <p class="text--nowrap">The quick brown fox jumped over the lazy dog</p> |

<div class="mb-4">
{{< highlight html >}}
<p class="text--bold">Hello World!</p>
<p class="text--underline">Hello World!</p>
<p><span class="text-underline--hover">Hello World!</span></p>
<p class="text--center">Hello World!</p>
<p class="text--right">Hello World!</p>
<p class="text--nowrap">The quick brown fox jumped over the lazy dog</p>
{{< /highlight >}}
</div>

{{< heading heading="h3" id="sizing">}}
Sizing
{{< /heading >}}

`text--size-{ size }` leverages percetages for smaller or larger text. The defaut `font-size` is `1rem`.

| Size | Modifier Class | Result |
| ------- | -----------------| ------- |
| `50%`   | `text--size-xxs` | <p class="text--size-xxs">Hello World!</p> |
| `70%`   | `text--size-xs`  | <p class="text--size-xs">Hello World!</p> |
| `85%`   | `text--size-sm`  | <p class="text--size-sm">Hello World!</p> |
| `115%`  | `text--size-md`  | <p class="text--size-md">Hello World!</p> |
| `125%`  | `text--size-lg`  | <p class="text--size-lg">Hello World!</p> |
| `150%`  | `text--size-xl`  | <p class="text--size-xl">Hello World!</p> |
| `200%`  | `text--size-xxl` | <p class="text--size-xxl">Hello World!</p> |

<div class="mt-3 mb-4">
{{< highlight html >}}
<p class="text--size-xxs">Hello World!</p>
<p class="text--size-xs">Hello World!</p>
<p class="text--size-sm">Hello World!</p>
<p class="text--size-md">Hello World!</p>
<p class="text--size-lg">Hello World!</p>
<p class="text--size-xl">Hello World!</p>
<p class="text--size-xxl">Hello World!</p>
{{< /highlight >}}
</div>

{{< heading heading="h3" id="text-shadow">}}
Text Shadow
{{< /heading >}}

You can add a text-shadow to an element using colors from our [greyscale](/section-color.html#kssref-color-greyscale) map.

| Greyscale | Modifier Class | Result |
|--|--|--|
| White | `.text--shadow-white` | <p class="text--shadow-white">Hello World!</p> |
| Lighter | `.text--shadow-lighter` | <p class="text--shadow-lighter">Hello World!</p> |
| Light Mid | `.text--shadow-light-mid` | <p class="text--shadow-light-mid">Hello World!</p> |
| Light | `.text--shadow-light` | <p class="text--shadow-light">Hello World!</p> |
| Base | `.text--shadow-base` | <p class="text--shadow-base">Hello World!</p> |
| Dark | `.text--shadow-dark` | <p class="text--shadow-dark">Hello World!</p> |
| Black | `.text--shadow-black` | <p class="text--shadow-black">Hello World!</p> |

<div class="mt-3 mb-4">
{{< highlight html >}}
<p class="text--shadow-white">Hello World!</p>
<p class="text--shadow-lighter">Hello World!</p>
<p class="text--shadow-light-mid">Hello World!</p>
<p class="text--shadow-light">Hello World!</p>
<p class="text--shadow-base">Hello World!</p>
<p class="text--shadow-dark">Hello World!</p>
<p class="text--shadow-black">Hello World!</p>
{{< /highlight >}}
</div>
 