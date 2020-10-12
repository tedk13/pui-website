---
title: Pez
date: 2018-07-20T12:59:15-04:00
---
Pez represent square and rectangular rounded labels throughout the platform.
A Pez can support color by adding a text or background modifier as do Pills.

Pez were created to handle a specific need in our system for georaphic states. States and Products are used as buttons, so they are here as well.

For accessibility purposes, add `aria-label="{state name}"`.

Pez have 3 states, default, disabled, and pressed


 <div class="pez" aria-label="Alaska">
   AK
 </div>
 <div class="pez disabled" aria-label="Washington DC">
   DC
 </div>
 <div class="pez pressed" aria-label="Georgia">
   GA
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div class="pez" aria-label="Alaska">
   AK
 </div>
 <div class="pez disabled" aria-label="Washington DC">
   DC
 </div>
 <div class="pez pressed" aria-label="Georgia">
   GA
 </div>
 {{< /highlight >}}
 </div>

## Corner label

Pez can also have corner labels. These were designed to be used with the platform icon `pi-check`.

<button class="pez" aria-label="Alaska">
    AK
   <div class="pez__check-wrapper">
     <i class="pi-check" aria-hidden="true"></i>
   </div>
 </button>
 <button class="pez disabled" aria-label="Washington DC">
   DC
   <div class="pez__check-wrapper">
     <i class="pi-check" aria-hidden="true"></i>
   </div>
 </button>
 <button class="pez pressed" aria-label="Georgia">
   GA
   <div class="pez__check-wrapper">
     <i class="pi-check" aria-hidden="true"></i>
   </div>
 </button>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <button class="pez" aria-label="Alaska">
    AK
   <div class="pez__check-wrapper">
     <i class="pi-check" aria-hidden="true"></i>
   </div>
 </button>
 <button class="pez disabled" aria-label="Washington DC">
   DC
   <div class="pez__check-wrapper">
     <i class="pi-check" aria-hidden="true"></i>
   </div>
 </button>
 <button class="pez pressed" aria-label="Georgia">
   GA
   <div class="pez__check-wrapper">
     <i class="pi-check" aria-hidden="true"></i>
   </div>
 </button>
{{< /highlight >}}
</div>
