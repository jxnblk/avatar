
var React = require('react');
var pathdata = require('./pathdata');

var Jxnblk = React.createClass({

  getDefaultProps: function() {
    return {
      size: 128,
    }
  },

  render: function() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={this.props.size}
        height={this.props.size}
        fill="currentcolor">
        <path d={pathdata} />
      </svg>
    )
  }

});

module.exports = Jxnblk;

