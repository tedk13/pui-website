---
title: Errors
date: 2018-07-20T12:59:15-04:00
---
Throughout the Platform, we leverage a concept of `positive`, `Negative`, and `Neutral` for success, errors, and no change, or neutral states.
These classes affect Pills and Text only.
If you come across a scenario/combination where these are not applied, or not applied as expected, contact the Platform UI team.
Styleguide Errors


## Errors Text

<p class="text-positive">Positive</p>
<p class="text-negative">Negative</p>
<p class="text-neutral">Neutral</p>

<div class="mt-3 mb-4">
{{< highlight html >}}
<p class="text-positive">Positive</p>
<p class="text-negative">Negative</p>
<p class="text-neutral">Neutral</p>
{{< /highlight >}}
</div>


## Error Pills

Throughout the Platform, we leverage a concept of `positive`, `Negative`, and `Neutral` for success, errors, and no change, or neutral states.

<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty neutral"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot neutral"></div>
<br><br>
<div class="pill positive">
  Positive
</div>
<div class="pill negative">
  Negative
</div>
<div class="pill neutral">
  Neutral
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty neutral"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot neutral"></div>
<br><br>
<div class="pill positive">
  Positive
</div>
<div class="pill negative">
  Negative
</div>
<div class="pill neutral">
  Neutral
</div>
{{< /highlight >}}
</div>