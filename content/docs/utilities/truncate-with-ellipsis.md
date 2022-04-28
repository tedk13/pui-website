---
title: Truncate With Ellipsis
description: Platform UI utility to truncate text using an ellipsis.
toc: false
---
A utility that does what it's name says. It truncates text within an element with ellipsis.

This can be done by adding the class `truncate-with-ellipsis`

<div class="block-container">
    <div class="block block-6 tablet-up-3">
        <h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
{{< /highlight >}}
</div>

{{< visualizer header="Truncate long lines with an ellipsis!" >}}
<div class="actions block">
  <ul class="list">
    <li>
      <button class="button" data-example-elements="truncate-with-ellipsis">
        <pre>.truncate-with-ellipsis</pre>
      </button>
    </li>
    <li>
      <button class="button button--salmon text--white" data-reset="true">
        Reset
      </button>
    </li>
  </ul>
</div>
<div class="results rounded-2 block background--dark p-3" data-default-class="block-container flex--center-content">
  <div class="block block-9 h-100 card transition">
    <span class="text--size-md">The quick brown fox jumped over the lazy dog.</span>
  </div>
</div>
{{< /visualizer >}}