# 🪸 CoralCare

**CoralCare** is a modern web application designed to raise awareness and drive action for the preservation of coral reefs. It provides insights, tools, and interactive experiences to educate users and empower conservation efforts.

> 🌊 Inspired by the real-world decline of coral reefs, especially the Great Barrier Reef, this project channels awareness into action. Through CoralCare, we hope to spark curiosity, promote education, and inspire small but powerful steps toward environmental protection.

---

## 🚀 Getting Started

Commence development by initiating the following commands:

### ▶️ Run in Development Mode

```bash
npm run start
```

### 🏗️ Build for Production

```bash
npm run build
```

### 🛠️ Tech Stack

**Frontend:** HTML, JavaScript (ES6), SCSS

**CSS Preprocessor:** SCSS (for modular, maintainable styling)

**Routing:** Client-side routing (via routes/index.js)

**Build Tools:** Webpack, Babel

**Package Manager:** npm


### 📁 Project Structure (Frontend Only)

```
coralCae/
├── client/
├── config/
├── public/
├── server/                  # (Not used – backend planned for future)
├── src/
│   ├── js/
│   │   ├── components/      # Reusable components (Navbar, Footer, CoralChart)
│   │   ├── containers/      # Pages (About, Home, Dashboard, LandingPage)
│   │   ├── routes/          # Route config (index.js), route helpers (utils.js)
│   │   ├── store/           # App state and UI data (cards, gallery, etc.)
│   └── static/
│       ├── css/
│       │   ├── base/        # Global styles (index.scss, styles.scss)
│       │   └── resources/   # Shared SCSS variables (_variables.scss)
│       └── videoBackground/ # Images and videos for visual storytelling
├── .eslintrc
├── package.json
├── README.md
└── webpackConfig.js
```

## 📘 Documentation
**Explore the complete documentation at:**
🔗 https://catalyst.1mg.com


# ⚙️ Catalyst Project Integration – Personal Log

This document outlines the challenges I faced while working with the Catalyst framework (used by 1mg) and the learnings I gathered along the way. It includes key code snippets, insights into the monorepo architecture, and my assumptions about the structure's intent.

---

## 🔍 Challenges Faced & Learnings

### 1. 📦 Serving Static Assets with Express

I initially attempted to load videos directly from the `src/static/VideoBackground` folder in my frontend. However, the assets weren’t loading as expected. After reviewing the documentation, I realized that static assets must be explicitly declared in the server middleware.

Here’s the code I added in `server.js`:

```
const express = require('express');
const path = require('path');

export function addMiddlewares(app) {
  app.use('/assets', express.static(path.join(__dirname, '../src/static/VideoBackground')));
}
```

2. 💫 Animation Integration & Package Installation Issues
While integrating animation libraries to add interactivity, I ran into issues due to Catalyst's internal package structure:

Some libraries had peer dependency mismatches.

Others required polyfills or additional setup due to the server-client hybrid nature of the repo.

🧠 Solution: I carefully read the documentation and experimented with different install methods. This helped me troubleshoot and configure animations successfully.

3. 🧩 Understanding the Project Structure (Catalyst Monorepo)
Initially, the folder structure felt overwhelming. But after exploring it a bit, things started to make sense:

It’s similar to React in how components are organized.

Backend and frontend code coexist but are well-modularized.

Each feature or module is independently maintained.

**🛠️ Assumption:**

Catalyst was likely built to manage backend microservices, and it's now expanding to integrate frontend modules — allowing better user engagement.

**📁 Why a Monorepo?**

Enables consistent tooling and code sharing.

Easier integration between frontend & backend services.

Ideal for scalable systems with micro frontends or mini dashboards.

## ✅ Final Takeaway

What felt like a complex architecture at first turned out to be well-structured, modular, and scalable — perfect for large-scale production environments.

Catalyst, as used in 1mg, is a powerful framework that bridges frontend and backend development in a single, unified monorepo — streamlining deployment, collaboration, and performance optimization.

### 🎥 Video Link
**Watch the demo video:**
[📽️ Click to Watch ](https://drive.google.com/file/d/1up5ZcrbGfeLyk2r_KguVqYyUkGcI_OJC/view?usp=sharing)



