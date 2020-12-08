---
title: Content
date: 2018-07-20T12:59:15-04:00
---
{{< heading heading="h2" id="fonts">}}
Fonts
{{< /heading >}}

Platform UI also considers font strategy; Specific to legibility in the scope of our appliactions, we've chosen the following Google webfonts:

| Usage | Font Family |
|----------|-------------------------------------------------------------|
| Body     | [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)|
| Headline | [Roboto Medium](https://fonts.google.com/specimen/Roboto)|
| Code     | [Inconsolata](https://fonts.google.com/specimen/Inconsolata) |


Nunito and Roboto both being members of Google fonts [Superfamilies](https://fonts.google.com/featured/Superfamilies). Combined link reference:

{{< heading heading="h3" id="standard-embed">}}
Standard embed
{{< /heading >}}

Include a `<link>` reference in your document `<head>`:

<div class="mb-4">
{{< highlight html >}}
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Inconsolata&display=swap" rel="stylesheet">
{{< /highlight >}}
</div>

{{< heading heading="h3" id="import">}}
@import
{{< /heading >}}

If your incorporating Platform UI into your own build pipeline, you may want to consider importing this font stack via a seperate css sheet.

<div class="mb-4">
{{< highlight css >}}
/* fonts.css or _fonts.scss */
@import url(`https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Inconsolata&display=swap`);
{{< /highlight >}}
</div>

{{< heading heading="h2" id="icons">}}
Icons
{{< /heading >}}

Platform UI has a specific scope when considering icon fonts. While there's little doubt as to Font Awesome's formidable library, it's grown quite large for our needs, so we've developed a smaller companion icon font to Platform UI...Platform icons.


As with our Font usage, we recommend downloading and storing Platform Icons locally.

[Download]()

{{< heading heading="h2" id="typography">}}
Typography
{{< /heading >}}

{{< heading heading="h3" id="headlines">}}
Headlines
{{< /heading >}}

{{< heading heading="h3" id="paragraphs">}}
Paragraphs
{{< /heading >}}

{{< heading heading="h2" id="utilities">}}
Utilities
{{< /heading >}}

{{< heading heading="h3" id="borders">}}
Borders
{{< /heading >}}
{{< heading heading="h3" id="close-action">}}
Close action
{{< /heading >}}

_**Move this over to buttons, it's NOT a utility.**_

_**The example does not relfect a clear close action.**_

{{< heading heading="h3" id="background-colors">}}
Background Colors
{{< /heading >}}
{{< heading heading="h3" id="inverted">}}
Inverted
{{< /heading >}}
{{< heading heading="h3" id="transparent">}}
Transparent
{{< /heading >}}
{{< heading heading="h3" id="pointer-not-cursor-pointer">}}
Pointer (not Cursor pointer)
{{< /heading >}}
{{< heading heading="h3" id="display">}}
Display
{{< /heading >}}

Not everything works the way you want it to, so we've provided utilities for print and responsive display.

To hide altogether via `hidden`, or a print specifc consideration, to `show-` or `hide-print` it's fairly simple.

{{< heading heading="h4" id="display-print">}}
Display and @print
{{< /heading >}}

| Target    | class        | display |
|-----------|--------------|---------|
| All       | `hidden`     | `none`  |
| `@print`  | `show-print` | `block` |
| `@print`  | `hide-print` | `none`  |

{{< heading heading="h4" id="responsive-display ">}}
Responsive display 
{{< /heading >}}

Responsive display becomes more complex. Intent to `show-` or `hide-`, then determine your target resolution e.g., `mobile-only`. 

If you only want a button to display at tablet resolution, it would look like this:

<div class="mb-4">
{{< highlight html >}}
<div class="block-container">
  <button class="button hide-tablet-only show-laptop-up">Click</button>
</div>
{{< /highlight >}}
</div>

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


<div class="mb-4">
{{< highlight html >}}
<!-- 
The button will be hidden at laptop resolution and greater, 
It will be displayed lg-laptop and lower
-->

<button class="hide-laptop-up">Click</button>

<!-- 
The button will be show only on mobile resolution.
-->

<button class="show-mobile-only">Click</button>
{{< /highlight >}}
</div>

{{< heading heading="h3" id="flex">}}
Flex
{{< /heading >}}

Leveraging flexbox is easy with Platform UI. For more on [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

...

{{< heading heading="h3" id="position">}}
Position
{{< /heading >}}

Position fixed, `pos-fix`, takes an element out of the natural DOM order.

When positioning an element absolute, the element will position according to the closest parent element that has position: relative. For this you can use the class , `pos-rel` on the parent element you want to position the absolute, `pos-abs`, element. Combine these with our pinning utility to absolutley position child elements.

||||
|:---:|:---:|:---:|
|`pin-top` <br>`pin-left` | `pin-top`<br>`pin-center-top` | `pin-top`<br>`pin-right` |




{{< heading heading="h3" id="color">}}
Color
{{< /heading >}}

Color is one of the largest extensions of utilities in Platform UI. All colors set in the `_config.scss`, along with Platform UI's default greyscale, are generated into utilities for `color` (text) and `background-color`. 

Usage will be governed by color naming conventions set either by Platform UI, or in your own custom `_config.scss` file.


| Target | Class Structure | Example |
|-------|-----------|---------|
| Font color | `text-{color name}` | `text-salmon`|
| Background color | `background-{color name}` | `background-navy`|


{{< heading heading="h4" id="css-variables">}}
CSS variables
{{< /heading >}}

Not every design system, or framework, covers every need. There may be that custom-thing-you-want, but you'd still like to incorporate the style of what you've already built.

**Every color and greyscale class or utility generated by Platform UI is also generated by key-name as a native CSS variable.**

If you want to use the compiled, or CDN, version of Platform UI, we give you access to all CSS colors to leverage in a supplimental style sheet.

`--pui-{ color name }`

The example below gives our widget a background color of the Platform UI hex value for `navy`. 

<div class="mb-4">
{{< highlight css >}}
.widget {
  background-color: var(--pui-navy); /* #003f70 */
}
{{< /highlight >}}
</div>

For more on what we expose as CSS variables, [click here]().