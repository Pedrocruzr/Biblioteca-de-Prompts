# AI Rules for RH Turbo 360 Application

This document outlines the technical stack and specific library usage guidelines for developing the RH Turbo 360 application. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of the chosen technologies.

## Tech Stack Overview

*   **Framework:** React (version 18.3.1) for building dynamic user interfaces.
*   **Language:** TypeScript for type safety and improved code quality.
*   **Build Tool:** Vite for a fast development experience and optimized builds.
*   **Styling:** Tailwind CSS (version 3.x) for utility-first CSS, ensuring responsive and consistent design.
*   **UI Components:** shadcn/ui, built on Radix UI, for accessible and customizable UI primitives.
*   **Routing:** React Router DOM (version 6.x) for client-side navigation.
*   **Icons:** Lucide React for a comprehensive set of SVG icons.
*   **Form Management:** React Hook Form with Zod for robust form validation and state management.
*   **Data Fetching/State Management:** React Query for efficient server state management and data synchronization.
*   **SEO & Meta Tags:** React Helmet for managing document head elements like titles and meta descriptions.
*   **Notifications:** Sonner for elegant and accessible toast notifications.

## Library Usage Guidelines

To maintain a consistent and efficient codebase, please follow these guidelines for library usage:

*   **UI Components:**
    *   **Always** prioritize using components from `shadcn/ui`. These are pre-configured and styled with Tailwind CSS.
    *   **Do NOT** modify the files within `src/components/ui/`. If a `shadcn/ui` component needs significant customization or a new component is required, create it in `src/components/VendasRH/` (or a new, appropriate subfolder) and style it using Tailwind CSS.
*   **Styling:**
    *   **Exclusively** use Tailwind CSS classes for all styling. Avoid inline styles or custom CSS files unless absolutely necessary for complex animations or global overrides (which should be minimal and justified).
    *   Leverage the custom colors, fonts, and shadows defined in `tailwind.config.ts` and `src/index.css`.
    *   Use the `cn` utility function (from `src/lib/utils.ts`) for conditionally applying Tailwind classes.
*   **Icons:**
    *   All icons should be imported and used from the `lucide-react` library.
*   **Routing:**
    *   Use `react-router-dom` for all application routing.
    *   Define all primary routes within `src/App.tsx`.
*   **Forms:**
    *   For any form creation and management, use `react-hook-form`.
    *   For schema validation, integrate `zod` with `react-hook-form` using `@hookform/resolvers`.
*   **Date Pickers:**
    *   When a date selection input is needed, use `react-day-picker`, integrated with `date-fns` for date manipulation.
*   **Notifications:**
    *   For displaying temporary, non-blocking messages (toasts), use `sonner`.
*   **Data Fetching & Server State:**
    *   For managing server state, data fetching, caching, and synchronization, use `@tanstack/react-query`.
    *   For simple, local component state, standard React hooks like `useState` and `useReducer` are appropriate.
*   **SEO & Meta Tags:**
    *   To manage document head elements (e.g., `<title>`, `<meta name="description">`, `<link rel="canonical">`), use `react-helmet`.
*   **Carousels:**
    *   For implementing carousels or image sliders, use `embla-carousel-react`.
*   **Responsive Panels:**
    *   For creating resizable panel layouts, use `react-resizable-panels`.
*   **Theming:**
    *   `next-themes` is available for managing dark/light mode. If theming functionality is requested, this library should be utilized.