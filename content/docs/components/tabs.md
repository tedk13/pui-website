---
title: Tabs
skellyCSS: true
---
The content for a tabbed section needs to live inside the `.tabs` class. The tabs are radio inputs.
Be sure to add a specific `id` to the input and add a `for` to the label with a value that matches the
corresponding input. The label needs the class of `tab`.
The content for the tabs needs the class of `tab-panel` and it needs to be directly after the `tab` label.
The tabs themselves or the `.tab` have a specific width of `16rem` as well as a specific
height of `4rem`.

Work in progress. At a mobile resolution (below 768px) an active tab will collapse when clicked. 

{{< code-demo >}}
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

{{< code-markup >}}
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

<section class="mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Modifier Class"><code>.tabs--flat</code></td>
        <td data-label="Description">Removes the hover effect on the table and rows</td>
      </tr>
    </tbody>
  </table>
</section>

{{< callout tipHeader="Tabs Tip" >}}
  <p>You can add the class <code>.unresponsive</code> if you want to keep the look of the tabs the same at every screen size!</p>
{{< /callout >}}