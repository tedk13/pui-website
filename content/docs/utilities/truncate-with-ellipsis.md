---
title: Truncate With Ellipsis
date: 2018-07-20T12:59:15-04:00
---
A utility that does what it's name says. It truncates text within an element with ellipsis.

This can be done by adding the class `truncate-with-ellipsis`

<div class="block-container">
    <div class="block tablet-up-8 laptop-up-4">
    <h3 class="truncate-with-ellipsis block-8">This is a heading for a block</h3>
        <p class="skeleton" data-lines="7" data-animation="true"></p>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
{{< /highlight >}}
</div>


<p class="flex flex--align-center flex--wrap mb-4">
    <i class="pi-rocket mr-1 text-negative"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the button below to toggle the <code class="mx-1">truncate-with-ellipsis</code> class!
</p>

<button class="button button--primary background-salmon text-white has-text button--lg ellipsis-button">Toggle Ellipsis</button>

<div class="block-container">
    <div class="block tablet-up-8 laptop-up-4">
        <h3 class="truncate-with-ellipsis ellipsis-header block-8">This is a heading for a block</h3>
        <p class="skeleton" data-lines="7" data-animation="true"></p>
    </div>
</div>