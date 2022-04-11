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

<section class="mb-4">
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

<section class="mb-4">
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
          <button class="button" data-example-elements="button--navy">
            <pre>.button--navy</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--skyblue">
            <pre>.button--skyblue</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--lightblue">
            <pre>.button--lightblue</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--med-blue">
            <pre>.button--med-blue</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--beige">
            <pre>.button--beige</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--peach">
            <pre>.button--peach</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--salmon">
            <pre>.button--salmon</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--brown">
            <pre>.button--brown</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--orange">
            <pre>.button--orange</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--ghost text--white">
            <pre>.button--ghost</pre>
          </button>
        </li>
        <li>
          <button class="button button--salmon text--white" data-reset="true">
            Reset
          </button>
        </li>
      </ul>
    </div>
    <div class="results rounded-2 block background--dark p-3" data-default-class="flex flex--center-content">
      <button class="button">
        Example Button
      </button>
    </div>
  </div>
<section>