# @hellosign/eslint-config [![Build Status](https://travis-ci.org/hellosign/eslint-config.svg?branch=master)](https://travis-ci.org/hellosign/eslint-config)

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) by [HelloSign](https://www.hellosign.com).

This config extends [AirBnB's `eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base) with a few minor exceptions.

## Install

```bash
npm install --save-dev eslint @hellosign/eslint-config
```

## Usage

In your ESLint configuration add:

```json
{
  "extends": "@hellosign"
}
```

If you'd like to apply custom rules which override our default config, simply add them to `rules`.

```json
{
  "extends": "@hellosign",
  "rules": {
    "comma-dangle": ["error", "never"]
  }
}
```

## Integrations

To integrate ESLint into your editor, check out [ESLint's integrations user guide](https://eslint.org/docs/user-guide/integrations).
