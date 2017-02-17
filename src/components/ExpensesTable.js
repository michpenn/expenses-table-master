import React, { Component } from 'react';

import {
  Table,
  TableBody, TableFooter, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { grey900, grey400, green600 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import { EXPENSE_TYPES } from '../constants';

import ExpenseAddModal from '../containers/ExpenseAddModal';

class ExpensesTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isExpenseAddModalOpen: false
    };

    this.renderExpenseItem = this.renderExpenseItem.bind(this);
    this.onExpenseAdd = this.onExpenseAdd.bind(this);
    this.onAddModalClose = this.onAddModalClose.bind(this);
  }

  onExpenseAdd (e) {
    if (e && e.preventDefault) e.preventDefault();

    this.setState({
      isExpenseAddModalOpen: true
    });
  }

  onAddModalClose () {
    this.setState({
      isExpenseAddModalOpen: false
    })
  }

  renderAddExpenseAction () {
    return (
      <IconButton tooltip="Add new expense" onTouchTap={this.onExpenseAdd}>
        <AddIcon style={{fontSize: 32}} color={grey400} hoverColor={green600} />
      </IconButton>
    )
  }

  renderExpenseItem (expense, index) {
    return (
      <TableRow key={expense.get('id')} selected={false}>
        <TableRowColumn>{expense.get('name')}</TableRowColumn>
        <TableRowColumn>{EXPENSE_TYPES[expense.get('type')] || 'N/A'}</TableRowColumn>
        <TableRowColumn>{expense.get('cost')}</TableRowColumn>
        <TableRowColumn>{expense.get('frequency')}</TableRowColumn>
      </TableRow>
    )
  }

  renderExpenseAddModal () {
    return (
      <ExpenseAddModal
        isOpen={this.state.isExpenseAddModalOpen}
        onClose={this.onAddModalClose}
      />
    )
  }

  render () {
    const { expenses } = this.props;

    return (
      <div>
        <Table
          height={500}
          fixedHeader={true}
          fixedFooter={false}
          selectable={true}
          multiSelectable={true}
        >
          <TableHeader
            displaySelectAll={true}
            adjustForCheckbox={true}
            enableSelectAll={true}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Your Expenses" style={{textAlign: 'left'}}>
                <h3 style={{color: grey900}}>
                  <b>Your Expenses</b>
                </h3>
              </TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'right'}}>
                {this.renderAddExpenseAction()}
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Type">Type</TableHeaderColumn>
              <TableHeaderColumn tooltip="Cost">Cost</TableHeaderColumn>
              <TableHeaderColumn tooltip="Frequency">Frequency</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={true}
            deselectOnClickaway={true}
            showRowHover={true}
          >
            {expenses.map(this.renderExpenseItem)}
          </TableBody>
        </Table>
        {this.renderExpenseAddModal()}
      </div>
    )
  }
}

export default ExpensesTable