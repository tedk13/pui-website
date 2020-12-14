---
title: Borders
date: 2018-07-20T12:59:15-04:00
---

You can add specific borders to elements by using the following classes:

| Classes                 | CSS Attribute           |
| ----------------------- | ----------------------- |
| `border`                | `border: 1px solid;`
| `no-border`             | `border: none;`
| `border-x`              | `border-left: 1px solid; border-right: 1px solid;`
| `border-y`              | `border-top: 1px solid; border-bottom: 1px solid;`
| `border-t`              | `border-top: 1px solid;`
| `border-b`              | `border-bottom: 1px solid;`
| `border-r`              | `border-right: 1px solid;`
| `border-l`              | `border-left: 1px solid;`
| `border--width-{i}`     | `border-width: {i}px;`
| `border--color-{color}` | `border-color: {color};`

The `border--color-{color}` class combines the [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.

<div class="block-6">
  <div class="card">
    <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
    <div class="card__content">
      <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
    </div>
  </div>
</div>
<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-6">
  <div class="card">
    <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
    <div class="card__content">
      <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
<div class="block-6">
  <div class="card">
    <h4 class="pb-2 mb-2">Card Header</h4>
    <div class="card__content block-container blocks px-3">
      <div class="block block-6 border-r border--color-med-blue">
        <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card.</p>
      </div>
      <div class="block block-6">
        <p>The idea is to show how cool we can get with making borders.</p>
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
        <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card.</p>
      </div>
      <div class="block block-6">
        <p>The idea is to show how cool we can get with making borders.</p>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
<div class="block-6">
  <div class="card">
    <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
    <div class="card__content">
      <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
    </div>
  </div>
</div>
<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-6">
  <div class="card">
    <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
    <div class="card__content">
      <p>Here is some generic content for testing purposes. Don't worry about the actualy content of this card. The idea is to show how cool we can get with making borders.</p>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>