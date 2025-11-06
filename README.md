📘 MERN Blog Application

A full-stack MERN (MongoDB, Express, React, Node.js) blog application with full CRUD functionality, authentication, image uploads, comments, and a modern UI built with React + Tailwind CSS.

This project is designed for learning and real-world application development. It includes a modular server and client structure for scalability and clean architecture.

✅ Features
🚀 Frontend (React + Vite + Tailwind)

Modern, responsive UI

React Router navigation

Authentication (login/register)

Create/edit/delete blog posts

Upload cover images

View individual posts by slug

Add and view comments

Global AuthContext for managing user state

Axios API integration

TailwindCSS styling

🔥 Backend (Node.js + Express + MongoDB)

RESTful API architecture

JWT authentication

Password hashing (bcrypt)

Image upload (multer)

Clean MVC folder structure

Comment system

Protected routes

User roles (admin/user)

Slug-based post URLs

Error handling middleware

📂 Project Structure
📘 MERN Blog Application

A full-stack MERN (MongoDB, Express, React, Node.js) blog application with full CRUD functionality, authentication, image uploads, comments, and a modern UI built with React + Tailwind CSS.

This project is designed for learning and real-world application development. It includes a modular server and client structure for scalability and clean architecture.

✅ Features
🚀 Frontend (React + Vite + Tailwind)

Modern, responsive UI

React Router navigation

Authentication (login/register)

Create/edit/delete blog posts

Upload cover images

View individual posts by slug

Add and view comments

Global AuthContext for managing user state

Axios API integration

TailwindCSS styling

🔥 Backend (Node.js + Express + MongoDB)

RESTful API architecture

JWT authentication

Password hashing (bcrypt)

Image upload (multer)

Clean MVC folder structure

Comment system

Protected routes

User roles (admin/user)

Slug-based post URLs

Error handling middleware

📂 Project Structure
mern-blog/
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── server/               # Express backend
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── uploads/
    ├── server.js
    └── package.json

⚙️ Installation & Setup

✅ 1. Clone the repository
git clone <your-repo-url>
cd mern-blog

🖥️ Backend Setup (Server)

✅ 2. Navigate to server folder
cd Server

✅ 3. Install server dependencies
npm install

✅ 4. Create .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_blog
JWT_SECRET=your_jwt_secret_here

✅ 5. Start the backend
npm run dev


Backend will run on:
👉 http://localhost:5000

🌐 Frontend Setup (Client)

✅ 1. Navigate to client folder
cd Client

✅ 2. Install client dependencies
npm install

✅ 3. Create .env file
VITE_API_URL=http://localhost:5000/api

✅ 4. Start the frontend
npm run dev


Frontend will run on:
👉 http://localhost:5173
 (or auto-selected port)

🔑 API Endpoints Summary
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login & get JWT token
📝 Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create new post (auth)
GET	/api/posts/slug/:s	Get post by slug
PUT	/api/posts/:id	Update post (auth)
DELETE	/api/posts/:id	Delete post (auth)
💬 Comments
Method	Endpoint	Description
GET	/api/comments/:postId	Get comments for a post
POST	/api/comments	Create comment (auth)
DELETE	/api/comments/:id	Delete comment (auth)
🧪 Testing Instructions

Start backend → npm run dev

Start frontend → npm run dev

Open browser → http://localhost:5173

Test the following:

Register a new user

Login

Create a new post

Upload an image

Edit or delete your post

Add comments

Search for posts

View posts by slug

🚀 Deployment (Optional)
✅ Deploy Backend (Render / Railway / VPS)

Upload server folder

Add environment variables

Enable static file serving for uploads

Update CORS settings

✅ Deploy Frontend (Netlify / Vercel)

Import Client folder

Build command: npm run build

Publish directory: dist

Add environment variable:
VITE_API_URL=https://your-backend-domain/api

✅ Technologies Used
Frontend

React

Vite

Axios

React Router

TailwindCSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

Multer

JSON Web Tokens

bcryptjs

📸 Screenshots (Add yours)
/screenshots
  ├── home.png
  ├── post.png
  ├── new-post.png
  ├── login.png

🙌 Author

Festus Kyalo Mutua
MERN Stack Developer
GitHub: add your link

📝 License

This project is licensed under the MIT License.
⚙️ Installation & Setup
✅ 1. Clone the repository
git clone <your-repo-url>
cd mern-blog

🖥️ Backend Setup (Server)
✅ 2. Navigate to server folder
cd Server

✅ 3. Install server dependencies
npm install

✅ 4. Create .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_blog
JWT_SECRET=your_jwt_secret_here

✅ 5. Start the backend
npm run dev


Backend will run on:
👉 http://localhost:5000

🌐 Frontend Setup (Client)

✅ 1. Navigate to client folder
cd Client

✅ 2. Install client dependencies
npm install

✅ 3. Create .env file
VITE_API_URL=http://localhost:5000/api

✅ 4. Start the frontend
npm run dev


Frontend will run on:
👉 http://localhost:5173
 (or auto-selected port)

🔑 API Endpoints Summary
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login & get JWT token
📝 Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create new post (auth)
GET	/api/posts/slug/:s	Get post by slug
PUT	/api/posts/:id	Update post (auth)
DELETE	/api/posts/:id	Delete post (auth)
💬 Comments
Method	Endpoint	Description
GET	/api/comments/:postId	Get comments for a post
POST	/api/comments	Create comment (auth)
DELETE	/api/comments/:id	Delete comment (auth)
🧪 Testing Instructions

Start backend → npm run dev

Start frontend → npm run dev

Open browser → http://localhost:5173

Test the following:

Register a new user

Login

Create a new post

Upload an image

Edit or delete your post

Add comments

Search for posts

View posts by slug

🚀 Deployment (Optional)
✅ Deploy Backend (Render / Railway / VPS)

Upload server folder

Add environment variables

Enable static file serving for uploads

Update CORS settings

✅ Deploy Frontend (Netlify / Vercel)

Import Client folder

Build command: npm run build

Publish directory: dist

Add environment variable:
VITE_API_URL=https://your-backend-domain/api

✅ Technologies Used
Frontend

React

Vite

Axios

React Router

TailwindCSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

Multer

JSON Web Tokens

bcryptjs

📸 Screenshots (Add yours)
/screenshots
  ├── home.png
  ├── post.png
  ├── new-post.png
  ├── login.png

🙌 Author

Festus Kyalo Mutua
MERN Stack Developer
GitHub: add your link

📝 License

This project is licensed under the MIT License.
