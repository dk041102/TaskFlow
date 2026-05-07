# TaskFlow — Project Management App

A full-stack project management web application that helps teams 
create projects, assign tasks, track progress, and collaborate 
efficiently with role-based access control.

## ✨ Features

- 🔐 JWT Authentication (Signup / Login)
- 👥 Role-Based Access Control (Admin / Member)
- 📁 Project creation and team management
- ✅ Task creation, assignment & status tracking
- 📊 Dashboard with live stats (Total, In Progress, Done, Overdue)
- 🗂️ Kanban board view per project
- 👤 Team overview with per-member task stats
- 📱 Responsive design

## 🛠️ Tech Stack

**Frontend**
- React 18
- React Router v6
- Axios
- React Hot Toast
- date-fns

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- CORS

**Deployment**
- Frontend → Netlify
- Backend → Railway
- Database → MongoDB Atlas

## 📁 Project Structure

\`\`\`
taskflow/
├── backend/
│   ├── server.js
│   └── src/
│       ├── config/        # DB connection
│       ├── controllers/   # Auth, Projects, Tasks, Dashboard
│       ├── middleware/    # Auth & Role middleware
│       ├── models/        # User, Project, Task schemas
│       └── routes/        # API routes
│
└── frontend/
    └── src/
        ├── api/           # Axios API calls
        ├── context/       # Auth context
        ├── components/    # Sidebar, Modal, Badges
        └── pages/         # Dashboard, Projects, Tasks, Team
\`\`\`

## 🔌 API Endpoints

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/auth/signup` | Public |
| POST | `/api/auth/login` | Public |
| GET | `/api/projects` | Auth |
| POST | `/api/projects` | Admin |
| POST | `/api/projects/:id/add-member` | Admin |
| GET | `/api/tasks/:projectId` | Auth |
| POST | `/api/tasks` | Auth |
| PUT | `/api/tasks/:id` | Auth |
| GET | `/api/dashboard` | Auth |

## ⚙️ Local Setup

### Backend
\`\`\`bash
cd backend
npm install
# create .env file
echo "MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000" > .env
npm run dev
\`\`\`

### Frontend
\`\`\`bash
cd frontend
npm install
# create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
npm start
\`\`\`

## 🔑 Role Permissions

| Feature | Admin | Member |
|---------|-------|--------|
| Create projects | ✅ | ❌ |
| Add members | ✅ | ❌ |
| View team page | ✅ | ❌ |
| Create tasks | ✅ | ✅ |
| Update task status | ✅ | ✅ |
| View dashboard | ✅ | ✅ |

## 👨‍💻 Author
Built by [Deepak kumar](https://github.com/dk041102)
