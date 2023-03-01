/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es2022: true
    },
    globals: {
        process: false,
        require: false
    },
    extends: ["eslint:recommended"],
    settings: {
    },
    rules: {
        "spaced-comment": [2, "always", { exceptions: ["html", "css"] }],
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "for-direction": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-control-regex": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-inner-declarations": 2,
        "no-regex-spaces": 2,
        "no-obj-calls": 2,
        "no-template-curly-in-string": 2,
        semi: [2, "always"],
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "no-unsafe-negation": 2,
        "valid-typeof": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "default-case": 0,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        eqeqeq: [1, "smart"],
        "no-caller": 2,
        "no-empty-function": 1,
        "no-empty-pattern": 2,
        "no-eval": 2,
        "no-global-assign": 2,
        "no-floating-decimal": 2,
        "no-fallthrough": 2,
        "no-labels": 2,
        "no-extra-label": 2,
        "no-extra-bind": 2,
        "no-iterator": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-void": 2,
        "no-with": 2,
        "prefer-promise-reject-errors": 1,
        "require-await": 2,
        "vars-on-top": 2,
        "wrap-iife": [2, "inside"],

        /**
     * 变量
     */
        "no-delete-var": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-unused-vars": 1,
        "no-use-before-define": [
            2, {
                functions: false
            }
        ],

        "array-bracket-newline": [1, { multiline: true }],
        "array-bracket-spacing": 2,
        "array-element-newline": [1, "consistent"],
        "block-spacing": 2,
        "brace-style": 2,
        camelcase: 2,
        "comma-dangle": [2, "never"],
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": [2, "that"],
        "func-call-spacing": 2,

        "function-paren-newline": [1, "multiline"],
        indent: [2, 4, { SwitchCase: 1 }],
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": 0,
        "lines-around-comment": 2,
        "lines-between-class-members": 2,
        "max-len": [
            2, {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTrailingComments: true,
                ignoreTemplateLiterals: true
            }
        ],
        "max-lines": [1, 1000],
        "max-statements-per-line": 2,
        "new-cap": [
            2, {
                capIsNew: false
            }
        ],
        "new-parens": 2,
        "newline-per-chained-call": 2,
        "no-bitwise": 2,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 1,

        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": [2, { allowAfterThis: true }],
        quotes: [2, "double"],
        "quote-props": [2, "as-needed"],
        "operator-linebreak": [2, "before"],
        "one-var": [2, "never"],
        "object-property-newline": 1,
        "object-curly-spacing": [2, "always"],
        "object-curly-newline": [
            1, {
                multiline: true,
                consistent: true
            }
        ],
        "no-whitespace-before-property": 2,
        "no-unneeded-ternary": 2,
        "semi-spacing": 2,
        "semi-style": 2,
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "never"],
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "switch-colon-spacing": 2,
        "template-tag-spacing": 2,

        /**
     * ES6相关规则
     */
        "arrow-parens": [2, "as-needed"],
        "arrow-body-style": 2,
        "arrow-spacing": 2,
        "generator-star-spacing": [
            2, {
                before: false,
                after: true
            }
        ],
        "no-class-assign": 2,
        "no-confusing-arrow": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 0,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-rename": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-const": 0,
        "prefer-destructuring": [
            2, {
                array: false,
                object: true
            }
        ],
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "rest-spread-spacing": 2,
        "template-curly-spacing": 2,
        strict: [2, "global"]
    }
};
