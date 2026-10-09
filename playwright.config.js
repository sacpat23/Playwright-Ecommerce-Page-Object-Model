const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({
  globalSetup: require.resolve("./global-setup"),
  testDir: "./tests",
  timeout: 60 * 1000,
  expect: {
    timeout: 30 * 1000,
  },

  reporter: "html",
  workers: 1,

  use: {
    browserName: "chromium",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    storageState: "./.auth/user.json",
  },

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        browserName: "chromium",
        headless: true,
        storageState: "./.auth/user.json",
      },
    },
    {
      name: "safari",
      use: {
        ...devices["Desktop Safari"],
        browserName: "webkit",
        headless: true,
        storageState: "./.auth/user.json",
      },
    },
    {
      name: "mobile-chrome",
      use: {
        ...devices["iPhone 17 Pro Max"],
        browserName: "chromium",
        headless: true,
        storageState: "./.auth/user.json",
      },
    },
  ],
});
