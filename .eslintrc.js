module.exports = {
  extends: ["airbnb-typescript-prettier", "plugin:import/recommended", "plugin:import/typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "no-nested-ternary": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["external", ["internal", "parent", "sibling", "index"], "unknown"],
      },
    ],
    "prettier/prettier": "error",
    "default-case": "off",
    "react-hooks/exhaustive-deps": "off",
  },
  plugins: ["prettier", "import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"],
      },
    },
  },
};
