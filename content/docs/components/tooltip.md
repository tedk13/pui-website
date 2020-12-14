---
title: Tooltip
date: 2018-07-20T12:59:15-04:00
---
Add your tooltip text to a `data-tooltip` attribute on any item you want a tooltip.

## Direction
To specify the placement of your tooltip, add a `tooltip-{direction}` class. Directions include:

| Direction | Modifier Class |
| ------------ | ------------|
| Top | `.tooltip-top` | 
| Right | `.tooltip-right` |
| Bottom | `.tooltip-bottom` |
| Left | `.tooltip-left` |

<div class="block-container pb-3 flex flex--justify-between">
  <div class="tooltip-top" data-tooltip="This is a top facing tooltip.">top</div>
  <div class="tooltip-right" data-tooltip="This is a right facing tooltip.">right</div>
  <div class="tooltip-bottom" data-tooltip="This is a bottom facing tooltip.">bottom</div>
  <div class="tooltip-left" data-tooltip="This is a left facing tooltip.">left</div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Top -->
<div class="tooltip-top" data-tooltip="This is a top facing tooltip.">top</div>

<!-- Right -->
<div class="tooltip-right" data-tooltip="This is a right facing tooltip.">right</div>

<!-- Bottom -->
<div class="tooltip-bottom" data-tooltip="This is a bottom facing tooltip.">bottom</div>

<!-- Left -->
<div class="tooltip-left" data-tooltip="This is a left facing tooltip.">left</div>
{{< /highlight >}}
</div>

## Inline
Adding the class `.tooltip-inline` will add a dashed underline to identify the tooltip. See example below.

<div class="block-container pb-3">
  <p>Lorem ipsum dolor sit amet, <span data-tooltip="This is a default tooltip with data-inline." class="tooltip-inline">consectetur</span> adipiscing elit. Maecenas mi nunc, egestas id consectetur a, consectetur a lorem. Maecenas interdum enim felis, eget fringilla massa rhoncus sed.</p>
</div>

<div class="mt-3 mb-4">
{{< highlight html>}}
<p>Lorem ipsum dolor sit amet, <span data-tooltip="This is a default tooltip with data-inline." class="tooltip-inline">consectetur</span> adipiscing elit. Maecenas mi nunc, egestas id consectetur a, consectetur a lorem. Maecenas interdum enim felis, eget fringilla massa rhoncus sed.</p>
{{< /highlight >}}
</div>


## Mobile
If you want a tooltip to be mobile friendly, add the class `tooltip-mobile`. This will ensure that the tooltip, when fired, will be centered in the middle of the page. This will happen within the mobile breakpopint. In platform UI's case, below `768px`.

<div class="block-container pb-3">
  <div class="tooltip-right tooltip-mobile" data-tooltip="This tooltip is centered on a mobile screen.">
    Mobile Tooltip
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}

<div class="tooltip-right tooltip-mobile" data-tooltip="This tooltip is centered on a mobile screen.">
  Mobile Tooltip
</div>

{{< /highlight >}}
</div>

## Icons
We use a font icon for our tooltip, but we don't want the hover to take place on the icon.
Be sure to add the tooltip data attribute to the `<div>` wrapper instead. Place any color changes, whether they be a hover or not, on the `<div>` as well. This will ensure that our tooltip text does not render a different font due to the icon having the font icon style.

<div class="block-container pb-3">
  <div class="tooltip-right" data-tooltip="This tooltip is centered on a mobile screen.">
    <i class="pi-help-solid" focusable="false" aria-hidden="true"></i>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tooltip-right" data-tooltip="This tooltip is centered on a mobile screen.">
  <i class="pi-help-solid" focusable="false" aria-hidden="true"></i>
</div>
{{< /highlight >}}
</div>
