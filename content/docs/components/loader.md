---
title: Loader
---

Our loader is simple and easy to use. The default loader is 1.4rem, but a modifier can be added to adjust the size.

{{< code-demo >}}
<div class="loader"></div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="loader"></div>
{{< /highlight >}}
{{< /code-markup >}}

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
        <td data-label="Modifier Class"><code>.loader--sm</code></td>
        <td data-label="Size">.9rem</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.loader--lg</code></td>
        <td data-label="Size">2rem</td>
      </tr>
    </tbody>
  </table>
</section>

## Button Loading

A button can also include a loader by adding the `loading` class.

{{< code-demo >}}
<button class="button loading">Submit</button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button loading">Submit</button>
{{< /highlight >}}
{{< /code-markup >}}