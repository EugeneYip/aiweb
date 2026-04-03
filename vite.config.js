import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

function getBase() {
  // If custom domain is set in public/CNAME, serve from root
  const cnamePath = path.resolve(__dirname, "public/CNAME");
  if (fs.existsSync(cnamePath)) {
    const cname = fs.readFileSync(cnamePath, "utf-8").trim();
    if (cname && !cname.startsWith("#")) {
      return "/";
    }
  }
  // In GitHub Actions, derive base path from repo name
  const repo = process.env.GITHUB_REPOSITORY;
  if (repo) {
    const repoName = repo.split("/")[1];
    return `/${repoName}/`;
  }
  // Local dev
  return "/";
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
