---
title: Accordion
date: 2018-07-20T12:59:15-04:00
---

Leverage spacing utility classes for padding and margin for the content within the accordion.
To show the content of the accordion toggle the class `active` on `pui-accordion`. These accordions are also keyboard accessible.
Platform UI accordions were designed to be stacked.

<div class="pui-accordion">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header. </p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content px-3 py-3">
    <p>This is the accordion content.</p>
  </div>
</div>
<div class="pui-accordion">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header. </p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content px-3 py-3">
    <p>This is the accordion content.</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-accordion">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header. </p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content px-3 py-3">
    <p>This is the accordion content.</p>
  </div>
</div>
<div class="pui-accordion">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header. </p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content px-3 py-3">
    <p>This is the accordion content.</p>
  </div>
</div>
{{< /highlight >}}
</div>


## Active

Adding `.active` changes the default header bar background and hover highlight.

<div class="pui-accordion active">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content px-3 py-3">
    <p>This is the accordion content.</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-accordion active">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content px-3 py-3">
    <p>This is the accordion content.</p>
  </div>
</div>
{{< /highlight >}}
</div>


## Nested

Nesting accordions gives the appearance of active accordions within.

<div class="pui-accordion active">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content">
    <div class="px-3 py-3">
      <p>This is the accordion content.</p>
    </div>
    <div class="pui-accordion">
      <a href="#" class="pui-accordion__header px-3 py-3 flex flex--justify-between flex--align-center">
        <div class="flex flex--align-center">
          <p>This is a nested accordion header.</p>
        </div>
        <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
      </a>
      <div class="pui-accordion__content">
        <div class="px-3 py-3">
          <p>This is the nested accordion content.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-accordion active">
  <a href="#" class="pui-accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </a>
  <div class="pui-accordion__content">
    <div class="px-3 py-3">
      <p>This is the accordion content.</p>
    </div>
    <div class="pui-accordion">
      <a href="#" class="pui-accordion__header px-3 py-3 flex flex--justify-between flex--align-center">
        <div class="flex flex--align-center">
          <p>This is a nested accordion header.</p>
        </div>
        <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
      </a>
      <div class="pui-accordion__content">
        <div class="px-3 py-3">
          <p>This is the nested accordion content.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
