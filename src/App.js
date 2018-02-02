import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<Router>
		<div>
		  <ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/page">Page</Link></li>
		  </ul>
		<hr/>
			  <Route exact path="/" component={Home} />
        <Route path="/page" render={props => <Page posts={this.state.posts} />} />
		</div>
		</Router>
      </div>
    );
  }
}

export default App;
