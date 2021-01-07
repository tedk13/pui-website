---
title: Overflow
date: 2018-07-20T12:59:15-04:00
---

You can add or hide specific overflow on an element with the following classes.

<div class="mb-3">

| Classes               | CSS Attribute          |
| --------------------- | ---------------------- |
| `overflow-visible`    | `overflow: visible;`   |
| `overflow-hidden`     | `overflow: hidden;`    |
| `overflow-scroll`     | `overflow: scroll;`    |
| `overflow-auto`       | `overflow: auto;`      |
| `overflow-y--visible` | `overflow-y: visible;` |
| `overflow-y--hidden`  | `overflow-y: hidden;`  |
| `overflow-y--scroll`  | `overflow-y: scroll;`  |
| `overflow-y--auto`    | `overflow-y: auto;`    |
| `overflow-x--visible` | `overflow-x: visible;` |
| `overflow-x--hidden`  | `overflow-x: hidden;`  |
| `overflow-x--scroll`  | `overflow-x: scroll;`  |
| `overflow-x--auto`    | `overflow-x: auto;`    |

</div>

<p class="flex flex--align-center flex--wrap mb-2">
    <i class="pi-rocket mr-1 text-negative"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the button below to toggle the <code class="mx-1">.overflow-y--auto</code> class!
</p>

<div class="block-container">
    <div class="block laptop-up-6 overflow-y--hidden">
        <button class="button button-primary background-salmon text-white button--lg overflow-button">Toggle Overflow</button>
        <div class="mt-2 mb-7 p-3 border border--color-med-blue overflow-paragraph" style="height: 7rem;">
            <h2 class="skeleton skeleton--md"></h2>
            <p class="skeleton" data-lines="5"></p>
            <p class="skeleton" data-lines="3"></p>
            <p class="skeleton" data-lines="6"></p>
        </div>
    </div>
</div>