# AssanGPT

A modern AI chat interface built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Build Tool:** Vite

## Features

- 🌓 Dark/Light theme support
- 🎨 Custom UI components with shadcn/ui
- 📱 Responsive design
- 💅 Modern, clean interface
- 🎯 Type-safe development with TypeScript

## Project Structure

```
src/
├── components/
│   ├── chat/
│   │   ├── ChatInput.tsx        # Input component with send button
│   │   ├── ChatMessage.tsx      # Individual message component
│   │   ├── ChatThread.tsx       # Messages container
│   │   └── MessageSkeleton.tsx  # Loading state for messages
│   ├── ui/                      # shadcn components
│   └── layout/
│       ├── AppSidebar.tsx       # Sidebar navigation
│       └── Header.tsx           # Top header if needed
├── lib/
│   ├── ai/
│   │   ├── types.ts            # AI response types
│   │   └── api.ts              # AI API integration
│   └── utils.ts                # Utility functions
├── hooks/
│   └── useChat.ts              # Chat logic and state management
├── store/
│   └── chat.ts                 # Global chat state if needed
├── types/
│   └── chat.ts                 # Type definitions
├── constants/
│   └── ai.ts                   # API endpoints, configs
└── layouts/
    └── HomeLayout.tsx          # Main layout wrapper
```

## Key Directories

- **/components/chat**: All chat-specific components
- **/lib/ai**: AI service integration
- **/hooks**: Custom React hooks
- **/store**: State management
- **/types**: TypeScript definitions
- **/constants**: Configuration constants

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
