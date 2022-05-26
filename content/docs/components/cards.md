---
title: Cards
description: Documentation for Platform UI's card and image card components.
skellyCSS: true
---
{{% anchor name="card" %}}

Cards can be great for separating blocks of content. A `card` comes standard with a white background, light grey border, and some padding.

{{< code-demo >}}
<div class="block-container">
  <div class="block laptop-up-5">
    <div class="card">
      <div class="card__header">
        Card Header
        <button class="button">Button</button>
      </div>
      <div class="card__content">
        <p class="skeleton" data-lines="4" role="presentation"></p>
      </div>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="card">
    <div class="card__header">
      <!-- Header goes here! -->
    </div>
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}

{{< callout header="Card Tip">}} 
  <p>By default a card will take up 100% of the width of it's parent. You can utilize <a class="text--navy text-underline--hover" href="../../layout/layout">Platform UI layout classes</a>, such as block-container and block, to adjust the card's size.</p>
{{< /callout >}}

{{% anchor name="image card" %}}

Adding an image element above `card__content` with a `card__image` class transforms a simple card into an image card. You can add a just an image, or padding and a background color to use an SVG symbol or large icon.

{{< code-demo >}}
<div class="block-container">
  <div class="block laptop-up-3">
        <div class="card rounded-2">
            <div class="card__image">
                <img class="skeleton-image skeleton-image--full skeleton-image--landscape"  role="presentation" />
            </div>
            <div class="card__content">
                <h3 class="skeleton skeleton--md" role="presentation"></h3>
                <p class="skeleton" data-lines="4" role="presentation"></p>
            </div>
        </div>
    </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="card">
    <img class="card__image" src="..." alt="..." />
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}
</section>

{{< callout header="Card Tip">}} 
  <p><code>rounded-{number}</code> modifiers work great with cards to give that custom look (this callout uses the rounded modifier on individual corners).</p>
{{< /callout >}}