---
title: Accordion
date: 2018-07-20T12:59:15-04:00
---
<div class="block-container blocks mb-4">
  <div class="block">
    <div class="pill text--size-xs text-dark">
      <i class="pi-bolt mr-1 text-negative"></i>
      Requires <span class="text--bold ml-1">JavaScript</span>
    </div> 
  </div>
</div>

Leverage spacing utility classes for padding and margin for the content within the accordion.
To show the content of the accordion toggle the class `active` on `accordion`. These accordions are also keyboard accessible.

Platform UI accordions were designed to be stacked.

<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header. </p>
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6"></p>
  </div>
</div>
<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header. </p>
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <!-- Accordion header goes here! -->
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <!-- Accordion content goes here! -->
  </div>
</div>
<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <!-- Accordion header goes here! -->
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <!-- Accordion content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="active">}}
Active
{{< /heading >}}

Adding `.active` changes the default header bar background and hover highlight.

<div class="accordion active">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="accordion active">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <!-- Accordion header goes here! -->
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <!-- Accordion content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="nested">}}
Nested
{{< /heading >}}

Nesting accordions gives the appearance of active accordions within.

<div class="accordion active">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
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
<div class="accordion active">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <div class="flex flex--align-center">
      <!-- Accordion header goes here! -->
    </div>
    <i class="pi-angle-down accordion__icon text-med-blue"></i>
  </a>
  <div class="accordion__content">
    <div class="px-3 py-3">
      <!-- Accordion content goes here! -->
    </div>
    <div class="accordion">
      <a href="#" class="accordion__header px-3 py-3 flex flex--justify-between flex--align-center">
        <div class="flex flex--align-center">
          <!-- Nested accordion header goes here! -->
        </div>
        <i class="pi-angle-down accordion__icon text-med-blue"></i>
      </a>
      <div class="accordion__content">
        <div class="px-3 py-3">
          <!-- Nested accordion content goes here! -->
        </div>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
