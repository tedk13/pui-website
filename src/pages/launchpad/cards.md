---
layout: ../../layouts/single.astro
title: Cards
skellyCSS: true
---

Below are some examples of different cards you can build using Platform UI.

## [Dark cards](#dark-cards)

<div class="block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 blocks p-2 cards" style="--skelly-color: var(--light-mid);">
    <div class="block">
        <div class="card p-0 rounded-3">
            <div class="flex flex--column h-100">
                <img class="flex--grow" src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" alt=""/>
                <div class="background--black p-3">
                    <h2 class="text--size-md text--light-mid flex flex--column">
                        <span class="text--size-sm text--light">New Feature</span>
                        Feature Name
                    </h2>
                    <p class="skeleton" data-lines="4" role="presentation"></p>
                    <a href="#" class="text--skyblue border--color-transparent text-hover--lightblue text-underline--hover">Read More</a>
                </div>
            </div>
        </div>
    </div>
    <div class="block">
        <div class="card p-0 rounded-3">
            <div class="flex flex--column h-100">
                <img class="flex--grow" src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg" alt=""/>
                <div class="background--black p-3">
                    <h2 class="text--size-md text--light-mid flex flex--column">
                        <span class="text--size-sm text--light">New Feature</span>
                        Feature Name
                    </h2>
                    <p class="skeleton" data-lines="4" role="presentation"></p>
                    <a href="#" class="text--skyblue border--color-transparent text-hover--lightblue text-underline--hover">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="my-4">
    <div class="block-container tablet-up-2 blocks p-2 cards">
        <div class="block">
            <div class="card rounded-3 p-3 background--black">
                <div class="flex flex--justify-between border-b p-2 mb-3">
                    <h2 class="text--size-md text--light-mid">Notifications</h2>
                    <button class="button--plain text--light flex flex--align-center">
                        <i class="pi-users mr-1"></i>
                        Filters
                    </button>
                </div>
                <div class="flex flex--align-start flex--justify-between">
                    <div class="flex flex--align-start pr-3">
                        <div class="pos-rel pb-2 pr-2">
                            <div class="pill--circle-large background--base"></div>
                            <div class="pill--circle background--positive pos-abs pin-bottom pin-right border border--color-black border--width-3 flex--center-content">
                                <i class="pi-speech-bubble text--white text--size-sm"></i>
                            </div>
                        </div>
                        <div class="flex flex--column flex--grow ml-2">
                            <p class="text--light-mid">
                                <strong>Aliquam</strong> volutpat nisi at ligula blandit, vitae pulvinar mauris consectetur.
                            </p>
                            <p class="text--light">
                                Nam et tempus ipsum, eget tincidunt leo. Nunc at ullamcorper sem, ac ultrices erat.
                            </p>
                        </div>
                    </div>
                    <button class="button--plain text--size-2xs text--light flex p-2">
                        <i class="pi-circle-solid"></i>
                        <i class="pi-circle-solid px-1"></i>
                        <i class="pi-circle-solid"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

## [Light cards](#light-cards)

