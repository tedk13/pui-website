---
title: Tables
date: 2018-07-20T12:59:15-04:00
---
Default table. Use the `pui-table` class to get the table styles applied.

Attach any `click` event directly to the `<th>` for a larger click target.

These tables are responsive. They get the mobile view below the mobile breakpoint.
You need to add the `data-label="{th - name}"` to the corresponding `<td>`. See the markup below.

Turn row hover off by adding `pui-table--no-hover`

<table class="pui-table">
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
    <tr>
      <td data-label="Company">
        Island Trading
      </td>
      <td data-label="Contact">
        Helen Bennett
      </td>
      <td data-label="Country">
        UK
      </td>
    </tr>
    <tr>
      <td data-label="Company">
        Laughing Bacchus Winecellars
      </td>
      <td data-label="Contact">
        Yoshi Tannamuri
      </td>
      <td data-label="Country">
        Canada
      </td>
    </tr>
    <tr>
      <td data-label="Company">
        Magazzini Alimentari Riuniti
      </td>
      <td data-label="Contact">
        Giovanni Rovelli
      </td>
      <td data-label="Country">
        Italy
      </td>
    </tr>
  </tbody>
</table>

<div class="mt-3 mb-4">
{{< highlight html >}}
<table class="pui-table">
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
    <tr>
      <td data-label="Company">
        Island Trading
      </td>
      <td data-label="Contact">
        Helen Bennett
      </td>
      <td data-label="Country">
        UK
      </td>
    </tr>
    <tr>
      <td data-label="Company">
        Laughing Bacchus Winecellars
      </td>
      <td data-label="Contact">
        Yoshi Tannamuri
      </td>
      <td data-label="Country">
        Canada
      </td>
    </tr>
    <tr>
      <td data-label="Company">
        Magazzini Alimentari Riuniti
      </td>
      <td data-label="Contact">
        Giovanni Rovelli
      </td>
      <td data-label="Country">
        Italy
      </td>
    </tr>
  </tbody>
</table>
{{< /highlight >}}
</div>

Sometimes you don't want a resposive table? just add `unresponsive` to `pui-table`

<table class="pui-table unresponsive">
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


Sometimes you don't want a resposive table? just add `unresponsive` to `pui-table`

<table class="pui-table unresponsive">
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
<table class="pui-table unresponsive">
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
{{< /highlight >}}
</div>
