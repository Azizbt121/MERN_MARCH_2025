## 📁 server/ – Backend Overview

This folder contains the entire backend of the MERN application. Below is a breakdown of its structure and purpose:

---

### 🗂️ Folder & File Structure

#### `config/`
- Contains configuration files related to the backend.
- `mongoose.config.js` – Handles the connection to MongoDB Atlas using Mongoose.

#### `controllers/`
- Contains logic for each model, including operations like create, read, update, and delete (CRUD).

#### `models/`
- Holds all the Mongoose schema definitions for your application data.

#### `routes/`
- Manages API route definitions and links them to the corresponding controllers.

#### `node_modules/`
- Automatically generated folder that stores all project dependencies installed via `npm`.

---

### ⚙️ Configuration & Core Files

#### `.env`
- Stores sensitive environment variables like database URI, port numbers, and secret keys.

#### `package.json`
- Defines the project metadata, dependencies, scripts, and configurations.

#### `package-lock.json`
- Automatically generated to lock dependencies to a specific version tree for consistent installs.

#### `server.js`
- Main entry point for the backend server.
- Sets up the Express server, middleware, routes, and database connection.
