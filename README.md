# 🍕 FoodHub

## Project Description

FoodHub is a modern, user-friendly food ordering and management platform. It allows users to browse and search for food items, view product details, and place orders. The platform supports user authentication, including email/password and Google login, and features a responsive design.

## Features

* Browse and search products
* User authentication (Email/Password, Google)
* Responsive design
* Dynamic routing and product pages
* Admin panel for managing products (add, update, delete)
* Payment integration

## Setup & Installation

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn
* Firebase account for authentication
* MongoDB instance

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Shoybit/FoodHub.git
cd FoodHub
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

MONGODB_URI=your_mongodb_uri
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be running at `http://localhost:3000`.

## Routes Summary

| Route              | Description                                       |
| ------------------ | ------------------------------------------------- |
| `/`                | Home page with featured products and hero section |
| `/menu`            | Browse all products with search functionality     |
| `/login`           | User login page                                   |
| `/register`        | User registration page                            |
| `/add-product`     | Admin page to add a new product                   |
| `/manage-products` | Admin page to update/delete products              |
| `/products/:id`    | Product details page                              |

## Deployment

The app can be deployed on platforms like Vercel or Netlify. Ensure your environment variables are set correctly on the deployment platform.

---

**Repository:** [https://github.com/Shoybit/FoodHub](https://github.com/Shoybit/FoodHub)
**License:** MIT
