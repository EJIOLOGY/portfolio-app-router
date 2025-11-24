const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");
app.use(cors());

const pathToContent = path.join(__dirname, "content");
console.log(pathToContent);

app.get("/api/blogs", (req, res) => {
  const blogsPath = path.join(pathToContent, "blogs.json");
  const blogs = fs.readFileSync(blogsPath, "utf-8");
  res.json({ data: JSON.parse(blogs) });
});
app.get("/api/portfolios", (req, res) => {
  const portfolioPath = path.join(pathToContent, "portfolios.json");
  const portfolios = fs.readFileSync(portfolioPath, "utf-8");
  res.json({ data: JSON.parse(portfolios) });
});

app.get("/", (req, res) => {
  res.send("Hello from the ExpressJS backend server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
