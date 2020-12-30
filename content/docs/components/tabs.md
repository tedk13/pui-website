---
title: Tabs
date: 2018-07-20T12:59:15-04:00
---
The content for a tabbed section needs to live inside the `.tabs` class. The tabs are radio inputs.
Be sure to add a specific `id` to the input and add a `for` to the label with a value that matches the
corresponding input. The label needs the class of `tab`.
The content for the tabs needs the class of `tab-panel` and it needs to be directly after the `tab` label.
The tabs themselves or the `.tab` have a specific width of `16rem` as well as a specific
height of `4rem`.

Work in progress. At a mobile resolution (below 768px) an active tab will collapse when clicked. 

<div class="tabs">
  <!-- Tab 1 -->
  <input type="radio" id="tab-input-a" name="tabs" checked>
  <label for="tab-input-a" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <p class="skeleton" data-lines="6"></p>
  </div>

  <!-- Tab 2 -->
  <input type="radio" id="tab-input-b" name="tabs">
  <label for="tab-input-b" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <div class="flex">
      <img class="skeleton-image skeleton-image--lg mb-3">
      <img class="skeleton-image skeleton-image--lg skeleton-image--circle mb-3">
    </div>
  </div>

  <!-- Tab 3 -->
  <input type="radio" id="tab-input-c" name="tabs">
  <label for="tab-input-c" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img class="skeleton-image skeleton-image--lg mb-3">
    <h2 class="skeleton skeleton--md"></h2>
    <p class="skeleton" data-lines="3"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tabs">
  <!-- Tab 1 -->
  <input type="radio" id="tab-input-a" name="tabs" checked>
  <label for="tab-input-a" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>

  <!-- Tab 2 -->
  <input type="radio" id="tab-input-b" name="tabs">
  <label for="tab-input-b" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>

  <!-- Tab 3 -->
  <input type="radio" id="tab-input-c" name="tabs">
  <label for="tab-input-c" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


## Tabs Flat

If you want the borders removed from the tabs, add the class `tab--flat` to the `tab`.

<div class="tabs tabs--flat">
  <input type="radio" id="tab-input-2a" name="tabs-2" checked>
  <label for="tab-input-2a" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <p class="skeleton" data-lines="6"></p>
  </div>
  <input type="radio" id="tab-input-2b" name="tabs-2">
  <label for="tab-input-2b" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <div class="flex">
      <img class="skeleton-image skeleton-image--lg mb-3">
      <img class="skeleton-image skeleton-image--lg skeleton-image--circle mb-3">
    </div>
  </div>
  <input type="radio" id="tab-input-2c" name="tabs-2">
  <label for="tab-input-2c" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img class="skeleton-image skeleton-image--lg mb-3">
    <h2 class="skeleton skeleton--md"></h2>
    <p class="skeleton" data-lines="3"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tabs tabs--flat">
  <!-- Tab 1 -->
  <input type="radio" id="tab-input-a" name="tabs" checked>
  <label for="tab-input-a" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>

  <!-- Tab 2 -->
  <input type="radio" id="tab-input-b" name="tabs">
  <label for="tab-input-b" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>

  <!-- Tab 3 -->
  <input type="radio" id="tab-input-c" name="tabs">
  <label for="tab-input-c" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


## Tabs Flat-Responsive

The flat tabs do not change at lower/higher screen resolutions. You can make the tabs respond, however, by adding
the class `responsive` to `tabs tabs--flat`. This will make the tabs stack at the mobile breakpoint and 
go back to the flat tab look above mobile.

<div class="tabs tabs--flat responsive">
  <input type="radio" id="tab-input-ar" name="tabs-r" checked>
  <label for="tab-input-ar" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <p class="skeleton" data-lines="6"></p>
  </div>
  <input type="radio" id="tab-input-br" name="tabs-r">
  <label for="tab-input-br" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <div class="flex">
      <img class="skeleton-image skeleton-image--lg mb-3">
      <img class="skeleton-image skeleton-image--lg skeleton-image--circle mb-3">
    </div>
  </div>
  <input type="radio" id="tab-input-cr" name="tabs-r">
  <label for="tab-input-cr" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img class="skeleton-image skeleton-image--lg mb-3">
    <h2 class="skeleton skeleton--md"></h2>
    <p class="skeleton" data-lines="3"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tabs tabs--flat responsive">
  <!-- Tab 1 -->
  <input type="radio" id="tab-input-a" name="tabs" checked>
  <label for="tab-input-a" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>

  <!-- Tab 2 -->
  <input type="radio" id="tab-input-b" name="tabs">
  <label for="tab-input-b" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>

  <!-- Tab 3 -->
  <input type="radio" id="tab-input-c" name="tabs">
  <label for="tab-input-c" class="tab">
    <!-- Tab label goes here! -->
  </label>
  <div class="tab-panel">
    <!-- Tab content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>
