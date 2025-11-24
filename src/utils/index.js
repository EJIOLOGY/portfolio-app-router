export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

await delay(2000).then(() => console.log("Delay of 2 seconds"));
