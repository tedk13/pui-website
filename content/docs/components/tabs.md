---
title: Tabs
skellyCSS: true
toc: false
---
The content for a tabbed section needs to live inside the `.tabs` class. The tabs are radio inputs.
Be sure to add a specific `id` to the input and add a `for` to the label with a value that matches the
corresponding input. The label needs the class of `tab`.
The content for the tabs needs the class of `tab-panel` and it needs to be directly after the `tab` label.
The tabs themselves or the `.tab` have a specific width of `16rem` as well as a specific
height of `4rem`.

Work in progress. At a mobile resolution (below 768px) an active tab will collapse when clicked. 

{{< code-demo name="Tabs" >}}
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
{{< /code-demo >}}

{{< code-markup name="Tabs" >}}
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
{{< /code-markup >}}

{{< modifiers name="Tabs" >}}
<tr>
  <td data-label="Base">
    <code>tabs</code>
  </td>
  <td data-label="Modifier">
    <code>tabs--flat</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Removes the border effect on the tabs
  </td>
</tr>
{{< /modifiers >}}

{{< callout tipHeader="Tabs Tip" >}}
  <p>You can add the class <code>.unresponsive</code> if you want to keep the look of the tabs the same at every screen size!</p>
{{< /callout >}}