# Sports Betting Stats

## Motivation

To help people keep their hard earned income / daddy's $$$

This codebase uses following libraries:

- Vite
- React
  - React Router
- TypeScript
- Tailwind CSS
  - daisyUI
- Firebase
- ESLint
- Prettier

## Set up

```shell
mv .env.local.example .env.local
yarn
yarn dev
```

### Firebase

- copy Firebase env values from Firebase Console, and paste them to `.env.local`.
- enable Google Auth in Firebase Console. ref: https://firebase.google.com/docs/auth/web/google-signin#before_you_begin

## Vite

[Vite](https://github.com/vitejs/vite) is a fast frontend build tool. According to the [README](https://github.com/vitejs/vite/blob/main/README.md), it consists of two major parts:

- A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

In VSCode, I recommend to use [intellisense extension](https://tailwindcss.com/docs/intellisense).

### daisyUI

[daisyUI](https://daisyui.com/) is Tailwind CSS Components library.

It prepares components CSS classes such as 'btn'. If you provide 'btn' class to `<button>` element, then there should be placed completely designed button.

## Formatter and Linter

Already set up [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). You can customize the rules.

NOTICE: The template does not use [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [prettier-eslint](https://github.com/prettier/prettier-eslint). So I recommend that running commands individually. e.g. `prettier && eslint`.

Please read: https://prettier.io/docs/en/integrating-with-linters.html.

# ToDo

- [x] install and set up [TailwindCSS/JIT](https://github.com/tailwindlabs/tailwindcss-jit) see this [PR](https://github.com/TeXmeijin/vite-react-ts-tailwind-starter/pull/1)
