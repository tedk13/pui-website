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

We have some general styling on basic `<ul>` and `<ol>` elements, but our list takes a simplified approach and strips the `list-style-type`, `margin`, and `padding` from the user agent stylesheet.

{{< code-demo name="Lists" >}}
<ul class="list">
  <li>This is a list item.</li>
  <li>This is a list item.</li>
  <li>This is a list item.</li>
</ul>
{{< /code-demo >}}

{{< code-markup name="Lists" >}}
{{< highlight html >}}
<ul class="list">
   <li>This is a list item.</li>
   <li>This is a list item.</li>
   <li>This is a list item.</li>
 </ul>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers name="Lists"  >}}
<tr>
  <td data-label="Base">
    <code>list</code>
  </td>
  <td data-label="Modifier">
    <code>list--inline</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    List displays inline utilizing flex
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>list</code>
  </td>
  <td data-label="Modifier">
    <code>list--bordered</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    List items display with a bottom border<br>
    Make sure to add <code>.list__item</code> to the <code>li</code> to achieve the border
  </td>
</tr>
{{< /modifiers >}}