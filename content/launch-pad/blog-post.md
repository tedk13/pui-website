---
title: Blog Post
layout: example
summary: Full page layout example using navigation, hero, cards, buttons, accordions, modals, and drawers.
skellyCSS: true
---
<style>
    body {
        --purple: hsla(256, 46%, 25%, 1);
    }
    footer {
        position: sticky;
        top: 100vh;
    }

    .background--purple {
        background-color: var(--purple);
    }
    .background-hover--purple:hover {
        background-color: var(--purple)!important;
        transition: .2s;
    }

    .border--color-purple {
        border-color: var(--purple)!important;
    }

    .text--purple {
        color: var(--purple)!important;
    }

    .text-hover--purple:hover {
        color: var(--purple)!important;
    }
</style>

<header class="site-menu-wrapper p-2 background--dark">
    <div class="block-container flex--justify-center w-100">
        <div class="block block-10 lg-tablet-up-8 flex flex--justify-between">
            <a href="/launch-pad/blog-example" class="site-logo text--size-lg text--white">
                PUI Blog!
            </a>
            <button class="site-menu-mobile-action text--white">
                <span class="sr-only">Toggle Navigation</span>
                <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
            </button>
            <nav class="site-menu text--white">
                <a href="/launch-pad/blog-example" class="site-menu__item">About</a>
                <a href="/launch-pad/blog-post" class="site-menu__item">Posts</a>
                <a href="/launch-pad/blog-example" class="site-menu__item">Resume</a>
            </nav>
        </div>
    </div>
</header>

<main class="block-container flex--justify-center mb-6">
    <section 
        class="block linear-gradient background-image pos-rel p-3 mb-6"
        data-background-image="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098__340.jpg"
        data-background-position="center center"
        data-background-size="cover"
        data-background-repeat="no-repeat"
        data-gradient-direction="to right"
        data-gradient-start="var(--dark)"
        data-gradient-stop="transparent"
        data-gradient-fallback="var(--dark)">
        <div class="block-container w-100 flex--justify-center">
            <div class="block-10 lg-tablet-up-8">
                <div class="py-6 block-container">
                    <div class="block lg-tablet-up-6">
                        <h1 class="text--white">My First Blog</h1>
                        <p class="text--white mb-0">Welcome to my new blog. I hope you like it.</p>
                    </div>            
                </div>
            </div>
        </div>
    </section>
    <section class="block block-10 lg-tablet-up-8 mb-6">
        <h2 class="mb-3">Introduction</h2>
        <p class="skeleton" data-lines="3"></p>
        <p class="skeleton" data-lines="2"></p>
        <blockquote>
            <p class="skeleton" data-lines="2"></p>
        </blockquote>
        <p class="skeleton" data-lines="2"></p>
        <p class="skeleton" data-lines="3"></p>
        <p class="skeleton" data-lines="2"></p>
    </section>
    <section class="block block-10 lg-tablet-up-8">
        <h2>Read More</h2>
        <div class="mb-3">
            <button class="button background--white background-hover--purple text--purple text-hover--white border--color-purple mr-2">Space</button>
            <button class="button background--white background-hover--purple text--purple text-hover--white border--color-purple mx-2">Time</button>
            <button class="button background--white background-hover--purple text--purple text-hover--white border--color-purple ml-2">Relativity</button>
        </div>
        <div class="block-container blocks lg-tablet-up-2 p-3 mb-3 cards w-100">
            <div class="block">
                <div class="p-0 block-container flex--align-start">
                    <div class="block tablet-up-4 ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="block tablet-up-8 card__content px-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">My Second Blog</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-2 text--size-sm">Published: January 12, 2022</p>
                            <a class="button hover-scale background--purple background-hover--white text--white text-hover--purple border--color-purple" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="p-0 block-container flex--align-start">
                    <div class="block tablet-up-4 ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="block tablet-up-8 card__content px-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">This Blog Thing Is Getting Easy</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-2 text--size-sm">Published: January 18, 2022</p>
                            <a class="button hover-scale background--purple background-hover--white text--white text-hover--purple border--color-purple" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="p-0 block-container flex--align-start">
                    <div class="block tablet-up-4 ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="block tablet-up-8 card__content px-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">I'm Getting The Hang of This</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-2 text--size-sm">Published: January 23, 2022</p>
                            <a class="button hover-scale background--purple background-hover--white text--white text-hover--purple border--color-purple" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer class="background--dark p-4">
    <div class="text--center text--white">
        <p class="m-0">Copyright Platform UI 2022</p>
    </div>
</footer>
