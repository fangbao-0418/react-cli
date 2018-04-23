import React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { demoAction } from '../actions/demo'
import { ReduxStates } from '../reducers/index'
interface RouterParmas {
  id: number
}

interface Props extends RouteComponentProps<RouterParmas> {
  dispatch: Dispatch<{}>
  name: string
}
class Demo extends React.Component <Props, {}> {
  public componentWillMount () {
    this.props.dispatch(demoAction('test'))
  }
  public componentDidMount () {
    console.log(this.props, 'will mount')
  }
  public toClick () {
    const arr = ['test1', 'test2', 'test3', 'test4']
    const index = Math.floor(Math.random() * 4)
    const res = arr[index]
    this.props.dispatch(demoAction(res))
  }
  public render () {
    return (
      <div style={{margin: '20px'}}>
        <div>
          <button
            className='btn btn-warning'
            onClick={
              () => {
                this.props.history.push('/')
              }
            }
          >
            返回
          </button>
        </div>
        <br/>
        <div>id: {this.props.match.params.id}</div>
        <div>name: {this.props.name}</div>
        <div>
          <button className='btn btn-warning' onClick={this.toClick.bind(this)}>change</button>
        </div>
      </div>
    )
  }
}
export default connect((state: ReduxStates) => {
  return {
    ...state.demo
  }
})(withRouter(Demo))
