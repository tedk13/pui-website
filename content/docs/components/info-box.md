---
title: Info Boxes
skellyCSS: true
toc: false
---
{{% requires-js %}}

{{% anchor name="Info Box" %}}

Click the button to toggle the info box. 

{{< callout tipHeader="info box tip">}}
You may need to specify a width or add the class `flex-inline` to `info-box` to ensure the box opens correctly based on your content. `flex-inline` was added to the example below.
{{< /callout >}}

{{< code-demo >}}
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
{{< /code-demo >}}

{{< code-markup >}}
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
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>info-box</code>
  </td>
  <td data-label="Modifier">
    <code>info-box--left</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    The info box opens from the left
  </td>
</tr>
{{< /modifiers >}}
