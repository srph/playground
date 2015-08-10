import React, { Component } from 'react';
import { Table, Column } from 'fixed-data-table';

class App extends Component {
  state = {
    isColumnResizing: false,
    firstName: 50,
    lastName: 50
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const rows = [
      { firstName: 'kier', lastName: 'borromeo' },
      { firstName: 'kier', lastName: 'borromeo' },
      { firstName: 'kier', lastName: 'borromeo' }
    ];

    const { isColumnResizing, firstName, lastName } = this.state;

    return (
      <Table
        rowHeight={50}
        rowGetter={(index) => rows[index]}
        rowsCount={rows.length}
        height={500}
        width={1000}
        headerHeight={50}
        isColumnResizing={isColumnResizing}
        onColumnResizeEndCallback={(newColumnWidth, dataKey) => {
          this.setState({
            isColumnResizing: false,
            [dataKey]: newColumnWidth
          });
        }}>
        <Column
          label="First Name"
          width={firstName}
          dataKey={"firstName"}
          isResizable={true} />
        <Column
          label="Last Name"
          width={lastName}
          dataKey={"lastName"}
          isResizable={true} />
      </Table>
    );
  }
}

React.render(
  <App />,
  document.getElementById('root')
);