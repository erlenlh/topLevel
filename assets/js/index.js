var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass({
  render: function() {
    return (
      <h1>
      Hello, React, nigga!
      </h1>
    )
  }
})

reactDOM.render(<Hello />, document.getElementById('container'))
