# 📱 Blog App – React Native + JSON Server

A simple mobile blog application built with **React Native (Expo)** and a **JSON Server** backend.  
Users can create, edit, delete and view blog posts with a clean, card–based UI.


                             ![Kayıt 2026-01-27 145801](https://github.com/user-attachments/assets/cf5308f5-87f3-4fd3-8626-f865b50beecb)


---

## ✨ Features

- **Full Blog CRUD Operations**
  - ➕ Create new blog posts  
  - ✏️ Edit existing posts  
  - 🗑️ Delete posts  
  - 👁️ View individual posts on a detail screen  

- **Modern UI**
  - 🎨 Card-based layout for blog posts
  - 📝 Shared form component for create & edit (`BlogPostForm`)
  - 🎯 Consistent theming with design tokens (colors, spacing, typography)

- **Navigation**
  - 🧭 Stack navigation with custom header title
  - 🔘 Header action buttons (add, edit)

- **State & Data**
  - 🌐 Global state management with **Context API**
  - 📡 Data fetched from a **JSON Server** REST API via **Axios**
  - ⚙️ Configurable backend URL via **.env** (`EXPO_PUBLIC_BASE_URL`)

---

## 🛠️ Technologies

- **Frontend**
  - React Native (Expo)
  - React 19
  - React Navigation (stack + native)
  - Context API

- **Backend**
  - JSON Server (file–based REST API)
  - `db.json` for mock blog data

- **Other**
  - Axios HTTP client
  - Ngrok (optional, for exposing local JSON Server)

---

## 💻 Quick Setup

### 1. Clone repository

```bash
git clone https://github.com/yourusername/blog_app.git
cd blog_app
```

### 2. Install dependencies

```bash
npm install
```

---

### 3. Backend – JSON Server

#### Folder structure for the mock API

```bash
blog_app/
└── json-server/
    ├── db.json          # Blog posts data
    ├── package.json
    └── package-lock.json
```

#### Run JSON Server

From the `json-server` folder:

```bash
cd json-server
npx json-server --watch db.json --port 3000
```

JSON Server will be available at:

- `http://localhost:3000/`
- `http://localhost:3000/blogposts`

---

### 4. Configure API base URL

The app reads the base URL from `.env`:

```env
EXPO_PUBLIC_BASE_URL=https://pseudoeducationally-indulgent-shawnda.ngrok-free.dev
```

There are **two ways** to run it:

#### Option A – With Ngrok (keep the ngrok URL in `.env`)

1. Make sure JSON Server is running on port `3000`.
2. In `json-server` folder, start ngrok:

   ```bash
   cd json-server
   ngrok http 3000 --domain=pseudoeducationally-indulgent-shawnda.ngrok-free.dev
   ```

3. Keep `.env` as:

   ```env
   EXPO_PUBLIC_BASE_URL=https://pseudoeducationally-indulgent-shawnda.ngrok-free.dev
   ```

The app will send requests to the ngrok URL, which forwards them to your local JSON Server.

#### Option B – Direct local URL (no ngrok)

If you don’t need ngrok, you can point the app directly to your local JSON Server:

```env
EXPO_PUBLIC_BASE_URL=http://localhost:3000
```

> On a real device, use your machine’s local IP instead of `localhost`
> (e.g. `http://192.168.1.10:3000`).

After changing `.env`, restart Expo with cache clear:

```bash
npm start -- --clear
```

---

### 5. Run the mobile app

From the project root:

```bash
cd blog_app
npm start
```

Then run on:

- **Android**: press `a` or use Expo Go
- **iOS**: press `i` (simulator) or scan the QR code with Camera / Expo Go

---

## 📁 Project Structure

```bash
blog_app/
├── App.js
├── app.json
├── index.js
├── json-server/
│   └── db.json                 # JSON Server database
└── src/
    ├── api/
    │   ├── blogService.js      # Blog API wrapper using axios
    │   └── jsonServer.js       # Axios instance (baseURL from .env)
    ├── components/
    │   └── BlogPost/
    │       ├── BlogPostCard/
    │       │   ├── BlogPostCard.js
    │       │   └── styles.js
    │       └── BlogPostForm/
    │           ├── BlogPostForm.js
    │           └── styles.js
    ├── constants/
    │   ├── api/
    │   │   ├── endpoints.js    # e.g. /blogposts
    │   │   └── timing.js       # request timeout
    │   ├── design/
    │   │   ├── theme.js
    │   │   └── tokens.js       # Colors, Typography, Spacing, etc.
    │   └── navigation/
    │       ├── routes.js
    │       └── screenOptions.js
    ├── context/
    │   ├── BlogContext.js      # State, reducer, actions
    │   └── createDataContext.js
    ├── navigation/
    │   └── AppNavigator.js     # Stack navigator & screen options
    └── screens/
        ├── IndexScreen/
        │   ├── IndexScreen.js  # List of blog posts
        │   └── styles.js
        ├── ShowScreen/
        │   ├── ShowScreen.js   # Single post detail
        │   └── styles.js
        ├── CreateScreen/
        │   ├── CreateScreen.js # Create new post (uses BlogPostForm)
        │   └── styles.js
        └── EditScreen/
            ├── EditScreen.js   # Edit existing post (uses BlogPostForm)
            └── styles.js
```

---

## ⚠️ Known Limitations

- Mock backend only (JSON Server, no real authentication).
- No offline support or caching.
- No automated tests yet (UI and logic tested manually).

---

## 📝 Note

This project is mainly for **learning React Native, Context API, Axios, and JSON Server** with a simple blog use case.  
Suggestions, refactors, and improvements are welcome!

