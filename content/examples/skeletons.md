---
title: Skeletons
date: 2020-12-07T12:59:15-04:00
summary: How to add skeleton screen content components
---

## Basic Usage
Skeleton content can be utilized within the Platform UI styleguide to replace placeholder text in demos. We've come up with a simple way to add skeleton content within any element or component using CSS.

<br />

### Headers
Apply the `skeleton` class to any type of header and it will automatically adjust to the font-size of the header stylings:
| Header Type  |  Result |
| ------------ | ------------ |
| `h1` |  <h1 class="skeleton"></h1> |
| `h2` |  <h2 class="skeleton"></h2> |
| `h3` |  <h3 class="skeleton"></h3> |
| `h4` |  <h4 class="skeleton"></h4> |
| `h5` |  <h5 class="skeleton"></h5> |
| `h6` |  <h6 class="skeleton"></h6> |

{{< highlight html >}}
<h1 class="skeleton"></h1>
<h2 class="skeleton"></h2>
<h3 class="skeleton"></h3>
<h4 class="skeleton"></h4>
<h5 class="skeleton"></h5>
<h6 class="skeleton"></h6>
{{< /highlight >}}

<br/>

You can adjust the width of the header by applying a size modifier class:
| Width | Modifier Class | Result |
| ------------ | ------------| ------------ |
| Small, 25% | `.skeleton--sm` | <h1 class="skeleton skeleton--sm"></h1> |
| Medium, 50% | `.skeleton--md` | <h1 class="skeleton skeleton--md"></h1> |
| Large, 75% | `.skeleton--lg` | <h1 class="skeleton skeleton--lg"></h1> |
| Full, 100% | `.skeleton--full` | <h1 class="skeleton skeleton--full"></h1> |

{{< highlight html >}}
<h1 class="skeleton skeleton--sm"></h1>
<h1 class="skeleton skeleton--md"></h1>
<h1 class="skeleton skeleton--lg"></h1>
<h1 class="skeleton skeleton--full"></h1>
{{< /highlight >}}

<br />

## Paragraphs
You can create paragraph skeletons by applying the `skeleton` class to the paragraph tag, then including however many span tags you'd like with the `skeleton__line` class within the paragraph:

<div class="block block-4">
  <p class="skeleton">
    <span class="skeleton__line"></span>
    <span class="skeleton__line"></span>
    <span class="skeleton__line"></span>
    <span class="skeleton__line"></span>
  </p>
</div>

{{< highlight html >}}
<div class="block block-4">
  <p class="skeleton">
    <span class="skeleton__line"></span>
    <span class="skeleton__line"></span>
    <span class="skeleton__line"></span>
    <span class="skeleton__line"></span>
  </p>
</div>
{{< /highlight >}}

<div class="message message--info">
  <p>If there is more than one line, the last span tag will always be at 50% width.</p>
</div>

<br />

## Alignment
You can text align the skeleton using alignment modifier classes:

| Alignment | Modifier Class |
| ------------ | ------------|
| Left | `.skeleton--left` |
| Medium, 50% | `.skeleton--right` |
| Large, 75% | `.skeleton--center` |

<div class="block-container mb-4">
  <div class="block block-3 mx-2">
    <p class="skeleton skeleton--left">
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
    </p>
  </div>
  <div class="block block-3 mx-2">
    <p class="skeleton skeleton--center">
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
    </p>
  </div>
  <div class="block block-3 mx-2">
    <p class="skeleton skeleton--right">
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
      <span class="skeleton__line"></span>
    </p>
  </div>
</div>

{{< highlight html >}}
<!-- Left Align -->
<p class="skeleton skeleton--left">
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
</p>

<!-- Center Align -->
<p class="skeleton skeleton--center">
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
</p>

<!-- Right Align -->
<p class="skeleton skeleton--right">
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
  <span class="skeleton__line"></span>
</p>

{{< /highlight >}}

<br />

## Images
You can create an image skeleton by adding the `.skeleton-image` class to an img tag -- do not include the `src` attribute. By default this will apply the image skeleton at 100% height and width of the parent container.

| Size | Modifier Class |
| ------------ | ------------| 
| Small, 50x50 | `.skeleton-image--sm` |
| Medium, 100x100 | `.skeleton-image--md` |
| Large, 200x200 | `.skeleton-image--lg` |
| X-Large, 400x400 | `.skeleton-image--xl` |
| Full, 100% x 100% | `.skeleton-image--full` |

<div class="flex mb-3">
  <img class="skeleton-image skeleton-image--sm mx-3" />
  <img class="skeleton-image skeleton-image--md mx-3" />
  <img class="skeleton-image skeleton-image--lg mx-3" />
  <img class="skeleton-image skeleton-image--xl mx-3" />
