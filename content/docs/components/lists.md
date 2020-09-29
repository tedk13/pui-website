---
title: Lists
date: 2018-07-20T12:59:15-04:00
---

The `ul` within platform-ui have `margin: 0` and a `padding-left: 1rem`. The `li`s in those lists have `margin-bottom: .5rem`.
Each `post-item` also has a `border-bottom` all except the last item in the list.

## Post Lists

A `post-list` is a pretty basic list. The margin and padding is removed from the list itself. The `post-item`s which should be added to the `li`s in the list, have a `padding-bottom: 1rem` and `margin-bottom: 1rem`.

Adding the class `post-list--inline` gives the list an inline look using `display: flex`.

You can add some arrow icons to be in front of each `li` by adding the class `post-list--arrow`.

 <ul class="post-list">
   <li class="post-item">This is a list item.</li>
   <li class="post-item">This is a list item.</li>
   <li class="post-item">This is a list item.</li>
 </ul>
 <br>
 <ul class="post-list post-list--inline">
   <li class="post-item">This is an inline list item.</li>
   <li class="post-item">This is an inline list item.</li>
   <li class="post-item">This is an inline list item.</li>
 </ul>
 <br>
 <ul class="post-list post-list--arrow">
   <li class="post-item">This is a list item with a leading arrow.</li>
   <li class="post-item">This is a list item with a leading arrow.</li>
   <li class="post-item">This is a list item with a leading arrow.</li>
 </ul>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <ul class="post-list">
   <li class="post-item">This is a list item.</li>
   <li class="post-item">This is a list item.</li>
   <li class="post-item">This is a list item.</li>
 </ul>
 <br>
 <ul class="post-list post-list--inline">
   <li class="post-item">This is an inline list item.</li>
   <li class="post-item">This is an inline list item.</li>
   <li class="post-item">This is an inline list item.</li>
 </ul>
 <br>
 <ul class="post-list post-list--arrow">
   <li class="post-item">This is a list item with a leading arrow.</li>
   <li class="post-item">This is a list item with a leading arrow.</li>
   <li class="post-item">This is a list item with a leading arrow.</li>
 </ul>
 {{< /highlight >}}
</div>

## pui-list

The pui-list is a simplified list that strips the `list-style-type`, `margin`, and `padding`.
You can have a bordered list by adding the `pui-list--bordered` modifier. Be sure to add the class `pui-list__item` to the li.
This puts a top border on the list, as well as a border-bottom on each li.

 <ul class="pui-list">
   <li>This is a pui-list item.</li>
   <li>This is a pui-list item.</li>
   <li>This is a pui-list item.</li>
 </ul>
 <br>
 <div class="mt-4">
   <ul class="pui-list pui-list--bordered">
     <li class="pui-list__item">This is a pui-list item.</li>
     <li class="pui-list__item">This is a pui-list item.</li>
     <li class="pui-list__item">This is a pui-list item.</li>
   </ul>
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <ul class="pui-list">
   <li>This is a pui-list item.</li>
   <li>This is a pui-list item.</li>
   <li>This is a pui-list item.</li>
 </ul>
 <br>
 <div class="mt-4">
   <ul class="pui-list pui-list--bordered">
     <li class="pui-list__item">This is a pui-list item.</li>
     <li class="pui-list__item">This is a pui-list item.</li>
     <li class="pui-list__item">This is a pui-list item.</li>
   </ul>
 </div>
{{< /highlight >}}</div>
