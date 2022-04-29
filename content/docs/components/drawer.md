---
title: Drawers
description: Documentation for Platform UI's drawer components.
skellyCSS: true
---

{{% requires-js %}}

{{% anchor name="drawer" %}}

A drawer is content meant to be toggled with the `active` class and then slide into view from any direction. The default orientation is bottom.

A drawer can easily be opened by setting `data-drawer` with the matching `id` of the desired drawer on a button with the `drawer__open` class. Similarly, a button with the same setup and the `drawer__close` class will close the drawer.

{{< code-demo >}}
<div class="block-container mt-3">
  <button class="button drawer__open" data-drawer="default">
    Toggle drawer
  </button>
</div>
<div id="default" class="drawer">
  <div class="drawer__inner">
   <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="default">
          Close 
          <i class="pi-times" aria-hidden="true"></i>
        </button>
      </div>
      <p class="skeleton" data-lines="5" role="presentation"></p>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button drawer__open" data-drawer="default">
  Toggle default drawer
</button>
<!-- Default Drawer -->
<div id="default" class="drawer">
  <div class="drawer__inner">
    <div class="drawer__header">
      <button class="button drawer__close" data-drawer="default">
        Close 
        <i class="pi-times" aria-hidden="true"></i>
      </button>
      <!-- Drawer header goes here! -->
    </div>
    <div class="drawer__content">
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers data="true" >}}
{{< modifiers-row 
  modifier="drawer-{t, l, r}"
  attr="data-drawer"
  behavior="`top`, `left`, `right` orientation. Bottom is default." 
>}}
{{< modifiers-row 
  modifier="drawer--single-row"
  attr="data-drawer"
  behavior="A small drawer." 
>}}
{{< /modifiers >}}

{{< callout header="Drawer Tip" >}}
  <p>If the <code>header-fixed</code> class is added to the main wrapper, the side drawers will open below the header.</p>
{{< /callout >}}