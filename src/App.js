import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoins, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Layout from './components/Layout';
import Home from './scenes/Home';
import UserPanel from './scenes/UserPanel';
import Navbar from './components/Navbar';

library.add(fab, faCoins, faShoppingCart);

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:user" component={UserPanel} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </>
    );
  }
}

// MAPPING STATE TO PROPS
// const mapStateToProps = (state, ownProps) => {
//     return {
//       posts: state.posts
//     } 
// }

export default App
