import React, { Component } from 'react'
import './App.css'
import { Table, Thead, Td, Tr, Th } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table className="table" id="table">
          <Thead>
            <Th column="name">
              <strong className="name-header"> First Name, Last Name </strong>
            </Th>
            <Th column="age">
              <em className="age-header"> Age, years </em>
            </Th>
          </Thead>
          <Tr>
            <Td column="name" data="Griffin Smith">
              <b> Griffin Smith </b>
            </Td>
            <Td column="age"> 18 </Td>
          </Tr>
          <Tr>
            <Td column="name"> Lee Salminen </Td> <Td column="age"> 23 </Td>
          </Tr>
          <Tr>
            <Td column="position"> Developer </Td> <Td column="age"> 28 </Td>
          </Tr>
        </Table>
      </div>
    )
  }
}

export default App
