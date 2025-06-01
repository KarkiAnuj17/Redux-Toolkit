# Next.js + Redux Toolkit Boilerplate

This repository provides a simple setup for integrating Redux Toolkit with a Next.js 13+ project using the App Router. It includes basic configuration for the Redux store, provider setup, and example folder structure for scalable state management.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Redux Setup](#redux-setup)
- [Usage](#usage)
- [License](#license)

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn**
- **Next.js** (v13+ recommended)
- **Redux Toolkit**

---

## Installation

1. **Create a Next.js app** (if you haven't already):

   ```bash
   npx create-next-app@latest my-app
   cd my-app
   ```

2. **Install Redux Toolkit and React-Redux:**

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

---

## Project Structure

```
src/
  redux/
    reducerSlices/
      boxSlice.js         # Redux slice for box state (example)
    store.js              # Redux store configuration
    reduxProvider.js      # Redux Provider component
  app/
    layout.js / layout.tsx # Next.js root layout, wraps the app with ReduxProvider
    page.js               # Example page
  ...
```

---

## Redux Setup

### 1. Create the Redux Store (`src/redux/store.js`)

Set up the Redux store using `configureStore` from Redux Toolkit. Import your slice reducers here and add them to the store configuration. Also, export types for RootState and AppDispatch if using TypeScript.

### 2. Create a Redux Provider (`src/redux/reduxProvider.js`)

Create a component that wraps its children with the `Provider` from `react-redux`, passing in the store. This enables Redux throughout your app.

### 3. Wrap the App with ReduxProvider (`src/app/layout.js` or `src/app/layout.tsx`)

Import your `ReduxProvider` and use it to wrap your application’s children in the root layout. This ensures all components have access to the Redux store.

### 4. Add Reducer Slices (`src/redux/reducerSlices/`)

Create one or more slice files (e.g., `boxSlice.js`) using `createSlice` from Redux Toolkit. Define the slice’s name, initial state, and reducers/actions. Export the reducer as default and actions as named exports.

---

## Usage

- **Dispatching Actions:** Import your slice’s actions and use `useDispatch` to dispatch them.
- **Selecting State:** Use `useSelector` to access your Redux state inside components.

**Example:**
- Import actions and selectors from your slice in a component.
- Use them with `useDispatch` and `useSelector` from `react-redux`.

---

