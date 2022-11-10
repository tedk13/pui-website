---
title: Mobile
description: Platform UI documentation for mobile menu.
weight: 2
---

{{% anchor name="Mobile menu" %}}

<div class="mb-4">
{{% requires-js %}}
</div>

Our version of the standard hamburger menu requires our Javascript and a bit more markdown. Here's the basic structure; check out this site in a mobile viewport to see it in action.

{{< code-markup >}}
{{< highlight html >}}
<div class="site-menu-wrapper">
  <button class="site-menu-mobile-action">
    <span class="sr-only">Toggle Navigation</span>
    <i class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu">
    <a href="" class="site-menu__item">About</a>
    <a href="#" class="site-menu__item">Fruits</a>
    <div class="dropdown">
      <a href="#" class="site-menu__item dropdown__trigger">
        Item 1 <i class="ml-1 pi-angle-down"></i>
      </a>
      <div class="dropdown__content">
        <a href="" class="dropdown__content-item">Dragonfruit</a>
      </div>
    </div>
  </nav>
</div>
{{< /highlight >}}
{{< /code-markup >}} 

