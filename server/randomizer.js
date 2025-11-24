const fs = require("fs");
const path = require("path");

const NUM_COUNT = 20;
const FILE_PATH = path.join(__dirname, "content", "blogs.json");
const TEMP_PATH = FILE_PATH + ".tmp";
const UPDATE_INTERVAL = 3000; // 3 seconds

/**
 * Read and parse JSON file safely
 */
function readJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    throw new Error(`Failed to read ${filePath}: ${err.message}`);
  }
}

/**
 * Write JSON file atomically (write to temp, then rename)
 */
function writeJsonFileAtomic(filePath, data) {
  const tempPath = filePath + ".tmp";
  try {
    const jsonContent = JSON.stringify(data, null, 2);
    fs.writeFileSync(tempPath, jsonContent, "utf-8");
    fs.renameSync(tempPath, filePath);
  } catch (err) {
    // Clean up temp file on failure
    try {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch (_) {}
    throw new Error(`Failed to write ${filePath}: ${err.message}`);
  }
}

/**
 * Randomize blog IDs and slugs
 */
function randomizeBlogData(blogs) {
  return blogs.map((blog) => ({
    ...blog,
    id: Math.floor(Math.random() * NUM_COUNT),
    slug: `blog-${Math.floor(Math.random() * NUM_COUNT)}`,
  }));
}

/**
 * Main randomizer function
 */
function randomize() {
  try {
    // Read current data
    const blogs = readJsonFile(FILE_PATH);

    // Validate data is an array
    if (!Array.isArray(blogs)) {
      throw new Error("blogs.json must contain an array");
    }

    // Randomize
    const updated = randomizeBlogData(blogs);

    // Write atomically
    writeJsonFileAtomic(FILE_PATH, updated);

    console.log(
      `✓ Randomized ${updated.length} blogs at ${new Date().toISOString()}`
    );
  } catch (err) {
    console.error(`✗ Randomizer error: ${err.message}`);
  }
}

/**
 * Start the randomizer
 */
function start() {
  console.log("🚀 Randomizer started");
  console.log(`📝 File: ${FILE_PATH}`);
  console.log(`⏱️  Interval: ${UPDATE_INTERVAL}ms`);

  // Run once immediately, then on interval
  randomize();
  setInterval(randomize, UPDATE_INTERVAL);
}

// Start on module load
start();
