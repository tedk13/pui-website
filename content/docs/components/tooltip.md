---
title: Tooltip
---

Add your tooltip text to a `data-tooltip` attribute on any item you want a tooltip.

{{< code-demo >}}
<div data-tooltip="Here is a tooltip!">hover me!</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div data-tooltip="Tooltip goes here!">
  <!-- Content goes here! -->
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Base" class="border-t border--color-white border--width-5 text--bold">
    <code>tooltip-{direction}</code>
  </td>
  <td data-label="Modifier" class="border-t border--color-white border--width-5 text--bold">
    <i class="pi-ban" aria-hidden="true">
  </td>
  <td data-label="Secondary Modifier" class="border-t border--color-white border--width-5 text--bold">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute" class="border-t border--color-white border--width-5 text--bold">
    <code>data-tooltip</code>
  </td>
  <td data-label="Behavior" class="border-t border--color-white border--width-5 text--bold">
    Available directions are top, bottom, left, and right to position
  </td>
</tr>
<tr>
  <td data-label="Base" class="border-t border--color-white border--width-5 text--bold">
    <code>tooltip-inline</code>
  </td>
  <td data-label="Modifier" class="border-t border--color-white border--width-5 text--bold">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Secondary Modifier" class="border-t border--color-white border--width-5 text--bold">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute" class="border-t border--color-white border--width-5 text--bold">
    <code>data-tooltip</code>
  </td>
  <td data-label="Behavior" class="border-t border--color-white border--width-5 text--bold">
    Tooltip displays inline
  </td>
</tr>
{{< /modifiers >}}

{{< callout tipHeader="Tooltip... Tip?" >}}
  <p>If you want to use a tooltip with an icon, make sure to add the data attribute to the <code>div</code> wrapper instead! This will ensure the text does not render a different font.</p>
{{< /callout >}}