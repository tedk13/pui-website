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

<section class="mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Modifier Class"><code>.tooltip-top</code></td>
        <td data-label="Position">Top</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.tooltip-right</code></td>
        <td data-label="Position">Right</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.tooltip-bottom</code></td>
        <td data-label="Position">Bottom</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.tooltip-left</code></td>
        <td data-label="Position">Left</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.tooltip-inline</code></td>
        <td data-label="Position">Inline</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.tooltip-mobile</code></td>
        <td data-label="Position">Centered on mobile</td>
      </tr>
    </tbody>
  </table>
</section>

{{< callout tipHeader="Tooltip... Tip?" >}}
  <p>If you want to use a tooltip with an icon, make sure to add the data attribute to the <code>div</code> wrapper instead! This will ensure the text does not render a different font.</p>
{{< /callout >}}