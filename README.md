# Book Review App (Frontend)

A simple React-based web application for browsing, reviewing, and managing book reviews.

## 📁 Project Structure

```
book-review-app/
│
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BookDetails.css
│   │   ├── BookDetails.jsx
│   │   ├── BookList.css
│   │   ├── BookList.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Login.css
│   │   ├── Login.jsx
│   │   ├── ReviewForm.css
│   │   ├── ReviewForm.jsx
│   │   ├── Signup.css
│   │   ├── Signup.jsx
│   │   ├── UserProfile.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🧪 Tech Stack

- **React** (with JSX components)
- **Vite** (for lightning-fast builds)
- **CSS** for styling each component
- **ESLint** for linting and code quality

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14
- npm (or yarn)

### Installation

```bash
git clone https://github.com/YogeeshInnovates/book_review_app.git
cd book-review-app
npm install
```

### Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app in your browser.

## 📂 Component Overview

| Component        | Description                            |
|------------------|----------------------------------------|
| `BookList.jsx`   | Displays a list of available books     |
| `BookDetails.jsx`| Shows detailed view of a selected book |
| `ReviewForm.jsx` | Allows user to submit a book review    |
| `Login.jsx`      | User login form                        |
| `Signup.jsx`     | User signup form                       |
| `Header.jsx`     | Navigation header                      |
| `UserProfile.jsx`| Displays user details and reviews      |

Each component is styled using its corresponding `.css` file.

## ⚙️ Scripts

```bash
npm run dev       # Run development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## ✅ Linting

Run ESLint:

```bash
npm run lint
```

## 🔒 Environment Variables

There is **no `.env` file** currently. If needed (e.g., for API endpoints), create a `.env` file in the root:

```bash
VITE_API_URL=http://your-api-url.com
```

Then use in code like:

```js
import.meta.env.VITE_API_URL
```

## 📦 Deployment


You can deploy this app using services like **Vercel**, **Netlify**, **Render**, or any static host that supports **Vite** builds.

```bash
npm run build
```

Then deploy the `dist/` folder.

## 📄 License

This project is open-source and available under the MIT License.
