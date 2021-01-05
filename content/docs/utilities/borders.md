---
title: Borders
date: 2018-07-20T12:59:15-04:00
---
You can add specific borders to elements by using the following classes:

| Classes                 | CSS Attribute                                      |
| ----------------------- | -------------------------------------------------- |
| `border`                | `border: 1px solid;`                               |
| `no-border`             | `border: none;`                                    |
| `border-x`              | `border-left: 1px solid; border-right: 1px solid;` |
| `border-y`              | `border-top: 1px solid; border-bottom: 1px solid;` |
| `border-t`              | `border-top: 1px solid;`                           |
| `border-b`              | `border-bottom: 1px solid;`                        |
| `border-r`              | `border-right: 1px solid;`                         |
| `border-l`              | `border-left: 1px solid;`                          |
| `border--width-{i}`     | `border-width: {i}px;`                             |
| `border--color-{color}` | `border-color: {color};`                           |


## Color

The `border--color-{color}` class uses the [brand colors](/section-color.html#kssref-color-brandcolors) map.

<div class="block-container blocks laptop-up-4">
  <div class="block">
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
<div class="block-6">
  <div class="card">
    <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
    <div class="card__content">
      <!-- Card content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


## Right Border

<div class="block-container blocks laptop-up-4">
  <div class="block">
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
<div class="block-6">
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
{{< /highlight >}}
</div>


## Vertical Border

<div class="block-container blocks laptop-up-4">
  <div class="block">
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
<div class="block-6">
  <div class="card">
    <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
    <div class="card__content">
      <!-- Card content goes here! -->
    </div>
  </div>
</div>

{{< /highlight >}}
</div>