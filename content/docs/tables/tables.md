---
title: Tables
date: 2018-07-20T12:59:15-04:00
---
Use the `table` class to get the table styles applied.

Attach any `click` event directly to the `<th>` for a larger click target.

Tables are responsive by default, so they will display differently below the mobile breakpoint. To make sure data displays properly, set the `data-label` attribute on a table cell to the corresponding column header text. In the event that you do not want a table to be responsive, simply add the `unresponsive` class to the table component.

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

<div class="mt-3 mb-4">
{{< highlight html >}}
<table class="table">
  <!-- Table Heading -->
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <!-- Table Body -->
  <tbody>
    <!-- Table Row -->
    <tr>
      <td data-label="..."></td>
      <td data-label="..."></td>
      <td data-label="..."></td>
    </tr>
  </tbody>
</table>
{{< /highlight >}}
</div>

<div class="message message--info mb-3">
  <p>You can also turn off the table row hover styles by adding <code>.table--no-hover</code> to the table component.</p>
</div>