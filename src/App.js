import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

export default class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
        <div className="panel-body">
          <Timer />
        </div>
      </div>
    );
  }
}