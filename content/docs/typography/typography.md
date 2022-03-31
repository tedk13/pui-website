---
title: Typography
---
The typography settings created for headings and paragraphs by platform-ui, as well as the different typography utilities.


## Headings

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


## Paragraphs

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


## Typography Utilities

Below are some of our typography utilities.


### Case

Utility classes to modify text case type.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Type</th>
      <th>Modifier Class</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Type">Uppercase</td>
      <td data-label="Modifier Class"><code>.text--uppercase</code></td>
      <td data-label="Result"><p class="text--uppercase">this is uppercase</p></td>
    </tr>
    <tr>
      <td data-label="Type">Lowercase</td>
      <td data-label="Modifier Class"><code>.text--lowercase</code></td>
      <td data-label="Result"><p class="text--lowercase">THIS IS LOWERCASE</p></td>
    </tr>
    <tr>
      <td data-label="Type">Capitalize Case</td>
      <td data-label="Modifier Class"><code>.text--capitalize</code></td>
      <td data-label="Result"><p class="text--capitalize">this is capitalize case</p></td>
    </tr>
    <tr>
      <td data-label="Type">Sentence Case</td>
      <td data-label="Modifier Class"><code>.text--sentancecase</code></td>
      <td data-label="Result"><p class="text--capitalize">This IS senTENCe cASe</p></td>
    </tr>
  </tbody>
</table>

### Color

