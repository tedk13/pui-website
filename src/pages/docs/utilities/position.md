---
layout: ../../../layouts/single.astro
title: Positioning
---

{{% anchor name="Position" %}}

To postion an element absolutely, set `pos-rel` on the parent element and `pos-abs` to child that you'd like to position absolute. Our position utilities are meant to be used (mostly) with pinning.

{{< classes result="true" >}}
{{< classes-row class="pos-rel" result="Position relative to the elements normal position.">}}
{{< classes-row class="pos-abs" result="Position an element absolutely.">}}
{{< classes-row class="pos-fix" result="Set the fixed position of an element.">}}
{{< classes-row class="pos-stick" result="Make it sticky. For use with table headers.">}}
{{< /classes >}}

{{% anchor name="Pin" %}}

{{< classes result="true" >}}
{{< classes-row class="pin-{ top, bottom, left, right }" result="In combination with position utilities, pin an element top, bottom, left, right.">}}
{{< /classes >}}

{{< visualizer header="Pin an element to different sides of its container!" >}}
<div class="actions block">
  <ul class="list">
    <li>
      <button class="button" data-example-elements="pos-abs pin-top">
        <pre>.pin-top</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-right">
        <pre>.pin-right</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-bottom">
        <pre>.pin-bottom</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-left">
        <pre>.pin-left</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-center">
        <pre>.pin-center</pre>
      </button>
    </li>
    <li>
      <button class="button button--salmon text--white" data-reset="true">
        Reset
      </button>
    </li>
  </ul>
</div>
<div class="results rounded-2 block background--dark p-3 vh-25" data-default-class="pos-rel h-100 w-100">
  <div class="abstract-element background--light-purple border border--color-white pos-abs"></div>
</div>
{{< /visualizer >}}