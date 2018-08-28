import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from './containers/Checkout/Orders/Orders';
import { Route, Switch } from 'react-router-dom';


class App extends Component {


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
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}


export default App;
