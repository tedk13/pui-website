---
title: Blocks
skellyCSS: true
---

Blocks are Platform UI's core structural component. Here are some of the features and concepts behind our grid. The block layout is 
powered by flex-box. This layout is based on a 12 column grid. When building your layouts, you will need to assign values to either 
a wrapping `block-container` for equal size grids, or to the individual `block` for specific sizes. This layout is also fully responsive. 
Each `block` has a width of 100% applied for all resolutions. We kept mobile-first in mind so from there, you add responsive modifiers 
to change the size of your block or blocks at larger resolutions. More about all of this below.


## Block Containers

- All block grids start with a wrapper of `block-container` that is set to `display: flex `.
- `block-container`s have `flex-wrap: wrap` applied as well.
- `block-container` has modifiers to allow auto-placement based on responsive breakpoints.

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <!-- Blocks go here! -->
</div>
{{< /highlight >}}
</div>


## Block Sizes

- Each `.block` has a width of 100%. From there, you can add modifiers to each block to take up the desired amount of columns in the 12 column grid.
You can use responsive modifiers on each block as well. These modiifiers change the width (or amount of columns taken) of individual blocks from each breakpoint and up. The breakpoint modifiers use min-width media queries.
The `block-{number}` will always reflect the mobile, smallest breakpoint, value.
- Blocks can have responsive modifiers attached directly to them.


The example below shows how each block lays out along the 12 column grid.

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
  <div class="block block-3 my-2">
    <div class="card background--light-mid">
      <strong>Block-3</strong>
    </div>
  </div>
  <div class="block block-9 my-2">
    <div class="card background--light-mid">
      <strong>Block-9</strong>
    </div>
  </div>
  <div class="block block-6 my-2">
    <div class="card background--light-mid">
      <strong>Block-6</strong>
    </div>
  </div>
  <div class="block block-6 my-2">
    <div class="card background--light-mid">
      <strong>Block-6</strong>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
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
</div>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Modifier Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Modifier Class"><code>.block-1</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-1"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-2</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-2"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-3</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-3"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-4</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-4"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-5</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-5"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-6</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-6"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-7</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-7"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-8</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-8"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-9</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-9"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-10</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-10"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-11</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-11"><div class="card background--lighter"></div></div></div></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.block-12</code></td>
      <td data-label="Example"><div class="block-container w-100"><div class="block block-12"><div class="card background--lighter"></div></div></div></td>
    </tr>
  </tbody>
</table>


### Building Grids

You can build a grid of equally sized blocks using the block layout. This can be done in a couple ways. The first way is by adding the classes to each individual block. Something like `block` `block-3` on each block will result in a grid of 4 blocks per row.

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
  <div class="block block-3 p-2">
    <div class="card">
      <h2 class="">Block-3</h2>
      <p>This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <h2 class="">Block-3</h2>
      <p>This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <h2 class="">Block-3</h2>
      <p>This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
  <div class="block block-3 p-2">
    <div class="card">
      <h2 class="">Block-3</h2>
      <p>This block takes up 3 columns and has .5rem padding.</p>
    </div>
  </div>
</div>

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

#### On The Block-container

The second approach is to add the sizing classes to the wrapping `block-container`. This prevents you from needing to add the classes to each block. These classes look like `{breakpoint}-up-{number-of-blocks-per-row}`. When building from the mobile-first approach, if you want more than one `block` per row at your smallest screen size, you will need to start with a `mobile-up-{number-of-blocks-per-row}` unless you want a `block` to be full width of your `block-container`.

Adding a `{breakpoint}-up-{value}` class will create a grid of equally-sized blocks within the grid. When you add the class to the `block-container` rather than an individual `block`, you're saying you want that many blocks per row. So, if you had something like: `block-container` `tablet-up-2` `laptop-up-4`, this would result in a grid with 1 block per row at your smallest screen size, 2 blocks per row starting at the tablet resolution, and 4 blocks per row from laptop and up. Each block would have the same width as well. Check out the example below. 

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


### Responsive Grid

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

#### On The Block

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
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4 p-2">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
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

#### On The Block-container

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


## Spacing

- Spacing is based on Platform UI spacing with the following changes in behavior; Attaching padding to the horizontal axis, px-2, with a modifier of blocks will add that spacing to the block-container.
- Without the blocks modifier, placing block-container px-2 will not apply the horizontal axis padding to the block children within the container but rather apply padding: 0 .5rem to the block-container.

Each block in the example below has padding: .5rem applied.

<div class="block-container blocks p-2 pos-rel">
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
  <div class="block block-4">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-8">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2">
  <!-- Blocks go here! -->
</div>
{{< /highlight >}}
</div>


## Block Utilities

Breakpoint classes can be added to each of these utilities as well. So, for example, you could have a `block-8` from mobile up. Then, at a laptop size you wanted the block to shrink to the size of it's content, you could add the class `laptop-up--shrink`. This would give the styles `width: auto` within that set media query. So you're block would have the classes, `block` `block-8` `laptop-up--shrink`.

The utility classes use the BEM syntax.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Modifier Class</th>
      <th>Flexbox Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Modifier Class"><code>block--shrink</code></td>
      <td data-label="Flexbox Property"><code>width: auto</code></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>block--fill</code></td>
      <td data-label="Flexbox Property"><code>flex-grow: 1</code></td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>block--full</code></td>
      <td data-label="Flexbox Property"><code>width: 100%</code></td>
    </tr>
  </tbody>
</table>

<div class="block-container blocks p-2 tablet-up-2 laptop-up-3 desktop-up-4 pos-rel">
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
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block--fill">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2 tablet-up-2 laptop-up-3 desktop-up-4 pos-rel">
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
</div>
