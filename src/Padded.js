
const { createElement: h } = require('react')
const Avatar = require('./Avatar')

module.exports = ({
}) => {
  return h('div', {
    style: {
      padding: 64
    }
  },
    h(Avatar, { size: 512 })
  )
}

