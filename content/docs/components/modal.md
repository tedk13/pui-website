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
    <button class="button modal__open" data-modal="default-modal">Standard Modal</button>
</div>

<div id="default-modal" class="modal" tabindex="-1">
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
<div id="default-modal" class="modal">
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

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>modal</code>
  </td>
  <td data-label="Modifier">
    <code>modal--small</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Small sized modal
  </td>
</tr>
  <td data-label="Base">
    <code>modal</code>
  </td>
  <td data-label="Modifier">
    <code>modal--large</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Large sized modal
  </td>
</tr>
  <td data-label="Base">
    <code>modal</code>
  </td>
  <td data-label="Modifier">
    <code>modal--full</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Full sized modal, takes up 100% of the viewport
  </td>
</tr>
  <td data-label="Base">
    <code>modal</code>
  </td>
  <td data-label="Modifier">
    <code>modal--centered</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Centers the modal in the middle of the viewport
  </td>
</tr>
{{< /modifiers >}}

{{< callout tipHeader="Modal Tip" >}}
  <p>If you want to make a dialog box, you can just remove the <code>.modal__header</code> from the modal!</p>
{{< /callout >}}