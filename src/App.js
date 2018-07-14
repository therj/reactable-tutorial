import React, { Component } from 'react'
import './App.css'
import Table from './Table.js'
import TableHead from './TableHead.js'
import Tr from './Tr.js'
import Td from './Td.js'
import TFoot from './TFoot.js'
import UnsafeTable from './UnsafeTable'
import Pagination from './Pagination'
import Sorting from './Sorting'
// import Table from './Table.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* render whatever you want to try -> Table, Tr, Td  */}
        <Sorting />
      </div>
    )
  }
}

export default App
