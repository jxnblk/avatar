
var React = require('react');
var pathdata = require('./pathdata');

var Jxnblk = React.createClass({displayName: "Jxnblk",

  getDefaultProps: function() {
    return {
      size: 128,
    }
  },

  render: function() {
    return (
      React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", 
        viewBox: "0 0 128 128", 
        width: this.props.size, 
        height: this.props.size, 
        fill: "currentcolor"}, 
        React.createElement("path", {d: pathdata})
      )
    )
  }

});

module.exports = Jxnblk;

