
const { createElement: h } = require('react')
const path = require('./path')

module.exports = ({
  size = 768,
  pad = true,
  color = '#000'
}) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: pad ? '-24 -24 176 176' : '0 0 128 128',
  width: size,
  height: size,
  style: {
    display: 'block',
    margin: 0
  }
},
  h('path', {
    d: path
  })
)

