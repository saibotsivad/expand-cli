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

Options passed in are passed directly to the
[glob](https://www.npmjs.com/package/glob)
module, and you can add as many minimatch expressions as you want.
Excluded patterns are made by putting `!` at the start.

## output

Each filename is output with `process.stdout.write` so you should
be able to pipe the output to any other normal program.

## license

Published and released under the [Very Open License](http://veryopenlicense.com).
