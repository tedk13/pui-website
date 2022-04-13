---
title: Blockquote
skellyCSS: true
toc: false
---

Our blockquotes are similar to the browser default. We added a left border, which is a light gray by default. To attribute someone in the blockquote, you can do so by adding a `<footer>` followed by their name. If you're referencing a specific creative work, be sure to include that inside a `<cite>`.

{{< code-demo >}}
<blockquote class="block laptop-up-6">
    <p class="skeleton" data-lines="3"></p>
    <footer>—Ernest Hemingway, <cite>The Sun Also Rises</cite></footer>
</blockquote>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<blockquote>
    <p>
        <!-- Quote goes here! -->
    </p>
    <footer>
        <!-- Quote attribution goes here! -->
        <cite></cite>
    </footer>
</blockquote>
{{< /highlight >}} 
{{< /code-markup >}}

{{< callout tipHeader="Blockquote Tip">}} 

<p>Hey! You can change the default left border by using <a href="/docs/utilities/borders/">border color utilities</a>!</p>

{{< /callout >}}
