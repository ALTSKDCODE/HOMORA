🏡 HOMORA — Property Listing Web Application
 A full-stack property rental platform inspired by Airbnb, enabling users to manage listings, images, reviews, authentication, and maps — built using Node.js, Express, MongoDB, Cloudinary, and Mapbox.

🧩 Tech Stack
| Layer              | Technologies Used                          |
| ------------------ | ------------------------------------------ |
| **Backend**        | Node.js, Express.js, Mongoose, JOI, Multer |
| **Frontend**       | EJS, HTML, CSS, Bootstrap                  |
| **Database**       | MongoDB (Atlas / Local)                    |
| **Cloud Services** | Cloudinary (Image Storage), Mapbox (Maps)  |
| **Authentication** | Passport.js, Express-Session               |
| **Tools**          | Postman, Git/GitHub, dotenv                |

📁 Project Structure
📦 HOMORA/
│
├── ⚙️ controllers/          # Business logic (listings, reviews, users)
├── 📘 models/               # Listing, Review, User schemas
├── 🌐 routes/               # Express route definitions
├── 🎨 public/               # Static files (CSS/JS)
├── 🖼 views/                # EJS templates
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── users/
│
├── 🔧 utils/                # Custom middleware & error handlers
├── 🌱 init/                 # Seed scripts
├── ☁️ cloudConfig.js        # Cloudinary configuration
├── 🧩 app.js                # Entry point of the application
├── 📦 package.json
└── 🔐 .env

🚀 Getting Started
🔧 Install Dependencies
npm install

⚙️ Environment Configuration
Create a .env file in the root directory:
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret

MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret

▶️ Run the Application
Start the server:
node app.js
or with nodemon:
nodemon app.js
➡️ Runs on: http://localhost:3000

🔍 API Endpoints Overview
👤 Authentication
| Method | Route   | Description       |
| ------ | ------- | ----------------- |
| GET    | /signup | Show signup form  |
| POST   | /signup | Register new user |
| GET    | /login  | Show login form   |
| POST   | /login  | Authenticate user |
| GET    | /logout | Logout user       |

🏡 Listings
| Method | Route         | Description      |
| ------ | ------------- | ---------------- |
| GET    | /listings     | Get all listings |
| POST   | /listings     | Create a listing |
| GET    | /listings/:id | View listing     |
| PUT    | /listings/:id | Update listing   |
| DELETE | /listings/:id | Delete listing   |

⭐ Reviews
| Method | Route                           | Description   |
| ------ | ------------------------------- | ------------- |
| POST   | /listings/:id/reviews           | Add review    |
| DELETE | /listings/:id/reviews/:reviewId | Delete review |

🖼 Image Storage (Cloudinary)

Image upload handled via Multer

Files are uploaded to Cloudinary

Secure URLs stored in MongoDB

Supports resizing/transformation

🗺 Map Integration (Mapbox)

Each listing includes an interactive map:

Custom marker

Popup with listing title

Auto-zoom and centering

Configured using:
MAP_TOKEN=your_mapbox_token

🔐 Security Overview

Passport.js session-based login

Cookies & session storage

JOI-based server-side validation

Protected routes for authenticated users only

Sanitization to prevent injection attacks

🧪 Testing (Postman)

You can test all User, Listing, and Review APIs using Postman.
Example:
GET /listings
POST /listings/:id/reviews
DELETE /listings/:id

🧠 Git Branching Workflow
| Branch      | Purpose                   |
| ----------- | ------------------------- |
| `main`      | Stable production code    |
| `dev`       | Active development        |
| `feature/*` | Feature-specific branches |
| `bugfix/*`  | Fixing issues             |
| `hotfix/*`  | Urgent fixes              |

Commands
git checkout -b dev
git push -u origin dev

git checkout -b feature/listings
git push -u origin feature/listings

📊 Future Enhancements

Multiple image uploads

Booking system

Wishlist / Saved listings

Search + filtering

User profile dashboard

Admin panel

🤝 Contributing

Fork the repository

Create a feature branch (feature/<name>)

Commit your changes

Push your branch

Open a Pull Request

🧾 License

This project is licensed under the MIT License.

✨ Author

👨‍💻 Sudeep Kumar Dalei
📧 Email: sudeepdalei38@gmail.com

🌐 GitHub: https://github.com/ALTSKDCODE

💼 Full Stack Developer — Node.js | Express | MongoDB
