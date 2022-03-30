---
title: Blockquote
date: 2018-07-20T12:59:15-04:00
---

Our blockquotes are similar to the browser default. We added a left border, which is a light gray by default. To attribute someone in the blockquote, you can do so by adding a `<footer>` followed by their name. If you're referencing a specific creative work, be sure to include that inside a `<cite>`.

<div class="block-container">
    <blockquote class="block laptop-up-6">
        <p class="skeleton" data-lines="3"></p>
        <footer>—Ernest Hemingway, <cite>The Sun Also Rises</cite></footer>
    </blockquote>
</div>

<div class="mt-3 mb-4">
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
</div>

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
  data-callout-header="quick tip" 
  data-callout-radius="0 3rem 0 3rem"
  data-gradient-direction="30deg"
  data-gradient-start="midnightblue 20%, purple 40%"
  data-gradient-stop="indigo"
  data-gradient-fallback="indigo">
  The default color of the left border is light gray, but you can change it using a border utility!
</div>