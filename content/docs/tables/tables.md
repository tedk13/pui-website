---
title: Tables
date: 2018-07-20T12:59:15-04:00
---
Use the `table` class to get the table styles applied.

<table class="table unresponsive">
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
</div>

## Responsive

Tables are responsive by default, so they will display differently below the mobile breakpoint.

Mobile column labels are achieved using the `:before` pseudo element. Adding your column name expressed in `<th>` to the `data-label` attribute for each `<td>` in that column adds the column name to the left of your data.

{{< highlight html >}}
<table class="table">
  <thead>
    <th>Menu Item</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="Menu Items">
        Pork Buns
      </td>
    </tr>
  <tbody>
</table>
{{< /highlight >}}

## Unresponsive
If you would prefer to retain the desktop view even on mobile, you can do so by adding the `unresponsive` class to the table element. 

For tables with many columns, we recommend wrapping a `unresponsive` table within an `.overflow-x--auto` utility class to add horizontal scrolling.

{{< highlight html >}}
<div class="overflow-x--auto">
  <table class="table unresponsive">
    <!-- Table conten goes here! -->
  </table>
</div>
{{< /highlight >}}


<div class="message message--info mb-3">
  <p>You can also turn off the table row hover styles by adding <code>.table--no-hover</code> to the table component.</p>
</div>