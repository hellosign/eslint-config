const eslint = require('eslint');

const config = require('./index');

test('Extends airbnb-base and the react plugin', () => {
  expect(config.extends).toEqual([
    'airbnb-base',
    'plugin:react/recommended',
  ]);
});

test('Exports rules', () => {
  expect(typeof config.rules).toBe('object');
});

test('Parses config with CLIEngine', () => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: './index.js',
  });

  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';

  expect(cli.executeOnText(code).errorCount).toBe(0);
});
