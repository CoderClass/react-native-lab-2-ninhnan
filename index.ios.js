/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import HomePage from "./app/home";
import Setting from "./app/setting";
import Login from "./app/login";

export default class LabW2 extends Component {
  render() {
    return(
      <Login/>
    );
  }
}

AppRegistry.registerComponent('LabW2', () => LabW2);
