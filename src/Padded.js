
const { createElement: h } = require('react')
const Avatar = require('./Avatar')

module.exports = ({
  size = 512
}) => {
  return h('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      width: size,
      height: size,
      padding: size / 8
    }
  },
    h(Avatar, { size: size * 3/4 })
  )
}

