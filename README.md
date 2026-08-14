# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Steps to install React + Vite

- npm create vite@latest <project_name>
- Choose the options properly: React -> Javascript -> ESlint
- cd <project_name>
- npm install

# Steps to install tailwindcss v4 with Vite

- npm install tailwindcss @tailwindcss/vite
- Update vite.config.js with the given code:
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  import tailwindcss from "@tailwindcss/vite";

  export default defineConfig({
  plugins: [react(), tailwindcss()],
  });

- Add @import "tailwindcss"; in index.css file
- env:
  VITE_TMDB_KEY=xxxxx
- key access:
  import.meta.env.VITE_TMDB_KEY // const key = import.meta.env.VITE_TMDB_KEY;

# NetflixGPT

- Created React app with Vite
- Installed tailwindcss v4 with vite
- Git Initialized

# Features

- Homepage
  - Background with movie list
  - Netflix logo
  - Language and Signin buttons
  - Description/Caption in huge font
  - Email input box with Get Started button
- Sign Up/Sign In page
  - Logo
  - Sign in heading
  - Email/number input box
  - continue button
  - We can make it Sign in/ Sign up page as tabs
- Browse page
  - Header
    - Profile
    - Logo
    - Language
  - Main movie section
    - Trailer in bg
    - Title
    - Play Now and View more button
  - Collections
    - List of movies in that collection
    - Horizontal scroll
- Netflix GPT
  - Search Bar
  - Movie Suggestions
