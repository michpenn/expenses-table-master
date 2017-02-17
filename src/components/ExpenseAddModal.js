import React, { Component } from 'react';
import { fromJS } from 'immutable';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {
  EXPENSE_TYPES
} from '../constants';

class ExpenseAddModal extends Component {
  constructor (props) {
    super(props);

    this.state = {
      type: EXPENSE_TYPES['1']
    };

    this.renderExpenseTypeSelectItem = this.renderExpenseTypeSelectItem.bind(this);

    this.onClose = this.onClose.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onCostChange = this.onCostChange.bind(this);
    this.onFrequencyChange = this.onFrequencyChange.bind(this);
  }

  onClose (e) {
    if (e && e.preventDefault) e.preventDefault();

    this.props.onClose();
  }

  onNameChange (e) {

  } 

  onTypeChange (_e, _index, type) {
    this.setState({ type });
  }

  onCostChange (e) {

  }

  onFrequencyChange (e) {

  }

  renderExpenseTypeSelectItem (label, val) {
    return (
      <MenuItem value={val} primaryText={label} />
    )
  }

  renderExpenseForm () {
    return (
      <div>
        <TextField
          floatingLabelText="Name"
          onChange={this.onNameChange}
        />
        <br/>
        <SelectField
          floatingLabelText="Type"
          value={this.state.value}
          onChange={this.onTypeChange}
          value={this.state.type}
        >
          {fromJS(EXPENSE_TYPES).map(this.renderExpenseTypeSelectItem).toList().toJS()}
        </SelectField>
        <br/>
        <TextField
          floatingLabelText="Cost"
          onChange={this.onCostChange}
          type='number'
        />
        <br/>
        <TextField
          floatingLabelText="Frequency"
          onChange={this.onFrequencyChange}
          type='number'
        />
      </div>
    )
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.onClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.onClose}
      />,
    ];

    return (
      <Dialog
        title='Add New Expense'
        actions={actions}
        modal={true}
        open={this.props.isOpen}
      >
        {this.renderExpenseForm()}
      </Dialog>
    )
  }
}

ExpenseAddModal.defaultProps = {
  onClose: () => {},
  isOpen: false
}

export default ExpenseAddModal