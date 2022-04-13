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

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>loader</code>
  </td>
  <td data-label="Modifier">
    <code>loader--sm</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    A small loader of .9rem
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>loader</code>
  </td>
  <td data-label="Modifier">
    <code>loader--lg</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    A large loader of 2rem
  </td>
</tr>
{{< /modifiers >}}

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

<section class="p-0 my-4">
  <h3 class="mb-3">Visualizer</h3>
  <div class="linear-gradient inverted px-4 py-3 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try this!</strong> 
    Check out different colors of buttons!
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