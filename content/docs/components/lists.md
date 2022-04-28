---
title: Lists
description: Documentation for Platform UI's list components.
---

{{% anchor name="Default" %}}

Our default unordered list has `margin: 0` and `padding-left: 1rem` applied. List items have `margin-bottom: .5rem`.

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


{{% anchor name="list" %}}

Adding `list` strips `list-style-type`, `margin`, and `padding` from the user agent stylesheet.

{{< code-demo >}}
<ul class="list">
  <li>This is a list item.</li>
  <li>This is a list item.</li>
  <li>This is a list item.</li>
</ul>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<ul class="list">
   <li>This is a list item.</li>
   <li>This is a list item.</li>
   <li>This is a list item.</li>
 </ul>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Modifier">
    <code>list--inline</code>
  </td>
  <td data-label="Behavior">
    An inline flex list.
  </td>
</tr>
<tr>
  <td data-label="Modifier">
    <code>list--bordered</code>
  </td>
  <td data-label="Behavior">
    Adds a bottom border when adding <code>list__item</code> to each child <code>li</code>.
  </td>
</tr>
{{< /modifiers >}}