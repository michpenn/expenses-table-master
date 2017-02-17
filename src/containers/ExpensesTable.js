import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExpensesTable from '../components/ExpensesTable'


const mapStateToProps = (state) => {
  const props = {
    expenses: state.get('expenses')
  };

  return props;
}

const mapDispatchToProps = (dispatch) => {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
