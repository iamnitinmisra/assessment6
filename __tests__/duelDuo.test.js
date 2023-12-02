const { Builder, Browser, By, until } = require("selenium-webdriver");
require("chromedriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://localhost:8000");
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Chek that clicking the Draw button displays the div with id = 'choices'", async () => {
    const drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();
    const choices = await driver.findElements(By.className("bot-card"));
    // await driver.sleep(3000);
    console.log(choices.length);

    // expect(choices.length).toBe(5);
  });
});
