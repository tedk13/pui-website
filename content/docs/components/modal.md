---
title: Modal
date: 2018-07-20T12:59:15-04:00
---

Modal default state is closed. Toggling `.modal--closed` on both the `.modal--overlay` and `.modal` will diplay the modal.

`.modal__close` on the close button is also a handle for JS.

Animation note: using `animated` must be placed on `.modal__inner` to maintain correct positioning.

The default size of the modal is `medium`, you can use `modal--small`, `modal--large`, or `modal--full` for different sized modals.

You can center a modal in the middle of the window with the modifier `modal--centered`.

You may run into issues where the background scrolls while your modal is open. To prevent this behavior, add the `.modal-open` class to your body element when a modal is open. See demo below for example and note how adding the `.modal-open` class to the body on open makes the background scroll bar go away.

<div id="default-modal" class="modal modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="default-modal">Close <i class="pi-times"></i></button>
       Standard Modal
     </div>
     <div class="modal__content">
       <h3>modal</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
     </div>
   </div>
 </div>
 <div id="small-modal" class="modal modal--small modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="small-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <p>Modal Content</p>
     </div>
   </div>
 </div>
 <div id="centered-modal" class="modal modal--centered modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="centered-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <p>Modal Content</p>
     </div>
   </div>
 </div>
 <div id="large-modal" class="modal modal--large modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="large-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <p>Modal Content</p>
     </div>
   </div>
 </div>
 <div id="full-modal" class="modal modal--full modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="full-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <h3>Full Screen Modal</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
     </div>
   </div>
 </div>
 <div class="block-container mobile-up-1 tablet-up-4 desktop-up-5 blocks px-2 mb-3">
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="default-modal">Trigger Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="small-modal">Small Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="centered-modal">Centered Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="large-modal">Large Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="full-modal">Full Screen Modal</button>
     </div>
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div id="default-modal" class="modal modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="default-modal">Close <i class="pi-times"></i></button>
       Standard Modal
     </div>
     <div class="modal__content">
       <h3>modal</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
     </div>
   </div>
 </div>
 <div id="small-modal" class="modal modal--small modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="small-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <p>Modal Content</p>
     </div>
   </div>
 </div>
 <div id="centered-modal" class="modal modal--centered modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="centered-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <p>Modal Content</p>
     </div>
   </div>
 </div>
 <div id="large-modal" class="modal modal--large modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="large-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <p>Modal Content</p>
     </div>
   </div>
 </div>
 <div id="full-modal" class="modal modal--full modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header">
       <button class="button modal__close" data-modal="full-modal">Close <i class="pi-times"></i></button>
       Modal
     </div>
     <div class="modal__content">
       <h3>Full Screen Modal</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend convallis quam fermentum sagittis. Curabitur nec ullamcorper nibh, et rhoncus ipsum. Cras quam lacus, gravida id pharetra sit amet, eleifend vel enim. Donec non est ullamcorper tellus aliquam molestie. Morbi vitae nisi velit. Nam tincidunt justo eros, quis posuere quam condimentum ac. Curabitur mi diam, efficitur laoreet iaculis non, volutpat ac ligula. Nullam ut luctus arcu. Donec a turpis mi. Pellentesque fermentum, turpis at bibendum laoreet, lorem lorem tempor lectus, congue viverra nisi dui nec purus. Donec ultricies ut risus sit amet mollis.</p>
     </div>
   </div>
 </div>
 <div class="block-container mobile-up-1 tablet-up-4 desktop-up-5 blocks px-2 mb-3">
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="default-modal">Trigger Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="small-modal">Small Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="centered-modal">Centered Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="large-modal">Large Modal</button>
     </div>
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="full-modal">Full Screen Modal</button>
     </div>
 </div>
 {{< /highlight >}}
 </div>

 


{{< heading heading="h2" id="dialog-modal">}}
Dialog Modal
{{< /heading >}}

To make a dialog box using the modal, remove `modal__header` from the modal. The header is typically reserved for
a modal title as well as a close button. In the case of most dialogs, the options you choose will close the modal so the
header can seem unecessarry. See the code example below.


 <div id="dialog" class="modal modal--small modal--centered modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__content">
       <p class="text--size-lg text--center">Are you sure you want to select these options?</p>
       <div class="block-container blocks p-3"> 
         <div class="block flex flex--justify-center">
           <button class="button mx-2 modal__close" data-modal="dialog">
             No
           </button>
<<<<<<< HEAD
           <button aria-label="" class="button button--post mx-2 modal__close" data-modal="dialog">
=======
           <button class="button button--post mx-2 pui-modal__close" data-modal="dialog">
>>>>>>> rt-remove-aria-from-examples
             Yes
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="block-container mobile-up-1 tablet-up-4 desktop-up-5 blocks px-2 mb-3">
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="dialog">Fire Dialog</button>
     </div>
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div id="dialog" class="modal modal--small modal--centered modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__content">
       <p class="text--size-lg text--center">Are you sure you want to select these options?</p>
       <div class="block-container blocks p-3"> 
         <div class="block flex flex--justify-center">
           <button class="button mx-2 modal__close" data-modal="dialog">
             No
           </button>
           <button class="button button--post mx-2 pui-modal__close" data-modal="dialog">
             Yes
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="block-container mobile-up-1 tablet-up-4 desktop-up-5 blocks px-2 mb-3">
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="dialog">Fire Dialog</button>
     </div>
 </div>
{{< /highlight >}}
</div>
