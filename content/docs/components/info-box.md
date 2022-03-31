---
title: Info Box
skellyCSS: true
---

Click the button to toggle the info box. 

<i class="pi-warning text-orange"></i> **Note:** Depending on the rest of your markup, you might need to specify a width or add the class `flex-inline` to `info-box` to ensure the box opens correctly.

`flex-inline` was added to the example below.

<div class="info-box flex-inline">
  <button class="button toggle-hidden" role="button" aria-label="Toggle">
    Open Info Box
  </button>
  <div class="info-box__content hidden">
    <button class="button info-box__close">
      <!-- close button doesn't work -->
      Close 
      <i class="pi-times" aria-hidden="hidden"></i>
    </button>
    <p class="skeleton" data-lines="4"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div class="info-box">
   <!-- Info Box Trigger -->
   <button class="button toggle-hidden">
     Open Info Box
   </button>

   <!-- Info Box Content -->
   <div class="info-box__content hidden">
     <button class="button info-box__close">
       Close 
       <i class="pi-times"></i>
     </button>
     <!-- Info Box content goes here! -->
   </div>
 </div>
{{< /highlight >}}
</div>

## Open Left

You can make the info-box open from the left by adding the class `info-box--left` to your info-box.

`flex-inline` was added to the example below.

<div class="info-box info-box--left flex-inline">
  <button class="button toggle-hidden" role="button" aria-label="Toggle">
    Open Info Box
  </button>
  <div class="info-box__content hidden">
    <button class="button info-box__close">
      <!-- close button doesn't work -->
      Close 
      <i class="pi-times" aria-hidden="hidden"></i>
    </button>
    <p class="skeleton" data-lines="4"></p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div class="info-box">
   <!-- Info Box Trigger -->
   <button class="button toggle-hidden">
     Open Info Box
   </button>

   <!-- Info Box Content -->
   <div class="info-box__content hidden">
     <button class="button info-box__close">
       Close 
       <i class="pi-times"></i>
     </button>
     <!-- Info Box content goes here! -->
   </div>
 </div>
{{< /highlight >}}
</div>