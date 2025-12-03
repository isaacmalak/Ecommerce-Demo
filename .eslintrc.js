import projectRules from "./eslint-rules/index.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  extends: ["next", "next/core-web-vitals"],

  rules: {
    "project-rules/enforce-page-main-tag": "warn",
    "project-rules/enforce-page-name-shell": "warn"
  },

  // Register dynamically-loaded plugin
  plugins: [
    {
      name: "project-rules",
      rules: projectRules.rules
    }
  ]
};
