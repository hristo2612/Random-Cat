import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import agent from '../agent';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SidebarMenu from '../components/Menu';

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
        <SidebarMenu left={props.menuOpen} />
        <Layout>
          <br/>
          <p>
            <Button onClick={() => this.props.giveMeACat(agent.Cats.cat())} variant="contained" color="secondary">CLICK AND GET A CAT</Button>
          </p>
          <img src={props.cat} />
        </Layout>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);