import React, { Component } from 'react'
import './App.css'
import { Table } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table
          // filterBy="old"
          className="table"
          id="table"
          data={[
            { State: 'New York', Description: 'this is some text', Tag: 'new' },
            { State: 'New Mexico', Description: 'lorem ipsum', Tag: 'old' },
            {
              State: 'Colorado',
              Description: "new description that shouldn't match filter",
              Tag: 'old',
            },
            { State: 'Alaska', Description: 'bacon', Tag: 'renewed' },
          ]}
          filterable={['State', 'Tag']}
        />
      </div>
    )
  }
}

export default App
