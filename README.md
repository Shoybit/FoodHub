# 🍕 FoodHub

FoodHub is a modern, user-friendly food ordering and management platform built with **Next.js**. Users can browse food items, search instantly, view details, and place orders. Admins can securely add, update, and delete products. The project uses **Firebase Authentication**, **MongoDB Atlas**, and a responsive UI for all devices.

---

## 🚀 Features

### 🛍️ User Features
- Browse all food items  
- Search products quickly  
- View full product details  
- Fully responsive UI  
- Login & Registration (Email/Password + Google)

### 🛠️ Admin Features
- Add new products  
- Manage (Update/Delete) products  
- Protected admin-only routes

### ⚙️ Technical Features
- Next.js App Router  
- Firebase Authentication  
- MongoDB Atlas  
- Serverless API hosted on Vercel  
- Dynamic Routing & Data Fetching  
- Environment variable support

---

## 🧰 Tech Stack

| Category | Technology |
|---------|------------|
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Node.js, Express |
| Auth | Firebase Authentication |
| Database | MongoDB Atlas |
| Hosting | Vercel |

---

## 🛠️ Installation Guide

### ✔️ Prerequisites
- Node.js **18+**
- npm / yarn
- Firebase project setup
- MongoDB Atlas connection string

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shoybit/FoodHub.git
cd FoodHub
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_API_BASE_URL=https://foodhub-server.vercel.app
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Your app will run at:

```
https://foodhub-one-neon.vercel.app/

```

Backend API (Live URL):

```
https://foodhub-server.vercel.app
```

---

## 📍 Routes Overview

| Route              | Description |
| ------------------ | ----------- |
| `/`                | Home page |
| `/menu`            | All products with search |
| `/login`           | User login |
| `/register`        | User registration |
| `/add-product`     | Add product (Admin) |
| `/manage-products` | Update/Delete products (Admin) |
| `/products/:id`    | Product details |

---

## 🚀 Deployment

FoodHub is fully deployable on **Vercel**, **Netlify**, or any Node.js platform.

✔️ Add your environment variables in Vercel → Project Settings  
✔️ Connect your GitHub repo  
✔️ Deploy with one click

Backend Server (Express + MongoDB Auto Hosted on Vercel):

```
https://foodhub-server.vercel.app
```

---

## 📁 Repository

GitHub Repo: https://github.com/Shoybit/FoodHub  
Server Repo: https://github.com/Shoybit/FoodHub-Backend 

* License: **MIT**

---

🎉 **FoodHub — Simple, Fast & Modern Food Ordering Experience**

