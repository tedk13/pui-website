---
title: Blocks
skellyCSS: true
---

{{% anchor name="block container" %}}

All block grids start with a wrapper of `block-container` that is `display: flex ` with `flex-wrap: wrap` applied. Container modifiers, which affect all child blocks, allow auto-placement based on responsive breakpoints.

{{< modifiers >}}
<tr>
  <td data-label="Modifier">
    <code>blocks</code>
  </td>
  <td data-label="Behavior">
    When applied, margins and padding placed on the container are applied to all child blocks instead.
  </td>
</tr>
{{< /modifiers >}}

{{< block-grid padding="p-2" level="4">}}
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

Based on a 12 column grid, `block` is a core structural component when building your layout. Blocks are fully responsive, each `block` has a width of 100% applied for all resolutions and can be modified both on the container and block levels.

{{% anchor level="3" name="size" %}}

Modifiers on each block, from 1-12, affect their native 100% width. The `block-{number}` will always reflect the mobile value, or, smallest breakpoint.

{{< block-grid level="4" padding="blocks" >}}
  <div class="block block-3 my-3">
    <div class="card">
      <code>block-3</code>
    </div>
  </div>
  <div class="block block-9 my-3">
    <div class="card">
      <code>block-9</code>
    </div>
  </div>
  <div class="block block-6 my-3">
    <div class="card">
      <code>block-6</code>
    </div>
  </div>
  <div class="block block-6 my-3">
    <div class="card">
      <code>block-6</code>
    </div>
  </div>
{{< /block-grid >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container blocks">
  <div class="block block-3">
    <!-- Content goes here! -->
  </div>
  <div class="block block-9">
    <!-- Content goes here! -->    
  </div>
  <div class="block block-6">
    <!-- Content goes here! -->
  </div>
  <div class="block block-6">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}}


{{< modifiers >}}
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

Breakpoint classes can be added to each of these utilities as well. So, for example, you could have a `block-8` from mobile up. Then, at a laptop size you wanted the block to shrink to the size of it's content, you could add the class `laptop-up--shrink`. This would give the styles `width: auto` within that set media query. So you're block would have the classes, `block` `block-8` `laptop-up--shrink`.


{{< modifiers >}}
<tr>
  <td data-label="Modifier"><code>block--shrink</code></td>
  <td data-label="Behavior"><code>width: auto</code></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block--fill</code></td>
  <td data-label="Behavior"><code>flex-grow: 1</code></td>
</tr>
<tr>
  <td data-label="Modifier"><code>block--full</code></td>
  <td data-label="Behavior"><code>width: 100%</code></td>
</tr>
{{< /modifiers >}}

{{< code-demo >}}
<div class="block-container blocks p-3 tablet-up-2 laptop-up-3 desktop-up-4 pos-rel">
  <!-- Grid key background -->
  <div class="block-container border border--color-lighter pos-abs pin-top pin-right pin-bottom pin-left" style="z-index: -1">
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
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
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container blocks p-3 tablet-up-2 laptop-up-3 desktop-up-4">
  <div class="block">
    <!-- Content goes here! -->
  </div>

  <div class="block">
    <!-- Content goes here! -->
  </div>

  <div class="block">
    <!-- Content goes here! -->
  </div>

  <div class="block">
    <!-- Content goes here! -->
  </div>

  <div class="block block--fill">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="grids" %}}

You can build a grid of equally sized blocks using the block layout, and you can do it a few different ways. 

{{% anchor name="On the block" level="3" %}}

Add the modifier to each individual block. `block block-3`

{{< code-demo >}}
<div class="block-container py-3 pos-rel">
  <!-- Grid key background -->
  <div class="block-container border border--color-lighter pos-abs pin-top pin-right pin-bottom pin-left" style="z-index: -1">
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <code>block-3</code>
      <p class="mt-3 text--size-sm">This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <code>block-3</code>
      <p class="mt-3 text--size-sm">This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <code>block-3</code>
      <p class="mt-3 text--size-sm">This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <code>block-3</code>
      <p class="mt-3 text--size-sm">This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
</div>
{{< /code-demo >}}

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block block-3 p-2">
    <!-- Content goes here! -->
  </div>
  <div class="block block-3 p-2">
    <!-- Content goes here! -->    
  </div>
  <div class="block block-3 p-2">
    <!-- Content goes here! -->
  </div>
  <div class="block block-3 p-2">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>

{{% anchor name="on the container" level="4" %}}

The second approach is to add the sizing classes to the wrapping `block-container`. This prevents you from needing to add the classes to each block. These classes look like `{breakpoint}-up-{number-of-blocks-per-row}`. When building from the mobile-first approach, if you want more than one `block` per row at your smallest screen size, you will need to start with a `mobile-up-{number-of-blocks-per-row}` unless you want a `block` to be full width of your `block-container`.

