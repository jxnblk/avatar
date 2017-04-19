
const fs = require('fs')
const path = require('path')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const Avatar = require('./src/Avatar')

const svg = renderToStaticMarkup(createElement(Avatar))
const filename = path.join(__dirname, 'avatar.svg')

fs.writeFileSync(filename, svg)

