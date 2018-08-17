module.exports = {
  extends: 'airbnb-base',
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
    // 'no-foo': 'off',

    // This makes class inheritance annoying sometimes.
    'class-methods-use-this': 'off',
  },
};
