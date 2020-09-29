---
title: Menu
date: 2018-07-20T12:59:15-04:00
---

The default menu has a white background with Navy text color. The hover color on the items in the menu is set to a light gray. These colors can be cahnged in the config file.
You can also invert the colors of the site-menu by adding the classes `.primary` and `.inverted` to the site-menu. This would give the menu a navy background and white text color.



<header class="site-header">
  <nav class="site-menu">
    <a href="#" class="site-menu__item">
      <span class="card__header-icon pill--circle-medium background-pink text-white mr-2">
        <i class="pi-rimdev text-base"></i>
      </span>
      <div class="font-lg">
        Menu Header with avatar
      </div>
    </a>
    <a href="#" class="site-menu__item">
      menu item
    </a>
    <div class="site-menu__item dropdown">
      <a href="#" class="dropdown__trigger">
        dropdown item
      </a>
      <div class="dropdown__content pin-right">
        <a href="#">
          dropdown
        </a>
      </div>
    </div>
  </nav>
</header>
<header class="site-header mt-5">
  <nav class="site-menu primary inverted">
    <a href="#" class="site-menu__item">
      <span class="card__header-icon pill--circle-medium background-pink text-white mr-2">
        <i class="pi-rimdev text-base"></i>
      </span>
      <div class="font-lg">
        Menu Header with avatar
      </div>
    </a>
    <a href="#" class="site-menu__item">
      menu item
    </a>
    <div class="site-menu__item dropdown">
      <a href="#" class="dropdown__trigger">
        dropdown item
      </a>
      <div class="dropdown__content pin-right">
        <a href="#">
          dropdown
        </a>
      </div>
    </div>
  </nav>
</header>

<div class="mt-3 mb-4">
{{< highlight html >}}
<header class="site-header">
  <nav class="site-menu">
    <a href="#" class="site-menu__item">
      <span class="card__header-icon pill--circle-medium background-pink text-white mr-2">
        <i class="pi-rimdev text-base"></i>
      </span>
      <div class="font-lg">
        Menu Header with avatar
      </div>
    </a>
    <a href="#" class="site-menu__item">
      menu item
    </a>
    <div class="site-menu__item dropdown">
      <a href="#" class="dropdown__trigger">
        dropdown item
      </a>
      <div class="dropdown__content pin-right">
        <a href="#">
          dropdown
        </a>
      </div>
    </div>
  </nav>
</header>
<header class="site-header mt-5">
  <nav class="site-menu primary inverted">
    <a href="#" class="site-menu__item">
      <span class="card__header-icon pill--circle-medium background-pink text-white mr-2">
        <i class="pi-rimdev text-base"></i>
      </span>
      <div class="font-lg">
        Menu Header with avatar
      </div>
    </a>
    <a href="#" class="site-menu__item">
      menu item
    </a>
    <div class="site-menu__item dropdown">
      <a href="#" class="dropdown__trigger">
        dropdown item
      </a>
      <div class="dropdown__content pin-right">
        <a href="#">
          dropdown
        </a>
      </div>
    </div>
  </nav>
</header>
{{< /highlight >}}
</div>


## Fixed Header

To get a fixed header you can set the desired height in the config file. The `site-header` needs the modifier, `site-header--fixed`. This is what gives the header the `position: fixed` style.
In order to ensure that you have proper space between your header and main content, add the class `header-fixed` to the direct sibling of your `site-header`.
To see this in action, inspect the header of this style guide.



## Responsive Menu

If you want the site menu to be responsive, add the class `site-menu-wrapper` to the parent element of the `site-menu`.
In the example below, the class is added to the `header`. You will also need to add a button to toggle the menu. Below, you see we
added a button with the class `site-menu-mobile-action`. For accessibility purposes, we included button text with an `sr-only` class.
The menu mobile menu will respond below the `tablet` resolution and the menu button will display as well.
If you want to add an icon to the dropdown targets, make sure the icon has the class `dropdown__trigger-icon`. This icon will rotate when the dropdown
is active. In the example below we're using a platform icon. `<i class="pi-angle-right mx-2 dropdown__trigger-icon"></i>`


