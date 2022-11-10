---
title: Rotating
description: Platform UI documentation for rotation utilities.
---

{{% anchor name="Rotate" %}}

{{< classes result="true" >}}
{{< classes-row class="rotate-{ 45, 90, 180 }" result="Rotate an element 45, 90, or 180 degrees">}}
{{< /classes >}}

{{< visualizer header="Watch it rotate!" >}}
<div class="actions block">
  <ul class="list">
    <li>
      <button class="button" data-example-elements="rotate-45">
        <pre>.rotate-45</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="rotate-90">
        <pre>.rotate-90</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="rotate-180">
        <pre>.rotate-180</pre>
      </button>
    </li>
    <li>
      <button class="button button--salmon text--white" data-reset="true">
        Reset
      </button>
    </li>
  </ul>
</div>
<div class="results block background--dark p-2" data-default-class="flex flex--justify-center flex--align-center vh-25">
  <div class="abstract-element transition border border--color-white background--light-purple text--white flex flex--align-center flex--justify-center">
    Text!
  </div>
</div>
{{< /visualizer >}}