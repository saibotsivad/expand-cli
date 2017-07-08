# globbit

List files in folders using 'glob' syntax and gruntjs 'expand' algorithm.

## install

The normal npm way:

```bash
npm install globbit
```

## use it

```
globbit [OPTIONS] [...MINIMATCH EXPRESSIONS]
```

Example:

```bash
globbit --nosort 'path/**/*.js' '!path/**/*.spec.js'
```

Options are parsed with [minimist](https://www.npmjs.com/package/minimist),
and passed directly to the [glob](https://www.npmjs.com/package/glob) module.

That means `--nosort` becomes `{ nosort: true }`, and `--cwd='/path'`
becomes `{ cwd: '/path' }` as options passed to `glob`.

You can add as many minimatch expressions as you want. Excluded patterns are
made by putting `!` at the start of the expression.

> Note: In some OS systems, asterisks will auto-expand *before* being passed
> in to this module, when surrounded with double quotes, e.g. `"path/**/*.js`.
> To prevent this, simply use single quotes in your minimatch expressions.

## output

Each filename is output with `process.stdout.write` so you should
be able to pipe the output to any other normal program.

## license

Published and released under the [Very Open License](http://veryopenlicense.com).
