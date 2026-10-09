const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({
  globalSetup: require.resolve("./global-setup"),
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 20 * 1000,
  },

  reporter: "html",

  use: {
    browserName: "chromium",
    headless: false,
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
        storageState: "./.auth/user.json",
      },
    },
    {
      name: "safari",
      use: {
        ...devices["Desktop Safari"],
        browserName: "webkit",
        storageState: "./.auth/user.json",
      },
    },
    {
      name: "mobile-chrome",
      use: {
        ...devices["iPhone 17 Pro Max"],
        browserName: "chromium",
        storageState: "./.auth/user.json",
      },
    },
  ],
});
