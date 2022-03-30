---
title: Borders
date: 2018-07-20T12:59:15-04:00
skellyCSS: true
---
You can add specific borders to elements by using the following classes:

<table class="table mb-4">
  <thead>
    <tr>
      <th>Classes</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Classes"><code>border</code></td>
      <td data-label="CSS Attribute"><code>border: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>no-border</code></td>
      <td data-label="CSS Attribute"><code>border: none;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-x</code></td>
      <td data-label="CSS Attribute"><code>border-left: 1px solid; border-right: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-y</code></td>
      <td data-label="CSS Attribute"><code>border-top: 1px solid; border-bottom: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-t</code></td>
      <td data-label="CSS Attribute"><code>border-top: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-b</code></td>
      <td data-label="CSS Attribute"><code>border-bottom: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-r</code></td>
      <td data-label="CSS Attribute"><code>border-right: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-l</code></td>
      <td data-label="CSS Attribute"><code>border-left: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border--width-{i}</code></td>
      <td data-label="CSS Attribute"><code>border-width: {i}px;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border--color-{color}</code></td>
      <td data-label="CSS Attribute"><code>border-color: {color};</code></td>
    </tr>
  </tbody>
</table>

## Color

The `border--color-{color}` class uses the [brand colors](/section-color.html#kssref-color-brandcolors) map.

<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
      <div class="card__content">
        <p class="skeleton" data-lines="7" data-animation="true"></p>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
      <div class="card__content">
        <!-- Card content goes here! -->
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


## Right Border
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="pb-2 mb-2">Card Header</h4>
      <div class="card__content block-container blocks px-3">
        <div class="block block-6 border-r border--color-med-blue">
          <p class="skeleton" data-lines="7" data-animation="true"></p>
        </div>
        <div class="block block-6">
          <p class="skeleton" data-lines="7" data-animation="true"></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="pb-2 mb-2">Card Header</h4>
      <div class="card__content block-container blocks px-3">
        <div class="block block-6 border-r border--color-med-blue">
          <!-- Card content goes here! -->
        </div>
        <div class="block block-6">
          <!-- Card content goes here! -->
        </div>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


## Vertical Border
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
      <div class="card__content">
        <p class="skeleton" data-lines="7" data-animation="true"></p>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
      <div class="card__content">
        <!-- Card content goes here! -->
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>