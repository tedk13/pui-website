---
title: Accordion
date: 2018-07-20T12:59:15-04:00
---
<div class="mb-4">
{{% requires-js %}}
</div>

Leverage spacing utility classes for padding and margin for the content within the accordion.
To show the content of the accordion toggle the class `active` on `accordion`. These accordions are also keyboard accessible.

Platform UI accordions were designed to be stacked.

<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <span class="skeleton__line mb-0 mr-2" style="background-color: #CACACA;"></span>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6"></p>
  </div>
</div>
<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <span class="skeleton__line mb-0 mr-2" style="background-color: #CACACA;"></span>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="accordion">
  <a href="#" class="accordion__header">
    <!-- Accordion header goes here! -->
  </a>
  <div class="accordion__content">
    <!-- Accordion content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


## Active 

Adding `.active` changes the default header bar background and hover highlight.

<div class="accordion active">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <span class="skeleton__line mb-0 mr-2" style="background-color: #CACACA;"></span>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="accordion active">
  <a href="#" class="accordion__header">
    <!-- Accordion header goes here! -->
  </a>
  <div class="accordion__content">
    <!-- Accordion content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


## Nested

Accordions can be nested inside one of another.

<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <span class="skeleton__line mb-0 mr-2" style="background-color: #CACACA;"></span>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content">
    <div class="px-3 py-3">
      <p class="skeleton" data-lines="6"></p>
    </div>
    <div class="accordion">
      <a href="#" class="accordion__header px-3 py-3 flex flex--justify-between flex--align-center">
        <div class="flex flex--align-center">
          <p>This is a nested accordion header.</p>
        </div>
        <i class="pi-angle-down accordion__icon text-med-blue"></i>
      </a>
      <div class="accordion__content">
        <div class="px-3 py-3">
          <p class="skeleton" data-lines="6"></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="accordion">
  <a href="#" class="accordion__header">
    <!-- Accordion header goes here! -->
  </a>
  <div class="accordion__content">
      <!-- Accordion content goes here! -->
    <div class="accordion">
      <a href="#" class="accordion__header">
        <!-- Nested accordion header goes here! -->
      </a>
      <div class="accordion__content">
        <!-- Nested accordion content goes here! -->
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
