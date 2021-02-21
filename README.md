# Twind

> the smallest, fastest, most feature complete Tailwind-in-JS solution in existence [https://twind.dev](https://twind.dev)

[Documentation Site](https://twind.dev/docs)

[![MIT License](https://flat.badgen.net/github/license/tw-in-js/twind)](https://github.com/tw-in-js/twind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/twind?icon=npm&label&cache=10800&color=blue)](https://www.npmjs.com/package/twind)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/twind?icon=packagephobia&label&color=blue&cache=10800)](https://bundlephobia.com/result?p=twind 'gzip bundle size (including dependencies)')
[![Package Size](https://flat.badgen.net/badgesize/brotli/https:/unpkg.com/twind/twind.js?icon=jsdelivr&label&color=blue&cache=10800)](https://unpkg.com/twind/twind.js 'brotli package size (without dependencies)')
[![Documentation](https://flat.badgen.net/badge/icon/Documentation?icon=awesome&label)](https://twind.dev/docs)
[![Github](https://flat.badgen.net/badge/icon/tw-in-js%2Ftwind?icon=github&label)](https://github.com/tw-in-js/twind)
[![Discord](https://flat.badgen.net/badge/icon/discord?icon=discord&label)](https://discord.com/invite/2aP5NkszvD)
[![CI](https://github.com/tw-in-js/twind/workflows/CI/badge.svg)](https://github.com/tw-in-js/twind/actions?query=workflow%3Aci)
[![Coverage Status](https://flat.badgen.net/coveralls/c/github/tw-in-js/twind/main?icon=codecov&label&cache=10800)](https://coveralls.io/github/tw-in-js/twind?branch=main)

- [Twind](#twind)
  - [Introduction](#introduction)
  - [Quickstart](#quickstart)
  - [Features](#features)
  - [About this project](#about-this-project)
    - [Rationale](#rationale)
    - [Challenges](#challenges)
    - [Opportunities](#opportunities)
    - [Motivation](#motivation)
    - [Benchmarks](#benchmarks)
    - [Inspiration](#inspiration)

---

## Introduction

Twind is a small compiler (~12kb) that converts Tailwind classes into actual CSS rules at runtime. You can think of it as Tailwind without the build step or configuraton, with some added features. If you have used Tailwind or other CSS-in-JS solutions, then most of the API should feel very familiar.

The primary purpose of this project is to unify CSS-in-jS and TailwindCSS; embracing the flexibility of CSS-in-JS whilst conforming to the carefully considered constraints of the Tailwind API.

While Twind comes with a few extra features, we've strived to maintain feature parity with Tailwind V2. In other words, if it works in Tailwind, it should work in Twind.

Despite being very flexible and powerful, it was our intention to keep the surface API as minimal as possible. We appreciate that Twind is likely to be used by developers & designers alike, so we try provide sensible defaults out of the box, with little or no need for setup.

## Quickstart

Try a [live and interactive demo 🚀 ](https://esm.codes/#aW1wb3J0IHsgdHcgfSBmcm9tICdodHRwczovL2Nkbi5za3lwYWNrLmRldi90d2luZCcKCmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYAogIDxtYWluIGNsYXNzPSIke3R3YGgtc2NyZWVuIGJnLXB1cnBsZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfSI+CiAgICA8aDEgY2xhc3M9IiR7dHdgZm9udC1ib2xkIHRleHQoY2VudGVyIDV4bCB3aGl0ZSBzbTpncmF5LTgwMCBtZDpwaW5rLTcwMClgfSI+VGhpcyBpcyBUd2luZCE8L2gxPgogIDwvbWFpbj4KYA==)

If you would like to get started with Twind right away then copy paste this code into your favorite sandbox:

```js
import { tw } from 'https://cdn.skypack.dev/twind'

document.body.innerHTML = `
  <main class="${tw`h-screen bg-purple-400 flex items-center justify-center`}">
    <h1 class="${tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}">This is Twind!</h1>
  </main>
`
```

Using the exported {@page Styling with Twind | tw} function results in the compilation of the rules like `bg-black text-white` and `text-xl` exactly as specified in the [Tailwind documentation](https://tailwincss.com/docs). For convenience the default [tailwind theme](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js) is used along with the preflight [base styles](https://tailwindcss.com/docs/preflight) if neither are {@page Setup | provided by the developer}.

For seamless integration with existing Tailwind HTML you can use [twind/shim](https://twind.dev/docs/handbook/getting-started/using-the-shim.html):

Try a [live and interactive demo 🚀](https://esm.codes/#aW1wb3J0ICdodHRwczovL2Nkbi5za3lwYWNrLmRldi90d2luZC9zaGltJwoKZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgCiAgPG1haW4gY2xhc3M9Imgtc2NyZWVuIGJnLXB1cnBsZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIiPgogICAgPGgxIGNsYXNzPSJmb250LWJvbGQgdGV4dChjZW50ZXIgNXhsIHdoaXRlIHNtOmdyYXktODAwIG1kOnBpbmstNzAwKSI+CiAgICAgIFRoaXMgaXMgVHdpbmQhCiAgICA8L2gxPgogIDwvbWFpbj4KYA==)

```html
<script type="module" src="https://cdn.skypack.dev/twind/shim"></script>

<main class="h-screen bg-purple-400 flex items-center justify-center">
  <h1 class="font-bold text(center 5xl white sm:gray-800 md:pink-700)">This is Twind!</h1>
</main>
```

> 📚 For more detailed instruction on usage please [read the documentation](https://twind.dev/docs/handbook/getting-started.html) and check out [this extended demo](https://esm.codes/#aW1wb3J0IHsgdHcsIHNldHVwIH0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvdHdpbmQnCgpzZXR1cCh7CiAgdGhlbWU6IHsKICAgIC8vIEV4YW1wbGUgb2YgZXh0ZW5kaW5nIHRoZSBkZWZhdWx0IHRoZW1lCiAgICBleHRlbmQ6IHsKICAgICAgY29sb3JzOiB7IGhvdHBpbms6ICcjRkYwMEZGJyB9LAogICAgICByb3RhdGU6IHsgNTogJzVkZWcnIH0KICAgIH0KICB9Cn0pCgpjb25zdCBhcHAgPSAoKSA9PiBgCiAgICA8ZGl2IGNsYXNzPScke3N0eWxlLmNvbnRhaW5lcn0nPgogICAgICA8aDEgY2xhc3M9JyR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICB0d2AKICAgICAgICAgIHRleHQod2hpdGUgNHhsKQogICAgICAgICAgZm9udChib2xkIHNhbnMpCiAgICAgICAgICB0cmFuc2l0aW9uLXRyYW5zZm9ybQogICAgICAgICAgaG92ZXI6KAogICAgICAgICAgICByb3RhdGUtNQogICAgICAgICAgICBzY2FsZS0xNTAKICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIKICAgICAgICAgICkKICAgICAgICBgCiAgICAgIH0nPkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGA7CiAgCiAgCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogdHdgCiAgICBoLWZ1bGwKICAgIGJnLWhvdHBpbmsKICAgIGZsZXgKICAgIGl0ZW1zLWNlbnRlcgogICAganVzdGlmeS1jZW50ZXIKICBgCn0KCmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYXBwKCk=)

## Features

> 💡 You can click on each summary to show additional details.

<details><summary>⚡️ No build step</summary>

In fact, there is no dependency on Tailwind or PostCSS at all. This makes it possible to use Twind without a development server.

</details>

<details><summary>🧪 Use plain Tailwind HTML markup</summary>

It might not always be desirable to generate rules by invoking the compiler directly via function call. In this case you may use the [shim module](https://twind.dev/docs/handbook/getting-started/using-the-shim.html) which finds and replaces class names within HTML, generating styles appropriately. This feature can be used together with your favorite framework without any additional setup. This is especially useful during development too; for example when editing classes in the inspector.

```html
<script type="module" src="https://cdn.skypack.dev/twind/shim"></script>

<main class="h-screen bg-purple-400 flex items-center justify-center">
  <h1 class="font-bold text(center 5xl white sm:gray-800 md:pink-700)">This is Twind!</h1>
</main>
```

> 🚀 [live and interactive shim demo](https://esm.codes/#aW1wb3J0ICdodHRwczovL2Nkbi5za3lwYWNrLmRldi90d2luZC9zaGltJwoKZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgCiAgPG1haW4gY2xhc3M9Imgtc2NyZWVuIGJnLXB1cnBsZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIiPgogICAgPGgxIGNsYXNzPSJmb250LWJvbGQgdGV4dChjZW50ZXIgNXhsIHdoaXRlIHNtOmdyYXktODAwIG1kOnBpbmstNzAwKSI+CiAgICAgIFRoaXMgaXMgVHdpbmQhCiAgICA8L2gxPgogIDwvbWFpbj4KYA==)

</details>

<details><summary>💸 Unlimited styles for a low fixed cost of ~12KB</summary>

By shipping the compiler instead of generated css, there is a known and fixed cost associated with styling. No matter how many styles are written or variants are used, the size always remains the same. No need to purge. And, did we mention that every variant is supported out of the box (and then some)?

> For reference, styled-components is ~12.6KB.

</details>

<details><summary>🎯 Extended syntax, variants, and directives</summary>

Twind provides several handy utilities beyond Tailwind. Just to name a few:

- Grouping syntax `class="text(black uppercase)"`
- Custom variants like `siblings`, `sibling`, `children`, and `override`
- Pseudo Element support
- Custom directives like `text-underline`, `font-italic`, and more.

</details>

<details><summary>✈️ Includes a themed Tailwind preflight stylesheet by default</summary>

The [base reset](https://tailwindcss.com/docs/preflight) provided by Tailwind is instantiated with respect to your theme (values like fonts, colors etc.) and injected in the stylesheet during setup. This guarantees more consistent cross browser results out of the box.

> 💡 It is possible to [customize or disable the preflight](https://twind.dev/docs/handbook/advanced/setup.html#preflight).

</details>

<details><summary>🎢 Familiar and Tailwind V2 compliant theming</summary>

Theming is done exactly as [documented by the Tailwind](https://tailwindcss.com/docs/theme) meaning that you can copy paste in your themes from existing projects. The only different here is that there is no need to rebuild anything after changing you theme. Just refresh the page!

> 💡 For further details please read the [theme guide](https://twind.dev/docs/handbook/getting-started/customize-the-theme.html).

</details>

<details><summary>🚓 Escape hatch for writing arbitrary CSS</summary>

The compiler [accepts functions](https://twind.dev/docs/modules/twind.html#inline-plugins) that can return arbitrary CSS-in-JS objects. A convenient escape hatch for all those one-off rules which aren't supported by Tailwind. The `&` keyword allows you to write complex rules (like pseudo elements `&::before` and `&::after`) that are beyond the scope of inline styles without having to add another dependency.

> 💡 We provide a [css helper](https://twind.dev/docs/handbook/getting-started/css-in-js.html) as a convenience for this case.

</details>

<details><summary>🤖 Built in support for conditionally combining rules</summary>

Input is not limited to strings like with HTML classes. The [`tw` function](https://twind.dev/docs/handbook/getting-started/styling-with-twind.html#the-tw-function) accept arrays, objects, template literals, functions, almost everything! The interpreter spec is inspired by and is very similar to [clsx](https://github.com/lukeed/clsx) and offers a much more developer friendly API that handles null values gracefully.

</details>

<details><summary>🌈 Improve readability by breaking rules over multiple lines</summary>

Using template literals as input ([the recommended method](https://twind.dev/docs/modules/twind.html#tw-function)) or even object syntax allows you to break rules over multiple lines, drastically improving readability and maintainability of complex rules.

</details>

<details><summary>❄️ Optional hashing of class names ensuring no conflicts</summary>

By default no hashing is enabled to aid debugging during development. However it is possible to configure Twind to [hash class names](https://twind.dev/docs/handbook/advanced/setup.html#hash) before injecting them into the DOM. This may be useful in production as it can reduce the down-the-wire size of server-side rendered pages and eliminates any chance of class name conflicts with third party styles.

</details>

<details><summary>🚅 Faster than all popular CSS-in-JS libraries</summary>

Given the limited grammar that the compiler has to support there is a much higher chance of finding a rule and its variant in the cache. Because of this along with some other specialist optimizations we are able to compile and inject CSS [faster than most](#benchmarks) CSS-in-JS solutions.

</details>

<details><summary>🔌 Language extension via plugins </summary>

Extending the grammar is trivial and can be achieved by providing functions _inline_ or by generalizing inline rules and defining them during setup under [the _plugins_ key](https://twind.dev/docs/handbook/advanced/plugins.html).

</details>

<details><summary>🎩 Remove all runtime overhead with static extraction</summary>

The compiler itself is not reliant on the DOM at all which makes it an ideal candidate for static extraction which essentially removes all runtime overhead. This is possible during [SSR](https://twind.dev/docs/handbook/advanced/ssr.md) or build time prepass.

</details>

## About this project

A lot of developers ask _"Why not just use Tailwind?"_ and our answer is always that you should use Tailwind, it is an absolutely incredible API with amazing documentation!

> I've wanted to do a CSS-in-JS flavor of Tailwind for over 2 years because of all the neat benefits you get there so it's cool to see projects like this! – [@adamwathan](https://twitter.com/adamwathan/status/1320370489408225282)

However, if like us you are already building your app in JS using a framework like React, Preact, Vue or Svelte, rather than just static HTML, then compiling Tailwind shorthands just in time (like twind does) rather than ahead of time like with Tailwind and PostCSS, comes with a lot of advantages.

### Rationale

This project was started by the authors of two similar libraries – [oceanwind](https://github.com/lukejacksonn/oceanwind) and [beamwind](https://github.com/kenoxa/beamwind) – who chose to collaborate rather than compete with each other in this space.

> Combining efforts has saved us time and resulted in a much more complete and production ready offering.

Furthermore we were able to agree on and coin some standards for certain aspects of the implementation based on our collective learnings; things like parsing input, [grouping syntax](https://twind.dev/docs/handbook/getting-started/thinking-in-groups.html), precedence calculation and [plugin API](https://twind.dev/docs/handbook/advanced/plugins.html).

### Challenges

The core problems we are trying to solve here are as follows:

1. Parsing Input: taking input and normalizing it to create a comprehendable set of Tailwind rules
2. Compiling Rules: taking a set of Tailwind rules and translating them into appropriate CSS rules
3. Injecting Styles: taking CSS rules and generating classes that get append to a stylesheet in the DOM
4. Merging Themes: combining themes which configure and constrain the compiler
5. Custom Plugins: taking functions and using them to extend the capabilities of the compiler

This has to happen in a performant way at runtime, whilst adhering to Tailwind V2 as a language specification. All grammars that exist in Tailwind should be covered by this implementation.

### Opportunities

Simply recreating a tailwind like experience at runtime might seem like a futile exercise but we'd like to believe it opens up the doors to some exciting new possibilities. There is always going to be a tradeoff between compiling at ahead of time and compiling _just in time_, however we are confident the upsides here are significant enough to persue a runtime implementation and the results have been promising so far.

> Note it is still possible to remove all runtime overhead via a prepass either at serve or built time

The flexible nature of a runtime first approach affords us possibilities like:

- Dynamic Theming: generating new themes on the fly without the need to rebuilding anything
- Unlimited Variants: enabling every variant combination by default because unused rules are never generated
- Enhanced Syntax: taking advantage of macros within template literals to create more terse rules
- Error Handling: warning the developer about unknown directives and theme values
- Hashing Classes: reducing the overall output size and eliminating conflicts via deterministic hashing
- [Inline Plugins](https://twind.dev/docs/handbook/advanced/plugins.html#inline-plugins): extending the capabilities of the compiler with simple functions at runtime

Another big advantage we see of shipping the interpreter compiler itself (rather than pre-compiled output) is that the effective size of the CSS for your whole app is deterministic and fixed. The weight of the compiler itself along with your theme file is all that users will ever download, no matter how many styles you use.

Currently the compiler weighs around 12KB which is smaller than styled-components and the average tailwind output.

### Motivation

It goes without saying that the primary inspiration here comes from Tailwind. It is a revolutionary take on styling the web which has proven popular by designers and developers alike. All the core plugins here, abide by the rules painstakingly thought out, implemented and popularized by Adam Wathan et al. making us forever in his debt.

We hope one day we will get the chance to collaborate with Tailwind Labs to create an official implementation!

### Benchmarks

The implementation is tested for speed alongside several popular CSS-in-JS solutions that export general CSS functions. For those that only support a _styled component_ approach an equivalent test has been setup. Currently Twind comes in on second place behind [goober](https://github.com/cristianbote/goober) – a less than 1KB css-in-js solution by Cristian Bote – an awesome library worth checking out.

CSS Function w/ template literal

```
goober@2.0.30               x 632,419 ops/sec ±0.59% (95 runs sampled)
twind (tw)                  x 400,438 ops/sec ±0.35% (84 runs sampled)
twind (apply)               x 342,725 ops/sec ±0.37% (96 runs sampled)
twind (css)                 x 270,020 ops/sec ±0.53% (95 runs sampled)
emotion@11.1.3              x 229,990 ops/sec ±0.17% (99 runs sampled)
```

CSS Function w/ object

```
goober@2.0.30               x 842,430 ops/sec ±1.10% (88 runs sampled)
twind (css)                 x 203,990 ops/sec ±0.32% (94 runs sampled)
emotion@11.1.3              x 162,460 ops/sec ±0.75% (90 runs sampled)
otion@0.6.2                 x  53,592 ops/sec ±0.85% (96 runs sampled)
```

Styled component w/ template literal

```
twind                       x 51,628 ops/sec ±0.63% (89 runs sampled)
goober@2.0.18               x 40,069 ops/sec ±0.43% (96 runs sampled)
emotion@11.0.0              x 35,349 ops/sec ±1.01% (93 runs sampled)
styled-components@5.2.1     x 38,284 ops/sec ±0.48% (93 runs sampled)
```

For a more detailed testing summary please see the [benchmarks](https://github.com/tw-in-js/twind/blob/main/benchmarks) directory.

### Inspiration

It would be untrue to suggest that the design here is totally original. Other than the founders' initial attempts at implementing such a module ([oceanwind](https://github.com/lukejacksonn/oceanwind) and [beamwind](https://github.com/kenoxa/beamwind)) we are truly standing on the shoulders of giants.

- [Tailwind](https://tailwindcss.com/): created a wonderfully thought out API on which the compiler's grammar was defined.
- [styled-components](https://styled-components.com/): implemented and popularized the advantages of doing CSS-in-JS.
- [htm](https://github.com/developit/htm): a JSX compiler that proved there is merit in doing runtime compilation of DSLs like JSX.
- [goober](https://github.com/cristianbote/goober): an impossibly small yet efficient CSS-in-JS implementation that defines critical module features.
- [otion](https://github.com/kripod/otion): the first CSS-in-JS solution specifically oriented around handling CSS in an atomic fashion.
- [clsx](https://github.com/lukeed/clsx): a tiny utility for constructing class name strings conditionally.
- [style-vendorizer](https://github.com/kripod/style-vendorizer): essential CSS prefixing helpers in less than 1KB of JavaScript.
- [CSSType](https://github.com/frenic/csstype): providing autocompletion and type checking for CSS properties and values.
