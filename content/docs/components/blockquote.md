---
title: Blockquotes
skellyCSS: true
---

{{% anchor name="blockquote" %}}

Similar to the browser default, we added a left border which can be colored using <a href="/docs/utilities/borders/">border color utilities</a>.

To attribute someone in the blockquote, add using `<footer>`. If you're referencing a specific creative work, wrap it in a `<cite>` tag.

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
        <cite>
        <!-- Cite a specific work -->
        </cite>
    </footer>
</blockquote>
{{< /highlight >}} 
{{< /code-markup >}}

