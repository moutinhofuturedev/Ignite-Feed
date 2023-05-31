import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'amj4tt',
  e2e: {
    baseUrl: "https://feed-ruddy.vercel.app/",
    screenshotOnRunFailure: true,
    video: true,
    videoUploadOnPasses: true,
  },
});
