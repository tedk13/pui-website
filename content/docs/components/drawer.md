---
title: Drawer
date: 2018-07-20T12:59:15-04:00
---
<div class="mb-4">
{{% requires-js %}}
</div>

Drawers are Platform UI elements that hide content off-screen called upon, at which point are attached to one side of the viewport. 

| Modifier Class        | Description                                     |
| --------------------- | ----------------------------------------------- |
| `.drawer--single-row` | Small sized drawer                              |
| `.drawer-bottom`      | Drawer opens from bottom of the viewport        |
| `.drawer-right`       | Drawer opens from right side of the viewport    |
| `.drawer-left`        | Drawer opens from left side of the viewport     |

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

<div class="mt-3">
{{< highlight html >}}
<!-- Drawer Trigger -->
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
</div>

<div class="message message--info mb-4">
  <p>You can add animation effects to drawers by using <a class="text-navy text-underline--hover"  href="https://animate.style/">animate.css</a> classes!</p>
</div>


## Single Row Drawer

If you want a smaller drawer you can add the modifier class `.drawer--single-row`. This modifier class has a min-height and is best used in cases where less content will be needed.

<div class="block-container">
  <button class="button button--lg drawer__open" data-drawer="single-row">
    Toggle single row drawer
  </button>
</div>
<div id="single-row" class="drawer drawer--closed drawer--single-row">
  <div class="drawer__inner">
    <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="single-row">
          Close
          <i class="pi-times" aria-hidden="true"></i>
        </button>
      </div>
      <p class="skeleton" data-lines="3">
    </div>
  </div>
</div>

<div class="mt-3">
{{< highlight html>}}
<!-- Drawer trigger -->
<button class="button button--lg drawer__open" data-drawer="single-row">
  Toggle single row drawer
</button>

<!-- Single Row Drawer -->
<div id="single-row" class="drawer drawer--closed drawer--single-row">
  <div class="drawer__inner">
    <div class="drawer__content">
      <button class="button drawer__close" data-drawer="single-row">
        Close
        <i class="pi-times" aria-hidden="true"></i>
      </button>
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
{{< /highlight>}}
</div>

<div class="message message--warning mb-4">
  <p>The single row modifier class only applies to the default drawer and drawer-bottom stylings.</p>
</div>


## Bottom Drawer

The default drawer opens from the bottom of the viewport, however you can also specify this by adding the `.drawer-bottom` class to the `.drawer` element.
<div class="block-container">
  <button class="button button--lg drawer__open" data-drawer="bottom">
    Toggle bottom drawer
  </button>
</div>

<div id="bottom" class="drawer drawer-bottom drawer--closed">
  <div class="drawer__inner">
    <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="bottom">
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

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Right drawer trigger -->
<button class="button button--lg drawer__open" data-drawer="bottom">
  Toggle bottom drawer
</button>

<!-- Bottom Drawer -->
<div id="bottom" class="drawer drawer--closed drawer-bottom">
  <div class="drawer__inner">
    <div class="drawer__content">
      <button class="button drawer__close" data-drawer="bottom">
        Close 
        <i class="pi-times" aria-hidden="true"></i>
      </button>
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
 {{< /highlight >}}
 </div>

## Side Drawers

Drawers can also open from the sides. Side drawers account for the fixed header. If the `header-fixed` class is added to your main wrapper, the side drawers will open below the header. Side drawers will also open full screen at the mobile resolution (below 768px).

### Right Drawer

To open a drawer from the right side of the viewport, apply the `.drawer-right` class to the `.drawer` element.

<div class="block-container">
  <button class="button button--lg drawer__open" data-drawer="right">
    Toggle right drawer
  </button>
</div>

<div id="right" class="drawer drawer-right drawer--closed">
  <div class="drawer__inner">
    <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="right">
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

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Right drawer trigger -->
<button class="button button--lg drawer__open" data-drawer="right">
  Toggle right drawer
</button>

<!-- Right Drawer -->
<div id="right" class="drawer drawer--closed drawer-right">
  <div class="drawer__inner">
    <div class="drawer__content">
      <button class="button drawer__close" data-drawer="right">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
 {{< /highlight >}}
 </div>


### Left Drawer

To open a drawer from the left side of the viewport, apply the `.drawer-left` class to the `.drawer` element.

<button class="button button--lg drawer__open" data-drawer="left">
  Toggle left drawer
</button>

<div id="left" class="drawer drawer-left drawer--closed">
  <div class="drawer__inner">
    <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="left">
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

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Left drawer trigger -->
<button class="button  button--lg drawer__open" data-drawer="left">
  Toggle left drawer
</button>

<!-- Left Drawer -->
<div id="left" class="drawer drawer--closed drawer-left">
  <div class="drawer__inner">
    <div class="drawer__content">
      <button class="button drawer__close" data-drawer="left">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Top Drawer

This Drawer slides in from the top.

<button class="button button--lg drawer__open" data-drawer="top">Toggle top drawer</button>

<div id="top" class="drawer drawer-top slide-top-enter-active drawer--closed p-4">
  <div class="drawer__inner">
    <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="top">
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

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Top drawer trigger -->
<button class="button button--lg drawer__open" data-drawer="top">Toggle top drawer</button>

<!-- Top Drawer -->
<div id="top" class="drawer drawer-top slide-top-enter-active drawer--closed p-4">
  <div class="drawer__inner">
    <div class="drawer__content">
      <button class="button drawer__close" data-drawer="top">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
</div>