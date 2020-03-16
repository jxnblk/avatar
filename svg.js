require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
})
const fs = require('fs')
const path = require('path')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const Avatar = require('./src/avatar').default

const svg = renderToStaticMarkup(createElement(Avatar))
const svgCropped = renderToStaticMarkup(createElement(Avatar, {
  pad: false,
}))
const filename = path.join(__dirname, 'avatar.svg')

fs.writeFileSync(path.join(__dirname, 'avatar.svg'), svg)
fs.writeFileSync(path.join(__dirname, 'avatar-cropped.svg'), svgCropped)
