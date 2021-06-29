---
title: Loader
date: 2018-07-20T12:59:15-04:00
---

The standard loading wheel that is used throughout platform-ui.

Use these classes to change the size of a loader.

| Class Name   | Height and Width |
| ------------ | ---------------- |
| `loader`     | `1.4rem`         |
| `loader--sm` | `.9rem`          |
| `loader--lg` | `2rem`           |

<div class="mb-6 mt-5">
  <div class="loader"></div>
  <div class="mt-4">
{{< highlight html >}}
<div class="loader"></div>
{{< /highlight >}}
  </div>
</div>
<div class="mb-6">
  <div class="loader loader--sm"></div>
  <div class="mt-4">

{{< highlight html >}}
<div class="loader loader--sm"></div>
{{< /highlight >}}

  </div>
</div>
<div class="mb-4">
  <div class="loader loader--lg"></div>
  <div class="mt-4">

{{< highlight html >}}
<div class="loader loader--lg"></div>
{{< /highlight >}}

  </div>
</div>

<p class="mb-2">
    <i class="pi-rocket mr-1 text-negative"></i>
    <strong class="mr-1">Try it!</strong> 
    Here are a few examples of how to use <code class="mx-1">.loader</code> with other Platform UI components!
</p>


<div class="mt-4 mb-4">
  <button class="button button--lg loader-submit">
    Submit
  </button>
</div>
<div class="mb-4">
  <div id="loader-modal" class="modal modal--centered modal--closed" tabindex="-1">
    <div class="modal__inner animated slideInUp faster">
      <div class="modal__header">
        <button class="button modal__close loader-modal-close" data-modal="loader-modal">Close <i class="pi-times"></i></button>
        Modal
      </div>
      <div class="modal__content flex--center-content">
        <div class="loader loader--lg"></div>
      </div>
    </div>
  </div>
  <button class="button background-salmon text-white has-text button--lg modal__open loader-modal" data-modal="loader-modal">Modal</button>
</div>

<div class="block-container blocks laptop-up-4 mb-4">
  <div class="block">
    <div class="card loader-card" style="height: 7rem">
      <div class="card__header">
        <div class="card__group">
          <div class="card__title">Card Header</div>
        </div>
      </div>
      <div class="loader loader--lg"></div>
    </div>
  </div>
</div>