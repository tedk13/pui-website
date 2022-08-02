---
title: Z-Index
skellyCSS: true
---

{{% anchor name="Z-Index" %}}

You can use these utility classes to control the stack. Add a `z-{value}` class to your element to change the order of the stack. Remember to specify `position: relative` on the element for `z-index` to work.

{{< classes result="true" >}}
{{< classes-row class="z-0" result="z-index: 0" >}}
{{< classes-row class="z-10" result="z-index: 10" >}}
{{< classes-row class="z-20" result="z-index: 20" >}}
{{< classes-row class="z-30" result="z-index: 30" >}}
{{< classes-row class="z-40" result="z-index: 40" >}}
{{< classes-row class="z-50" result="z-index: 50" >}}
{{< classes-row class="z-60" result="z-index: 60" >}}
{{< classes-row class="z-70" result="z-index: 70" >}}
{{< classes-row class="z-80" result="z-index: 80" >}}
{{< classes-row class="z-90" result="z-index: 90" >}}
{{< classes-row class="z-100" result="z-index: 100" >}}
{{< classes-row class="-z-10" result="z-index: -10" >}}
{{< classes-row class="-z-20" result="z-index: -20" >}}
{{< classes-row class="z-auto" result="z-index: auto" >}}
{{< /classes >}}

{{< code-demo >}}
<div class="rounded-2 block background--dark p-3">
  <div class="flex">
    <div 
      class="pos-rel z-30 background--lavender text--purple text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem;">
      z-30
    </div>
    <div 
      class="pos-rel z-40 background--light-purple text--white text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem">
      z-40
    </div>
    <div 
      class="pos-rel z-50 background--purple text--white text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem">
      z-50
    </div>
    <div 
      class="pos-rel z-40 background--light-purple text--white text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem">
      z-40
    </div>
    <div 
      class="pos-rel z-30 background--lavender text--purple text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem">
      z-30
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pos-rel z-30">
  z-30
</div>
<div class="pos-rel z-40">
  z-40
</div>
<div class="pos-rel z-50">
  z-50
</div>
<div class="pos-rel z-40">
  z-40
</div>
<div class="pos-rel z-30">
  z-30
</div>
{{< /highlight >}} 
{{< /code-markup >}}

{{% anchor name="Javascript Option" %}}
{{% requires-js %}}

Can't find the value you need in the list above? You can add a `data-z="{value}"` to your element and let javascript handle the rest. 

{{< code-demo >}}
<div class="rounded-2 block background--dark p-3">
  <div class="flex">
    <div 
      class="pos-rel background--lavender text--purple text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem;"
      data-z="31">
      31
    </div>
    <div 
      class="pos-rel background--light-purple text--white text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem"
      data-z="60">
      60
    </div>
    <div 
      class="pos-rel background--purple text--white text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem"
      data-z="999">
      999
    </div>
    <div 
      class="pos-rel background--light-purple text--white text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem"
      data-z="10">
      10
    </div>
    <div 
      class="pos-rel background--lavender text--purple text--bold border border--color-white border--width-2 flex--center-content" 
      style="border-radius: 50%; height: 5rem; width: 5rem; margin-left: -1rem"
      data-z="1">
      1
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pos-rel z-30" data-z="31">
  31
</div>
<div class="pos-rel z-40" data-z="60">
  60
</div>
<div class="pos-rel z-50" data-z="999">
  999
</div>
<div class="pos-rel z-40" data-z="10">
  10
</div>
<div class="pos-rel z-30" data-z="1">
  1
</div>
{{< /highlight >}} 
{{< /code-markup >}}