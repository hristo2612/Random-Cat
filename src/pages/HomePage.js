import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import agent from '../agent';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName,
  menuOpen: state.menuOpen,
  cat: state.cat
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({ type: 'HOME_PAGE_LOADED', payload }),
  giveMeACat: (payload) => dispatch({ type: 'GIVE_ME_A_CAT', payload }),
  toggleMenu: (payload) => dispatch({ type: 'TOGGLE_MENU', payload })
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const props = this.props;
    return (
      <div>
        <Layout>
          <br/>
          <p>
            <Button onClick={() => this.props.giveMeACat(agent.Cats.cat())} variant="contained" color="secondary">Get A Random Cat!</Button>
          </p>
          <img src={props.cat} />
        </Layout>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);