---
title: Image Round
description: Documentation for Platform UI's image round component.
skellyCSS: true
toc: false
---

You can create easy rounded images.

{{< code-demo name="Image Round" >}}
<div class="image--round-medium">
  <img class="skeleton-image skeleton-image--lg" role="presentation">
</div>
{{< /code-demo >}}

{{< code-markup name="Image Round" >}}
{{< highlight html >}}
<div class="image--round-medium">
  <img src="..." alt="pretty">
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers name="Image Round" >}}
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

<section class="mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Modifier Class"><code>.image--round-small</code></td>
        <td data-label="Size">100px</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.image--round-medium</code></td>
        <td data-label="Size">150px</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.image--round-large</code></td>
        <td data-label="Size">200px</td>
      </tr>
    </tbody>
  </table>
</section>