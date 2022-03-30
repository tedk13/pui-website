---
title: Shadow Hover
date: 2018-07-20T12:59:15-04:00
skellyCSS: true
---

The class `hover-shadow` adds a box-shadow on hover of the element you add it to. You can use this along with the `hover-scale` class as well. See the
example below.

<div class="block-container">
    <div class="block laptop-up-3">
        <div class="card hover-shadow">
            <h4 class="skeleton skeleton--lg"></h4>
            <div class="card__content">
                <p class="skeleton" data-lines="3"></p>
            </div>
        </div>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card hover-shadow">
    <!-- Content goes here! -->
</div>
{{< /highlight >}}
</div>

<div class="block-container">
    <div class="block laptop-up-3">
        <div class="card hover-shadow hover-scale">
            <h4 class="skeleton skeleton--lg"></h4>
            <div class="card__content">
                <p class="skeleton" data-lines="3"></p>
            </div>
        </div>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card hover-shadow hover-scale">
    <!-- Content goes here! -->
</div>
{{< /highlight >}}
</div>