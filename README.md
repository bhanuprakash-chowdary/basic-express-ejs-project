# basic-express-ejs-project

# Express EJS Practice ✨

A simple Node.js + Express web app using EJS as the template engine.  
This project demonstrates passing dynamic data from the server into EJS templates and rendering UI content.

## 📦 What’s Inside?
- EJS view engine setup
- Reusable layouts using partials
- Rendering dynamic content from Express
- Clean project structure for beginners

## Setup using 
```bash
npm init -y 

npm i express ejs
```

## ▶️ Run the App
```bash
npm install
npm start

http://localhost:8000

```
## 📌 What It Shows

- A title rendered dynamically using <%= %>

- A loop that prints a list of people

- A shared header partial included with <%- include() %>