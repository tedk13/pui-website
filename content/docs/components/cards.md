---
title: Cards
date: 2018-07-20T12:59:15-04:00
---

Cards can be great for seperating blocks of content. A `card` comes standard with a white background, light grey border, and
some padding.

Note: The use of the block-container and block classes are only to give the card size.

<div class="block-container">
  <div class="block block-4">
    <div class="card">
      <p>This is a card.</p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block block-4">
    <div class="card">
      <p>This is a card.</p>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="headers">}}
Headers
{{< /heading >}}

For the headings in your cards, you generally want to wrap them in the class `card__header`. This works best when you
have a layout of inline content that should have space between. The class `card__group` will give the element `display: flex`.
When it is nested inside the class `card__header` it will also have `align-items: center`.


<div class="block-container">
  <div class="block block-4">
    <div class="card">
      <div class="card__header">
        <div class="card__group">
          <i class="pi-quill"></i>
          <div class="card__title">Card Header</div>
        </div>
        <button class="button">Button</button>
      </div>
      <p>Card content.</p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block block-4">
    <div class="card">
      <div class="card__header">
        <div class="card__group">
          <i class="pi-quill"></i>
          <div class="card__title">Card Header</div>
        </div>
        <button class="button">Button</button>
      </div>
      <p>Card content.</p>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="image-card">}}
Image Card
{{< /heading >}}

Images can be placed at the top of cards. The `<img>` element gets the class `card__image` and is expected to be the first child element of the card.
When `rounded-` modifiers are used on the card, the image takes on the radius as well. Other modifiers can be used as needed.


<div class="block-container blocks p-3 mb-3 tablet-up-4">
<div class="block">
<div class="card rounded-3">
    <img class="card__image background-lightblue p-3" src="http://placeimg.com/640/480/any" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
<div class="block">
<div class="card">
    <img class="card__image background-lightblue p-3" src="http://placeimg.com/640/480/any" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
<div class="block">
<div class="card rounded-3">
    <img class="card__image" src="https://i.picsum.photos/id/1061/600/400.jpg" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
<div class="block">
<div class="card">
    <img class="card__image" src="https://i.picsum.photos/id/1061/600/400.jpg" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks p-3 mb-3 tablet-up-4">
<div class="block">
<div class="card rounded-3">
    <img class="card__image background-lightblue p-3" src="http://placeimg.com/640/480/any" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
<div class="block">
<div class="card">
    <img class="card__image background-lightblue p-3" src="http://placeimg.com/640/480/any" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
<div class="block">
<div class="card rounded-3">
    <img class="card__image" src="https://i.picsum.photos/id/1061/600/400.jpg" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
</div>
<div class="block">
<div class="card">
    <img class="card__image" src="https://i.picsum.photos/id/1061/600/400.jpg" alt="" />
    <div class="card__content">
        <div class="flex flex--justify-between">
            <div class="text--bold text--uppercase">Part 1</div>
            <div class="text--bold flex flex--align-center">
                <i class="pi-clock text-navy mr-1" aria-hidden="true"></i>
                1:45
            </div>
        </div>
        <h3 class="text-med-blue">Card Title</h3>
        <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla uris vitae arcu.</p>
    </div>
