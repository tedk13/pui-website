---
title: Pez
date: 2018-07-20T12:59:15-04:00
---
<div class="message message--warning mb-4" data-header="">
  <p class="mt-0"><i class="pi-warning text-orange"></i> NOTE: The Pez component is depricated as of Version <span class="pill background-white text-navy">1.1.22</span></p>
</div>

To see how to create Pez in later versions of Platform UI, checkout the examples in the [Pills Component](/section-components.html#components-pill-examples) section.

Pez represent square and rectangular rounded labels throughout the platform.
A Pez can support color by adding a text or background modifier.

Pez were created to handle a specific need in our system for georaphic states. States and Products are used as buttons, so they are here as well.

For accessibility purposes, add `aria-label="{state name}"`.

Pez have 3 states, default, disabled, and pressed.

<div class="message message--info" data-header="Quick Tip">
 <p>Look at <a href="section-components.html#components-pill">pills</a> a similar style and inspiration.</p>
</div>

<div class="mb-4">
  <p class="mb-1 text--bold">Default Display</p>
  <div class="pez" aria-label="Alaska">AK</div>
  <div class="pez disabled" aria-label="Washington DC">DC</div>
  <div class="pez pressed" aria-label="Georgia">GA</div>
</div>
<h4 class="text--bold mb-3">Other Examples:</h4>
<div class="block-container blocks cards mb-4 p-2">
  <p class="block block-12 mb-1 mx-2 text-white background-navy text--bold">Choose your toppings:</p>
  <div class="block tablet-up-6">
    <div class="card">
      <p class="mb-1">Meat</p>
      <div class="pez m-1" aria-label="Pepperoni">Pepperoni</div>
      <div class="pez m-1" aria-label="Sausage">Sausage</div>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Ham">Ham</div>
      <div class="pez m-1" aria-label="Buffalo Chicken">Buffalo Chicken</div>
    </div>
  </div>
  <div class="block tablet-up-6">
    <div class="card">
      <p class="mb-1">Veggies and Fruit</p>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Onions">Onions</div>
      <div class="pez m-1" aria-label="Mushrooms">Mushrooms</div>
      <div class="pez disabled m-2" aria-label="Anchovies">Anchovies</div>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Black Olives">Black Olives</div>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Tomatoes">Tomatoes</div>
      <div class="pez m-1" aria-label="Peppers">Peppers</div>
      <div class="pez m-1" aria-label="Sun-dried Tomatoes">Sun-dried Tomatoes</div>
    </div>
  </div>
</div>
<div class="block-container blocks p-2">
  <div class="block tablet-up-4">
    <p class="text-bold text-navy mb-1 border-b">Tags:</p>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Healthcare">Healthcare</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Personal Health">Personal Health</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Exercise">Exercise</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Weight Loss">Weight Loss</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Diet">Diet</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Healthy Eating">Healthy Eating</div>    
  </div>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="mb-4">
  <p class="mb-1 text--bold">Default Display</p>
  <div class="pez" aria-label="Alaska">AK</div>
  <div class="pez disabled" aria-label="Washington DC">DC</div>
  <div class="pez pressed" aria-label="Georgia">GA</div>
</div>
<h4 class="text--bold mb-3">Other Examples:</h4>
<div class="block-container blocks cards mb-4 p-2">
  <p class="block block-12 mb-1 mx-2 text-white background-navy text--bold">Choose your toppings:</p>
  <div class="block tablet-up-6">
    <div class="card">
      <p class="mb-1">Meat</p>
      <div class="pez m-1" aria-label="Pepperoni">Pepperoni</div>
      <div class="pez m-1" aria-label="Sausage">Sausage</div>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Ham">Ham</div>
      <div class="pez m-1" aria-label="Buffalo Chicken">Buffalo Chicken</div>
    </div>
  </div>
  <div class="block tablet-up-6">
    <div class="card">
      <p class="mb-1">Veggies and Fruit</p>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Onions">Onions</div>
      <div class="pez m-1" aria-label="Mushrooms">Mushrooms</div>
      <div class="pez disabled m-2" aria-label="Anchovies">Anchovies</div>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Black Olives">Black Olives</div>
      <div class="pez m-1 background-olive text-dark border--color-olive" aria-label="Tomatoes">Tomatoes</div>
      <div class="pez m-1" aria-label="Peppers">Peppers</div>
      <div class="pez m-1" aria-label="Sun-dried Tomatoes">Sun-dried Tomatoes</div>
    </div>
  </div>
</div>
<div class="block-container blocks p-2">
  <div class="block tablet-up-4">
    <p class="text-bold text-navy mb-1 border-b">Tags:</p>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Healthcare">Healthcare</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Personal Health">Personal Health</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Exercise">Exercise</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Weight Loss">Weight Loss</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Diet">Diet</div>
    <div class="pez background-lightblue text-navy px-1 py-1" aria-label="Healthy Eating">Healthy Eating</div>    
  </div>
</div>
{{< /highlight >}}
</div>
