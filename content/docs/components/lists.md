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

<section class="mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Modifier Class"><code>.list--inline</code></td>
        <td data-label="Description">List displays inline utilizing flex</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.list--bordered</code></td>
        <td data-label="Description">
          List items display with a bottom border
          <br>
          Note: Make sure to add <code>.list__item</code> to the <code>li</code> to achieve the border
        </td>
      </tr>
    </tbody>
  </table>
</section>