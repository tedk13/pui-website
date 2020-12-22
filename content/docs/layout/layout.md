---
title: Layout
date: 2018-07-20T12:59:15-04:00
---
{{< heading heading="h2" id="flex">}}
Flex
{{< /heading >}}

Flexbox utilities to use when flexbox is present.

When `display: flex` add any of the class modifiers from the table below to work with flexbox.

| Class Name                  | CSS Attribute                                                  |
| --------------------------- | -------------------------------------------------------------- |
| `flex--align-center`        | `align-items: center;`                                         |
| `flex--align-start`         | `align-items: flex-start;`                                     |
| `flex--align-end`           | `align-items: flex-end;`                                       |
| `flex--align-baseline`      | `align-items: baseline;`                                       |
| `flex--align-self-center`   | `align-self: center;`                                          |
| `flex--align-self-start`    | `align-self: flex-start;`                                      |
| `flex--align-self-end`      | `align-self: flex-end;`                                        |
| `flex--align-self-baseline` | `align-self: baseline;`                                        |
| `flex--justify-center`      | `justify-content: center;`                                     | 
| `flex--justify-start`       | `justify-content: flex-start;`                                 |
| `flex--justify-end`         | `justify-content: flex-end;`                                   |
| `flex--justify-between`     | `justify-content: space-between;`                              |
| `flex--justify-around`      | `justify-content: space-around;`                               |
| `flex--column`              | `flex-direction: column;`                                      |
| `flex--column-reverse`      | `flex-direction: column-reverse;`                              |
| `flex--row-reverse`         | `flex-direction: row-reverse;`                                 |
| `flex--grow`                | `flex-grow: 1;`                                                |
| `flex--wrap`                | `flex-wrap: wrap;`                                             |
| `flex--nowrap`              | `flex-wrap: nowrap;`                                           |
| `flex--center-content`      | `display: flex; align-items: center; justify-content: center;` |


{{< heading heading="h2" id="block-grid">}}
Block Grid
{{< /heading >}}

Blocks are Platform UI's core structural component. Here are some of the features and concepts behind our grid.

## Blocks
- Blocks are based on a 12 column grid, they allow content to be evenly distributed. They are a mobile first approach.
- Blocks can have responsive modifiers attached directly to them.
- Each `.block` has a width of 100%. From there, you can add modifiers to each block to take up the desired amount of columns in the 12 column grid.
You can use responsive modifiers on each block as well. These modiifiers change the width (or amount of columns taken) of individual blocks from each breakpoint and up. The breakpoint modifiers use min-width media queries.
The `block-{number}` will always reflect the mobile, smallest breakpoint, value.

## Block Containers
- All block grids start with a wrapper of `block-container` that is set to `display: flex ` with `flex-wrap: wrap`.
- `block-container` can also act as a row.
- `block-container` has modifiers to allow auto-placement based on responsive breakpoints.
- Adding a `{breakpoint}-up-{value}` class will create a grid of equally size blocks within the grid. For example: `block-container` `tablet-up-2` `laptop-up-4` would result in a grid with 2 blocks per row starting at the tablet resolution, then when the screen size reaches the laptop resolution, you would see 4 blocks per row. Each block would have the same width as well.


{{< heading heading="h2" id="columns">}}
12 Columns
{{< /heading >}}