</div>
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
            <div class="card__group">
                <div class="card__title card__title--normal">Card Header</div>
            </div>
            <div class="card__header-actions"><a role="button" aria-label="remove"
                    class="card-action text-light"><i class="pi-trash" aria-hidden="true"></i></a>
                <a role="button" aria-label="edit" class="card-action text-light"><i class="pi-edit"
                        aria-hidden="true"></i></a></div>
        </div>
        <div class="card__content">
            <p>Card content.</p>
        </div>
        <div class="card__footer card__footer">
            <div>
                <p><i class="pi-calendar text-skyblue" aria-hidden="true"></i> <time
                        datetime="22 Jul 2019">22 Jul 2019</time></p>
                <p><i class="pi-clock text-skyblue" aria-hidden="true"></i> <time datetime="9:15 am">9:15
                        am</time></p>
            </div>
            <div class="div-btn">
                <div class="check-circle">
                    <div class="pill pill--circle-large text-light"><i class="pi-check pi-xl" aria-hidden="true"></i>
                    </div>
                    <p class="check-circle__status">Complete</p>
                </div>
                <p class="check-circle__status">Complete</p>
            </div>
        </div>
    </div>
  </div>
  <div class="block">
    <div class="card flex flex--column flex--justify-between">
        <div class="card__header">
            <div class="card__group">
                <div class="card__title card__title--normal">Testing stuff</div>
            </div>
            <div class="card__header-actions"><a role="button" aria-label="remove"
                    class="card-action text-light"><i class="pi-trash" aria-hidden="true"></i></a>
                <a role="button" aria-label="edit" class="card-action text-light"><i class="pi-edit"
                        aria-hidden="true"></i></a></div>
        </div>
        <div class="card__content card__content--scroll">
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
        </div>
        <div class="card__footer card__footer">
            <div>
                <p><i class="pi-calendar text-skyblue" aria-hidden="true"></i> <time
                        datetime="23 Jul 2019">23 Jul 2019</time></p>
                <p><i class="pi-clock text-skyblue" aria-hidden="true"></i> <time datetime="12:00 am">12:00
                        am</time></p>
            </div>
            <div class="div-btn">
                <div class="check-circle">
                    <div class="pill pill--circle-large text-light"><i class="pi-check pi-xl" aria-hidden="true"></i>
                    </div>
                    <p class="check-circle__status">Complete</p>
                </div>
                <p class="check-circle__status">Complete</p>
            </div>
        </div>
    </div>
  </div>
  <div class="block">
    <div class="card flex flex--column flex--justify-between">
        <div class="card__header">
            <div class="card__group">
                <div class="card__title card__title--normal">Call Carol</div>
            </div>
            <div class="card__header-actions"><a role="button" aria-label="remove"
                    class="card-action text-light"><i class="pi-trash" aria-hidden="true"></i></a>
                <a role="button" aria-label="edit" class="card-action text-light"><i class="pi-edit"
                        aria-hidden="true"></i></a></div>
        </div>
        <div class="card__content">
            <p>Carol from accounting need to get some updates.</p>
        </div>
        <div class="card__footer card__footer">
            <div>
                <p><i class="pi-calendar text-skyblue" aria-hidden="true"></i> <time
                        datetime="23 Jul 2019">23 Jul 2019</time></p>
                <p><i class="pi-clock text-skyblue" aria-hidden="true"></i> <time datetime="6:30 pm">6:30
                        pm</time></p>
            </div>
            <div class="div-btn">
                <div class="check-circle">
                    <div class="pill pill--circle-large text-light"><i class="pi-check pi-xl" aria-hidden="true"></i>
                    </div>
                    <p class="check-circle__status">Complete</p>
                </div>
                <p class="check-circle__status">Complete</p>
            </div>
        </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container mobile-up-3 blocks px-2">
  <div class="block">
    <div class="card flex flex--column flex--justify-between">
        <div class="card__header">
            <div class="card__group">
                <div class="card__title card__title--normal">Card Header</div>
            </div>
            <div class="card__header-actions"><a role="button" aria-label="remove"
                    class="card-action text-light"><i class="pi-trash" aria-hidden="true"></i></a>
                <a role="button" aria-label="edit" class="card-action text-light"><i class="pi-edit"
                        aria-hidden="true"></i></a></div>
        </div>
        <div class="card__content">
            <p>Card content.</p>
        </div>
        <div class="card__footer card__footer">
            <div>
                <p><i class="pi-calendar text-skyblue" aria-hidden="true"></i> <time
                        datetime="22 Jul 2019">22 Jul 2019</time></p>
                <p><i class="pi-clock text-skyblue" aria-hidden="true"></i> <time datetime="9:15 am">9:15
                        am</time></p>
            </div>
            <div class="div-btn">
                <div class="check-circle">
                    <div class="pill pill--circle-large text-light"><i class="pi-check pi-xl" aria-hidden="true"></i>
                    </div>
                    <p class="check-circle__status">Complete</p>
                </div>
                <p class="check-circle__status">Complete</p>
            </div>
        </div>
    </div>
  </div>
  <div class="block">
    <div class="card flex flex--column flex--justify-between">
        <div class="card__header">
            <div class="card__group">
                <div class="card__title card__title--normal">Testing stuff</div>
            </div>
            <div class="card__header-actions"><a role="button" aria-label="remove"
                    class="card-action text-light"><i class="pi-trash" aria-hidden="true"></i></a>
                <a role="button" aria-label="edit" class="card-action text-light"><i class="pi-edit"
                        aria-hidden="true"></i></a></div>
        </div>
        <div class="card__content card__content--scroll">
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
        </div>
        <div class="card__footer card__footer">
            <div>
                <p><i class="pi-calendar text-skyblue" aria-hidden="true"></i> <time
                        datetime="23 Jul 2019">23 Jul 2019</time></p>
                <p><i class="pi-clock text-skyblue" aria-hidden="true"></i> <time datetime="12:00 am">12:00
                        am</time></p>
            </div>
            <div class="div-btn">
                <div class="check-circle">
                    <div class="pill pill--circle-large text-light"><i class="pi-check pi-xl" aria-hidden="true"></i>
                    </div>
                    <p class="check-circle__status">Complete</p>
                </div>
                <p class="check-circle__status">Complete</p>
            </div>
        </div>
    </div>
  </div>
  <div class="block">
    <div class="card flex flex--column flex--justify-between">
        <div class="card__header">
            <div class="card__group">
                <div class="card__title card__title--normal">Call Carol</div>
            </div>
            <div class="card__header-actions"><a role="button" aria-label="remove"
                    class="card-action text-light"><i class="pi-trash" aria-hidden="true"></i></a>
                <a role="button" aria-label="edit" class="card-action text-light"><i class="pi-edit"
                        aria-hidden="true"></i></a></div>
        </div>
        <div class="card__content">
            <p>Carol from accounting need to get some updates.</p>
        </div>
        <div class="card__footer card__footer">
            <div>
                <p><i class="pi-calendar text-skyblue" aria-hidden="true"></i> <time
                        datetime="23 Jul 2019">23 Jul 2019</time></p>
                <p><i class="pi-clock text-skyblue" aria-hidden="true"></i> <time datetime="6:30 pm">6:30
                        pm</time></p>
            </div>
            <div class="div-btn">
                <div class="check-circle">
                    <div class="pill pill--circle-large text-light"><i class="pi-check pi-xl" aria-hidden="true"></i>
                    </div>
                    <p class="check-circle__status">Complete</p>
                </div>
                <p class="check-circle__status">Complete</p>
            </div>
        </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
