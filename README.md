🏡 HOMORA – Property Listing Web Application

Homora is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, EJS, Cloudinary, and Mapbox.
Users can create property listings, upload images, add reviews, and view locations on an interactive map.

🚀 Features
🔐 Authentication

Secure user signup & login

Password hashing using passport-local-mongoose

Session-based authentication

Flash messages for user-friendly notifications

🏘 Listings

Create, read, update, and delete listings

Cloudinary image uploads

Price, category, description & location support

Fully responsive UI

⭐ Reviews System

Add/delete reviews

JOI validation

Real-time average rating support (optional extension)

🗺 Mapbox Integration

Interactive map for each listing

Custom markers + popups

Supports geocoding

🧱 Clean MVC Architecture

Modular controllers, routes, and middleware

Robust error handling

Organized file structure

🛠 Tech Stack

Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Frontend: EJS, HTML, CSS, Bootstrap
Cloud Storage: Cloudinary
File Uploads: Multer
Maps: Mapbox
Authentication: Passport.js
Validation: JOI

📁 Project Structure
HOMORA/
│
├── controllers/
├── models/
├── routes/
├── public/
├── views/
│ ├── layouts/
│ ├── includes/
│ ├── users/
│ └── listings/
├── utils/
├── init/
├── cloudConfig.js
├── app.js
├── package.json
└── .env

⚙️ Installation

1. Clone the repository
   git clone https://github.com/your-username/homora.git
   cd homora

2. Install dependencies
   npm install

3. Create a .env file and add:
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_key
   CLOUD_API_SECRET=your_secret
   MAP_TOKEN=your_mapbox_token
   SECRET=your_session_secret

4. Start the development server
   node app.js

or

nodemon app.js

🛣 API Routes
🔐 Auth Routes
Method Route Description
GET /signup Show signup form
POST /signup Create user
GET /login Login page
POST /login Authenticate user
GET /logout Logout user
🏘 Listing Routes
Method Route Description
GET /listings All listings
POST /listings Create new listing
GET /listings/:id View listing
PUT /listings/:id Update listing
DELETE /listings/:id Delete listing
⭐ Review Routes
Method Route
POST /listings/:id/reviews
DELETE /listings/:id/reviews/:reviewId
🗺 Map Integration

Each listing includes a Mapbox-powered interactive map:

Zoomable

Marker + popup

Automatic center using geolocation
