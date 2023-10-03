const puppeteer = require("puppeteer");

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://uk.wikipedia.org/wiki/React");
  await page.screenshot({ path: "amazing.png", fullPage: true });
  await browser.close();
}

start();
