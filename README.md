HOMORA – Property Listing Web Application

Homora is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, EJS, Cloudinary, and Mapbox.
It allows users to create and manage property listings, upload images, write reviews, and view locations on an interactive map.

Features
Authentication

Secure user signup and login

Password hashing with passport-local-mongoose

Session-based authentication

Flash messages for clean user experience

Listings

Create, read, update, delete listings

Upload images to Cloudinary

Add price, location, description, and category

Fully responsive interface

Reviews

Add and delete reviews

JOI schema validation

Map Integration

Mapbox-powered interactive maps

Custom markers and popups

Automatic geolocation rendering

Architecture

Clean MVC folder structure

Modular controllers and routes

Error-handling middleware

Secure configuration with environment variables

Tech Stack

Backend: Node.js, Express
Database: MongoDB (Mongoose)
Frontend: EJS, HTML, CSS
Cloud Storage: Cloudinary
File Uploads: Multer
Maps: Mapbox
Authentication: Passport.js
Validation: JOI

Project Structure
HOMORA/
│
├── controllers/
├── models/
├── routes/
├── public/
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── users/
├── utils/
├── init/
├── cloudConfig.js
├── app.js
├── package.json
└── .env

Installation
1. Clone the repository
git clone https://github.com/your-username/homora.git
cd homora

2. Install dependencies
npm install

3. Create a .env file
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret

4. Start the server
node app.js


or

nodemon app.js

API Routes
Authentication
Method	Route	Description
GET	/signup	Signup form
POST	/signup	Register user
GET	/login	Login page
POST	/login	Authenticate user
GET	/logout	Logout
Listings
Method	Route	Description
GET	/listings	All listings
POST	/listings	Create listing
GET	/listings/:id	View listing
PUT	/listings/:id	Update listing
DELETE	/listings/:id	Delete listing
Reviews
Method	Route
POST	/listings/:id/reviews
DELETE	/listings/:id/reviews/:id
Future Improvements

Multiple image uploads

Search and filters

User profile dashboard

Booking system

Wishlist / Favorites

Admin panel