Adding a `{breakpoint}-up-{value}` class will create a grid of equally-sized blocks within the grid. When you add the class to the `block-container` rather than an individual `block`, you're saying you want that many blocks per row. So, if you had something like: `block-container` `tablet-up-2` `laptop-up-4`, this would result in a grid with 1 block per row at your smallest screen size, 2 blocks per row starting at the tablet resolution, and 4 blocks per row from laptop and up. Each block would have the same width as well. Check out the example below. 

Scale your window to watch the grid change.

{{< block-grid >}}
  <div class="block p-2">
    <div class="card">
      <code>Block</code>
      <p class="mt-2 text--size-sm">Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
  <div class="block p-2">
    <div class="card">
      <code>Block</code>
      <p class="mt-2 text--size-sm">Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
  <div class="block p-2">
    <div class="card">
      <code>Block</code>
      <p class="mt-2 text--size-sm">Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
  <div class="block p-2">
    <div class="card">
      <code>Block</code>
      <p class="mt-2 text--size-sm">Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
{{< /block-grid >}}

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks tablet-up-2 laptop-up-4">
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


{{% anchor name="responsive" level="3" %}}

You can build a responsive grid with blocks. You can add the responsive classes to the individual blocks, or add them to the container. Adding layout classes to the container works best when you need a grid of equally sized blocks.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Breakpoints</th>
      <th>Label</th>
      <th>Prefix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Breakpoints">0px</td>
      <td data-label="Label">mobile</td>
      <td data-label="Prefix"><code>mobile-up-</code></td>
    </tr>
    <tr>
      <td data-label="Breakpoints">768px</td>
      <td data-label="Label">tablet</td>
      <td data-label="Prefix"><code>tablet-up-</code></td>
    </tr>
    <tr>
      <td data-label="Breakpoints">991px</td>
      <td data-label="Label">lg-tablet</td>
      <td data-label="Prefix"><code>lg-tablet-up-</code></td>
    </tr>
    <tr>
      <td data-label="Breakpoints">1240px</td>
      <td data-label="Label">laptop</td>
      <td data-label="Prefix"><code>laptop-up-</code></td>
    </tr>
    <tr>
      <td data-label="Breakpoints">1800px</td>
      <td data-label="Label">desktop</td>
      <td data-label="Prefix"><code>desktop-up-</code></td>
    </tr>
  </tbody>
</table>

{{% anchor name="on the block" level="4" %}}

Adding the responsive classes on a block means that at that resolution, the block will take up as many columns in the 12 column row that are applied via the class. For example: `<div class="block tablet-up-6 laptop-up-4"></div>` This div will take up all 12 columns at the smallest screen size, 6 columns starting at the tablet screen size, and 4 columns at the laptop screen size.

In this example, each block will take up an entire row at the smallest screen sizes. When the screen reaches the tablet resolution, each row will contain 2 blocks, and at the laptop size, each row will have 3 blocks.

<div class="block-container pos-rel">
  <!-- Grid key background -->
  <div class="block-container border border--color-lighter pos-abs pin-top pin-right pin-bottom pin-left" style="z-index: -1">
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <p class="skeleton" data-lines="4" role="presentation"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <p class="skeleton" data-lines="4" role="presentation"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <p class="skeleton" data-lines="4" role="presentation"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <p class="skeleton" data-lines="4" role="presentation"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>

{{% anchor name="on the block-container" level="4" %}}

You can also add these classes to the wrapping `block-container`. As mentioned above, this method works well for equally sized grids. You use the same class names as on the block, but when the class is on the `block-container` the class is decribing how many `block`s there will be per row.

Scale your window to watch the grid change.

<div class="block-container tablet-up-2 laptop-up-4 pos-rel">
  <!-- Grid key background -->
  <div class="block-container border border--color-lighter pos-abs pin-top pin-right pin-bottom pin-left" style="z-index: -1">
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
    <div class="block block-1 sg-column"></div>
  </div>
  <div class="block p-2">
    <div class="card">
      <h2 class="">Block</h2>
      <p>Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
  <div class="block p-2">
    <div class="card">
      <h2 class="">Block</h2>
      <p>Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
  <div class="block p-2">
    <div class="card">
      <h2 class="">Block</h2>
      <p>Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
  <div class="block p-2">
    <div class="card">
      <h2 class="">Block</h2>
      <p>Each block takes up all columns at mobile, 6 columns at tablet, and 3 columns at laptop</p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks tablet-up-2 laptop-up-4">
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>

