import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://feed-ruddy.vercel.app/",
    screenshotOnRunFailure: false,
    video: false,
    videoUploadOnPasses: false,
  },
});
