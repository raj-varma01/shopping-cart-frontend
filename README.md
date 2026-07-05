# Shopping Cart Frontend

A responsive shopping cart application built with **React**, **TypeScript**, **Redux Toolkit**, **Axios**, **Vite**, and **Tailwind CSS**.

This project consumes a Node.js/Express REST API and demonstrates product listing, cart management, Redux state management, and responsive UI.

---

## Features

* View available products
* Add products to cart
* Automatically open cart after adding an item
* Increment and decrement product quantity
* Automatically remove item when quantity reaches zero
* Remove individual items from cart
* Clear entire cart
* View total cart value
* Responsive design for desktop and mobile
* Global API configuration using Axios
* Redux Toolkit for centralized state management
* Loading and error handling

---

## Tech Stack

* React
* TypeScript
* Vite
* Redux Toolkit
* React Redux
* Axios
* Tailwind CSS
* React Icons

---

## Project Structure

```text
src
│
├── api
│   ├── axios.ts
│   ├── cartApi.ts
│   └── productApi.ts
│
├── app
│   └── store.ts
│
├── components
│   ├── CartItem.tsx
│   ├── CartSidebar.tsx
│   ├── EmptyState.tsx
│   ├── Loader.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
│
├── features
│   └── cart
│       ├── cartSlice.ts
│       └── cartThunks.ts
│
├── hooks
│   └── reduxHooks.ts
│
├── pages
│   └── Home.tsx
│
├── types
│   ├── cart.ts
│   └── product.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Prerequisites

Make sure the following are installed:

* Node.js (v20 or later)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Move into the project directory.

```bash
cd shopping-cart-frontend
```

Install dependencies.

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_URL=http://localhost:5000/api
```

Update the value if your backend is running on a different host or port.

---

## Running the Application

Start the development server.

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview the production build locally.

```bash
npm run preview
```

---

## Backend Requirements

Before starting the frontend, ensure the backend server is running.

The frontend expects the following REST APIs:

| Method | Endpoint               |
| ------ | ---------------------- |
| GET    | `/api/products`        |
| GET    | `/api/cart`            |
| POST   | `/api/cart`            |
| PATCH  | `/api/cart/:productId` |
| DELETE | `/api/cart/:productId` |
| DELETE | `/api/cart`            |

Default backend URL:

```text
http://localhost:5000
```

---

## Application Flow

1. Fetch available products from the backend.
2. Display products in a responsive grid.
3. Add products to the shopping cart.
4. Automatically open the cart after adding an item.
5. Update product quantities.
6. Remove individual products or clear the entire cart.
7. Display the updated total price after every operation.

---

## State Management

Redux Toolkit is used for managing cart state.

The application uses:

* `createSlice`
* `createAsyncThunk`
* React Redux hooks
* Global loading and error state

Product listing is managed locally since it is only required on the home page.

---