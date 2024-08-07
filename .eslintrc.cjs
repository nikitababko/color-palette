module.exports = {
    "extends": [
        "airbnb-base",
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:unicorn/all"
    ],
    "root": true,
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        },
        "react": {
            "version": "detect"
        }
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
        "project": "tsconfig.app.json",
        "tsconfigRootDir": "./"
    },
    "ignorePatterns": [
        "dist",
        "node_modules",
        "src/vite-env.d.ts",
    ],
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "env": {
        "node": true,
        "es6": true,
        "browser": true,
        "jest": true
    },
    "overrides": [
        {
            "files": [
                "*.ts",
                "*.js",
                "*.tsx",
                "*.jsx"
            ],
            "rules": {
                "no-console": [
                    "error",
                    {
                        "allow": [
                            "error"
                        ]
                    }
                ],
                "@typescript-eslint/no-magic-numbers": "off",
                "import/prefer-default-export": "off",
                "@typescript-eslint/indent": "off",
                "arrow-body-style": "off",
                "import/no-extraneous-dependencies": [
                    "error",
                    {
                        "devDependencies": true
                    }
                ],
                "@typescript-eslint/ban-types": "off",
                "react/self-closing-comp": "error",
                "react/no-array-index-key": "error",
                "react/jsx-boolean-value": "error",
                "react/display-name": "off",
                "react/jsx-curly-brace-presence": "error",
                "react/forbid-component-props": "error",
                "react/jsx-fragments": [
                    "error",
                    "element"
                ],
                "react/jsx-no-useless-fragment": [
                    "error",
                    {
                        "allowExpressions": true
                    }
                ],
                "@typescript-eslint/consistent-type-imports": [
                    "error"
                ],
                "react/no-multi-comp": [
                    "error"
                ],
                "react/jsx-newline": "error",
                "react/jsx-filename-extension": [
                    "error",
                    {
                        "extensions": [
                            ".tsx"
                        ]
                    }
                ],
                "unicorn/filename-case": [
                    "error",
                    {
                        "cases": {
                            "camelCase": true,
                            "pascalCase": true
                        }
                    }
                ],
                "unicorn/prevent-abbreviations": [
                    "error",
                    {
                        "ignore": [
                            "Props"
                        ]
                    }
                ],
                "unicorn/no-null": "off",
                "unicorn/no-keyword-prefix": "off"
            }
        },
        {
            "files": [
                "*.js"
            ],
            "rules": {
                "@typescript-eslint/no-var-requires": 0
            }
        },
        {
            "files": [
                "*.tsx"
            ],
            "rules": {
                "react/prop-types": "off"
            }
        },
        {
            "files": [
                "*.js"
            ],
            "rules": {
                "unicorn/prefer-module": "off"
            }
        }
    ]
}

