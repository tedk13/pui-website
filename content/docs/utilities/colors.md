---
title: Colors
date: 2018-07-20T12:59:15-04:00
---
Find some utility classes that you can use to use along our existing color classes.

{{< heading heading="h2" id="background-colors">}}
Background Colors 
{{< /heading >}}

These classes are to be used to set, or change a background-color on a specific element. Similar to our `text-{color}` classes.
You can view our list of colors [greyscale](/section-color.html#kssref-color-greyscale), [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.

| Greyscale               |                          |                           |                            |
| ----------------------- | ------------------------ | ------------------------- | -------------------------- |
| `background-white`      | `background-lighter`     | `background-light-mid`    | `background-light`         |
| `background-base`       | `background-dark`        | `background-black`        |                            |

| Brand colors            |                          |                           |                            |
| ----------------------- | ------------------------ | ------------------------- | -------------------------- |
| `background-navy`       | `background-skyblue`     | `background-med-blue`     | `background-beige`         |
| `background-peach`      | `background-salmon`      | `background-brown`        | `background-orange`        |

| Secondary colors        |                          |                           |                            |
| ----------------------- | ------------------------ | ------------------------- | -------------------------- |
| `background-red`        | `background-olive`       | `background-purple`       | `background-yellow`        |
| `background-pink`       | `background-cyan`        | `background-violet`       | `background-blue`          |
| `background-green`      | `background-teal`        | `background-gold`         |                            |

| Remove a background color |                          |                           |                            |
| ------------------------- | ------------------------ | ------------------------- | -------------------------- |
| `background-transparent`  |                          |                           |                            |


{{< heading heading="h2" id="inverted">}}
Inverted
{{< /heading >}}

The `inverted` class changes the color of an element to white. It has a transition, so after the class is added, the color
will transition to white.

{{< heading heading="h2" id="transparent">}}
Transparent
{{< /heading >}}

If you want to remove the background color and border color on an element, add the class `transparent`.

<div class="block-container card background-lighter">
  <div class="block-6">
    <button class="button">Button</button>
  </div>
  <div class="block-6">
    <button class="button transparent">Transparent Button</button>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container card background-lighter">
  <div class="block-6">
    <button class="button">Button</button>
  </div>
  <div class="block-6">
    <button class="button transparent">Transparent Button</button>
  </div>
</div>
{{< /highlight >}}
</div>
