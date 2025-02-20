# 🎬 MovieMagic

MovieMagic is a web-based application for managing film productions and their cast. Developed with Node.js, Express.js, MongoDB, and Mongoose, the platform provides efficient organization, searching, and updating of film-related data through a structured and scalable architecture.

## 📌 Key Features
- 🔍 Advanced Movie Search – Filter movies by title, genre, and release year.
- 🎬 Movie Creation – Add new movies to the database with structured data validation.
- 🎭 Cast Management – Add new actors to the database with detailed metadata.
- 📋 Detailed Movie Information – View all details, including cast, genre, and production year.
- 🔗 Actor Assignment to Films – Assign roles and characters to actors within specific films.
- 🔐 User Authentication – Secure user registration and login system.
- 🛠 Middleware Support – Authentication and temporary data middleware for secure and efficient processing.
- ✅ Model Validation – Ensures data integrity by applying validation rules to models.

## 🚀 Installation & Configuration

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd softuni-workshop-MovieMagic
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Configuration
Create a `.env` file in the root directory with the following content:
```env
DATABASE_URI=mongodb://localhost:27017/moviemagic
JWT_SECRET=$2b$10$bzBTtp5yBLCQP13KhySHTWKDqaNbLn.K4qNM.XxSshth4ljwjV1yC
```
📌 **Important:** Ensure MongoDB is running locally or via a cloud service such as MongoDB Atlas.

It is recommended to change the content of JWT_SECRET for security purposes.




### 4️⃣ Start the Server
```bash
npm start
```
The application will be accessible at: 🔗 `http://localhost:5000`

## 📂 Project Structure
```
softuni-workshop-MovieMagic/
│-- src/
│   │-- controllers/
│   │   ├── auth-controller.js
│   │   ├── cast-controller.js
│   │   ├── home-controller.js
│   │   ├── movie-controller.js
│   │-- helpers/
│   │-- middlewares/
│   │   ├── auth-middleware.js
│   │   ├── temp-data-middleware.js
│   │-- models/
│   │   ├── Cast.js
│   │   ├── Movie.js
│   │   ├── User.js
│   │-- services/
│   │   ├── auth-service.js
│   │   ├── cast-service.js
│   │   ├── movie-service.js
│   │-- utils/
│   │   ├── error-utils.js
│   │-- views/
│   │   ├── auth/
│   │   │   ├── login.hbs
│   │   │   ├── register.hbs
│   │   ├── cast/
│   │   │   ├── create.hbs
│   │   ├── layouts/
│   │   │   ├── main.hbs
│   │   ├── movie/
│   │   │   ├── attach-cast.hbs
│   │   │   ├── details.hbs
│   │   ├── partials/
│   │   │   ├── movie.hbs
│   │   ├── 404.hbs
│   │   ├── about.hbs
│   │   ├── create.hbs
│   │   ├── home.hbs
│   │   ├── search.hbs
│-- public/
│   │-- css/
│   │-- img/
│-- index.js
│-- routes.js
```

## 📖 API Endpoints

### 🎬 Movie Endpoints
| Method | Endpoint                      | Description                                           |
| ------ | ----------------------------- | ----------------------------------------------------- |
| GET    | /movies/search                | Retrieves movies based on filters                     |
| GET    | /movies/create                | Serves the movie creation form                        |
| POST   | /movies/create                | Adds a new movie to the database                      |
| GET    | /movies/:movieId/details     | Retrieves detailed information about a specific movie |
| GET    | /movies/:movieId/attach-cast | Serves the actor attachment form                      |
| POST   | /movies/:movieId/attach-cast | Assigns an actor to a movie                           |

### 🎭 Cast Endpoints
| Method | Endpoint     | Description                      |
| ------ | ------------ | -------------------------------- |
| GET    | /cast        | Retrieves all actors             |
| GET    | /cast/create | Serves the actor creation form   |
| POST   | /cast/create | Adds a new actor to the database |

### 🔐 Authentication Endpoints
| Method | Endpoint         | Description                   |
| ------ | --------------- | ----------------------------- |
| POST   | /auth/login     | User login authentication     |
| POST   | /auth/register  | User registration             |
| GET    | /auth/register   | Serves the user creation form     |
| GET     | /auth/login     |  Serves the login page |

## 🛠️ Technology Stack
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for Node.js
- **MongoDB + Mongoose** – NoSQL database and ORM for data management
- **Handlebars (hbs)** – Templating engine for dynamic content rendering
- **dotenv** – Environment variable management

## 📌 Future Enhancements
- ✅ User authentication and role-based access control (Implemented)
- 🔄 Enhanced search functionality (Filters, sorting, pagination)

## 📄 License
This project is licensed under the MIT License.

