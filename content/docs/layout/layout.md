---
title: Layout
date: 2018-07-20T12:59:15-04:00
---
{{< heading heading="h3" id="block-grid">}}
Block Grid
{{< /heading >}}

Blocks are Platform UI's core structural component. Here are some of the features and concepts behind our grid.

- Blocks are based on a 12 column grid, they allow content to be evenly distributed. **They are a mobile first approach.** 
- All block grids start with a wrapper of `block-container` that is set to `display: flex` with `flex-wrap: wrap`.
- `block-container` can also act as a row.
- `block-container` has modifiers to allow auto-placement based on responsive breakpoints.
- Using `block-container` and adding `block` children will give you an evenly distributed block grid.
- If a resposive pattern is not placed on `block-container tablet-up-4`, responsive modifiers can be placed on the `block-{number}` level item as well. The `block-{number}` will always reflect the mobile, smallest breakpoint, value.

{{< heading heading="h3" id="columns">}}
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

{{< heading heading="h3" id="standard-grid">}}
Standard Grid
{{< /heading >}}

<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block block--shrink">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block block--shrink">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

{{< heading heading="h3" id="responsive-grid-with-flex">}}
Responsive Grid with Flex
{{< /heading >}}

<div class="mb-4">
{{< highlight html >}}
<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block block--fill">
    <div class="card">
      Test
    </div>
  </div>
</div>

<div class="block-container blocks-px-2 blocks-py-2 tablet-up-3 laptop-up-4">
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block block--shrink">
    <div class="card">
      Test
    </div>
  </div>
  <div class="block">
    <div class="card">
      Test
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h3" id="block-grid-breakpoints">}}
Block grid breakpoints
{{< /heading >}}

Spacing in Platform UI is based on `rem` values with the exception of breakpoints.

| Breakpoints | 0px>         | >768px       | >991px          | >1240px      | >1800px       |
|-------------|--------------|--------------|-----------------|--------------|---------------|
| label       | mobile       | tablet       | lg-tablet       | laptop       | desktop       |
| prefix      | `mobile-up-` | `tablet-up-` | `lg-tablet-up-` | `laptop-up-` | `desktop-up-` |