<section class="my-4 background--lavender px-3">
    <div class="block-container tablet-up-2 blocks p-2 cards">
        <div class="block rounded-3">
            <div class="rounded-3 p-0 pos-rel overflow-hidden background--light-purple">
                <div class="pos-rel pt-4">
                    <div class="background--white rounded-tl--3 rounded-tr--3">
                        <div class="pill--circle-large background--purple border border--color-white border--width-2 pos-abs pin-top pin-left mt-2 ml-2 p-2 flex--ccenter-content">
                            <img src="/images/platform-ui.svg" class="h-100" alt=" Platform UI"/>
                        </div>
                        <div class="pt-3 px-2 pb-2">
                            <h2 class="text--size-md mt-2 text--black">
                                <strong>Platform UI</strong>
                            </h2>
                            <p class="text--black">
                                Platform UI is built to give designers and developers more control over their UIs. It's a powerful and simple system with just enough utilities to make your project amazing.
                            </p>
                            <div class="flex">
                                <div class="flex flex--align-center text--base mr-3">
                                    <i class="pi-user-solid text--size-sm mr-1"></i>
                                    <span>41K</span>
                                </div>
                                <div class="flex flex--align-center text--base ml-3">
                                    <i class="pi-download-cloud text--size-sm mr-1"></i>
                                    <span>57K</span>
                                </div>
                            </div>
                            <div class="mt-3 flex">
                                <div class="pill mr-3">
                                    <i class="pi-universal-access mr-1"></i>
                                    Accessible
                                </div>
                                <div class="pill mr-3">
                                    <i class="pi-users mr-1"></i>
                                    User Friendly
                                </div>
                                <div class="pill mr-3">
                                    <i class="pi-share mr-1"></i>
                                    Share
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="my-4">
    <div class="block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 blocks p-2 cards">
        <div class="block">
            <div class="card">
                <div class="flex flex--column h-100">
                    <img class="card__image flex--grow" src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" alt=""/>
                    <div>
                        <h2 class="text--size-md flex flex--column">
                            <span class="text--size-sm">New Feature</span>
                            Feature Name
                        </h2>
                        <p class="skeleton" data-lines="4" role="presentation"></p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="card">
                <div class="flex flex--column h-100">
                    <img class="card__image flex--grow" src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg" alt=""/>
                    <div>
                        <h2 class="text--size-md flex flex--column">
                            <span class="text--size-sm">New Feature</span>
                            Feature Name
                        </h2>
                        <p class="skeleton" data-lines="4" role="presentation"></p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="my-4">
    <div class="block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 blocks p-2 cards">
        <div class="block">
            <div class="card rounded-3 p-2">
                <div class="flex flex--column h-100">
                    <img class="rounded-2 flex--grow" src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" alt=""/>
                    <div class="py-3">
                        <h2 class="text--size-md flex flex--column">
                            <span class="text--size-sm">New Feature</span>
                            Feature Name
                        </h2>
                        <p class="skeleton" data-lines="4" role="presentation"></p>
                        <a href="#" >Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="card rounded-3 p-2">
                <div class="flex flex--column h-100">
                    <img class="rounded-2 flex--grow" src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg" alt=""/>
                    <div class="py-3">
                        <h2 class="text--size-md flex flex--column">
                            <span class="text--size-sm">New Feature</span>
                            Feature Name
                        </h2>
                        <p class="skeleton" data-lines="4" role="presentation"></p>
                        <a href="#" >Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="my-4">
    <div class="block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 blocks p-2 cards">
        <div class="block">
            <div class="card rounded-3 p-0">
                <div class="flex flex--column h-100">
                    <img class="flex--grow" src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" alt=""/>
                    <div class="flex flex--align-start p-3">
                        <div class="pill--circle-large background--base"></div>
                        <div class="flex--grow ml-2">
                            <p class="skeleton" data-lines="3" role="presentation"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="card rounded-3 p-0">
                <div class="flex flex--column h-100">
                    <img class="flex--grow" src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg" alt=""/>
                    <div class="flex flex--align-start p-3">
                        <div class="pill--circle-large background--base"></div>
                        <div class="flex--grow ml-2">
                            <p class="skeleton" data-lines="3" role="presentation"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="my-4">
    <div class="block-container tablet-up-2 blocks p-2 cards">
        <div class="block">
            <div class="card rounded-3 p-3">
                <div class="flex flex--align-center flex--justify-between">
                    <div class="flex flex--align-start">
                        <div class="pill--circle-large background--base"></div>
                        <div class="flex flex--column flex--grow ml-2">
                            <span>Joan McGraw</span>
                            <strong class="text--navy text--size-sm">joan.mcgraw@company.com</strong>
                        </div>
                    </div>
                    <a href="#" class="button button--med-blue">Contact</a>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="card rounded-3 p-3">
                <div class="flex flex--align-center flex--justify-between">
                    <div class="flex flex--align-start">
                        <div class="pill--circle-large background--base"></div>
                        <div class="flex flex--column flex--grow ml-2">
                            <span>Peter Jacobs</span>
                            <strong class="text--navy text--size-sm">peter.jacobs@company.com</strong>
                        </div>
                    </div>
                    <a href="#" class="button button--med-blue">Contact</a>
                </div>
            </div>
        </div>
    </div>
</section>
