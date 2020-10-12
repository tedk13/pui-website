---
title: Pill
date: 2018-07-20T12:59:15-04:00
---

Pills represent rounded labels throughout the platform.
A pill can support color by adding a text or background modifier.
Pills have no hover state.


## Default

A pill can also have a label of it's own.
A slight variation of a pill is a straight circle with a very small amount of content.

<div class="pill">
  Active
</div>
<div class="pill text-white background-navy">
  Active
</div>
<div class="pill text-white background-skyblue">
  Active
</div>
<div class="pill text-white background-salmon">
  Active
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pill">
  Active
</div>
<div class="pill text-white background-navy">
  Active
</div>
<div class="pill text-white background-skyblue">
  Active
</div>
<div class="pill text-white background-salmon">
  Active
</div>
{{< /highlight >}}
</div>


## Split

<div class="pill pill--split">
  <div class="pill__label">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text-white background-peach">
  <div class="pill__label text-brown">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text-white background-navy">
  <div class="pill__content background-salmon">Left</div>
  <div class="pill__content background-olive">Middle</div>
  <div class="pill__content background-skyblue">Right</div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pill pill--split">
  <div class="pill__label">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text-white background-peach">
  <div class="pill__label text-brown">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text-white background-navy">
  <div class="pill__content background-salmon">Left</div>
  <div class="pill__content background-olive">Middle</div>
  <div class="pill__content background-skyblue">Right</div>
</div>
{{< /highlight >}}
</div>


## Close

<div class="pill">
 <div class="pill__close"><i class="pi-times-solid text-salmon"></i></div>
  Active
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pill">
 <div class="pill__close"><i class="pi-times-solid text-salmon"></i></div>
  Active
</div>
{{< /highlight >}}
</div>


## Circle
Pills can be circular. Sizes above `dot`, can have content. They come in 5 sizes, `dot`, `empty`, `pill--circle` (_default_), `pill--circle-medium`, `pill--circle-large`


<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle">
  33
</div>
<div class="pill pill--circle text-white background-salmon">
  33
</div>
<div class="pill pill--circle-medium">
  33
</div>
<div class="pill pill--circle-medium text-white background-salmon">
  33
</div>
<div class="pill pill--circle-large">
  33
</div>
<div class="pill pill--circle-large text-white background-salmon">
  33
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle">
  33
</div>
<div class="pill pill--circle text-white background-salmon">
  33
</div>
<div class="pill pill--circle-medium">
  33
</div>
<div class="pill pill--circle-medium text-white background-salmon">
  33
</div>
<div class="pill pill--circle-large">
  33
</div>
<div class="pill pill--circle-large text-white background-salmon">
  33
</div>
{{< /highlight >}}
</div>
