---
title: Heros
layout: single
skellyCSS: true
weight: 1
---

{{% anchor name="Background Images" %}}

<div
    class="background-image block-container flex--justify-around p-4 mb-4"
    data-background-image="https://picsum.photos/id/120/1400/600"
    data-background-position="center bottom"
    data-background-size="cover"
    data-background-repeat="no-repeat">
    <div class="block lg-tablet-up-5 py-4">
        <h3 class="skeleton skeleton--md"></h3>
        <p class="skeleton" data-lines="4"></p>
    </div>
    <div class="block lg-tablet-up-4 background--white-a70 border-t border--color-orange border--width-5 p-4">
      <p class="skeleton" data-lines="2"></p>
      <p class="skeleton" data-lines="3"></p>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="background-image block-container flex--justify-around p-4 mb-4"
  data-background-image="https://picsum.photos/id/120/1400/600"
  data-background-position="center bottom"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="block lg-tablet-up-5 py-4">
        <h3 class="skeleton skeleton--md"></h3>
        <p class="skeleton" data-lines="4"></p>
    </div>
    <div class="block lg-tablet-up-4 background--white-a70 border-t border--color-orange border--width-5 p-4">
      <p class="skeleton" data-lines="2"></p>
      <p class="skeleton" data-lines="3"></p>
    </div>
</div>
{{< /highlight >}}
</div>
