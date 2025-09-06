# Project Requirements Document (PRD)

## 1. Project Name

**Social Media Post Creator (SaaS)**

---

## 2. Overview

The Social Media Post Creator is a SaaS web application designed to simplify and automate the process of creating, managing, and exporting social media content.  
It provides AI-powered caption generation, image compression, a content calendar, and secure file management.  
The system is built entirely on free and open-source technologies with scalability and accessibility in mind.

---

## 3. Target Users

- **3.1 Freelancers & Content Creators** – To create posts and manage their content efficiently
- **3.2 Marketing Teams** – To collaborate on campaigns, generate content ideas, and track schedules
- **3.3 Small Businesses** – To save time and automate social media workflows
- **3.4 Students & Beginners** – To learn content planning and digital marketing basics

---

## 4. Core Features

### 4.1 User Authentication & Authorization

- Secure signup/login with JWT authentication
- Google OAuth for easy sign-in
- Role-based access: Admin, Creator, Viewer

### 4.2 Project-Related Features

- Create, edit, and delete posts
- AI-powered caption & hashtag generation
- Image upload with automatic compression
- Export/download posts in multiple formats (image + text)
- Content calendar for scheduling posts

### 4.3 Collaboration

- Share posts/projects with team members
- Commenting and feedback system on drafts
- Activity log for tracking edits and exports

---

## 5. Technical Specifications

### 5.1 API Endpoints (Sample)

- `POST /api/auth/register` – Register user
- `POST /api/auth/login` – Login user
- `GET /api/users/me` – Get user profile
- `POST /api/posts/new` – Create a new post
- `GET /api/posts` – List all posts by user
- `PUT /api/posts/:id` – Update post details
- `DELETE /api/posts/:id` – Delete a post
- `POST /api/files/upload` – Upload image file
- `GET /api/calendar` – Retrieve scheduled posts

### 5.2 Permission Matrix

| Feature                     | Admin | Creator | Viewer |
| --------------------------- | :---: | :-----: | :----: |
| Create Post                 |  ✅   |   ✅    |   ❌   |
| Edit Post                   |  ✅   | ✅(own) |   ❌   |
| Delete Post                 |  ✅   | ✅(own) |   ❌   |
| Export Post                 |  ✅   |   ✅    |   ❌   |
| Manage Users                |  ✅   |   ❌    |   ❌   |
| View Shared Projects        |  ✅   |   ✅    |   ✅   |
| Upload Files                |  ✅   |   ✅    |   ❌   |
| Schedule Content (Calendar) |  ✅   |   ✅    |   ❌   |

### 5.3 Data Models

- User
- Post
- File
- Calendar Event
- Notification

---

## 6. Security Features

- **6.1** JWT authentication with refresh token support
- **6.2** OAuth 2.0 for third-party login
- **6.3** Password hashing with bcrypt
- **6.4** Role-based access control (RBAC)
- **6.5** Rate limiting for login endpoints
- **6.6** File scanning for malicious uploads
- **6.7** HTTPS-only communication

---

## 7. File Management

- **7.1** Images stored in cloud storage (e.g., Cloudinary / AWS S3 free tier)
- **7.2** Compression applied on upload to reduce size
- **7.3** Metadata (filename, uploader, createdAt) stored in DB
- **7.4** Access controlled by project permissions
- **7.5** Version history for edited images

---

## 8. Success Criteria

- **8.1** Smooth onboarding with signup/login working flawlessly
- **8.2** Secure authentication and role-based permissions in place
- **8.3** Ability to create, edit, and export posts without errors
- **8.4** AI-generated captions integrated successfully
- **8.5** File management system (upload, compress, export) fully functional
- **8.6** Content calendar operational with scheduling features
- **8.7** Deployment live with >95% uptime on free hosting (Render/Netlify)
- **8.8** Achieve 500+ active users within first deployment phase

---
