# 🌐 Web App CI/CD Project (Build → Test → Deploy)

## 🎯 Project Overview

This project demonstrates a **basic web application** with a GitHub Actions workflow that:

1. **Builds** the app (install dependencies + prepare artifacts)
2. **Tests** the app (run unit tests)
3. **Deploys** automatically (for example, GitHub Pages)

---

## 📂 Project Structure

```
web-app/
│
├── index.html             # Main web page
├── app.js                 # JavaScript logic
├── style.css              # CSS styling
├── test_app.js            # Simple Jest test
└── .github/
    └── workflows/
        └── ci.yml         # GitHub Actions workflow
```

---

## 📝 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Web App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello GitHub Actions 🚀</h1>
  <button onclick="greet()">Click Me</button>
  <p id="output"></p>

  <script src="app.js"></script>
</body>
</html>
```

---

## 📝 style.css

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
```

---

## 📝 app.js

```javascript
function greet() {
  document.getElementById("output").innerText = "Hello from JavaScript!";
}

module.exports = { greet };  // For testing with Jest
```

---

## 📝 test\_app.js (Unit Test with Jest)

```javascript
const { greet } = require("./app");

test("greet function exists", () => {
  expect(typeof greet).toBe("function");
});
```

---

## ⚙️ GitHub Actions Workflow (ci.yml)

```yaml
name: Web App CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm install jest --save-dev

  test:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Run tests
        run: npx jest

  deploy:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## 🚀 How It Works

1. **Build**: Installs Node.js + dependencies
2. **Test**: Runs Jest unit tests
3. **Deploy**: Publishes site to GitHub Pages after tests pass

---

## 🌍 Deployment

* After merge to **main**, site will be deployed automatically.
* Visit `https://<your-username>.github.io/<repo-name>/` to see it live.

---