`text-{ color }`, `text-{ color }--hover` combines our [greyscale](/section-color.html#kssref-color-greyscale), [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Color</th>
      <th>Modifier Class</th>
      <th>Hover Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Color">
        <p class="text-white background-black">White</p>
      </td>
      <td data-label="Modifier Class"><code>.text-white</code></td>
      <td data-label="Hover Class"><code>.text-white--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-lighter background-dark">Lighter</p>
      </td>
      <td data-label="Modifier Class"><code>.text-lighter</code></td>
      <td data-label="Hover Class"><code>.text-lighter--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-light-mid background-dark">Light Mid</p>
      </td>
      <td data-label="Modifier Class"><code>.text-light-mid</code></td>
      <td data-label="Hover Class"><code>.text-light-mid--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-light background-dark">Light</p>
      </td>
      <td data-label="Modifier Class"><code>.text-light</code></td>
      <td data-label="Hover Class"><code>.text-light--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-base">Base</p>
      </td>
      <td data-label="Modifier Class"><code>.text-base</code></td>
      <td data-label="Hover Class"><code>.text-base--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-dark">Dark</p>
      </td>
      <td data-label="Modifier Class"><code>.text-dark</code></td>
      <td data-label="Hover Class"><code>.text-dark--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-black">Black</p>
      </td>
      <td data-label="Modifier Class"><code>.text-black</code></td>
      <td data-label="Hover Class"><code>.text-black--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-navy">Navy</p>
      </td>
      <td data-label="Modifier Class"><code>.text-navy</code></td>
      <td data-label="Hover Class"><code>.text-navy--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-skyblue">Skyblue</p>
      </td>
      <td data-label="Modifier Class"><code>.text-skyblue</code></td>
      <td data-label="Hover Class"><code>.text-skyblue--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-med-blue">Med Blue</p>
      </td>
      <td data-label="Modifier Class"><code>.text-med-blue</code></td>
      <td data-label="Hover Class"><code>.text-med-blue--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-beige">Beige</p>
      </td>
      <td data-label="Modifier Class"><code>.text-beige</code></td>
      <td data-label="Hover Class"><code>.text-beige--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-peach">Peach</p>
      </td>
      <td data-label="Modifier Class"><code>.text-peach</code></td>
      <td data-label="Hover Class"><code>.text-peach--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-salmon">Salmon</p>
      </td>
      <td data-label="Modifier Class"><code>.text-salmon</code></td>
      <td data-label="Hover Class"><code>.text-salmon--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-brown">Brown</p>
      </td>
      <td data-label="Modifier Class"><code>.text-brown</code></td>
      <td data-label="Hover Class"><code>.text-brown--hover</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="text-orange">Orange</p>
      </td>
      <td data-label="Modifier Class"><code>.text-orange</code></td>
      <td data-label="Hover Class"><code>.text-orange--hover</code></td>
    </tr>
  </tbody>
</table>

### General Utilities

General utilities add class-based css transforms like `uppercase` and `bold`. See the chart below for the full list.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Utility</th>
      <th>Modifier Class</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Utility">Bold Text</td>
      <td data-label="Modifier Class"><code>.text--bold</code></td>
      <td data-label="Result">
        <p class="text--bold">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Utility">Underline Text</td>
      <td data-label="Modifier Class"><code>.text--underline</code></td>
      <td data-label="Result">
        <p class="text--underline">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Utility">Hover Underline Text</td>
      <td data-label="Modifier Class"><code>.text-underline--hover</code></td>
      <td data-label="Result">
        <p><span class="text-underline--hover">Hello World!</span></p>
      </td>
    </tr>
    <tr>
      <td data-label="Utility">Align Center</td>
      <td data-label="Modifier Class"><code>.text--center</code></td>
      <td data-label="Result">
        <p class="text--center">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Utility">Align Right</td>
      <td data-label="Modifier Class"><code>.text--right</code></td>
      <td data-label="Result">
        <p class="text--right">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Utility">No Line Wrap</td>
      <td data-label="Modifier Class"><code>.text--nowrap</code></td>
      <td data-label="Result">
        <p class="text--nowrap">The quick brown fox jumped over the lazy dog</p>
      </td>
    </tr>
  </tbody>
</table>

### Sizing

`text--size-{ size }` leverages percentages for smaller or larger text. The defaut `font-size` is `1rem`.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Size</th>
      <th>Modifier Class</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Size"><code>50%</code></td>
      <td data-label="Modifier Class"><code>text--size-xxs</code></td>
      <td data-label="Result">
        <p class="text--size-xxs">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Size"><code>70%</code></td>
      <td data-label="Modifier Class"><code>text--size-xs</code></td>
      <td data-label="Result">
        <p class="text--size-xs">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Size"><code>85%</code></td>
      <td data-label="Modifier Class"><code>text--size-sm</code></td>
      <td data-label="Result">
        <p class="text--size-sm">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Size"><code>115%</code></td>
      <td data-label="Modifier Class"><code>text--size-md</code></td>
      <td data-label="Result">
        <p class="text--size-md">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Size"><code>125%</code></td>
      <td data-label="Modifier Class"><code>text--size-lg</code></td>
      <td data-label="Result">
        <p class="text--size-lg">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Size"><code>150%</code></td>
      <td data-label="Modifier Class"><code>text--size-xl</code></td>
      <td data-label="Result">
        <p class="text--size-xl">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Size"><code>200%</code></td>
      <td data-label="Modifier Class"><code>text--size-xxl</code></td>
      <td data-label="Result">
        <p class="text--size-xxl">Hello World!</p>
      </td>
    </tr>
  </tbody>
</table>

### Text Shadow

You can add a text-shadow to an element using colors from our [greyscale](/section-color.html#kssref-color-greyscale) map.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Greyscale</th>
      <th>Modifier Class</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Greyscale">White</td>
      <td data-label="Modifier Class"><code>.text--shadow-white</code></td>
      <td data-label="Result">
        <p class="p-2 background-base text--shadow-white">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Greyscale">Lighter</td>
      <td data-label="Modifier Class"><code>.text--shadow-lighter</code></td>
      <td data-label="Result">
        <p class="p-2 background-base text--shadow-lighter">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Greyscale">Light Mid</td>
      <td data-label="Modifier Class"><code>.text--shadow-light-mid</code></td>
      <td data-label="Result">
        <p class="p-2 background-base text--shadow-light-mid">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Greyscale">Light</td>
      <td data-label="Modifier Class"><code>.text--shadow-light</code></td>
      <td data-label="Result">
        <p class="p-2 background-base text-light-mid text--shadow-light">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Greyscale">Base</td>
      <td data-label="Modifier Class"><code>.text--shadow-base</code></td>
      <td data-label="Result">
        <p class="text--shadow-base">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Greyscale">Dark</td>
      <td data-label="Modifier Class"><code>.text--shadow-dark</code></td>
      <td data-label="Result">
        <p class="text--shadow-dark">Hello World!</p>
      </td>
    </tr>
    <tr>
      <td data-label="Greyscale">Black</td>
      <td data-label="Modifier Class"><code>.text--shadow-black</code></td>
      <td data-label="Result">
        <p class="text--shadow-black">Hello World!</p>
      </td>
    </tr>
  </tbody>
</table>