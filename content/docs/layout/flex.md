---
title: Flex
date: 2018-07-20T12:59:15-04:00
---
Flexbox utilities to use when `display: flex` is being used.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex</code></td>
      <td data-label="CSS Attribute"><code>display: flex;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex-inline</code></td>
      <td data-label="CSS Attribute"><code>display: inline-flex</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-center</code></td>
      <td data-label="CSS Attribute"><code>align-items: center;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-start</code></td>
      <td data-label="CSS Attribute"><code>align-items: flex-start;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-end</code></td>
      <td data-label="CSS Attribute"><code>align-items: flex-end;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-baseline</code></td>
      <td data-label="CSS Attribute"><code>align-items: baseline;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-center</code></td>
      <td data-label="CSS Attribute"><code>align-self: center;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-start</code></td>
      <td data-label="CSS Attribute"><code>align-self: flex-start;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-end</code></td>
      <td data-label="CSS Attribute"><code>align-self: flex-end;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-baseline</code></td>
      <td data-label="CSS Attribute"><code>align-self: baseline;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-center</code></td>
      <td data-label="CSS Attribute"><code>justify-content: center;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-start</code></td>
      <td data-label="CSS Attribute"><code>justify-content: flex-start;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-end</code></td>
      <td data-label="CSS Attribute"><code>justify-content: flex-end;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-between</code></td>
      <td data-label="CSS Attribute"><code>justify-content: space-between;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-around</code></td>
      <td data-label="CSS Attribute"><code>justify-content: space-around;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--column</code></td>
      <td data-label="CSS Attribute"><code>flex-direction: column;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--column-reverse</code></td>
      <td data-label="CSS Attribute"><code>flex-direction: column-reverse;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--row-reverse</code></td>
      <td data-label="CSS Attribute"><code>flex-direction: row-reverse;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--grow</code></td>
      <td data-label="CSS Attribute"><code>flex-grow: 1;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--wrap</code></td>
      <td data-label="CSS Attribute"><code>flex-wrap: wrap;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--nowrap</code></td>
      <td data-label="CSS Attribute"><code>flex-wrap: nowrap;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--center-content</code></td>
      <td data-label="CSS Attribute"><code>display: flex; align-items: center; justify-content: center;</code></td>
    </tr>
  </tbody>
</table>

## Flex Grail

<div class="flex flex--column">
  <section class="p-3 background-navy flex--center-content">
    <h1 class="text-white">Header</h1>
  </section>
  <main class="block-container flex--grow">
    <aside class="block lg-tablet-up-2 background-med-blue flex--center-content">
      <h1 class="text-white">Aside</h1>
    </aside>
    <section class="block lg-tablet-up-8 flex--center-content py-5">
      <h1 class="text-base">Main Content</h1>
    </section>
    <aside class="block lg-tablet-up-2 background-med-blue flex--center-content">
      <h1 class="text-white">Aside</h1>
    </aside>
  </main>
  <footer class="p-3 background-light flex--center-content">
    <h1 class="text-white">Footer</h1>
  </footer>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<body class="flex flex--column">
  <header class="p-3 background-navy flex--center-content">
    <h1 class="text-white">Header</h1>
  </header>
  <main class="block-container flex--grow">
    <aside class="block lg-tablet-up-2 background-med-blue flex--center-content">
      <h1 class="text-white">Aside</h1>
    </aside>
    <section class="block lg-tablet-up-8 flex--center-content py-5">
      <h1 class="text-base">Main Content</h1>
    </section>
    <aside class="block lg-tablet-up-2 background-med-blue flex--center-content">
      <h1 class="text-white">Aside</h1>
    </aside>
  </main>
  <footer class="p-3 background-light flex--center-content">
    <h1 class="text-white">Footer</h1>
  </footer>
</body>
{{< /highlight >}}
</div>