<div class="block-container blocks-px-2 blocks-py-2">
  <div class="block block-1">
    <div class="card">
    block-1    
    </div>  
  </div>
  <div class="block block-11">
    <div class="card h-100">
    block-11
    </div>  
  </div>
  <div class="block block-2">
    <div class="card">
    block-2    
    </div>  
  </div>
  <div class="block block-10">
    <div class="card">
    block-10  
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
    block-3    
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
    block-9    
    </div>  
  </div>
  <div class="block block-4">
    <div class="card">
    block-4    
    </div>  
  </div>
  <div class="block block-8">
    <div class="card">
    block-8    
    </div>  
  </div>
  <div class="block block-5">
    <div class="card">
    block-5    
    </div>  
  </div>
  <div class="block block-7">
    <div class="card">
    block-7    
    </div>  
  </div>
  <div class="block block-6">
    <div class="card">
    block-6    
    </div>  
  </div>
  <div class="block block-6">
    <div class="card">
    block-6    
    </div>  
  </div>
  <div class="block block-7">
    <div class="card">
    block-7    
    </div>  
  </div>
  <div class="block block-5">
    <div class="card">
    block-5    
    </div>  
  </div>
  <div class="block block-8">
    <div class="card">
    block-8    
    </div>  
  </div>
  <div class="block block-4">
    <div class="card">
    block-4    
    </div>  
  </div>
  <div class="block block-9">
    <div class="card">
    block-9    
    </div>  
  </div>
  <div class="block block-3">
    <div class="card">
    block-3    
    </div>  
  </div>
  <div class="block block-10">
    <div class="card">
    block-10  
    </div>
  </div>
  <div class="block block-2">
    <div class="card">
    block-2    
    </div>  
  </div>
  <div class="block block-11">
    <div class="card h-100">
    block-11
    </div>
  </div>
  <div class="block block-1">
    <div class="card">
    block-1    
    </div>  
  </div>
  <div class="block block-12">
    <div class="card">
    block-12  
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container blocks-px-2 blocks-py-2">
  <div class="block block-1">
    <div class="card">
    block-1    
    </div>  
  </div>
  <div class="block block-11">
    <div class="card h-100">
    block-11
    </div>  
  </div>
  <div class="block block-2">
    <div class="card">
    block-2    
    </div>  
  </div>
  <div class="block block-10">
    <div class="card">
    block-10  
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
    block-3    
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
    block-9    
    </div>  
  </div>
  <div class="block block-4">
    <div class="card">
    block-4    
    </div>  
  </div>
  <div class="block block-8">
    <div class="card">
    block-8    
    </div>  
  </div>
  <div class="block block-5">
    <div class="card">
    block-5    
    </div>  
  </div>
  <div class="block block-7">
    <div class="card">
    block-7    
    </div>  
  </div>
  <div class="block block-6">
    <div class="card">
    block-6    
    </div>  
  </div>
  <div class="block block-6">
    <div class="card">
    block-6    
    </div>  
  </div>
  <div class="block block-7">
    <div class="card">
    block-7    
    </div>  
  </div>
  <div class="block block-5">
    <div class="card">
    block-5    
    </div>  
  </div>
  <div class="block block-8">
    <div class="card">
    block-8    
    </div>  
  </div>
  <div class="block block-4">
    <div class="card">
    block-4    
    </div>  
  </div>
  <div class="block block-9">
    <div class="card">
    block-9    
    </div>  
  </div>
  <div class="block block-3">
    <div class="card">
    block-3    
    </div>  
  </div>
  <div class="block block-10">
    <div class="card">
    block-10  
    </div>
  </div>
  <div class="block block-2">
    <div class="card">
    block-2    
    </div>  
  </div>
  <div class="block block-11">
    <div class="card h-100">
    block-11
    </div>
  </div>
  <div class="block block-1">
    <div class="card">
    block-1    
    </div>  
  </div>
  <div class="block block-12">
    <div class="card">
    block-12  
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

{{< heading heading="h3" id="building-grids">}}
Building Grids
{{< /heading >}}
You can build a grid of equally sized blocks using the block layout. This can be done in a couple ways. The first way is by adding the classes to each individual block. Something like `block` `block-3` on each block will result in a grid of 4 blocks per row.


<div class="block-container blocks p-2">
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2">
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <strong class="text-navy">block block-3</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

The second approach is to add the sizing classes to the wrapping `block-container`. This way prevents you from needing to add the classes to each block. These classes look like `{breakpoint}-up-{number-of-blocks-per-row}`. So an example would be `tablet-up-3`. This would give you 3 blocks per row starting at the tablet screen size.

<div class="block-container blocks p-2 mobile-up-4">
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2 mobile-up-4">
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

{{< heading heading="h3" id="responsive-grid-with-flex">}}
Responsive Grid
{{< /heading >}}
You can build a responsive grid with blocks. You can add the responsive classes to the individual blocks, or add them to the container. Adding layout classes to the container works best when you need a grid of equally sized blocks.

| Breakpoints | Label | Prefix |
| ------------ | ------------ | ------------ | 
| 0px | mobile | `mobile-up-` |
| 768px | tablet | `tablet-up-` |
| 991px | lg-tablet | `lg-tablet-up-` |
| 1240px | laptop | `laptop-up-` |
| 1800px | desktop | `desktop-up-` |

