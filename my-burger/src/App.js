import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from './containers/Checkout/Orders/Orders';
import { Route, Switch, withRouter } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

//Example of a pre-set timeout error

  // state = {
  //   show: true
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show:false});}, 5000);
  // }

//   <Layout>
//   {this.state.show ? <BurgerBuilder/> : null}
//  </Layout>

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(null,mapDispatchToProps)(App));
//by wrapping connect with withRouter, I can make sure I'm passing my props down to the next level
