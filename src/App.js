import React, { Component } from 'react'
import './App.css'
import Table from './Table'
import TableHead from './TableHead'
import Tr from './Tr'
import Td from './Td'
import TFoot from './TFoot'
import UnsafeTable from './UnsafeTable'
import Pagination from './Pagination'
import Sorting from './Sorting'
import Filtering from './Filtering'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* render whatever you want to try -> Table, Tr, Td, UnsafeTable, Pagination, Filtering...  */}
        <Table />
      </div>
    )
  }
}

export default App
