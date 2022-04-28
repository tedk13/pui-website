---
title: Tables
description: Documentation for Platform UI's table component.
---
{{% anchor name="table" %}}

Our default table is simple and uncluttered without vertical borders. 

Platform UI tables are built to be responsive at all screen sizes! Make them responsive by adding a `data-label` on every `<td>` to match the column header label.

{{< code-demo >}}
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

{{< code-markup >}}
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

{{< modifiers >}}
<tr>
  <td data-label="Modifier">
    <code>table--no-hover</code>
  </td>
  <td data-label="Behavior">
    Removes the hover effect on table and rows
  </td>
</tr>
{{< /modifiers >}}

{{< callout header="Table Tip" >}}
  <p>If you don't want your table to be responsive, you can add <code>.unresponsive</code> to the table. If you add the utility class <code>.overflow-x--auto</code> the table will scroll horizontally too!</p>
{{< /callout >}}