import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/_NOTES", "**/build"]), {
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "airbnb",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
    )),

    plugins: {
        react: fixupPluginRules(react),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "@typescript-eslint/ban-ts-comment": 1,
        quotes: [2, "double"],

        "comma-dangle": [1, {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "never",
        }],

        indent: 1,

        "object-curly-newline": [1, {
            multiline: true,
            consistent: true,
        }],

        "max-len": [1, {
            code: 100,
        }],

        "operator-linebreak": 1,
        "no-confusing-arrow": 1,
        "function-paren-newline": 1,
        "import/prefer-default-export": 0,
        "import/extensions": 0,

        "react/jsx-filename-extension": [1, {
            extensions: [".tsx", ".ts"],
        }],

        "react/button-has-type": 0,

        "react/jsx-one-expression-per-line": [0, {
            allow: "single-child",
        }],

        "arrow-body-style": 2,
        "implicit-arrow-linebreak": 1,

        "react/function-component-definition": [2, {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
        }],

        "react/no-array-index-key": 1,
        "react/jsx-curly-newline": 1,
        "no-shadow": 0,
        "@typescript-eslint/no-shadow": 2,
    },
}]);