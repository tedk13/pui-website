---
title: Tabs
description: Documentation for Platform UI's tabs component.
skellyCSS: true
---

{{% anchor name="Tab" %}}

Our tabs are based on radio inputs, content for a tabbed section needs to live inside the `tabs` container and the input `id` and corresponding label `for` need to match.
The tab's content, `tab-panel`, must be the consecutive sibling of the `tab` label.

Tabs have a specific width of `16rem` and height of `4rem`.

At a mobile resolution (below 768px) an active tab will collapse when clicked. 

{{< code-demo >}}
<div class="tabs">
  <!-- Tab 1 -->
  <input type="radio" id="tab-input-a" name="tabs" checked>
  <label for="tab-input-a" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <p class="skeleton" data-lines="4" role="presentation"></p>
  </div>

  <!-- Tab 2 -->
  <input type="radio" id="tab-input-b" name="tabs">
  <label for="tab-input-b" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <div class="flex">
      <img class="skeleton-image skeleton-image--lg mb-3" role="presentation">
      <img class="skeleton-image skeleton-image--lg skeleton-image--circle mb-3" role="presentation">
    </div>
  </div>

  <!-- Tab 3 -->
  <input type="radio" id="tab-input-c" name="tabs">
  <label for="tab-input-c" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img class="skeleton-image skeleton-image--lg mb-3" role="presentation">
    <h2 class="skeleton skeleton--md" role="presentation"></h2>
    <p class="skeleton" data-lines="3" role="presentation"></p>
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
    Removes tab borders.
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>tabs</code>
  </td>
  <td data-label="Modifier">
    <code>unresponsive</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Removes responsive.
  </td>
</tr>
{{< /modifiers >}}