Adding the responsive classes on a block means, at that resolution, the block will take up as many columns in the 12 column row that are applied via the class. For example: `<div class="block tablet-up-6 laptop-up-4"></div>` This div will take up all 12 columns at the smallest screen size, 6 columns starting at the tablet screen size, and 4 columns at the laptop screen size.

On the blocks: In this example, each block will take up an entire row at the smallest screen sizes. When the screen reaches the tablet resolution, each row will contain 2 blocks, and at the laptop size, each row will have 3 blocks.

<div class="block-container blocks p-2">
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
</div>



<div class="mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2">
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <strong class="text-navy">block tablet-up-6 laptop-up-4</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Spacing
- Spacing is based on Platform UI spacing with the following changes in behavior; Attaching padding to the horizontal axis, px-2, with a modifier of blocks will add that spacing to the block-container.
- Without the blocks modifier, placing block-container px-2 will not apply the horizontal axis padding to the block children within the container but rather apply padding: 0 .5rem to the block-container.

Each block in the example below has padding: .5rem applied.

<div class="block-container blocks p-2">
  <div class="block block-4">
    <div class="card">
    <strong class="text-navy">block block-4</strong>
    </div>
  </div>
  <div class="block block-8">
    <div class="card">
    <strong class="text-navy">block block-8</strong>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
    <strong class="text-navy">block block-6</strong>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
    <strong class="text-navy">block block-6</strong>
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
    <strong class="text-navy">block block-9</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
    <strong class="text-navy">block block-3</strong>
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2">
  <div class="block block-4">
    <div class="card">
    <strong class="text-navy">block block-4</strong>
    </div>
  </div>
  <div class="block block-8">
    <div class="card">
    <strong class="text-navy">block block-8</strong>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
    <strong class="text-navy">block block-6</strong>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
    <strong class="text-navy">block block-6</strong>
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
    <strong class="text-navy">block block-9</strong>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
    <strong class="text-navy">block block-3</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Card Height
The block layout uses flexbox. So based on your markup, the height of the content inside a block may vary. If you used a `card` within your blocks, like we have been in the examples, you might notice the height is off based on the content. To fix this, you can add the class `cards` to the parent `block-container`. This will give `height: 100%` to each `card` inside a `block`.

<div class="block-container blocks p-2">
  <div class="block block-2">
    <div class="card">
      <p >Here's a lot of text in a pretty small space. The width of this box is pretty small.</p>
    </div>
  </div>
  <div class="block block-10">
    <div class="card">
      <p>So the heights aren't equal.</p>
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2">
  <div class="block block-2">
    <div class="card">
      <p >Here's a lot of text in a pretty small space. The width of this box is pretty small.</p>
    </div>
  </div>
  <div class="block block-10">
    <div class="card">
      <p>So the heights aren't equal.</p>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
`cards` class added to `block-container`

<div class="block-container blocks p-2 cards">
  <div class="block block-2">
    <div class="card">
      <p >Here's a lot of text in a pretty small space. The width of this box is pretty small.</p>
    </div>
  </div>
  <div class="block block-10">
    <div class="card">
      <p>The heights are equal.</p>
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2 cards">
  <div class="block block-2">
    <div class="card">
      <p >Here's a lot of text in a pretty small space. The width of this box is pretty small.</p>
    </div>
  </div>
  <div class="block block-10">
    <div class="card">
      <p>The heights are equal.</p>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Flex Utilities
Breakpoint classes can be added to each of these utilities as well. So, for example, you could have a `block-8` from mobile up. Then, at a laptop size you wanted the block to shrink to the size of it's content, you could add the class `laptop-up--shrink`. This would give the styles `width: auto` within that set media query. So you're block would have the classes, `block` `block-8` `laptop-up--shrink`.

The utility classes use the BEM syntax.

| Flexbox Property | Modifier Class |
|--------|-------|
| `width: auto` | `block--shrink` |
| `flex-grow: 1` | `block--fill` |
| `width: 100%` | `block--full` |

<div class="block-container blocks p-2 tablet-up-2 laptop-up-3 desktop-up-4">
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block block--fill">
    <div class="card">
      <strong class="text-navy">block block--fill</strong>
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2 tablet-up-2 laptop-up-3 desktop-up-4">
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <strong class="text-navy">block</strong>
    </div>
  </div>
  <div class="block block--fill">
    <div class="card">
      <strong class="text-navy">block block--fill</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
