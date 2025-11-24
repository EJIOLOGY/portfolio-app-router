import path from "path";
import fs from "fs";

const blogsDir = path.join(process.cwd(), "src", "content", "blogs");
const portfoliosDir = path.join(process.cwd(), "src", "content", "portfolios");
export function getBlogs() {
  const blogNames = fs.readdirSync(blogsDir);

  // blogNames.map(name=> (){})
  return blogNames;
}

export function getPortfolios() {
  const portfolioNames = fs.readdirSync(portfoliosDir);
  return portfolioNames;
}

// Utility function to simulate a delay
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
