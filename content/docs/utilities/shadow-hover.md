---
title: Shadow Hover
date: 2018-07-20T12:59:15-04:00
---

The class `hover-shadow` adds a box-shadow on hover of the element you add it to. You can use this along with the `hover-scale` class as well. See the
example below.

<section>
    <div class="block-container blocks px-2">
        <div class="block block-4">
        <div class="card hover-shadow">
            <h4 class="pb-2 mb-2">Hover over this</h4>
            <div class="card__content">
            <p>Notice how it shadows on hover</p>
            </div>
        </div>
        </div>
        <div class="block block-4">
        <div class="card hover-shadow hover-scale">
            <h4 class="pb-2 mb-2">Hover over this</h4>
            <div class="card__content">
            <p>Notice how it shadows on hover</p>
            </div>
        </div>
        </div>
    </div>
</section>

<div class="mt-3 mb-4">
{{< highlight html >}}
<section>
    <div class="block-container blocks px-2">
        <div class="block block-4">
        <div class="card hover-shadow">
            <h4 class="pb-2 mb-2">Hover over this</h4>
            <div class="card__content">
            <p>Notice how it shadows on hover</p>
            </div>
        </div>
        </div>
        <div class="block block-4">
        <div class="card hover-shadow hover-scale">
            <h4 class="pb-2 mb-2">Hover over this</h4>
            <div class="card__content">
            <p>Notice how it shadows on hover</p>
            </div>
        </div>
        </div>
    </div>
<section>
{{< /highlight >}}
</div>
