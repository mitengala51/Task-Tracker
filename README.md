Here's a clean and professional `README.md` file for your **Task Tracker** project, tailored to your requirements (PERN stack, auth, CRUD, project limit, Bootstrap UI, simple start instructions).

---

````markdown
# 🧩 Task Tracker

A modern and minimal Task Tracker app built using the **PERN stack** (PostgreSQL, Express.js, React.js, Node.js). It supports user authentication, project/task management, and enforces a 4-project-per-user limit.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- ✅ Secure Password Hashing (bcrypt)
- ✅ CRUD operations for:
  - Projects (limited to 4 per user)
  - Tasks (within projects)
- ✅ Bootstrap UI for a professional and responsive layout
- ✅ PostgreSQL database with normalized schema
- ✅ RESTful API structure

---

## 🛠️ Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Frontend   | React + Bootstrap        |
| Backend    | Node.js + Express.js     |
| Database   | PostgreSQL               |
| Auth       | JWT + bcrypt             |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/Task-Tracker.git
cd Task-Tracker
````

---

### 2. Setup Backend

```bash
cd backend
npm install
npx nodemon index.js
```

> Make sure you have a PostgreSQL server running and a database created.

#### Example `.env` for Backend

```env
PORT=5000
DATABASE_URL=postgres://<username>:<password>@localhost:5432/tasktracker
JWT_SECRET=your_jwt_secret
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🗃️ Database Schema Overview

### Users

* `id`, `name`, `email`, `password`, `country`, `created_at`

### Projects

* `id`, `user_id`, `name`, `created_at`
* ✅ Max 4 projects per user

### Tasks

* `id`, `project_id`, `title`, `description`, `status`, `priority`, `due_date`, `created_at`

---

## 🔐 Auth Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | /api/auth/signup | Register user           |
| POST   | /api/auth/login  | Login with credentials  |
| GET    | /api/auth/user   | Get logged-in user info |

---

## 📁 Project Endpoints

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| GET    | /api/projects      | Get all projects (per user) |
| POST   | /api/projects      | Create new project (max 4)  |
| DELETE | /api/projects/\:id | Delete a project            |

---

## ✅ Task Endpoints

| Method | Endpoint                        | Description              |
| ------ | ------------------------------- | ------------------------ |
| GET    | /api/projects/\:projectId/tasks | Get all tasks in project |
| POST   | /api/projects/\:projectId/tasks | Create a task            |
| PUT    | /api/tasks/\:taskId             | Update a task            |
| DELETE | /api/tasks/\:taskId             | Delete a task            |

---

## 📷 UI Preview

> Add screenshots or screen recordings of login, project/task dashboard, modals, etc.

---

## 📌 Note

* Users can create **up to 4 projects** only.
* Tasks are nested under projects.
* All actions are protected using JWT-based auth.

---
