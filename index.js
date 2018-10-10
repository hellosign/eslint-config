module.exports = {
  extends: [
    'airbnb-base',
    // eslint can't find undefined components without this
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: '15.0', // React version, default to the latest React stable release
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    // Rule amendments go below.
    //
    // A list of available ESLint rules can be found here:
    // https://eslint.org/docs/rules/. Amendments must be
    // accompanied by a comment justifying the decision.

    // This is an example rule amendment. We actually prefer
    // to use "foo" because it makes such and such easier
    // without adding unnecessary complexity.
    //
    // https://eslint.org/docs/rules/no-foo
    // 'no-foo': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],


    // It's easy to miss the end of a multiline component that has props and
    // children
    //
    // <li
    //   className="template-modal__template-item"
    //   key={t.id}
    //   onClick={this.selectTemplate(t)} >
    //   {t.name}
    //
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'line-aligned',
      selfClosing: 'after-props',
    }],

    // This works along with 'react/jsx-closing-bracket-location' so we get
    // some spacing on `<Components someProp="foo" />`
    //
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': ['error', {
      // forbid <Component/ >
      closingSlash: 'never',
      // require <Component />
      beforeSelfClosing: 'always',
      // forbid < Component/> WHY DOES THIS EXIST?!
      afterOpening: 'never',
      beforeClosing: 'allow',
    }],

    // Using skipUndeclared, this will yell about missing
    // props for anything that has propTypes, but won't yell
    // at older components that don't have any propTypes.
    //
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['error', { skipUndeclared: true }],

    // We're not going to worry about this too much. Arrow
    // body style can really depend on what's best for a
    // given scenario and there's no catch-all solution.
    //
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // For consistency's sake, let's always wrap arrow
    // function parameters with parenthises, even if the
    // arrow function is a one-liner and container has only
    // one parameter.
    //
    // https://eslint.org/docs/rules/arrow-parens#always
    'arrow-parens': ['error', 'always'],

    // This makes class inheritance annoying sometimes. If
    // for example we want to create an abstract method
    // in a super class which doesn't immediately reference
    // "this".
    //
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // This rule has good intentions, but fails when
    // dealing with early exits in async callbacks with
    // error parameters.
    //
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // Sometimes from a code styling perspective,
    // else-return looks much cleaner.
    //
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',

    // Ban param reassignment, but allow modifying param
    // properties.
    //
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { props: false }],

    // Unary inrement and decrement statements can be
    // dangerous, but we'll allow them in for loop
    // afterthoughts for the sake of not breaking from
    // JavaScript norms.
    //
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // This rule has good intentions, but fails when
    // dealing with nested async callbacks with error
    // prameters. Using "allow" and using a whitelist
    // might be better but we'll leave that up to the
    // developer.
    //
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // We like differentiating private methods and variables
    // by prepending an underscore. Although there is no
    // concept of "private" properties in JavaScript, it's
    // still a useful nomenclature that allows developers
    // and users alike to know which properties they should
    // and should not access.
    //
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // Enforcing this rule can hurt code readability. Use
    // padding as needed but within reason.
    //
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': 'off',

    // Sometimes from a code styling perspective, avoiding
    // destructuring looks much cleaner.
    //
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'off',
  },
};
