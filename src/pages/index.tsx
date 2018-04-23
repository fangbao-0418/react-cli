import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
const styles = require('../stylus/demo')
console.log(styles, 'styles')
class Index extends React.Component<any, any> {
  public componentWillMount () {
  }
  public render () {
    return (
      <div className={styles.container}>
        <div>
          <p><span>北京爱康鼎科技有限公司</span></p>
          <p><Link to='/demo/2018'><i>goto demo</i></Link></p>
        </div>
      </div>
    )
  }
}
export default connect(({ demo }: any) => {
  return {
    ...demo
  }
})(withRouter(Index))
