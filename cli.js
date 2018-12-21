#!/usr/bin/env node
const boxen = require('boxen')
const chalk = require('chalk')

console.log(boxen((`${chalk.magenta('@jxnblk | Brent Jackson')}

Front End Developer

Twitter:  ${chalk.cyan('https://twitter.com/jxnblk')}
GitHub:   ${chalk.cyan('https://github.com/jxnblk')}
Web:      ${chalk.cyan('https://jxnblk.com')}`), {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan',
  dimBorder: true,
}))
