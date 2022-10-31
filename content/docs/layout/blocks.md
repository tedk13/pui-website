---
title: Blocks
description: Platform UI documentation for blocks.
skellyCSS: true
---

{{% anchor name="block container" %}}

All block grids start with a wrapper of `block-container` that is `display: flex` with `flex-wrap: wrap` applied. Container modifiers, which affect all child blocks, allow auto-placement based on responsive breakpoints.

{{< modifiers >}}
{{< modifiers-row 
  modifier="blocks"
  behavior="When applied, margins and padding placed on the container are applied to all child blocks instead." 
>}}
{{< /modifiers >}}

{{< block-grid padding="blocks p-2" level="4">}}
  <div class="block block-4">
    <div class="card">
      <code>block-4</code>  
    </div>
  </div>
  <div class="block block-8">
    <div class="card">
      <code>block-8</code>
    </div>
  </div>
{{< /block-grid >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container blocks p-2">
  <div class="block block-4"></div>
  <div class="block block-8"></div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="block" %}}

Based on a 12 column grid, `block` is a core structural component when building your layout. Blocks are fully responsive - each `block` has a width of 100% applied for all resolutions and can be modified both on the container and block levels.

{{% anchor level="3" name="size" %}}

Modifiers on each block, from 1-12, affect their native 100% width. The `block-{number}` will always reflect the smallest breakpoint which is mobile.

{{< block-grid level="4" padding="blocks p-2" >}}
  <div class="block block-3">
    <div class="card">
      <code>block-3</code>
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
      <code>block-9</code>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
      <code>block-6</code>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
      <code>block-6</code>
    </div>
  </div>
{{< /block-grid >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container blocks p-2">
  <div class="block block-3"></div>
  <div class="block block-9"></div>
  <div class="block block-6"></div>
  <div class="block block-6"></div>
</div>
{{< /highlight >}}
{{< /code-markup >}}


{{< modifiers >}}
<!-- Do not use modifiers-row here to utilize the divs -->
<tr>
  <td data-label="Modifier"><code>block-1</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-1"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-2</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-2"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-3</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-3"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-4</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-4"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-5</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-5"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-6</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-6"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-7</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-7"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-8</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-8"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-9</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-9"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-10</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-10"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-11</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-11"><div class="card background--lighter"></div></div></div></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block-12</code></td>
  <td data-label="Behavior"><div class="block-container w-100"><div class="block block-12"><div class="card background--lighter"></div></div></div></td>
</tr>
{{< /modifiers >}}


{{% anchor name="utilities" level="3" %}}

Breakpoint classes can be added to each of these utilities as well. For example, you could have a `block-8` from mobile up. Then, if you wanted the block to shrink to the size of its content at a laptop size, you could add the class `laptop-up--shrink`. This would give the styles `width: auto` within that set media query. Your block would have the classes, `block` `block-8` `laptop-up--shrink`.


{{< modifiers >}}
{{< modifiers-row 
  modifier="block--shrink"
  behavior="`width: auto`" 
>}}
{{< modifiers-row 
  modifier="block--fill"
  behavior="`flex-grow: 1`" 
>}}
{{< modifiers-row 
  modifier="block--full"
  behavior="`width: 100%`" 
>}}
{{< /modifiers >}}

{{< block-grid level="4" padding="blocks p-2 tablet-up-3" >}}
  <div class="block">
    <div class="card">
      <code>block</code>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <code>block</code>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <code>block</code>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <code>block</code>
    </div>
  </div>
  <div class="block block--fill">
    <div class="card">
      <code>block--fill</code>
    </div>
  </div>
{{< /block-grid >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container blocks p-3 tablet-up-2 laptop-up-3 desktop-up-4">
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block block--fill"></div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="Responsive grids" %}}

You can build responsive grids using modifiers based on [standard viewports](/docs/concepts/breakpoints/). These modifiers can be added on the block or container levels.

{{< modifiers >}}
{{< modifiers-row 
  modifier="{viewport}-up-{number}"
  behavior="Set the `number` of columns a block, or blocks in a container, span across a `viewport`." 
>}}
{{< /modifiers >}}

**Now let's explain what we mean!**

{{% anchor name="on the container" level="3" %}}

Adding `{breakpoint}-up-{number-of-blocks-per-row}` to display `{number-of-blocks-per-row}` at the breakpoint specified.

This method will override any block size set within the targeted scope of the modified container.

{{< block-grid level="4" padding="tablet-up-2 blocks p-2" >}}
<div class="block">
  <div class="card">
    <code>block</code>
  </div>
</div>
<div class="block">
  <div class="card">
    <code>block</code>
  </div>
</div>
<div class="block">
  <div class="card">
    <code>block</code>
  </div>
</div>
{{< /block-grid >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container tablet-up-2">
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="on the block" level="3" %}}

Adding `{breakpoint}-up-{number-of-columns-to-span}` will do just that. A block set to `block-6` will span 6 columns, or half the grid. 

In the grid demo example, each block will take up an entire row at the smallest viewport. At `tablet`, each row will contain 2 blocks; `laptop`, each row will contain 3 blocks.

{{< block-grid level="5" padding="blocks p-2" >}}
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <code>tablet-up-6</code>
      <code>laptop-up-4</code>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <code>tablet-up-6</code>
      <code>laptop-up-4</code>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <code>tablet-up-6</code>
      <code>laptop-up-4</code>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <code>tablet-up-6</code>
      <code>laptop-up-4</code>
    </div>
  </div>
{{< /block-grid >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container">
  <div class="block tablet-up-6 laptop-up-4"></div>
  <div class="block tablet-up-6 laptop-up-4"></div>
  <div class="block tablet-up-6 laptop-up-4"></div>
  <div class="block tablet-up-6 laptop-up-4"></div>
</div>
{{< /highlight >}}
{{< /code-markup >}}
