---
title: Menu
date: 2018-07-20T12:59:15-04:00
---

## Site Menu
<div class="block-container blocks mb-4">
  <div class="block">
    <div class="pill text--size-xs text-dark">
      <i class="pi-bolt mr-1 text-negative"></i>
      Requires <span class="text--bold ml-1">JavaScript</span>
    </div> 
  </div>
</div>

Here is a simple menu. This should be used inside your site header. It would work great as a navigation menu. The link colors are set to inherit the color defined by the `body`. In this case, `#333`. The links have a subtle shadow on mouse over to give the links a nice hover effect.

Our site-menu works great for a site navigation that lives inside your header. It's fully responsive out of the box. Just be sure to use the appropriate class names. Your site-menu should be wrapped in a `site-menu-wrapper`. This ensures the proper position is applied to the wrapper and allows the responsive menu to function properly.

If you have a logo that links to your home page, wrap that in an `a` with the class `site-logo`.

In order to fire the responsive site-menu you will need an action. Use `site-menu-mobile-action` on a `button` or `a`. From there, use any font-icon you'd like to reflect the mobile menu. Feel free to use our icon `pi-menu` which reflects the industry standard "hamburger menu".

Next, your `site-menu` should follow the `site-mobile-menu-action`. In other words, they should be siblings. Inside your site-menu add the class `site-menu__item` to any link, or anything that you want to be perceived as a link.

If you want to have a dropdown menu within the `site-menu`, you can add `dropdown__trigger` to a `site-menu__item`, or add an element with the class of `dropdown__content` as a sibling to your `dropdown__trigger`. Finally, wrap these elements in a dropdown class. When you click on the `dropdown__trigger` your `dropdown__content` will appear. You can put anything inside the `dropdown__content`. If you have a list of links and you want them to look like the rest of the links inside your `site-menu`, add the class `dropdown__content-item`.

We built the `site-menu` to be light, and work well for your needs. It does not come with a background color set. However, the `site-menu` will inherit its parent background-colors. You can read more about this below in the documentation.



<header class="site-menu-wrapper">
    <a href="/" class="site-logo">
        <img src="https://via.placeholder.com/150x50.png?text=Site+Logo" alt="Site Logo" />
    </a>
    <button class="site-menu-mobile-action">
      <span class="sr-only">Toggle Navigation</span>
      <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
    </button>
    <nav class="site-menu">
      <a href="#" class="site-menu__item">Item 1</a>
      <a href="#" class="site-menu__item">Item 2</a>
      <a href="#" class="site-menu__item">Item 3</a>
      <a href="#" class="site-menu__item">Item 4</a>
      <div class="dropdown">
        <a href="#" class="site-menu__item dropdown__trigger">
          Item 1 <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown__content">
          <a href="#" class="dropdown__content-item">Link 1</a>
          <a href="#" class="dropdown__content-item">Link 2</a>
          <a href="#" class="dropdown__content-item">Link 3</a>
          <a href="#" class="dropdown__content-item">Link 4</a>
        </div>
      </div>
    </nav>
</header>

<div class="mt-3 mb-4">
{{< highlight html >}}
<header class="site-menu-wrapper">
    <a href="/" class="site-logo">
        <img src="https://via.placeholder.com/150x50.png?text=Site+Logo" alt="Site Logo" />
    </a>
    <button class="site-menu-mobile-action">
      <span class="sr-only">Toggle Navigation</span>
      <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
    </button>
    <nav class="site-menu">
      <a href="#" class="site-menu__item">Item 1</a>
      <a href="#" class="site-menu__item">Item 2</a>
      <a href="#" class="site-menu__item">Item 3</a>
      <a href="#" class="site-menu__item">Item 4</a>
      <div class="dropdown">
        <a href="#" class="site-menu__item dropdown__trigger">
          Item 1 <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown__content">
          <a href="#" class="dropdown__content-item">Link 1</a>
          <a href="#" class="dropdown__content-item">Link 2</a>
          <a href="#" class="dropdown__content-item">Link 3</a>
          <a href="#" class="dropdown__content-item">Link 4</a>
        </div>
      </div>
    </nav>
</header>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="background-color">}}
Background Color
{{< /heading >}}

You can add a background color to your `site-menu`. This will accomplish two things. First, the background color of your menu will change. Second, the hover effect on the links in the menu will reflect a darker version of the background color you set. The color of the links will also change based on the color of the site-menu. If the color is dark, the link color will be white. If the background color is a lighter color, the link color will be `var(--dark)`. Which is currently set to the body color.

<nav class="site-menu background-navy">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>

<div class="mt-3 mb-4">
{{< highlight html >}}
<nav class="site-menu background-navy">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
{{< /highlight >}}
</div>


## Bordered
Adding the modifier class of site-menu--bordered will add borders separating each menu item.

<nav class="site-menu site-menu--bordered mb-3">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>


<div class="mb-4">
{{< highlight html >}}
<nav class="site-menu site-menu--bordered">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
{{< /highlight >}}
</div>

## Hover Underline
Adding the class hover-underline to your site-menu will give the `<button>`s in the menu a bottom border on hover.

<nav class="site-menu hover-underline mb-3">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>

<div class="mb-4">
{{< highlight html >}}
<nav class="site-menu hover-underline">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
{{< /highlight >}}
</div>

## Dropdown
You can add a dropdown submenu to your site-menu. The markup for this component is pretty specific. Be sure to include the following classes. You will need a `dropdown` class wrapping two sibling elements, a `dropdown__trigger` and your `dropdown__content`. View the example below to see how this structure works.

By default, the dropdowns will open positioned to the left of their parent, all except for the last dropdown in the menu. This will help prevent any dropdowns from opening off the page.

The dropdowns inherit the hover states of the site-menu.

Also note that the `dropdown__trigger` can be on a `button` as well as an `a`. If you use a `button`, be sure to add the class `button--plain` to disable the default Platform UI button styles.

Like we mentioned above, by default, the dropdowns will open positioned to the left of their parent.

<div class="background-white">
  <nav class="site-menu">
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 1
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 2
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 3
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 4
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 5
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
  </nav>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="background-white">
  <nav class="site-menu">
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 1
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 2
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 3
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 4
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 5
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
  </nav>
</div>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="fixed-header">}}
Fixed Header
{{< /heading >}}

To get a fixed header you can set the desired height in the config file. The `site-header` needs the modifier, `site-header--fixed`. This is what gives the header the `position: fixed` style.
In order to ensure that you have proper space between your header and main content, add the class `header-fixed` to the direct sibling of your `site-header`.
To see this in action, inspect the header of this style guide.

 
{{< heading heading="h2" id="icon-menu">}}
Icon Menu
{{< /heading >}}

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
      <i class="pi-trash"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-positive--hover pointer">
      <i class="pi-edit"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-red--hover pointer">
      <i class="pi-clock"></i>
    </button>
  </div>
</div>
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-negative--hover pointer">
      <i class="pi-trash"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <button class="icon-menu__action button--plain text-positive--hover pointer">
      <i class="pi-edit"></i>
    </button>
  </div>
</div>
{{< /highlight >}}
</div>
