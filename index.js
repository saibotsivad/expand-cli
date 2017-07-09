#!/usr/bin/env node

const glob = require('glob')
const argv = require('minimist')(process.argv.slice(2))

const options = Object.assign({}, argv)
delete options._

const get = p => glob.sync(p, options)
const flatten = (accumulator, files) => {
	if (files.length) {
		accumulator.push(...files)
	}
	return accumulator
}

const included = argv._.filter(p => p[0] !== '!').map(get).reduce(flatten, [])
const excluded = argv._.filter(p => p[0] === '!').map(p => p.slice(1)).map(get).reduce(flatten, [])

included
	.filter(file => !excluded.includes(file))
	.forEach(file => process.stdout.write(file + '\n'))
