---
title: Images
description: Documentation for Platform UI's image components.
skellyCSS: true
toc: false
---
{{% anchor name="Round" %}}

An easy way to create round images.

{{< code-demo >}}
<div class="image--round-medium">
  <img class="skeleton-image skeleton-image--lg" role="presentation">
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="image--round-medium">
  <img src="..." alt="pretty">
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>image-round</code>
  </td>
  <td data-label="Modifier">
    <code>image-round--sm</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    100px size image
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>image-round</code>
  </td>
  <td data-label="Modifier">
    <code>image-round--lg</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    200px size image
  </td>
</tr>
{{< /modifiers >}}