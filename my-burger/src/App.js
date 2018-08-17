import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


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
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
