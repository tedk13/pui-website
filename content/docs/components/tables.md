---
title: Tables
description: Documentation for Platform UI's table component.
toc: false
---

Platform UI tables are built to be responsive at all screen sizes! Just include a `data-label` on the `<td>` that matches the header for that column.

{{< code-demo name="Table" >}}
<table class="table">
  <thead>
    <tr>
      <th>Menu Item</th>
      <th>Size</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Menu Item">
        Pork Buns
      </td>
      <td data-label="Size">
        Large
      </td>
      <td data-label="Price">
        $8.99
      </td>
    </tr>
    <tr>
      <td data-label="Menu Item">
        Pork Buns
      </td>
      <td data-label="Size">
        Small
      </td>
      <td data-label="Price">
        $5.99
      </td>
    </tr>
  </tbody>
</table>
{{< /code-demo >}}

{{< code-markup name="Table" >}}
{{< highlight html >}}
<table class="table">
  <thead>
    <tr>
      <th>Menu Item</th>
      <th>Size</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Menu Item">
        Pork Buns
      </td>
      <td data-label="Size">
        Large
      </td>
      <td data-label="Price">
        $8.99
      </td>
    </tr>
    <tr>
      <td data-label="Menu Item">
        Pork Buns
      </td>
      <td data-label="Size">
        Small
      </td>
      <td data-label="Price">
        $5.99
      </td>
    </tr>
  </tbody>
</table>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers name="Table" >}}
<tr>
  <td data-label="Base">
    <code>table</code>
  </td>
  <td data-label="Modifier">
    <code>table--no-hover</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Removes the hover effect on table and rows
  </td>
</tr>
{{< /modifiers >}}

{{< callout tipHeader="Table Tip" >}}
  <p>If you don't want your table to be responsive, you can add <code>.unresponsive</code> to the table. If you add the utility class <code>.overflow-x--auto</code> the table will scroll horizontally too!</p>
{{< /callout >}}