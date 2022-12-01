---
layout: ../../../layouts/single.astro
title: Third Parties
weight: 4
---

There are third party choices we've incorporated into Platform UI which are part of the compiled version only. If you choose to build Platform UI from source, you'll need to consider the following.

{{% anchor name="Normalize" %}}

The nature of browsers and their vendors often require a reset to normalize behavious for standard HTML tags, so we include <a href="https://necolas.github.io/normalize.css/" rel="external">Normalize.css</a> as part of Platform UI's build process.

**If you're using Platform UI in your own build process, you'll need to include Normalize.css.**

{{% anchor name="PostCSS" %}}

In the same spirit as Normalize.css, we also leverage <a href="https://github.com/postcss/postcss" rel="external">Postcss</a> and <a href="https://github.com/postcss/autoprefixer" rel="external">Autoprefixer</a> to reduce browser inconsistencies. 

**If you're using Platform UI in you're own build process, you'll need to include Postcss. Likewise, if you prefer greater browser support, you will have to build Platform UI from source.**

Our current browser support settings:

{{< code-markup >}}
{{< highlight js >}}
"browserslist": [
	"last 2 version",
	"> 2%"
]
{{< /highlight >}}
{{< /code-markup >}}
