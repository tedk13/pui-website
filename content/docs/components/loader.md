---
title: Loader
date: 2022-03-29T12:59:15-04:00
---

Our loader is simple and easy to use. The default loader is 1.4rem, but a modifier can be added to adjust the size.

<div class="loader"></div>

<div class="my-3">
{{< highlight html >}}
<div class="loader"></div>
{{< /highlight >}}
</div>

|Modifier    |Size  |
|------------|------|
|`loader--sm`|.9rem |
|`loader--lg`|2rem  |


## Button Loading

A button can also include a loader by adding the `loading` class.

<button class="button loading">Submit</button>

<div class="mt-3 mb-3">
{{< highlight html >}}
<button class="button loading">Submit</button>
{{< /highlight >}}
</div>