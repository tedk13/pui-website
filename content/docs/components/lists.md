---
title: Lists
date: 2018-07-20T12:59:15-04:00
---
The `ul` within platform-ui have `margin: 0` and a `padding-left: 1rem`. The list items in those lists have `margin-bottom: .5rem`.

<ul>
  <li>Dogs</li>
  <li>Cats</li>
  <li>Birds</li>
</ul>
<div class="my-3"></div>
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Unordered List -->
<ul>
  <li>Dogs</li>
  <li>Cats</li>
  <li>Birds</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
{{< /highlight >}}
</div>


## List

Our list is simplified and strips the `list-style-type`, `margin`, and `padding` from the user agent stylesheet.

<ul class="list">
  <li>This is a list item.</li>
  <li>This is a list item.</li>
  <li>This is a list item.</li>
</ul>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <ul class="list">
   <li>This is a list item.</li>
   <li>This is a list item.</li>
   <li>This is a list item.</li>
 </ul>
{{< /highlight >}}
</div>


## Inline

You can create an inline list by adding the `list--inline` modifier to `list`. This adds `display: flex` to the list rather than adding `display: inline` to each `li` inside the list.

<ul class="list list--inline">
  <li>Inline list item.</li>
  <li>Inline list item.</li>
  <li>Inline list item.</li>
</ul>

<div class="mt-3 mb-4">
{{< highlight html >}}
<ul class="list list--inline">
  <li>Inline list item.</li>
  <li>Inline list item.</li>
  <li>Inline list item.</li>
</ul>
{{< /highlight >}}
</div>


## Bordered

You can have a bordered list by adding the `list--bordered` modifier. Be sure to add the class `list__item` to the `li`. This adds a border-bottom to each li except the last. A `padding-bottom: .5rem` is added to each `li` to match the `margin-bottom` in order to create a cleaner separation from the bottom border.

<ul class="list list--bordered">
  <li class="list__item">This is a list item.</li>
  <li class="list__item">This is a list item.</li>
  <li class="list__item">This is a list item.</li>
</ul>

<div class="mt-3 mb-4">
{{< highlight html >}}
<ul class="list list--bordered">
  <li class="list__item">This is a list item.</li>
  <li class="list__item">This is a list item.</li>
  <li class="list__item">This is a list item.</li>
</ul>
{{< /highlight >}}
</div>


## Breadcrumbs

You can use our list classes as well as some other utilities to build yourself a simple breadcrumb trail. In the example below we're using `list` `list--inline` to change the direction of the flow for the list items. This removes any user agent styles for margin and padding as well as the list style type. Adding `list--inline` also gives a `margin-right` to each `li` in the list. This can be changed with our spacing utilities. From there, we added an angle right icon to show direction of the breadcrumbs. You can switch this out for any icon you'd like.

Adding `aria-label="breadcrumbs"` to a nav wrapping the list as well as adding `aria-current="page"` to the current page will help with accessibility. In an example like breadcrumbs, we thhink it is important to use a list element and to wrap it in a `nav`. The nav will help direct screen readers. As far as the list, since there is an order to the breadcrumbs you can use an `ol` but using a `ul` is just fine too.

<nav aria-label="breadcrumbs">
  <ol class="list list--inline">
    <li class="flex flex--align-center">
      <a href="#">Home</a> <i class="pi-angle-right ml-2"></i>
    </li>
    <li class="flex flex--align-center">
      <a href="#">Blog</a> <i class="pi-angle-right ml-2"></i>
    </li>
    <li class="flex flex--align-center">
      <a href="#">Blog Category</a> <i class="pi-angle-right ml-2"></i>
    </li>
    <li class="flex flex--align-center">
      <span aria-current="page">Blog Post</span>
    </li>
  </ol>
</nav>

<div class="mt-3 mb-4">
{{< highlight html >}}
<nav aria-label="breadcrumbs">
  <ol class="list list--inline">
    <li class="flex flex--align-center">
      <a href="#">Home</a> <i class="pi-angle-right ml-2"></i>
    </li>
    <li class="flex flex--align-center">
      <a href="#">Blog</a> <i class="pi-angle-right ml-2"></i>
    </li>
    <li class="flex flex--align-center">
      <a href="#">Blog Category</a> <i class="pi-angle-right ml-2"></i>
    </li>
    <li class="flex flex--align-center">
      <span aria-current="page">Blog Post</span>
    </li>
  </ol>
</nav>
{{< /highlight >}}
</div>


## Other Examples

Using our utilities, icons, and modifiers, you can create some pretty fancy lists. We think so anyway. Substitute a font-icon for `list-style-type`.
<ul class="list">
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">How To</p>
  </li>
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">People to meet</p>
  </li>
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">Places to go</p>
  </li>
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="mb-0 flex--grow">Things to do</p>
  </li>
</ul>

<div class="mt-3 mb-4">
{{< highlight html >}}
<ul class="list">
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">How To</p>
  </li>
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">People to meet</p>
  </li>
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">Places to go</p>
  </li>
  <li class="flex">
    <i class="pi-arrow-solid-right text-salmon mr-3"></i> <p class="mb-0 flex--grow">Things to do</p>
  </li>
</ul>
{{< /highlight >}}
</div>


## Post Lists

<div class="block-4 mb-3">
  <div class="pill text--size-xs background-negative inverted no-border">
    <i class="pi-flag mr-1"></i>
    Deprecated v1.1.15
  </div> 
</div>
This list style is deprecated as of v1.1.15. To see how to recreate this look using utility classes, see our example above.

A `post-list` is a pretty basic list. The margin and padding is removed from the list itself. The `post-item`s which should be added to the `li`s in the list, have a `padding-bottom: 1rem` and `margin-bottom: 1rem`.

Adding the class `post-list--inline` gives the list an inline look using `display: flex`.

You can add some arrow icons to be in front of each `li` by adding the class `post-list--arrow`.