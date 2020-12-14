---
title: Borders
date: 2018-07-20T12:59:15-04:00
---
## Border Types
You can add specific borders to elements by using the following classes:

| Class | Description |
|---|---|
| `.no-border` | Removes border from element |
| `.border` | Adds border to all sides of element |
| `.border-t` | Adds border to the top side of element |
| `.border-r` | Adds border to the right side of element |
| `.border-b` | Adds border to the bottom side of element |
| `.border-l` | Adds border to the left side of element |
| `.border-x` | Adds border to the left and right sides of element |
| `.border-y` | Adds border to the top and bottom sides of element |

<div class="block-4">
  <div class="card">
    <h2 class="skeleton skeleton--md border-b mb-3"></h2>
    <p class="skeleton" data-lines="3"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Bottom border on h2 tag -->
<div class="card">
  <h2 class="border-b">
    <!-- Header goes here! -->
  </h2>
  <p>
    <!-- Content goes here! -->
  </p>
</div>

{{< /highlight >}}
</div>

## Border Widths
You can adjust the width of a border using the following modifier classes:
| Width | Modifier Class | Description |
|---|---|---|
| 1px | `.border--width-1` | <p class="border border--width-1">Hello World</p> |
| 2px | `.border--width-2` | <p class="border border--width-2">Hello World</p> |
| 3px | `.border--width-3` | <p class="border border--width-3">Hello World</p> |
| 4px | `.border--width-4` | <p class="border border--width-4">Hello World</p> |
| 5px | `.border--width-5` | <p class="border border--width-5">Hello World</p> |

<div class="mb-4">
{{< highlight html >}}
<p class="border border--width-1">Hello World</p>
<p class="border border--width-2">Hello World</p>
<p class="border border--width-3">Hello World</p>
<p class="border border--width-4">Hello World</p>
<p class="border border--width-5">Hello World</p>

{{< /highlight >}}
</div>

## Border Color
The `border--color-{color}` class combines the [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.
| Border Color | Modifier Class | Hover Class |
|-------|-------|-------|-------|
| <p class="border border--color-white ">White</p> | `.border--color-white` |
| <p class="border border--color-lighter">Lighter</p> | `.border--color-lighter` |
| <p class="border border--color-light-mid">Light Mid</p> | `.border--color-light-mid` |
| <p class="border border--color-light">Light</p> | `.border--color-light` |
| <p class="border border--color-base">Base</p> | `.border--color-base` |
| <p class="border border--color-dark">Dark</p> | `.border--color-dark` |
| <p class="border border--color-black">Black</p> | `.border--color-black` |
| <p class="border border--color-navy">Navy</p> | `.border--color-navy` |
| <p class="border border--color-skyblue">Skyblue</p> | `.border--color-skyblue` |
| <p class="border border--color-med-blue">Med Blue</p> | `.border--color-med-blue` |
| <p class="border border--color-beige">Beige</p> | `.border--color-beige` |
| <p class="border border--color-peach">Peach</p> | `.border--color-peach` |
| <p class="border border--color-salmon">Salmon</p> | `.border--color-salmon` |
| <p class="border border--color-brown">Brown</p> | `.border--color-brown` |
| <p class="border border--color-orange">Orange</p> | `.border--color-orange` |

<div class="mb-4">
{{< highlight html >}}
<p class="border border--color-white ">White</p>
<p class="border border--color-lighter">Lighter</p>
<p class="border border--color-light-mid">Light Mid</p>
<p class="border border--color-light">Light</p>
<p class="border border--color-base">Base</p>
<p class="border border--color-dark">Dark</p>
<p class="border border--color-black">Black</p>
<p class="border border--color-navy">Navy</p>
<p class="border border--color-skyblue">Skyblue</p>
<p class="border border--color-med-blue">Med Blue</p>
<p class="border border--color-beige">Beige</p>
<p class="border border--color-peach">Peach</p>
<p class="border border--color-salmon">Salmon</p>
<p class="border border--color-brown">Brown</p>
<p class="border border--color-orange">Orange</p>
{{< /highlight >}}
</div>