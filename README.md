# Sports Betting Stats

## Motivation

To help people keep their hard earned income / daddy's $$$

## Stack

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

Best make sure your npm version is >8.0.0. You can test this by running

```
npm --version
```

```shell
mv .env.local.example .env.local
npm install
npm run dev
```

### Firebase

- copy Firebase env values from Firebase Console, and paste them to `.env.local`.

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

Uses Prettier and EsLint, so make sure you have these extensions enabled on your VSCode.
