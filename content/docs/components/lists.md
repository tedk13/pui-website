---
title: Lists
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