</div>

{{< highlight html >}}
<img class="skeleton-image skeleton-image--md" />
<img class="skeleton-image skeleton-image--sm" />
<img class="skeleton-image skeleton-image--lg" />
<img class="skeleton-image skeleton-image--xl" />
{{< /highlight >}}

<br />

You can also do different shapes using shape modifier classes:
| Shape | Description | Modifier Class |
| ------------ |------------ | ------------| 
| Landscape Rectangle | Sets the width of the image to 100% | `.skeleton-image--landscape` |
| Portrait Rectangle | Sets the height of the image to 100% | `.skeleton-image--portrait` |
| Circle | Sets the border radius to 50% | `.skeleton-image--circle` |

<div class="block-container mb-3">
  <div class="block-4 flex flex--justify-center">
    <img class="skeleton-image skeleton-image--lg skeleton-image--landscape" />
  </div>
  <div class="block-4 flex flex--justify-center" style="height:250px">
    <img class="skeleton-image skeleton-image--lg skeleton-image--portrait" />
  </div>
  <div class="block-4 flex flex--justify-center">
    <img class="skeleton-image skeleton-image--lg skeleton-image--circle" />
  </div>
</div>

{{< highlight html >}}
<img class="skeleton-image skeleton-image--lg skeleton-image--landscape" />
<img class="skeleton-image skeleton-image--lg skeleton-image--portrait" />
<img class="skeleton-image skeleton-image--lg skeleton-image--circle" />
{{< /highlight >}}

<br />

## Animation
You can include a `span.skeleton__animation` within a header, paragraph, or image to apply an animation to it.
<div class="block block-4">
  <p class="skeleton">
    <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
        <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
    <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
    <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
  </p>
</div>

{{< highlight html >}}
<div class="block block-4">
  <p class="skeleton">
    <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
        <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
    <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
    <span class="skeleton__line">
      <span class="skeleton__animation"></span>
    </span>
  </p>
</div>
{{< /highlight >}}

<br />

## JavaScript Utility
We've also built in a JavaScript utility to help create skeletons easier. On either a header tag or a paragraph tag, add the `skeleton` class and a `data-lines` attribute with the number of lines you'd like the skeleton to have:

<div class="block block-4">
  <h2 class="skeleton skeleton--md" data-lines="2"></h2>
  <p class="skeleton" data-lines="7"></p>
</div>

{{< highlight html >}}
<h2 class="skeleton skeleton--md" data-lines="2"></h2>
  <p class="skeleton" data-lines="7"></p>
</div>
{{< /highlight >}}

<br />

You can also give the skeleton animation by adding the `data-animation` attribute and setting it to `true`:
<div class="block block-4">
  <h2 class="skeleton skeleton--md" data-animation="true"></h2>
  <p class="skeleton" data-lines="7" data-animation="true"></p>
</div>

{{< highlight html >}}

<h2 class="skeleton skeleton--md" data-animation="true"></h2>
<p class="skeleton" data-lines="7" data-animation="true"></p>

{{< /highlight >}}

<br />

## Examples
<article>
  <h1 class="skeleton skeleton--md"></h1>
  <p class="skeleton" data-lines="4"></p>
  <p class="skeleton" data-lines="3"></p>
  <p class="skeleton" data-lines="7"></p>
</article>


<div class="block-container my-4">
  <div class="block block-4">
    <div class="card mx-2">
      <img class="skeleton-image skeleton-image--lg skeleton-image--landscape mb-3" />
      <h1 class="skeleton skeleton--md"></h1>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
    <div class="block block-4">
    <div class="card mx-2">
      <img class="skeleton-image skeleton-image--lg skeleton-image--landscape mb-3" />
      <h1 class="skeleton skeleton--md"></h1>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
    <div class="block block-4">
    <div class="card mx-2">
      <img class="skeleton-image skeleton-image--lg skeleton-image--landscape mb-3" />
      <h1 class="skeleton skeleton--md"></h1>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div id="default-modal" class="modal modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header flex flex--justify-between">
       <h2 class="skeleton skeleton--sm"></h2>
       <button class="button modal__close" data-modal="default-modal">Close <i class="pi-times"></i></button>
     </div>
     <div class="modal__content">
       <h2 class="skeleton skeleton--md" data-animation="true"></h2>
       <p class="skeleton" data-lines="4" data-animation="true"></p>
       <p class="skeleton" data-lines="6" data-animation="true"></p>
       <p class="skeleton" data-lines="3" data-animation="true"></p>
     </div>
   </div>
 </div>
 <div class="block-container mobile-up-1 tablet-up-4 desktop-up-5 blocks px-2 mb-3">
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="default-modal">Trigger Modal</button>
     </div>
 </div>
