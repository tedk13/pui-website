---
layout: ../../../layouts/single.astro
title: Info Boxes
description: Documentation for Platform UI's infobox component.
skellyCSS: true
---
{{% requires-js %}}

{{% anchor name="Info Box" %}}

Click the button to toggle the info box. You can also manually toggle this by adding the `active` class to `info-box__content`.

{{< code-demo >}}
<div class="info-box flex-inline">
  <button class="button toggle-hidden" role="button" aria-label="Toggle">
    Open Info Box
  </button>
  <div class="info-box__content">
    <button class="button info-box__close">
      <!-- close button doesn't work -->
      Close 
      <i class="pi-times" aria-hidden="hidden"></i>
    </button>
    <p class="skeleton" data-lines="4" role="presentation"></p>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
 <div class="info-box">
   <!-- Info Box Trigger -->
   <button class="button toggle-hidden">
     Open Info Box
   </button>
   <!-- Info Box Content -->
   <div class="info-box__content">
     <button class="button info-box__close">
       Close 
       <i class="pi-times"></i>
     </button>
     <!-- Info Box content goes here! -->
   </div>
 </div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
{{< modifiers-row 
  modifier="info-box--left"
  behavior="The info box opens from the left." 
>}}
{{< /modifiers >}}

{{< callout header="info box tip">}}
You may need to specify a width or add the class `flex-inline` to `info-box` to ensure the box opens correctly based on your content. `flex-inline` was added to the example above.
{{< /callout >}}