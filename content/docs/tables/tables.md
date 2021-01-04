---
title: Tables
date: 2018-07-20T12:59:15-04:00
---
Use the `table` class to get the table styles applied.

Attach any `click` event directly to the `<th>` for a larger click target.

These tables are responsive. They get the mobile view below the mobile breakpoint.
You need to add the `data-label="{th - name}"` to the corresponding `<td>`. See the markup below.

Turn row hover off by adding `table--no-hover`

<table class="table">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Company">
        Alfreds Futterkiste
      </td>
      <td data-label="Contact">
        Maria Anders
      </td>
      <td data-label="Country">
        Germany
      </td>
    </tr>
    <tr>
      <td data-label="Company">
        Centro comercial Moctezuma
      </td>
      <td data-label="Contact">
        Francisco Chang
      </td>
      <td data-label="Country">
        Mexico
      </td>
    </tr>
    <tr>
      <td data-label="Company">
        Ernst Handel
      </td>
      <td data-label="Contact">
        Roland Mendel
      </td>
      <td data-label="Country">
        Austria
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
      <th>Column 1 Heading</th>
      <th>Column 2 Heading</th>
      <th>Column 3 Heading</th>
    </tr>
  </thead>
  <!-- Table Body -->
  <tbody>
    <!-- Table Row -->
    <tr>
      <td data-label="Column 1 Heading">
        Column 1 Data
      </td>
      <td data-label="Column 2 Heading">
        Column 2 Data
      </td>
      <td data-label="Column 3 Heading">
        Column 3 Data
      </td>
    </tr>
  </tbody>
</table>
{{< /highlight >}}
</div>


## Unresponsive Tables
If you do not want a table to be responsive, simply add the `unresponsive` class to the table component.

<table class="table unresponsive">
  <thead>
    <tr>
      <th></th>
      <th>option one</th>
      <th>option two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Desc
      </td>
      <td>
        Pork Buns
      </td>
      <td>
        Pork Buns
      </td>
    </tr>
    <tr>
      <td>
        price
      </td>
      <td>
        $5.00
      </td>
      <td>
        $9.00
      </td>
    </tr>
    <tr>
      <td>
        qty
      </td>
      <td>
        5
      </td>
      <td>
        2
      </td>
    </tr>
  </tbody>
</table>

<div class="mt-3 mb-4">
{{< highlight html >}}
<table class="table unresponsive">
  <!-- Table Heading -->
  <thead>
    <tr>
      <th>Column 1 Heading</th>
      <th>Column 2 Heading</th>
      <th>Column 3 Heading</th>
    </tr>
  </thead>
  <!-- Table Body -->
  <tbody>
    <!-- Table Row -->
    <tr>
      <td>
        Column 1 Data
      </td>
      <td>
        Column 2 Data
      </td>
      <td>
        Column 3 Data
      </td>
    </tr>
  </tbody>
</table>
{{< /highlight >}}
</div>
