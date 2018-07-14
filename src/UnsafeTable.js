import React, { Component } from 'react'
import './App.css'
import { Table, unsafe } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Create Table */}
        <Table
          className="table"
          id="table"
          data={[
            {
              Name: unsafe('<b>GitHub</b>'),
              Link: unsafe(
                '<a href="https://github.com/therj"><img src="https://avatars0.githubusercontent.com/u/14107726" height="100px"></a>',
              ),
            },
            {
              Name: unsafe('<b>ReactNinja</b>'),
              Link: unsafe(
                '<a href="http://reactninja.io/author/therj"><img src="https://i0.wp.com/reactninja.io/wp-content/uploads/2018/06/therj-reactdev-avatar.png" height="100px"></a>',
              ),
            },
          ]}
        />,
      </div>
    )
  }
}

export default App
