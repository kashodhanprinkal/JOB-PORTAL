
# Job Portal Project

## Overview

This project is a **Job Portal** web application where users can sign up to search and apply for jobs. Employers can post job listings, while job seekers can upload resumes, create profiles, and apply for jobs. The application uses **Node.js** and **MongoDB** for the backend, and integrates **Cloudinary** for managing file uploads.

Key features include user authentication, job search and filtering, resume uploads, and an employer dashboard for managing job postings. The frontend uses **shadcn/ui** for ready-to-use UI components to keep the interface simple and user-friendly.

## Features

- **User Authentication:**
  - Secure sign-up and login using **JWT (JSON Web Token)** for managing user sessions.
  - **bcrypt.js** for password hashing and security.
  
- **Job Search & Filter:**
  - Job listings can be filtered by job title, location, salary, and more.
  - Pagination of job listings using **mongoose-paginate**.

- **Job Application:**
  - Job seekers can upload resumes and apply for jobs directly via the portal.
  - **Multer** and **Cloudinary** integration for handling file uploads (resumes, profile pictures).

- **Employer Dashboard:**
  - Employers can create, update, and manage their job listings.
  - **Express Validator** for form validation in job posting.

- **Profile Management:**
  - Job seekers can manage their profiles, including adding experience, education, and other details.
  - User avatars are uploaded and stored via **Cloudinary**.

- **Responsive UI:**
  - Frontend built using **shadcn/ui** for ready-to-use, simple, and responsive UI components.
  - **Bootstrap** for additional UI elements.
  - **EJS** templates for server-side rendering of dynamic content.

- **Database:**
  - **MongoDB** and **Mongoose** for managing job listings, user profiles, and applications.
  
- **Admin Features:**
  - Admin users can manage job postings, user accounts, and handle reports of inappropriate content.

## Packages and Their Use

### Backend Packages

1. **Express.js**  
   - A fast, unopinionated, and minimalist web framework for **Node.js** used for building the server-side logic, handling routes, middleware, and APIs.

2. **Mongoose**  
   - An ODM (Object Data Modeling) library for MongoDB, used to define schemas and manage database interactions.

3. **jsonwebtoken (JWT)**  
   - Used for generating and verifying JWT tokens for user authentication. Ensures secure login and user sessions.

4. **bcrypt.js**  
   - A library for hashing passwords to securely store and compare passwords during user login.

5. **Multer**  
   - Middleware for handling `multipart/form-data`, used for file uploads like resumes or profile pictures.

6. **Cloudinary**  
   - An image and file management service used to store and serve images and resumes. Integrated with Multer for managing uploads.

7. **dotenv**  
   - Loads environment variables from a `.env` file into `process.env`. Useful for storing sensitive information like API keys, database URIs, and secrets.

8. **Express Validator**  
   - A set of middlewares that validate and sanitize incoming data in requests, ensuring input data (e.g., in forms) is safe and valid.

9. **mongoose-paginate**  
   - A pagination plugin for Mongoose, used to paginate job listings on the portal.

### Frontend/UI Packages

1. **EJS (Embedded JavaScript Templates)**  
   - A templating language used to create dynamic HTML pages on the server side by embedding JavaScript logic into HTML.

2. **Bootstrap**  
   - A popular CSS framework used for creating a responsive and mobile-first user interface with pre-designed components (buttons, forms, modals, etc.).

3. **shadcn/ui**  
   - A library of ready-to-use UI components that integrates with your design system, providing simple and reusable components for building the user interface quickly and efficiently.

### Utility and Dev Packages

1. **Nodemon**  
   - A development tool that automatically restarts the Node.js server when file changes are detected, making development faster.

2. **CORS**  
   - Middleware that enables Cross-Origin Resource Sharing, allowing your API to be accessed from different domains.

3. **Morgan**  
   - HTTP request logger middleware, used to log details of incoming requests for easier debugging and monitoring.

4. **Body-parser**  
   - Middleware for parsing incoming request bodies in a middleware before your handlers, particularly useful for handling form submissions.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Jobs

- `GET /api/jobs` - Get all job listings
- `POST /api/jobs` - Create a new job listing (Employer only)
- `PUT /api/jobs/:id` - Update a job listing (Employer only)
- `DELETE /api/jobs/:id` - Delete a job listing (Employer only)

### Applications

- `POST /api/applications` - Submit a job application
- `GET /api/applications` - Get all job applications for a user



