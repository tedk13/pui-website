---
title: Truncate With Ellipsis
---
A utility that does what it's name says. It truncates text within an element with ellipsis.

This can be done by adding the class `truncate-with-ellipsis`

<div class="block-container">
    <div class="block block-6 tablet-up-3">
        <h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
{{< /highlight >}}
</div>


<p class="mb-4">
    <i class="pi-rocket mr-1 text-negative"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the button below to toggle the <code class="mx-1">truncate-with-ellipsis</code> class!
</p>

<button class="button button--primary background-salmon text-white has-text button--lg ellipsis-button">Toggle Ellipsis</button>

<div class="block-container">
    <div class="block block-6 tablet-up-3">
        <h3 class="truncate-with-ellipsis ellipsis-header">This is a heading for a block</h3>
    </div>
</div>