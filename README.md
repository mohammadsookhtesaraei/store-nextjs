# 🛒 Next.js E-Commerce Store

A modern e-commerce application built with **Next.js 13+ (App Router)** featuring:

- Shopping cart with **Context API**
- Cart persistence using **LocalStorage**
- Add / remove items
- Increase / decrease item quantity
- Product search + pagination
- **SSG** Home page
- **SSR** Products list & product details pages

---

## 🚀 Features

### 1. Shopping Cart (Context API)
The cart system is managed globally using React Context, allowing all components to access and modify cart data.

**Cart functionalities include:**
- Add items to the cart  
- Remove items from the cart  
- Increase or decrease item quantity  
- Auto-updating cart totals  
- Cart persistence using **LocalStorage**

This approach is lightweight and ideal for small to medium projects.

---

### 2. LocalStorage Sync
The cart state is synced with `localStorage`:

- On first load → cart is loaded from localStorage  
- On every update → cart is saved to localStorage  

This ensures the cart never resets after page refresh.

---

## 📄 Rendering Strategy

### 🏠 Home Page — **SSG**
- Pre-rendered at build time  
- Better performance and SEO  
- Ideal for static or rarely-changing content  

File:  
