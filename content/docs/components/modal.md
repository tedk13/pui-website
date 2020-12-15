---
title: Modal
date: 2018-07-20T12:59:15-04:00
---
<div class="block-container blocks mb-4">
  <div class="block">
    <div class="pill text--size-xs text-dark">
      <i class="pi-bolt mr-1 text-negative"></i>
      Requires <span class="text--bold ml-1">JavaScript</span>
    </div> 
  </div>
</div>

Modal default state is closed. Toggling `.modal--closed` on both the `.modal--overlay` and `.modal` will diplay the modal.

`.modal__close` on the close button is also a handle for JS.

The default size of the modal is `medium`, you can use `modal--small`, `modal--large`, or `modal--full` for different sized modals.

You can center a modal in the middle of the window with the modifier `modal--centered`.

You may run into issues where the background scrolls while your modal is open. To prevent this behavior, add the `.modal-open` class to your body element when a modal is open. See demo below for example and note how adding the `.modal-open` class to the body on open makes the background scroll bar go away.


## Standard
<div class="block mb-3">
    <button class="button button--post button--lg modal__open" data-modal="default-modal">Standard Modal</button>
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

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="default-modal">Standard Modal</button>

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
</div>

<div class="message message--info mb-4">
  <p>You can add animation effects to modals by adding <a class="text-navy text-underline--hover"  href="https://animate.style/">animate.css</a> classes to the .modal__inner element!</p>
</div>

## Small
<div class="block mb-3">
    <button class="button button--post button--lg modal__open" data-modal="small-modal">Small Modal</button>
</div>
<div id="small-modal" class="modal modal--small modal--closed" tabindex="-1">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="small-modal">Close <i class="pi-times"></i></button>
      Small Modal
    </div>
    <div class="modal__content">
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="small-modal">Small Modal</button>

<!-- Small Modal -->
 <div id="small-modal" class="modal modal--small modal--closed">
   <div class="modal__inner">
     <div class="modal__header">
       <button class="button modal__close" data-modal="small-modal">
        Close 
        <i class="pi-times"></i>
       </button>
       <!-- Modal header goes here! -->
     </div>
     <div class="modal__content">
       <!-- Modal content goes here! -->
     </div>
   </div>
 </div>
{{< /highlight >}}
</div>

 ## Centered
<div class="block mb-3">
  <button class="button button--post button--lg modal__open" data-modal="centered-modal">Centered Modal</button>
</div>
<div id="centered-modal" class="modal modal--centered modal--closed" tabindex="-1">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="centered-modal">Close <i class="pi-times"></i></button>
      Centered Modal
    </div>
    <div class="modal__content">
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="centered-modal">Centered Modal</button>

<!-- Centered Modal -->
<div id="centered-modal" class="modal modal--centered modal--closed">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="centered-modal">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Modal header goes here! -->
    </div>
    <div class="modal__content">
      <!-- Modal content goes here! -->
    </div>
  </div>
</div>
{{< /highlight>}}
</div>

## Large
<div class="block mb-3">
    <button class="button button--post button--lg modal__open" data-modal="large-modal">Large Modal</button>
</div>
<div id="large-modal" class="modal modal--large modal--closed" tabindex="-1">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="large-modal">Close <i class="pi-times"></i></button>
      Large Modal
    </div>
    <div class="modal__content">
      <p class="skeleton" data-lines="4"></p>
      <p class="skeleton" data-lines="3"></p>
      <p class="skeleton" data-lines="7"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="large-modal">Large Modal</button>

<!-- Large Modal -->
<div id="large-modal" class="modal modal--large modal--closed">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="large-modal">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Modal header goes here! -->
    </div>
    <div class="modal__content">
      <!-- Modal content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Full Screen
<div class="block">
  <button class="button button--post button--lg modal__open" data-modal="full-modal">Full Screen Modal</button>
</div>

