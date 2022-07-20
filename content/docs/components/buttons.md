---
title: Buttons
description: Documentation for Platform UI's button, secondary button, and button group components.
---
{{% anchor name="button" %}}

The default button style is white with a dark outline and has a salmon background color on hover. See the [modifiers](#modifiers) table for more options!


{{< code-demo >}}
<button class="button">Button</button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button">Button</button>
{{< /highlight >}} 
{{< /code-markup >}}

{{< modifiers >}}
{{< modifiers-row 
  modifier="button--lg"
  behavior="A larger button." 
>}}
{{< modifiers-row 
  modifier="button--plain"
  behavior="Removes the border and background. Good for icons alone." 
>}}
{{< modifiers-row 
  modifier="button--{ color }"
  behavior="Loops through Platform UI colors for background and hover coloring." 
>}}
{{< modifiers-row 
  modifier="button--ghost"
  behavior="Ghost buttons! 👻"
>}}
{{< /modifiers >}}

{{< visualizer header="Check out different colors of buttons!" >}}
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
{{< /visualizer >}}

{{% anchor name="secondary" %}}

The secondary button was built primarily for usage with icons alone with a fancier hover. It can also be used with text.

{{< code-demo >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /highlight >}} 
{{< /code-markup >}}

{{< modifiers secondary="true" data="true" >}}
{{< modifiers-row 
  modifier="button--secondary"
  secondary="has-text"
  attr="data-button-text"
  behavior="`data-button-text` adds custom text on hover on viewports over `991px`. Adding `has-text` will show that text at all times."
>}}
{{< /modifiers >}}

{{% anchor name="group" %}}

Evenly space any group of buttons, default or secondary.

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
