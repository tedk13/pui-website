---
title: Truncate With Ellipsis
date: 2018-07-20T12:59:15-04:00
---
A utility that does what it's name says. It truncates text within an element with ellipsis.

This can be done by adding the class `truncate-with-ellipsis`

<div class="block-3">
    <h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
    <p class="skeleton" data-lines="7" data-animation="true"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-3">
    <h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
    <!-- Content here! -->
</div>
{{< /highlight >}}
</div>

Try out this example below where you can toggle the class `truncate-with-ellipsis`

<button class="button button--post button--lg ellipsis-submit">Toggle Ellipsis</button>
<div class="block-3 mb-4">
    <h3 class="truncate-with-ellipsis ellipsis-header">This is a heading for a block</h3>
    <p class="skeleton" data-lines="7" data-animation="true"></p>
</div>