import React from 'react';

import ExpensesTable from '../containers/ExpensesTable';

class App extends React.Component {
  render() {
    return (
      <div className="expenses-app">
        <ExpensesTable />
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
