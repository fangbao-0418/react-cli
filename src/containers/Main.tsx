import React from 'react'
class Main extends React.Component<any, {}> {
  public render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Main
