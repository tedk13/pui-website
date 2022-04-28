---
title: Position
description: Platform UI utilities for positioning elements.
toc: false
---

If you need to postion something absolute you can use the following classes.

Remember that when positioning an element absolute, the element will position
according to the closest parent element that has `position: relative`. For this
you can use the class `pos-rel` on the parent element you want to position the
absolute element to.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class"><code>pos-rel</code></td>
      <td data-label="CSS Attribute"><code>position: relative</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pos-abs</code></td>
      <td data-label="CSS Attribute"><code>position: absolute</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pos-fix</code></td>
      <td data-label="CSS Attribute"><code>position: fixed</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pos-stick</code></td>
      <td data-label="CSS Attribute"><code>position: sticky</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-top</code></td>
      <td data-label="CSS Attribute"><code>top: 0</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-right</code></td>
      <td data-label="CSS Attribute"><code>right: 0</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-bottom</code></td>
      <td data-label="CSS Attribute"><code>bottom: 0</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-left</code></td>
      <td data-label="CSS Attribute"><code>left: 0</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-center-top</code></td>
      <td data-label="CSS Attribute"><code>top: 50%; transform: translateY(-50%)</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-center-right</code></td>
      <td data-label="CSS Attribute"><code>right: 50%; transform: translateX(-50%)</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-center-bottom</code></td>
      <td data-label="CSS Attribute"><code>bottom: 50%; transform: translateY(-50%)</code></td>
    </tr>
    <tr>
      <td data-label="Class"><code>pin-center-left</code></td>
      <td data-label="CSS Attribute"><code>left: 50%; transform: translateX(-50%)</code></td>
    </tr>
  </tbody>
</table>

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
      <button class="button" data-example-elements="pin-center-top">
        <pre>.pin-center-top</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-center-right">
        <pre>.pin-center-right</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-center-bottom">
        <pre>.pin-center-bottom</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="pin-center-left">
        <pre>.pin-center-left</pre>
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