<header class="background-teal site-menu-wrapper py-3 px-3">
  <div class="block-container flex--justify-between">
    <div class="block block--shrink">
      <img src="https://dummyimage.com/150x50/fff/aaa" alt="Logo">
    </div>
    <button class="site-menu-mobile-action button--plain text-white">
      <span class="sr-only">Toggle Navigation</span>
      <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
    </button>
    <nav class="site-menu background-teal inverted">
      <div class="site-menu__item">
        <a href="#" class="dropdown__trigger">
          About
        </a>
      </div>
      <div class="site-menu__item dropdown">
        <a href="#" class="dropdown__trigger flex flex--justify-between w-100">
          Blog <i class="pi-angle-right mx-2 dropdown__trigger-icon"></i>
        </a>
        <div class="dropdown__content pin-right">
          <a href="#">
            Blog Post
          </a>
          <a href="#">
            Blog Post
          </a>
          <a href="#">
            Blog Post
          </a>
        </div>
      </div>
      <div class="site-menu__item dropdown">
        <a href="#" class="dropdown__trigger flex flex--justify-between w-100">
          Dropdown <i class="pi-angle-right mx-2 dropdown__trigger-icon"></i>
        </a>
        <div class="dropdown__content pin-right">
          <a href="#">
            Dropdown Item
          </a>
          <a href="#">
            Dropdown Item
          </a>
          <a href="#">
            Dropdown Item
          </a>
        </div>
      </div>
      <div class="site-menu__item">
        <a href="#" class="dropdown__trigger">
          Contact
        </a>
      </div>
      <div class="site-menu__item">
        <a href="#" class="dropdown__trigger">
          Events
        </a>
      </div>
    </nav>
  </div>
</header>

<div class="mt-3 mb-4">
{{< highlight html >}}
<header class="background-teal site-menu-wrapper py-3 px-3">
  <div class="block-container flex--justify-between">
    <div class="block block--shrink">
      <img src="https://dummyimage.com/150x50/fff/aaa" alt="Logo">
    </div>
    <button class="site-menu-mobile-action button--plain text-white">
      <span class="sr-only">Toggle Navigation</span>
      <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
    </button>
    <nav class="site-menu background-teal inverted">
      <div class="site-menu__item">
        <a href="#" class="dropdown__trigger">
          About
        </a>
      </div>
      <div class="site-menu__item dropdown">
        <a href="#" class="dropdown__trigger flex flex--justify-between w-100">
          Blog <i class="pi-angle-right mx-2 dropdown__trigger-icon"></i>
        </a>
        <div class="dropdown__content pin-right">
          <a href="#">
            Blog Post
          </a>
          <a href="#">
            Blog Post
          </a>
          <a href="#">
            Blog Post
          </a>
        </div>
      </div>
      <div class="site-menu__item dropdown">
        <a href="#" class="dropdown__trigger flex flex--justify-between w-100">
          Dropdown <i class="pi-angle-right mx-2 dropdown__trigger-icon"></i>
        </a>
        <div class="dropdown__content pin-right">
          <a href="#">
            Dropdown Item
          </a>
          <a href="#">
            Dropdown Item
          </a>
          <a href="#">
            Dropdown Item
          </a>
        </div>
      </div>
      <div class="site-menu__item">
        <a href="#" class="dropdown__trigger">
          Contact
        </a>
      </div>
      <div class="site-menu__item">
        <a href="#" class="dropdown__trigger">
          Events
        </a>
      </div>
    </nav>
  </div>
</header>
{{< /highlight >}}
</div>
 
 

## Icon Menu

When you need a horizontal list of icons, look no further than "Icon Menu". Use the mark up below
to get the list you want. Be sure to use the specific `icon-menu` classes. With this strcuture you have
the freedom to use any icon you want and make that icon change to whatever color you want on hover.
Simpy change the `<icon>` class to the desired font-awesome icon you want. Then, add the `text-{color}--hover`
class to the `icon-menu__action`. To see a list of available hover colors [click here](/section-typography.html#kssref-typography-utilities-color).

In the example below, we're using `<div>`s on the `icon-menu__action` to build the menus. You could use a `<button>` or an `<a>` to improve accessibility
depending on exactly what you need. If you use a less semantic element like `<div>`, we would recommend adding `role="button"`.

Also notice that the `pointer` class was added to those elements that do not have a `cursor: pointer` applied to them by default.

Adding `icon-menu icon-menu--vertical` creates a vertical icon menu.

| <i class="fpi-warning text-orange"></i> Be sure to always wrap the font icon in another element. We don't want to have the click event be on the `<icon>` itself. |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |


You can add as many icons as you'd like.


<div class="icon-menu">
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-negative--hover pointer">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-positive--hover pointer">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-red--hover pointer">
      <i class="pi-clock" aria-hidden="hidden"></i>
    </button>
  </div>
</div>
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-negative--hover pointer">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-positive--hover pointer">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </button>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="icon-menu">
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-negative--hover pointer">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-positive--hover pointer">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-red--hover pointer">
      <i class="pi-clock" aria-hidden="hidden"></i>
    </button>
  </div>
</div>
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-negative--hover pointer">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-positive--hover pointer">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </button>
  </div>
</div>
{{< /highlight >}}
</div>

