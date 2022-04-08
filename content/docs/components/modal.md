---
title: Modal
skellyCSS: true
---

<div class="mb-4">
{{% requires-js %}}
</div>

Modal default state is closed. Toggling `.modal--closed` on `.modal` will diplay the modal.

`.modal__close` on the close button is also a handle for JS.

If you need to prevent the background from scrolling, add the `.modal-open` class to your body element when a modal is open.

{{< code-demo >}}
<div class="block mb-3">
    <button class="button button--lg modal__open" data-modal="default-modal">Standard Modal</button>
</div>

<div id="default-modal" class="modal modal--closed" tabindex="-1">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="default-modal">Close <i class="pi-times"></i></button>
      Standard Modal
    </div>
    <div class="modal__content">
      <h3 class="skeleton skeleton--md"></h3>
      <p class="skeleton" data-lines="4"></p>
      <p class="skeleton" data-lines="3"></p>
      <p class="skeleton" data-lines="7"></p>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button button--lg modal__open" data-modal="default-modal">Standard Modal</button>

<!-- Standard Modal -->
<div id="default-modal" class="modal modal--closed">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="default-modal">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Modal Header goes here! -->
    </div>
    <div class="modal__content">
      <!-- Modal content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

<section class="mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Modifier Class"><code>.modal--small</code></td>
        <td data-label="Description">Small sized modal</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.modal--large</code></td>
        <td data-label="Description">Large sized modal</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.modal--full</code></td>
        <td data-label="Description">Full sized modal, takes up 100% of the viewport</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.modal--centered</code></td>
        <td data-label="Description">Centers the modal in the middle of the viewport</td>
      </tr>
    </tbody>
  </table>
</section>

{{< callout tipHeader="Modal Tip" >}}
  <p>If you want to make a dialog box, you can just remove the <code>.modal__header</code> from the modal!</p>
{{< /callout >}}