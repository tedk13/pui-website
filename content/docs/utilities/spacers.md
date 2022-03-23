---
title: Spacers
date: 2018-07-20T12:59:15-04:00
---

Platform UI provides padding and margin utilities for most scenarios based on it's spacer map;

<table class="table mb-4">
  <thead>
    <tr>
      <th>Direction</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Direction">location</td>
      <td>surrounding</td>
      <td>top</td>
      <td>bottom</td>
      <td>left</td>
      <td>right</td>
      <td>x-axis</td>
      <td>y-axis</td>
    </tr>
    <tr>
      <td data-label="Direction">padding prefix</td>
      <td><code>p-</code></td>
      <td><code>pt-</code></td>
      <td><code>pb-</code></td>
      <td><code>pl-</code></td>
      <td><code>pr-</code></td>
      <td><code>px-</code></td>
      <td><code>py-</code></td>
    </tr>
    <tr>
      <td data-label="Direction">margin prefix</td>
      <td><code>m-</code></td>
      <td><code>mt-</code></td>
      <td><code>mb-</code></td>
      <td><code>ml-</code></td>
      <td><code>mr-</code></td>
      <td><code>mx-</code></td>
      <td><code>my-</code></td>
    </tr>
  </tbody>
</table>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Distance</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distance">number value</td>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <td data-label="Distance">rem value</td>
      <td><code>0rem</code></td>
      <td><code>.25rem</code></td>
      <td><code>.5rem</code></td>
      <td><code>1rem</code></td>
      <td><code>2rem</code></td>
      <td><code>3rem</code></td>
      <td><code>4.5rem</code></td>
      <td><code>6.5rem</code></td>
    </tr>
  </tbody>
</table>

Usage: `{padding, p or margin, m }{ direction if not surrounding: t, b, l, r, x, y }-{ number }`

Example:
{{< highlight html >}}
<!-- padding-left: .5rem -->
<div class="pl-2">
  <!-- Content goes here! -->
</div>

<!-- margin: 0 1rem; -->
<div class="mx-3">
  <!-- Content goes here! -->
</div>
{{< /highlight >}}


## Responsive

Currently we only have responsive spacers for mobile. We are also only using them for `margin-bottom` and `padding-bottom`.

Example:
{{< highlight html >}}
<!-- margin-bottom: 1rem -->
<div class="mobile-mb-3">
  <!-- Content goes here! -->
</div>

<!-- padding-bottom: 1rem -->
<div class="mobile-pb-3">
  <!-- Content goes here! -->
</div>
{{< /highlight >}}
