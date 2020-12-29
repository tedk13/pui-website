---
title: Transition
date: 2018-07-20T12:59:15-04:00
---

Using the `transition` class adds `transition: .2s;` to an element. You could use this to make specific hover effects by toggling a class.

Here are some working examples of how you could use transition with other platform-ui components! Try them out below! 

Add the `transition` class and toggle the class `border--color-{color}` to change the border-color on a `card` via click.
<div class="my-4">
  <div class="block-container">
    <div class="block block-4">
      <div class="card transition-card transition">
        <div class="card__header">
          <div class="card__group">
            <i class="pi-quill"></i>
            <div class="card__title">Card Header</div>
          </div>
        </div>
        Click anywhere inside the card!
      </div>
    </div>
  </div>
</div>

Add the `transition` class and toggle the class `p-4` to add padding on a `div` via click.
<div class="my-4 border transition-div-padding transition">
    <h4 class="pl-4 pt-4">Click anywhere inside this div!</h4>
    <p class="skeleton p-4" data-lines="7"></p>
</div>

Add the `transition` class and toggle the class `background-{color}` to change the background-color on a `div` via hover.
<div class="my-4 border transition-div-color transition">
    <h4 class="pl-4 pt-4 text-salmon">Hover over this div!</h4>
    <p class="skeleton p-4" data-lines="7"></p>
</div>