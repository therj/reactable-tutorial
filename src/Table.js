import React, { Component } from 'react'
import './App.css'
import { Table } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Create Table */}
        <Table
          className="table"
          data={[
            {
              Name: 'Griffin Smith',
              Age: 18,
            },
            {
              Age: 23,
              Name: 'Lee Salminen',
            },
            {
              Age: 28,
              Position: 'Developer',
            },
          ]}
        />
      </div>
    )
  }
}

export default App
