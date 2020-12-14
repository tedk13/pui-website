---
title: Loader
date: 2018-07-20T12:59:15-04:00
---

The standard loading wheel that is used throughout platform-ui.

Use these classes to change the size of a loader.

| Class Name   | Height   |
| ------------ | -------- |
| `loader`     | `1.4rem` |
| `loader--sm` | `.9rem`  |
| `loader--lg` | `2rem`   |

To use with a button add the class `loading`

Try a Submit button with loader!

<button class="button button--lg loader__submit">
  Submit
</button>
<div class="mt-3 mb-4">
{{< highlight html >}}
<button class="button button--lg loader__submit">
  Submit
</button>
{{< /highlight >}}
</div>

Use loader as a placeholder while other elements are loading by adding `<div class="loader"></div>`

Try a Modal with a loader!

<div id="loader-modal" class="modal modal--centered modal--closed" tabindex="-1">
  <div class="modal__inner animated slideInUp faster">
    <div class="modal__header">
      <button class="button modal__close loader__modal-close" data-modal="loader-modal">Close <i class="pi-times"></i></button>
      Modal
    </div>
    <div class="modal__content flex--center-content">
      <div class="loader loader--lg"></div>
    </div>
  </div>
</div>
<button class="button button--post button--lg modal__open loader__modal" data-modal="loader-modal">Modal</button>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div id="loader-modal" class="modal modal--centered modal--closed" tabindex="-1">
  <div class="modal__inner animated slideInUp faster">
    <div class="modal__header">
      <button class="button modal__close" data-modal="loader-modal">Close <i class="pi-times"></i></button>
      Modal
    </div>
    <div class="modal__content flex--center-content">
      <div class="loader loader--lg"></div>
    </div>
  </div>
</div>
<button class="button button--post button--lg modal__open loader__modal" data-modal="loader-modal">Modal</button>
{{< /highlight >}}
</div>

Here is a Card with a loader!

<div class="block-container">
  <div class="block block-4">
    <div class="card loader__card">
      <div class="card__header">
        <div class="card__group">
          <i class="pi-quill"></i>
          <div class="card__title">Card Header</div>
        </div>
      </div>
      <div class="loader loader--lg"></div>
    </div>
  </div>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block block-4">
    <div class="card loader__card">
      <div class="card__header">
        <div class="card__group">
          <i class="pi-quill"></i>
          <div class="card__title">Card Header</div>
        </div>
      </div>
      <div class="loader loader--lg"></div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>