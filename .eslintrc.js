/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * This file is the result of tslint-to-eslint-config with manual additions / corrections.
 * https://github.com/typescript-eslint/tslint-to-eslint-config
 */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:json/recommended',
    'plugin:jasmine/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    ecmaVersion: 9,
    sourceType: 'module',
    extraFileExtensions: ['.json']
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: true,
      typescript: {
        project: [
          './tsconfig.eslint.json'
        ]
      }
    }
  },
  plugins: [
    '@typescript-eslint',
    'prefer-arrow',
    'import',
    'jsdoc',
    'jasmine',
    'json'
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array'
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?'
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?'
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?'
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
          }
        }
      }
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        FunctionDeclaration: {
          parameters: 'first'
        },
        FunctionExpression: {
          parameters: 'first'
        },
        SwitchCase: 1
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'public-instance-field',
          'public-static-method',
          'public-instance-method',
          'protected-static-method',
          'protected-instance-method',
          'private-static-method',
          'private-instance-method'
        ]
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow:
          [
            'constructors'
          ]
      }
    ],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: true
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'brace-style': [
      'error',
      '1tbs'
    ],
    camelcase: 'error',
    'comma-dangle': 'error',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'off',
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean'
    ],
    'id-match': 'error',
    'import/no-deprecated': 'warn',
    'import/no-unresolved': 'error',
    'import/order': [
      'error', {
        groups: [
          ['builtin', 'external'],
          'parent',
          'sibling',
          'internal'
        ],
        pathGroups: [
          {
            pattern: '@bepo65/**',
            group: 'parent',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ],
    'jasmine/expect-matcher': 'warn',
    'jasmine/expect-single-argument': 'warn',
    'jasmine/named-spy': 'off',
    'jasmine/no-focused-tests': 'error',
    'jasmine/no-disabled-tests': 'warn',
    'jasmine/no-describe-variables': 'off',
    'jasmine/no-suite-dupes': 'warn',
    'jasmine/no-spec-dupes': 'warn',
    'jasmine/missing-expect': 'off',
    'jasmine/no-suite-callback-args': 'error',
    'jasmine/no-assign-spyon': 'off',
    'jasmine/no-unsafe-spy': 'warn',
    'jasmine/no-global-setup': 'error',
    'jasmine/no-pending-tests': 'warn',
    'jasmine/no-promise-without-done-fail': 'warn',
    'jasmine/no-expect-in-setup-teardown': 'warn',
    'jasmine/new-line-between-declarations': 'warn',
    'jasmine/new-line-before-expect': 'warn',
    'jasmine/prefer-jasmine-matcher': 'warn',
    'jasmine/prefer-toHaveBeenCalledWith': 'warn',
    'jasmine/prefer-toBeUndefined': 'off',
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/no-types': 'warn',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'json/*': 'error',
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'  // eslint-disable-line no-undef
    ],
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 140
      }
    ],
    'new-parens': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': [
      'error',
      'rxjs/Rx'
    ],
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        allowStandaloneDeclarations: true
      }
    ],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single'
    ],
    radix: 'error',
    semi: [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '/'
        ]
      }
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off'
  }
};
