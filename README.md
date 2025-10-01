# Nayan Portfolio Next

This is a modern portfolio web application built with **Next.js**, showcasing a developer's skills, projects, and achievements. The project leverages a rich set of technologies to create an interactive, performant, and visually appealing portfolio with features like rich text editing, animations, and scheduling capabilities. It uses **ShadCN**, **TypeScript**, and **Redux** for a robust and type-safe development experience.

## Table of Contents

- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

The project is built using the following technologies and libraries:

- **Framework**:

  - Next.js (v15.4.4)
  - React (v19.1.0)
  - React DOM (v19.1.0)

- **State Management**:

  - Redux Toolkit (v2.8.2)
  - React Redux (v9.2.0)
  - Redux Persist (v6.0.0)

- **UI Components and Styling**:

  - ShadCN
  - MUI (v7.2.0)
  - Emotion (v11.14.x)
  - TailwindCSS (v4)
  - class-variance-authority (v0.7.1)
  - tailwind-merge (v3.3.1)
  - tw-animate-css (v1.3.8)
  - lucide-react (v0.525.0)
  - react-icons (v5.5.0)

- **Rich Text Editing**:

  - Lexical (v0.34.0) + plugins
  - Jodit (v4.6.2)
  - Jodit React (v5.2.19)
  - Quill (v2.0.3)

- **Interactive Components**:

  - Radix UI libraries
  - cmdk (v1.1.1)
  - react-datepicker (v8.4.0)
  - react-colorful (v5.6.1)
  - react-countup (v6.5.3)
  - react-fast-marquee (v1.6.5)
  - framer-motion (v12.23.9)

- **Utilities**:

  - react-hook-form (v7.61.1)
  - fuse.js (v7.1.0)
  - jwt-decode (v4.0.0)
  - lodash-es (v4.17.21)
  - katex (v0.16.22)
  - lowlight (v3.3.0)
  - sonner (v2.0.7)
  - tippy.js (v6.3.7)

- **Specialized Libraries**:

  - Cal.com Embed (v1.5.3)
  - Excalidraw (v0.18.0)
  - react-error-boundary (v6.0.0)
  - react-rating (v1.5.0)

- **Development Tools**:
  - TypeScript (v5)
  - ESLint (v9)
  - eslint-config-next (v15.4.4)
  - @types/node (v20)
  - @types/react (v19)
  - @types/react-dom (v19)

## How It Works

The **Nayan Portfolio Next** project is a portfolio website built using **Next.js** with the **App Router** for efficient page rendering. It integrates **ShadCN** for accessible and customizable UI components, styled with **Tailwind CSS** and enhanced with **Material-UI** and **Emotion**. **TypeScript** ensures type safety, while **Redux Toolkit** with **redux-persist** manages and persists application state. Rich text editing is supported with **Lexical**, **Jodit**, and **Quill**. The app also integrates **Cal.com** for scheduling and **Excalidraw** for diagramming. Animations are powered by **Framer Motion**, while accessibility is handled with **Radix UI**.

## Features

- Portfolio Showcase
- Rich Text Editing
- Scheduling (Cal.com)
- Diagramming (Excalidraw)
- Animations (Framer Motion)
- Forms with react-hook-form
- Search with Fuse.js
- Math rendering with KaTeX
- Responsive Design with Tailwind + MUI + ShadCN
- State management with Redux Toolkit
- Error boundaries with react-error-boundary
- Accessible UI with Radix

## Folder Structure

```bash
Nayan-Portfolio-Next/
├── app/                     # Next.js App Router directory
│   ├── layout.tsx           # Root layout for the app
│   ├── page.tsx             # Homepage
│   ├── favicon.ico          # Favicon for the website
│   └── globals.css          # Global CSS styles
│
├── components/              # Reusable React components
│   ├── ui/                  # ShadCN and other UI components (buttons, modals, etc.)
│   ├── editor/              # Rich text editors (Lexical, Jodit, Quill)
│   └── shared/              # Shared components across the app
│
├── lib/                     # Utility functions and helpers
├── store/                   # Redux store configuration and slices
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
├── constants/               # Constants and configuration files
│
├── public/                  # Static assets (images, fonts, icons, etc.)
│
├── .eslintrc.json           # ESLint configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration for Tailwind
├── README.md                # Project documentation
└── .gitignore               # Git ignore file
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Suvrodev/Nayan-Portfolio-Next.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the production application
- `npm start` – Start the production server
- `npm run lint` – Run ESLint

## Deployment

The project can be deployed easily using **Vercel** (recommended for Next.js).

## Contributing

Contributions are welcome! Feel free to fork the repository, create a branch, and submit a pull request.

## License

This project is licensed under the MIT License.
