import React, { Component } from 'react'
import './App.css'
import { Table } from 'reactable'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table
          className="table"
          id="table"
          data={[
            { Name: 'Lee Salminen', Age: '23', Position: 'Programmer' },
            { Name: 'Griffin Smith', Age: '18', Position: 'Engineer' },
            { Name: 'Ian Zhang', Age: '28', Position: 'Developer' },
            { Name: 'Andrew Smith', Age: '28', Position: 'Designer'  },
            { Name: 'Another Test', Age: '26', Position: 'Developer' },
            { Name: 'Third Test', Age: '19', Position: 'Salesperson' },
          ]}
          sortable={[
            {
              column: 'Name',
              direction:'asc',
              sortFunction: function(a, b) {
                return a > b ? 1 : -1;
              },
            },
            'Age',
          ]}
          defaultSort ={'Name'}
        />
      </div>
    )
  }
}

export default App
