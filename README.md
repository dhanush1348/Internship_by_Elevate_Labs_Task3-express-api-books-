# 📚 Book Management REST API – Node.js + Express

This is a simple RESTful API built with **Node.js** and **Express** to manage books. It supports CRUD operations and is designed for learning and demonstration purposes.

---

## 🚀 Features

- Create a new book
- Retrieve all books
- Retrieve a book by ID
- Update a book
- Delete a book
- Proper error handling and validation

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Postman** – for API testing
- **VS Code** – for development

---
## 📁 Project Structure

Internship_day_3/
├── node_modules/
├── index.js # Main server file
├── package.json # Project metadata and dependencies
├── package-lock.json
└── README.md



---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhanush1348/Internship_by_Elevate_Labs_Task3-express-api-books-.git
   cd Internship_day_3
   npm install
   node index.js
The server will start on http://localhost:3000

---

##🔗 API Endpoints

Method       Endpoint	      Description
GET	         /books        	Get all books
GET	         /books/:id	    Get a book by ID
POST	       /books	        Add a new book
PUT	         /books/:id	    Update book by ID
DELETE	     /books/:id	     Delete book by ID

---

🧪 API Testing with Postman
You can test the API using Postman. Import the endpoints manually or create a Postman collection.
---

📄 Sample Book JSON Format

 -json
 -----
           {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publishedYear": 1925
    }
 -----

 👨‍💻 Author
Created by Dhanush Reddy – For Elevate Labs Internship.

