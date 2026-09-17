# MeetFlow

MeetFlow is a modern video conferencing web application built with React and Vite. It provides a clean interface for user authentication, dashboard navigation, meeting rooms, session management, and pricing.

## 🚀 Features

- 🔐 User authentication with Clerk
- 👤 User profile and avatar using Clerk `UserButton`
- 📊 Dashboard
- 🎥 Video meeting rooms
- 🗓️ Session management
- 💳 Pricing page
- 🧭 Protected routes
- 📱 Responsive design
- 🎨 Modern UI built with Tailwind CSS
- 🔔 Toast notifications
- 🎯 React Router navigation
- ⚡ Fast development with Vite
- 🧩 Lucide icons

## 🛠️ Tech Stack

- **React** – UI library
- **Vite** – Frontend build tool
- **Tailwind CSS** – Styling
- **Clerk** – Authentication and user management
- **React Router DOM** – Routing
- **Lucide React** – Icons
- **React Hot Toast** – Notifications
- **JavaScript / JSX**

## 📁 Project Structure

```text
MeetFlow/
├── public/
│   ├── logo.png
│   ├── login_bg.png
│   └── layout_bg.png
│
├── src/
│   ├── assets/
│   │   └── asset.js
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedLayout.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── MeetingRoom.jsx
│   │   ├── Pricing.jsx
│   │   └── Sessions.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
