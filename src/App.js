import React, { Component } from 'react'
import './App.css'
import { Table, Tr } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
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
        >
          <Tr
            data={{
              Name: 'Special Person',
              Position: 'Legendary!',
              Age: 'Infinite',
            }}
          />
        </Table>
      </div>
    )
  }
}

export default App
