---
title: Rotate
description: Platform UI utilities for rotating elements.
toc: false
---

Utility classes to rotate an element.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>Transform</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>rotate-45</code></td>
      <td data-label="Transform"><code>rotate(45deg)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>rotate-90</code></td>
      <td data-label="Transform"><code>rotate(90deg)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>rotate-180</code></td>
      <td data-label="Transform"><code>rotate(180deg)</code></td>
    </tr>
  </tbody>
</table>

<div class="my-6">
    <div class="button-group">
        <button class="rotate-45 button">45 degrees</button>
        <button class="rotate-90 button">90 degrees</button>
        <button class="rotate-180 button">180 degrees</button>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="button-group">
    <button class="rotate-45 button">45 degrees</button>
    <button class="rotate-90 button">90 degrees</button>
    <button class="rotate-180 button">180 degrees</button>
</div>
{{< /highlight >}}
</div>

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