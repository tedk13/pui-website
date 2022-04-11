---
title: Drawer
skellyCSS: true
---
<div class="mb-4">
{{% requires-js %}}
</div>

Drawers are Platform UI elements that hide content off-screen called upon, at which point are attached to one side of the viewport.

{{< code-demo >}}
<div class="block-container mt-3">
  <button class="button button--lg drawer__open" data-drawer="default">
    Toggle default drawer
  </button>
</div>

<div id="default" class="drawer drawer--closed">
  <div class="drawer__inner">
   <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="default">
          Close 
          <i class="pi-times" aria-hidden="true"></i>
        </button>
      </div>
      <h2 class="skeleton skeleton--lg"></h2>
      <p class="skeleton" data-lines="5"></p>
      <p class="skeleton" data-lines="3"></p>
      <p class="skeleton" data-lines="6"></p>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button button--lg drawer__open" data-drawer="default">
  Toggle default drawer
</button>

<!-- Default Drawer -->
<div class="drawer drawer--closed">
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
        <td data-label="Modifier Class"><code>.drawer--single-row</code></td>
        <td data-label="Description">Small sized drawer</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.drawer-bottom</code></td>
        <td data-label="Description">Drawer opens from bottom of the viewport</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.drawer-top</code></td>
        <td data-label="Description">Drawer opens from the top of the viewport</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.drawer-right</code></td>
        <td data-label="Description">Drawer opens from right side of the viewport</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.drawer-left</code></td>
        <td data-label="Description">Drawer opens from left side of the viewport</td>
      </tr>
    </tbody>
  </table>
</section>


If the `header-fixed` class is added to the main wrapper, the side drawers (`.drawer-left` and `.drawer-right`) will open below the header.

<div class="message message--info mb-4">
  <p>You can add animation effects to drawers by using <a class="text--navy text-underline--hover"  href="https://animate.style/">animate.css</a> classes!</p>
</div>