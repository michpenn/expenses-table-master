import React, {
  Component,
  PropTypes
} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from '../components/App';

class App extends Component {
  render() {
    const { actions } = this.props;
    return (
      <MuiThemeProvider>
        <Main actions={actions} />
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  actions: PropTypes.shape({})
};

const mapStateToProps = (state) => {
  const props = {};

  return props;
}

const mapDispatchToProps = (dispatch) => {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
