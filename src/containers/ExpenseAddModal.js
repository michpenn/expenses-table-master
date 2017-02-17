import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExpenseAddModal from '../components/ExpenseAddModal'


const mapStateToProps = (state) => {
  const props = {};

  return props;
}

const mapDispatchToProps = (dispatch) => {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAddModal);