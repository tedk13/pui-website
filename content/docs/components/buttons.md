---
title: Buttons
---

Each button has a default button style. Color can be added to any button using a combination of background and text utilities.

The default platform button. Usually paired visually with an icon. Can be the default size or large.

{{< code-demo >}}
<button class="button">Basic Button</button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button">Basic Button</button>
{{< /highlight >}} 
{{< /code-markup >}}

<section class="p-0 mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Secondary Modifier Class</th>
        <th>Data Attribute</th>
        <th>Behavior</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>button--ghost</td>
        <td></td>
        <td></td>
        <td>It's a ghost button.</td>
      </tr>
      <tr>
        <td>button--ghost</td>
        <td></td>
        <td></td>
        <td>It's a ghost button.</td>
      </tr>
    </tbody>
  </table>
</section>


## Secondary

The secondary platform button. Always a round button paired with a Platform icon. Can be the default size or large.

{{< code-demo >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /highlight >}} 
{{< /code-markup >}}


## Group

Evenly space any group of buttons.


{{< code-demo >}}
<div class="button-group">
  <button class="button">Cancel</button>
  <button class="button">Continue</button>
  <button class="button">Destroy Death Star</button>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="button-group">
  <button class="button">Cancel</button>
  <button class="button">Continue</button>
  <button class="button">Destroy Death Star</button>
</div>
{{< /highlight >}} 
{{< /code-markup >}}

