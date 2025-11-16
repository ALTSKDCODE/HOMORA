# 🏠 Homora — Real Estate Listing Platform

Homora is a full‑stack web application inspired by Airbnb, allowing users to **create, browse, review, and manage property listings**. It includes authentication, image uploads, maps, reviews, and a clean UI.

---

## 🚀 Features

* 🏡 **Listings Management** (CRUD)
* 📸 **Image Uploads** using Cloudinary
* 🔐 **User Authentication** (Register/Login, Session-based)
* 🗺️ **Map Integration** using Mapbox
* ⭐ **Reviews & Ratings**
* 👤 **Owner System** (Only owners can edit/delete)
* 🧭 **Responsive UI** with EJS & Bootstrap
* 🗄️ **MongoDB Database**
* ⚙️ **MVC Architecture**

---

## 🛠️ Tech Stack

### **Backend**

* Node.js
* Express.js
* MongoDB with Mongoose
* Passport.js for Authentication

### **Frontend**

* EJS Templates
* Bootstrap 5
* Custom CSS

### **Other Tools**

* Cloudinary (Image Storage)
* Multer (Image Upload Middleware)
* Mapbox (Map & Geo‑location)
* Dotenv

---

## 📂 Project Structure

```
HOMORA/
├── app.js
├── routes/
├── controllers/
├── models/
├── public/
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   ├── reviews/
└── init/
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ALTSKDCODE/HOMORA.git
cd HOMORA
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

Add the following:

```
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_key
CLOUD_API_SECRET=your_secret
MAP_TOKEN=your_mapbox_token
SECRET=session_secret
ATLASDB_URL=your_mongodb_url
```

### 4️⃣ Run the App

```bash
node app.js
```

Open in browser: **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 Seeding the Database

To populate test listings:

```bash
cd init
node seed.js
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Pull requests are welcome! Feel free to improve features or fix bugs.

---

## 💬 Support

If you need help, feel free to ask me anytime!
