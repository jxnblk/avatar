
var React = require('react');
var pathdata = require('./pathdata');

var Jxnblk = React.createClass({

  getDefaultProps: function() {
    return {
      width: 128,
      height: 128
    }
  },

  render: function() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={this.props.width}
        height={this.props.height}
        fill="currentcolor">
        <path d={pathdata} />
      </svg>
    )
  }

});

module.exports = Jxnblk;

