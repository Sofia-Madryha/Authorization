import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import pluginQuery from "@tanstack/eslint-plugin-query";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  {
    files: ["**/*.{ts,tsx}"]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        tsconfigRootDir: ".",
        project: ["tsconfig.json", "tsconfig.node.json", "tsconfig.app.json"]
      }
    }
  },

  { ignores: ["**/dev/*", "**/dist/*", "**/tests/*", "vite.config.ts"] },

  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "@tanstack/query": pluginQuery,
      "react-refresh": reactRefresh
    }
  },
  {
    rules: {
      // "react/react-in-jsx-scope": "off",
      // "react/jsx-uses-react": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "off",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-misused-promises": [
        2,
        {
          checksVoidReturn: {
            attributes: false
          }
        }
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"]
        }
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["modules/*/*"],
              message: "Please import only from the index file of the module."
            }
          ]
        }
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@tanstack/query/no-rest-destructuring": "off",
      "react-hooks/exhaustive-deps": "off",
      "prettier/prettier": "warn"
    }
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginQuery.configs["flat/recommended"]
);
