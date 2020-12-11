---
title: Cards
date: 2018-07-20T12:59:15-04:00
---
Cards can be great for seperating blocks of content. A `card` comes standard with a white background, light grey border, and
some padding.

<div class="block-container mb-3">
  <div class="block block-4">
    <div class="card">
        <div class="card__content">
            <h2 class="skeleton skeleton--md"></h2>
            <p class="skeleton" data-lines="4"></p>
        </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-3">
{{< highlight html >}}
<div class="card">
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}}
</div>

<div class="message message--info mb-4">
  <p>By default a card will take up 100% of the width of it's parent. You can utilize <a class="text-navy text-underline--hover" href="../../layout/layout">Platform UI layout classes</a>, such as block-container and block, to give the card size.</p>
</div>

{{< heading heading="h2" id="card-headers">}}
Card Headers
{{< /heading >}}

For the headings in your cards, you generally want to wrap them in the class `card__header`. This works best when you
have a layout of inline content that should have space between. 

<div class="block-container">
    <div class="block block-4">
    <div class="card">
        <div class="card__header">
            <h2 class="skeleton skeleton--md"></h2>
        </div>
        <div class="card__content">
            <p class="skeleton" data-lines="4"></p>
        </div>
    </div>
    </div>
</div>

<div class="mt-3 mb-4">
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
</div>

{{< heading heading="h2" id="card-group">}}
Card Group
{{< /heading >}}
The class `card__group` will give the element `display: flex`.
When it is nested inside the class `card__header` it will also have `align-items: center`.

<div class="block-container">
  <div class="block block-4">
    <div class="card">
      <div class="card__header">
        <div class="card__group">
          <i class="pi-quill"></i>
          <div class="card__title">
            Card Header
          </div>
        </div>
        <button class="button">Button</button>
      </div>
      <div class="card__content">
        <p class="skeleton" data-lines="4"></p>
      </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card">
    <div class="card__header">
        <div class="card__group">
            <!-- Group goes here! -->
        </div>
    </div>
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="image-card">}}
Image Card
{{< /heading >}}

Images can be placed at the top of cards. The `<img>` element gets the class `card__image` and is expected to be the first child element of the card.
When `rounded-` modifiers are used on the card, the image takes on the radius as well. Other modifiers can be used as needed.


<div class="block-container blocks tablet-up-4">
    <div class="block">
        <div class="card">
            <img class="card__image" src="http://placeimg.com/640/480/any" alt="" />
            <div class="card__content">
                <h3 class="skeleton skeleton--md"></h3>
                <p class="skeleton" data-lines="4"></p>
            </div>
        </div>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card">
    <img class="card__image" src="..." alt="..." />
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="content-overflow">}}
Content Overflow
{{< /heading >}}

If you have a lot of content in a card that is causing other cards to grow too much, you could add the class
`card__content--scroll` to the `card__content` in order to set a height and add an `overflow-y: auto;`.

<div class="block-container mobile-up-3 blocks px-2">
  <div class="block">
    <div class="card flex flex--column flex--justify-between">
        <div class="card__header">
            <h2 class="skeleton skeleton--md">
        </div>
        <div class="card__content card__content--scroll">
            <p class="skeleton" data-lines="4">
            <p class="skeleton" data-lines="7">
            <p class="skeleton" data-lines="5">
            <p class="skeleton" data-lines="3">
        </div>
        <div class="card__footer card__footer">
            <p class="skeleton"></p>
        </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card">
    <div class="card__content card__content--scroll">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}}
</div>
