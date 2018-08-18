import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from "../main/Home";
import About from "../main/About";
import Contact from "../main/Contact";
import Topics from "../main/Topics";

export default class Routes extends Component{

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="content">
        <Route path="/" exact component={Home}/>
        <Route path={this.props.menu.home.url} exact component={Home} />
        <Route path={this.props.menu.about.url} exact component={About} />
        <Route path={this.props.menu.contact.url} exact component={Contact} />
        <Route path={this.props.menu.topics.url} component={Topics} />
      </div>
    );
  }
}
