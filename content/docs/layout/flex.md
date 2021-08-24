---
title: Flex
date: 2018-07-20T12:59:15-04:00
---
Flexbox utilities to use when `display: flex` is being used.

| Class Name                  | CSS Attribute                                                  |
| --------------------------- | -------------------------------------------------------------- |
| `flex`                      | `display: flex;`                                               |
| `flex-inline`               | `display: inline-flex`                                         |
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