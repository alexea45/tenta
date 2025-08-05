# Tenta Logistics Landing Page

## Project Description

A professional logistics landing page for Tenta Logistics, providing comprehensive shipping and transportation services worldwide. The site features modern design, responsive layout, and user-friendly navigation.

## Features

- **Clickable Logo**: TentaLogistics logo navigates to home page
- **Service Pages**: Detailed pages for all services (Towing, Loading, Shipping, Global Logistics, Auto Transport, Insurance)
- **Contact Page**: Dedicated contact page with form and company information
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Professional UI**: Clean, modern design with logistics branding

## How to run this project

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/alexea45/tenta.git

# Step 2: Navigate to the project directory
cd tenta

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Contact.tsx     # Contact form component
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services overview
│   ├── Contact.tsx     # Contact page
│   └── services/       # Individual service pages
└── lib/                # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Deployment

Build the project and deploy the `dist` folder to your preferred hosting platform.

```sh
npm run build
```
