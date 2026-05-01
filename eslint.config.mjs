import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const config = [
  {
    ignores: [".next/**", ".venv/**", "node_modules/**"],
  },
  ...next,
  prettier,
];

export default config;
