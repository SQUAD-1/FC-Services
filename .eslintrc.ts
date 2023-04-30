module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/tsx-filename-extension": [
            "warn",
            { extensions: [".ts", ".tsx"] },
        ],
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/consistent-type-imports": "off"
    },
};
