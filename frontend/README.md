# Deploy Practice - Shopping Cart Project

This project is a simple shopping cart system built with **React** and **Redux** for the frontend and **Django** (with Django REST Framework) for the backend API.

## Project Overview

- **Frontend:** React, Redux, Material UI
- **Backend:** Django, Django REST Framework, CORS support
- **Purpose:** Demonstrate a basic e-commerce workflow with product search, cart management, and purchase summary.

## Features

- Search for products by name.
- Add products to a shopping cart with a specified quantity.
- View a summary of the cart, including total items and total price.
- Remove products from the cart.
- Backend API for product filtering and listing.

## Folder Structure

```
deploy-pratice/
├── backend/
│   └── backend/
│       ├── api/                # Django app for products
│       ├── backend/            # Django project settings
│       └── manage.py
├── frontend/
│   ├── src/
│   │   ├── components/         # React components (AppBar, FormHome, Overview, etc.)
│   │   ├── slices/             # Redux slices (productSlice.js)
│   │   ├── localeProducts.js   # Local product data (optional)
│   │   └── store.js            # Redux store configuration
│   ├── public/
│   └── package.json
└── README.md
```

## How It Works

1. **User searches for a product** using the input field.
2. **Frontend calls the backend API** to filter products by name.
3. **User selects a product and quantity**, then adds it to the cart.
4. **Cart summary** displays the total price and number of items.
5. **All state management** is handled by Redux.

## Getting Started

### Backend (Django)

1. Install dependencies:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```
2. Run migrations:
   ```bash
   python manage.py migrate
   ```
3. Start the backend server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the frontend server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

- `GET /api/v1/products/filter/<query>`: Returns products matching the search query.

## Technologies Used

- React
- Redux Toolkit
- Material UI
- Django
- Django REST Framework
- Axios

## Deployment

You can deploy the backend and frontend separately. Make sure to configure CORS and allowed hosts in Django for production.

## License

This project is for educational purposes.

---
