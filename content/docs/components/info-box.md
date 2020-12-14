---
title: Info Box
date: 2018-07-20T12:59:15-04:00
---

Click the button to toggle the info box.

<div class="block-container blocks tablet-up-6">
  <div class="block">
    <div class="info-box">
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
