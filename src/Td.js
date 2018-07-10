import React, { Component } from 'react'
import './App.css'
import { Table, Tr, Td } from 'reactable'
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
        >
          {/* Add Tr */}
          <Tr
            data={{
              Name: 'Special Person',
              Position: 'Legendary!',
              Age: 'Infinite',
            }}
          />
          {/* Add Td */}
          <Tr>
            <Td column="Name" data="Griffin Smith">
              Grifin Smith
            </Td>
            <Td column="Age" value="22">
              18
            </Td>
          </Tr>
        </Table>
      </div>
    )
  }
}

export default App
