# Movie Magic

**Movie Magic** is a website designed to attract movie enthusiasts. The platform aims to create an engaging and interactive experience for movie fans, allowing them to explore, search, and learn about their favorite movies.

---

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Movie Model](#movie-model)
- [Templates](#templates)
- [Search Functionality](#search-functionality)
- [License](#license)

---

## Installation

### 1. Initialize the Project
Run the following command to set up a new Node.js project:
```bash
npm init
```

### 2. Install Dependencies
Install the necessary packages:
```bash
npm install express express-handlebars path
```

---

## Features

- **Homepage:** Displays all movies stored in the database.
- **About Page:** Provides information about the platform.
- **Create Movie:** A form to add new movies to the database.
- **Movie Details:** Displays detailed information about a selected movie.
- **Search:** Allows users to filter movies by title, genre, or year.
- **404 Page:** Displays a custom error page for undefined routes.

---

## Project Structure
```
softuni-workshop-MovieMagic/
├── src/
│   ├── controllers/
│   │   ├── home-controller.js
│   │   ├── movie-controller.js
│   ├── helpers/
│   │   ├── rating.js
│   ├── public/
│   │   ├── css/
│   │   ├── img/
│   ├── services/
│   │   ├── movie-service.js
│   ├── views/
│   │   ├── layouts/
│   │   │   ├── main.hbs
│   │   ├── partials/
│   │   │   ├── movie.hbs
│   │   ├── 404.hbs
│   │   ├── about.hbs
│   │   ├── create.hbs
│   │   ├── details.hbs
│   │   ├── home.hbs
│   │   ├── search.hbs
│   ├── index.js
│   ├── movies.js
│   ├── routes.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

---

## Routes

| Route          | Description                                     |
|----------------|-------------------------------------------------|
| `/`            | Displays all movies on the main page.           |
| `/about`       | Renders the about page.                        |
| `/create`      | Renders the form to create a new movie.         |
| `/details/:id` | Displays details of a specific movie.           |
| `/search`      | Filters movies by title, genre, or year.        |
| Any other      | Displays a 404 Not Found page.                 |

---

## Movie Model

Each movie in the database has the following properties:

| Property      | Type    |
|---------------|---------|
| `id`          | Number  |
| `title`       | String  |
| `category`    | String  |
| `genre`       | String  |
| `director`    | String  |
| `year`        | Number  |
| `imageURL`    | String  |
| `rating`      | Number  |
| `description` | String  |

---

## Templates
The project uses Handlebars for templating. Dynamic parts of the HTML are identified and rendered using Handlebars syntax.

### Pages:
- **Main Page:** Displays all movies.
- **About Page:** Information about Movie Magic.
- **Create Page:** Form to add new movies.
- **Details Page:** Information about a specific movie.
- **Not Found Page:** Custom 404 error page.

---

## Search Functionality

The search page is accessible via the `/search` route. It allows users to filter movies by:
- **Title** (case-insensitive, partial match)
- **Genre**
- **Year**

If no search criteria are entered, all movies are displayed.

---

## License

© SoftUni – https://softuni.org. Unauthorized copy, reproduction, or use is not permitted.