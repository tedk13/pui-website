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

<section class="p-0 my-4">
  <h3 class="text--light text--size-md mb-3">Visualizer</h3>
  <div class="linear-gradient inverted px-4 py-3 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try this!</strong> 
    Check out different sizes of loader!
  </div>
  <div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
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
  </div>
<section>

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
