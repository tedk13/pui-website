---
title: Errors
description: Documentation for Platform UI's error state concepts.
weight: 3
---

There are time you just want a small reflection of a greater state; good, bad, indifferent. More on the SPA/SWA side of development, we found use for small indications of that greater state and made it easier to leverage in Platform UI. 

`positive`, `negative`, and `neutral` became a simple language to convey these states. They currently affect pills, text, and backgrounds, and may make their way further into our framework in the future.

{{% anchor name="text" %}}

{{< code-demo >}}
<div class="block-container tablet-up-3 blocks cards">
    <div class="block text--positive">Positive</div>
    <div class="block text--negative">Negative</div>
    <div class="block text--neutral">Neutral</div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container tablet-up-3 blocks cards">
    <div class="block text--positive">Positive</div>
    <div class="block text--negative">Negative</div>
    <div class="block text--neutral">Neutral</div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="pills" %}}

{{< code-demo >}}
<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty neutral"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot neutral"></div>

<div class="pill positive">
Positive
</div>

<div class="pill negative">
Negative
</div>

<div class="pill neutral">
Neutral
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty neutral"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot neutral"></div>

<div class="pill positive">
Positive
</div>

<div class="pill negative">
Negative
</div>

<div class="pill neutral">
Neutral
</div>
{{< /highlight >}}
{{< /code-markup >}}