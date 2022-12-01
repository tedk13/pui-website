---
layout: ../../../layouts/single.astro
title: Site
weight: 1
---

{{% anchor name="Site menu" %}}

The `site-menu` starts as a basic horizontal menu that can be modified to fit a wide array of scenarios. 

{{< code-demo >}}
<nav class="site-menu">
  <a class="site-menu__item">Home</a>
  <a class="site-menu__item">About</a>
  <a class="site-menu__item">Blog</a>
</nav>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<nav class="site-menu">
  <a href="" class="site-menu__item"></a>
  <a href="" class="site-menu__item"></a>
  <a href="" class="site-menu__item"></a>
</nav>
{{< /highlight >}}
{{< /code-markup >}} 

{{< modifiers secondary="true" >}}
<tr>
  <td data-label="Modifier"><code>background--{ color }</code></td>
  <td data-label="Secondary"><i class="pi-ban" aria-hidden="true"></i></td>
  <td data-label="Behavior">Set menu background color and corresponding hover highlight.</td>
</tr>
<tr>
  <td data-label="Modifier"><code>hover-underline</code></td>
  <td data-label="Secondary"><code>hover-underline--{ color }</code></td>
  <td data-label="Behavior">Add an underline effect on hover. The secondary modifier augments color.</td>
</tr>
<tr>
  <td data-label="Modifier"><code>site-menu--bordered</code></td>
  <td data-label="Secondary"><i class="pi-ban" aria-hidden="true"></i></td>
  <td data-label="Behavior">Add a horizontal border between menu items.</td>
</tr>
{{< /modifiers >}}

{{% anchor name="logo" %}}

Our site menu was built to be used in the header as a main site navigation. If you'd like to add a logo, apply the `site-logo` class.

{{< code-demo >}}
<div class="site-header background--purple flex flex--align-center">
  <a class="site-logo p-2">
    <img src="/images/platform-ui.svg" alt="Platform UI">
  </a>
  <nav class="site-menu hover-underline hover-underline--white h-100 flex flex--grow flex--align-center text--white px-2">
    <a class="p-2 site-menu__item">Docs</a>
    <a class="p-2 site-menu__item">Icons</a>
    <a class="p-2 site-menu__item">Launchpad</a>
  </nav>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<header class="site-header background--purple flex flex--align-center">
  <a class="site-logo p-2">
    <img src="/images/platform-ui.svg" alt="Platform UI">
  </a>
  <nav class="site-menu hover-underline hover-underline--white h-100 flex flex--grow flex--align-center text--white px-2">
    <a href="" class="p-2 site-menu__item">Docs</a>
    <a href="" class="p-2 site-menu__item">Icons</a>
    <a href="" class="p-2 site-menu__item">Launchpad</a>
  </nav>
</header>
{{< /highlight >}}
{{< /code-markup >}}
 
{{< callout header="link color">}}
When using the utility `text--white` as a modifier on `site-menu`, all `site-menu__item` links inherit `text--white`.   
{{< /callout >}}


{{% anchor name="dropdowns" %}}

<div class="mb-4">
{{% requires-js %}}
</div>

Sub-menus are accomplished via the `dropdown`.

{{< modifiers >}}
{{< modifiers-row
  modifier="dropdown--centered" 
  behavior="Centers content of the dropdown sub-menu." 
>}}
{{< modifiers-row 
    modifier="dropdown--right" 
    behavior="Justifies both the surrounding dropdown container and content to the right." 
>}}
{{< /modifiers >}}

{{< code-demo >}}
<nav class="site-menu background--lightblue">
  <a class="p-3 site-menu__item">About</a>
  <div class="dropdown">
      <div class="p-3 site-menu__item dropdown__trigger">
        Fruits
        <i class="ml-1 pi-angle-down"></i>
      </div>
      <div class="dropdown__content">
        <a class="dropdown__content-item">Dragonfruit</a>
        <a class="dropdown__content-item">Kiwis</a>
      </div>
    </div>
</nav>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<nav class="site-menu background--lightblue">
  <a href="" class="p-3 site-menu__item">About</a>
  <div class="dropdown">
      <div class="p-3 site-menu__item dropdown__trigger">
        Fruits
        <i class="ml-1 pi-angle-down"></i>
      </div>
      <div class="dropdown__content">
        <a href="" class="dropdown__content-item">Dragonfruit</a>
        <a href="" class="dropdown__content-item">Kiwis</a>
      </div>
    </div>
</nav>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="fixed" %}} 

To set a fixed-position header menu (like the one this site uses), wrap `site-menu` in an element with the `site-header` class and add the modifier `site-header--fixed`. 

{{< code-markup >}}
{{< highlight html >}}
<header class="site-header site-header--fixed">
  <a class="site-logo">
    <img src="..." alt="Platform UI">
  </a>
  <nav class="site-menu">
    <a href="" class="site-menu__item">Docs</a>
    <a href="" class="site-menu__item">Icons</a>
    <a href="" class="site-menu__item">Launchpad</a>
  </nav>
</header>
{{< /highlight >}}
{{< /code-markup >}}