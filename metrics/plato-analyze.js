/* eslint-disable @typescript-eslint/no-var-requires */
const plato = require('plato-analyze')
const pkg = require('../package.json')
const reportToCsv = require('./reportToCsv')

//be sure and set your src, output, and any options.
const src = [
  './dist/app/**/*.js',
  './dist/components/**/*.js',
  './dist/helpers/**/*.js',
  './dist/pages/**/*.js',
  './dist/services/**/*.js',
]
const outputDir = './metrics/artifacts'

const platoArgs = {
  title: pkg.name,
  eslint: {},
}

//you can use the reports in the callback.
function callback(reports) {
  const overview = plato.getOverviewReport(reports)

  const { total, average } = overview.summary

  const output = `\n\nOUTPUT:
    ----------------------
    eslint: ${total.eslint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
    average
    ----------------------
    eslint: ${average.eslint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`

  console.log(output)

  reportToCsv(overview.reports)
}

// usage is plato.inspect
plato.inspect(src, outputDir, platoArgs, callback)
