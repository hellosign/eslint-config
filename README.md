# @hellosign/eslint-config [![Build Status](https://travis-ci.org/hellosign/eslint-config.svg?branch=master)](https://travis-ci.org/hellosign/eslint-config)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) by [HelloSign](https://www.hellosign.com).

This config extends Airbnb's `eslint-config-airbnb-base` with a few overrides. We mostly follow their [JavaScript Style Guide](https://github.com/airbnb/javascript/).

## Install

```bash
npm install --save-dev eslint @hellosign/eslint-config
```

## Usage

In your ESLint configuration (probably an `.eslintrc` file), add:

```json
{
  "extends": "@hellosign"
}
```

## Editor Integrations

### Atom

Install [`linter-eslint`](https://atom.io/packages/linter-eslint). To fix files automatically, bring up the command palette (<kbd>⬆</kbd> + <kbd>⌘</kbd> + <kbd>p</kbd>) and choose `Linter Eslint: Fix File`.

### Sublime Text 3

Install [`SublimeLinter-eslint`](https://github.com/roadhump/SublimeLinter-eslint) and [`ESLint-Formatter`](https://github.com/TheSavior/ESLint-Formatter). To fix files automatically, use the shortcut <kbd>⬆</kbd> + <kbd>⌘</kbd> + <kbd>h</kbd>, or choose `ESLint Formatter: Format this file` from the command palette.

### Others

For other integrations, see ESLint's [list](http://eslint.org/docs/user-guide/integrations).
