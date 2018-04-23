/* global gtag APP:true */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class App extends Component {
  componentWillMount () {
    APP.gtag('config', APP['GA_TRACKING_ID'], {
      'page_location': window.location.host,
      'page_path': window.location.href.split(window.location.host)[1]
    })
  }
  render () {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(connect(({common}) => {
  return common
})(App))
