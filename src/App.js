import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Import the "connect" function to get the data from the store. 
import { connect } from 'react-redux';
/// Import the action
import { deletePost } from './actions/postActions';

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
    const { posts, deletePost } = this.props
    return (
      <>
        <Layout>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={UserPanel} />
            </Switch>
          </BrowserRouter>
        </Layout>
        {/* <div>
          <ul>
            {posts.map(post => {
              return(
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <button onClick={() => {deletePost(post.id)}}>Delete post</button>
                </li>
              )
            })}
          </ul>
        </div> */}

      </>
    );
  }
}

// MAPPING STATE TO PROPS
const mapStateToProps = (state, ownProps) => {
    return {
      posts: state.posts
    } 
}

// MAP DISPATCH TO PROPS = This func. takes one parameter: the dispatch method.
const mapDispatchToProps = dispatch => {
  return {
    /* Previously
    deletePost: id => { dispatch({type: 'DELETE_POST', id: id})  } */
    /* Now, with the imported action */
    deletePost: id => { dispatch(deletePost(id))  }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
