---
title: Loaders
description: Documentation for Platform UI's loader and button loader components.
---

{{% anchor name="Default" %}}

It's a `1.4rem` loader. 

{{< code-demo >}}
<div class="loader"></div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="loader"></div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Modifier">
    <code>loader--sm</code>
  </td>
  <td data-label="Behavior">
    Small <code>.9rem</code>
  </td>
</tr>
<tr>
  <td data-label="Modifier">
    <code>loader--lg</code>
  </td>
  <td data-label="Behavior">
    Large <code>2rem</code>
  </td>
</tr>
{{< /modifiers >}}

{{< visualizer header="Check out different sizes of loader!" >}}
<div class="actions block">
  <ul class="list">
    <li>
      <button class="button" data-example-elements="loader">
        <pre>.loader</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="loader loader--sm">
        <pre>.loader--sm</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="loader loader--lg">
        <pre>.loader--lg</pre>
      </button>
    </li>
    <li>
      <button class="button button--salmon text--white" data-reset="true">
        Reset
      </button>
    </li>
  </ul>
</div>
<div class="results rounded-2 block background--dark p-3" data-default-class="flex flex--center-content background--white py-5 rounded-1">
  <div class="loader"></div>
</div>
{{< /visualizer >}}

{{% anchor name="Buttons" %}}

A button can also include a loader by adding/toggling the `loading` class.

{{< code-demo >}}
<button class="button loading">Submit</button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button loading">Submit</button>
{{< /highlight >}}
{{< /code-markup >}}
