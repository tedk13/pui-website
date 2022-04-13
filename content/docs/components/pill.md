---
title: Pill
---

Pills represent rounded labels throughout the platform.
A pill can support color by adding a text or background modifier.
Pills have no hover state.

A pill can also have a label of it's own.
A slight variation of a pill is a straight circle with a very small amount of content.

{{< code-demo >}}
<div class="pill">
  Active
</div>
<div class="pill text--white background--navy">
  Active
</div>
<div class="pill text--white background--skyblue">
  Active
</div>
<div class="pill text--white background--salmon">
  Active
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pill">
  Active
</div>
<div class="pill text--white background--navy">
  Active
</div>
<div class="pill text--white background--skyblue">
  Active
</div>
<div class="pill text--white background--salmon">
  Active
</div>
{{< /highlight >}}
{{< /code-markup >}}

## Split

{{< code-demo >}}
<div class="pill pill--split">
  <div class="pill__label">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text--white background--peach">
  <div class="pill__label text--brown">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text--white background--navy">
  <div class="pill__content background--salmon">Left</div>
  <div class="pill__content background--olive">Middle</div>
  <div class="pill__content background--skyblue">Right</div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pill pill--split">
  <div class="pill__label">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text--white background--peach">
  <div class="pill__label text--brown">Left:</div>
  <div class="pill__content">Right</div>
</div>
<div class="pill pill--split text--white background--navy">
  <div class="pill__content background--salmon">Left</div>
  <div class="pill__content background--olive">Middle</div>
  <div class="pill__content background--skyblue">Right</div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

## Close

{{< code-demo >}}
<div class="pill">
 <div class="pill__close"><i class="pi-times-solid text--salmon"></i></div>
  Active
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pill">
 <div class="pill__close"><i class="pi-times-solid text--salmon"></i></div>
  Active
</div>
{{< /highlight >}}
{{< /code-markup >}}

## Circle

Pills can be circular.

{{< code-demo >}}
<div class="pill pill--circle">
  33
</div>
<div class="pill pill--circle text--white background--salmon">
  33
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="pill pill--circle">
  33
</div>
<div class="pill pill--circle text--white background--salmon">
  33
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>pill</code>
  </td>
  <td data-label="Modifier">
    <code>pill--circle-empty-dot</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Dot pill intended to remain empty
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>pill</code>
  </td>
  <td data-label="Modifier">
    <code>pill--circle-empty</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Small, circular pill intended to remain empty
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>pill</code>
  </td>
  <td data-label="Modifier">
    <code>pill--circle</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Circular pill intended to contain content
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>pill</code>
  </td>
  <td data-label="Modifier">
    <code>pill--circle-medium</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Medium circular pill intended to contain content
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>pill</code>
  </td>
  <td data-label="Modifier">
    <code>pill--circle-large</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Large circular pill intended to contain content
  </td>
</tr>
{{< /modifiers >}}