---
title: Figures
description: Documentation for Platform UI's figure components.
skellyCSS: true
---
{{% anchor name="figure hover" %}}

A way to stylishly add captions to images/figures on **hover**. 

{{< code-demo >}}
<div class="block-container">
    <figure class="figure-hover block laptop-up-6">
        <img class="skeleton-image skeleton-image--full skeleton-image--landscape" role="presentation">
        <figcaption>Figcaption goes here.</figcaption>
    </figure>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<figure class="figure-hover">
    <img src="..." alt="Figcaption goes here.">
    <figcaption>Figcaption goes here.</figcaption>
</figure>
{{< /highlight >}}
{{< /code-markup >}}