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

    // We like differentiating private methods and variables
    // by prepending an underscore. Although there is no
    // concept of "private" properties in JavaScript, it's
    // still a useful nomenclature that allows developers
    // and users alike to know which properties they should
    // and should not access.
    'no-underscore-dangle': 'off',
  },
};
