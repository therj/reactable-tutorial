import React, { Component } from 'react'
import './App.css'
import { Table } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table
          className="table"
          data={[
            { Name: 'Griffin Smith', Age: '18' },
            { Age: '23', Name: 'Lee Salminen', Position: 'Designer' },
            { Age: '28', Position: 'Developer', Name: 'Andrew' },
            { Name: 'Griffin Smith', Age: '18' },
            { Age: '30', Name: 'Test Person' },
            { Name: 'Another Test', Age: '26', Position: 'Developer' },
            { Name: 'Third Test', Age: '19', Position: 'Salesperson' },
            { Age: '23', Name: 'End of this Page', Position: 'CEO' },
          ]}
          itemsPerPage={3}
          pageButtonLimit={2}
        />
      </div>
    )
  }
}

export default App
