---
title: Borders
date: 2018-07-20T12:59:15-04:00
---

You can add specific borders to elements by using the following classes:

<div class="block-container mobile-up-2 blocks px-2 mb-3">
  <div class="block">
    <div class="pui-card border--color-red">
      <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
      <div class="pui-card__content">
        <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      <h4 class="pb-2 mb-2">Card Header</h4>
      <div class="pui-card__content block-container blocks px-3">
        <div class="block block-6 border-r border--color-med-blue">
          <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card.</p>
        </div>
        <div class="block block-6">
          <p>The idea is to show how cool we can get with making borders.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      <h4 class="border-y border--color-lighter py-2 mb-2">Card Header</h4>
      <div class="pui-card__content">
        <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
      </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container mobile-up-2 blocks px-2 mb-3">
  <div class="block">
    <div class="pui-card border--color-red">
      <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
      <div class="pui-card__content">
        <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      <h4 class="pb-2 mb-2">Card Header</h4>
      <div class="pui-card__content block-container blocks px-3">
        <div class="block block-6 border-r border--color-med-blue">
          <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card.</p>
        </div>
        <div class="block block-6">
          <p>The idea is to show how cool we can get with making borders.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="pui-card">
      <h4 class="border-y border--color-lighter py-2 mb-2">Card Header</h4>
      <div class="pui-card__content">
        <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

| Classes        |                         |                 |                 |
| -------------- | ----------------------- | --------------- | --------------- |
| `no-border`    | `border--color-{color}` |                 |                 |
| `border`       | `border-x`              | `border-y`      |                 |
| `border-t`     | `border-r`              | `border-b`      | `border-l`      |
| `border--width-{1}`|                     |                 |                 |


The `border--color-{color}` class combines the [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.
