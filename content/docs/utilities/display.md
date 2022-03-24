---
title: Display
date: 2018-07-20T12:59:15-04:00
---

Our display utilities allow you to show or hide code at specific resolutions.

If you want to simply add `display: none` to an element you can use the class `hidden`.

We also have print specific display classes. `show-print` and `hide-print`.

The classes are broken down by a display prefix, a breakpoint value, and a
directional suffix. The prefixes of show and hide represent the display value. Where `show-` will equal `display: block`
and `hide-` equals `display: none`.

The breakpoint value represents where the style will be used. Think of the breakpoints being within the starting px
value and the next breakpoint value. So `mobile` will be between `mobile` and `tablet`.

The suffix represents the direction of the media query. `-up` generates a `min-width` media query. `-down` generates a
`max-width` media query. `-only` generates a `min-width` and `max-width` media query.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>Display Value</th>
      <th>Generated Media Query</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>hidden</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query">No specified resolution</td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-print</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media print</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-print</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media print</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-mobile-up</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 0px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-mobile-only</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 0px) and (max-width: 767px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-mobile-up</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 0px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-mobile-only</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 0px) and (max-width: 767px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-mobile-down</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 767px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-tablet-up</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 768px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-tablet-only</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 768px) and (max-width: 990px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-tablet-down</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 767px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-tablet-up</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 768px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-tablet-only</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 768px) and (max-width: 990px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-tablet-down</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 767px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-lg-tablet-up</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 991px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-lg-tablet-only</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 991px) and (max-width: 1239px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-lg-tablet-down</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 990px) </code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-lg-tablet-up</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 991px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-lg-tablet-only</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 991px) and (max-width: 1239px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-lg-tablet-down</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 990px) </code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-laptop-up</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 1240px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-laptop-only</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 1240px) and (max-width: 1799px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-laptop-down</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 1239px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-laptop-up</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 1240px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-laptop-only</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 1240px) and (max-width: 1799px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-laptop-down</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 1239px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>show-desktop-up</code></td>
      <td data-label="Display Value"><code>display: block;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 1800px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-desktop-up</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (min-width: 1800px)</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>hide-desktop-down</code></td>
      <td data-label="Display Value"><code>display: none;</code></td>
      <td data-label="Generated Media Query"><code>@media (max-width: 1799px)</code></td>
    </tr>
  </tbody>
</table>