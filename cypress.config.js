import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    screenshotOnRunFailure: false,
    video: false,
    videoUploadOnPasses: false,
  },
});