<div id="full-modal" class="modal modal--full modal--closed" tabindex="-1">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="full-modal">Close <i class="pi-times"></i></button>
      Full Screen Modal
    </div>
    <div class="modal__content">
      <h3 class="skeleton skeleton--md"></h3>
      <p class="skeleton" data-lines="3"></p>
      <p class="skeleton" data-lines="7"></p>
      <p class="skeleton" data-lines="4"></p>
      <p class="skeleton" data-lines="6"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="full-modal">Full Screen Modal</button>

<!-- Full Screen Modal -->
<div id="full-modal" class="modal modal--full modal--closed">
  <div class="modal__inner">
    <div class="modal__header">
      <button class="button modal__close" data-modal="full-modal">
      Close 
      <i class="pi-times"></i>
      </button>
      <!-- Modal header goes here! -->
    </div>
    <div class="modal__content">
    <!-- Modal content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="dialog">}}
Dialog
{{< /heading >}}

To make a dialog box using the modal, remove `modal__header` from the modal. The header is typically reserved for
a modal title as well as a close button. In the case of most dialogs, the options you choose will close the modal so the
header can seem unecessarry. See the code example below.

<div class="block mb-3">
    <button class="button button--post button--lg modal__open" data-modal="dialog-modal">Dialog Modal</button>
</div>

 <div id="dialog-modal" class="modal modal--small modal--centered modal--closed" tabindex="-1">
   <div class="modal__inner">
     <div class="modal__content">
       <p class="skeleton" data-lines="2"></p>
       <div class="block-container blocks p-3"> 
         <div class="block flex flex--justify-center">
           <button class="button button--post mx-2 modal__close" data-modal="dialog-modal">
             Yes
           </button>
           <button class="button mx-2 modal__close" data-modal="dialog-modal">
             No
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="dialog-modal">Modal</button>

<!-- Dialog Modal -->
<div id="dialog-modal" class="modal modal--small modal--centered modal--closed">
  <div class="modal__inner">
    <div class="modal__content">
      <!-- Modal content goes here! -->
      <button class="button button--post modal__close" data-modal="dialog-modal">
        Yes
      </button>
      <button class="button modal__close" data-modal="dialog-modal">
        No
      </button>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Message
If you would like to add a message to a modal, you can add it after `modal__content`. If the message is a sibling of `modal__content`, the message will be the full width of the modal as seen in the example. You can simply use use the message inside `modal__content` if you would like the message to have the same padding as the rest of of the modal content. If you want the message to be aligned to the bottom of the modal you'll need to remove the margin of the message with a spacer modifier class (`my-0`, `m-0`). See the example below.

Note: This look may not be best for the larger modals. It may be better to include the message inside the `modal__content` container.

<button class="button button--post button--lg modal__open" data-modal="message-modal">Message Modal</button>

<div id="message-modal" class="modal modal--centered modal--closed" tabindex="-1">
  <div class="modal__inner">
    <div class="modal__content">
      <div class="flex flex--justify-end mb-4">
        <button class="button modal__close pos-abs pin-right pin-top mr-3 mt-3" data-modal="message-modal">
        Close <i class="pi-times"></i>
      </button>
      </div>
      <p class="skeleton" data-lines="2"></p>
    </div>
    <div class="message message--warning m-0">
      <p class="skeleton" data-lines="3"></p>
    </div>
  </div>
</div>

{{< highlight html >}}
<!-- Modal Trigger -->
<button class="button button--post button--lg modal__open" data-modal="message-modal">Message Modal</button>

<!-- Message Modal -->
<div id="message-modal" class="modal modal--centered modal--closed">
  <div class="modal__inner">
    <div class="modal__content">
      <button class="button modal__close" data-modal="message-modal">
        Close 
        <i class="pi-times"></i>
      </button>
      <!-- Modal content goes here! -->
    </div>
    <div class="message message--warning m-0">
      <!-- Modal message content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}