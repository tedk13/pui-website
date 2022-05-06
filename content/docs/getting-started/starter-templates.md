---
layout: single
title: Starter Templates
weight: 3
---

Sometimes you just need that basic structure to get you going! Here are a couple of quick-start templates.

{{% anchor name="basic" %}}

{{< code-markup >}}
{{< highlight html >}}
<!doctype html>
<html lang="en">
  <head>
    <title>We're using Platform UI!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="preconnect" href="https://unpkg.com" crossorigin>
    <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>

  </head>
  <body>
    <h1>So cool!</h1>
    <!-- Website things... -->
    <script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
  </body>
</html>
{{< /highlight >}}
{{< /code-markup >}}
 
Looking for a little more to get going? Check out our [Launchpad](/launchpad/templates/)!

{{% anchor name="Holy grail" %}}

{{< code-markup >}}
{{< highlight html >}}
<!doctype html>
<html lang="en">

<head>
  <title>Holy Grail layout | Platform UI!</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- load fonts -->		
  <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css">
</head>

<body class="flex flex--column">
  <header class="py-6 px-3">
    <h1>Header</h1>
  </header>
  <main class="block-container flex--grow">
    <aside class="block lg-tablet-up-2">
      <h1>Side Menu</h1>
    </aside>
    <section class="block lg-tablet-up-8 p-3">
      <h1 class="text--base">Main Content</h1>
    </section>
    <aside class="block lg-tablet-up-2">
      <h1>Aside</h1>
    </aside>
  </main>
  <footer class="py-6 px-3">
    <h1>Footer</h1>
  </footer>
</body>
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js"></script>

</html>
{{< /highlight >}}
{{< /code-markup >}}
 