---
title: Overflow
description: Platform UI utilities for handling overflow.
skellyCSS: true
toc: false
---

You can add or hide specific overflow on an element with the following classes.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Classes</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Classes"><code>overflow-visible</code></td>
      <td data-label="CSS Attribute"><code>overflow: visible;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-hidden</code></td>
      <td data-label="CSS Attribute"><code>overflow: hidden;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-scroll</code></td>
      <td data-label="CSS Attribute"><code>overflow: scroll;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-auto</code></td>
      <td data-label="CSS Attribute"><code>overflow: auto;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-y--visible</code></td>
      <td data-label="CSS Attribute"><code>overflow-y: visible;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-y--hidden</code></td>
      <td data-label="CSS Attribute"><code>overflow-y: hidden;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-y--scroll</code></td>
      <td data-label="CSS Attribute"><code>overflow-y: scroll;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-y--auto</code></td>
      <td data-label="CSS Attribute"><code>overflow-y: auto;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-x--visible</code></td>
      <td data-label="CSS Attribute"><code>overflow-x: visible;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-x--hidden</code></td>
      <td data-label="CSS Attribute"><code>overflow-x: hidden;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-x--scroll</code></td>
      <td data-label="CSS Attribute"><code>overflow-x: scroll;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>overflow-x--auto</code></td>
      <td data-label="CSS Attribute"><code>overflow-x: auto;</code></td>
    </tr>
  </tbody>
</table>

<p class="mb-2">
    <i class="pi-rocket mr-1 text--negative"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the button below to toggle the <code class="mx-1">.overflow-y--auto</code> class!
</p>

<div class="block-container">
    <div class="block laptop-up-6 overflow-y--hidden">
        <button class="button button-primary background--salmon text--white button--lg overflow-button">Toggle Overflow</button>
        <div class="mt-2 mb-7 p-3 border border--color-med-blue overflow-paragraph" style="height: 7rem;">
            <h2 class="skeleton skeleton--md"></h2>
            <p class="skeleton" data-lines="5"></p>
            <p class="skeleton" data-lines="3"></p>
            <p class="skeleton" data-lines="6"></p>
        </div>
    </div>
</div>