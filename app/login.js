import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Navigator
} from 'react-native';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';

import Home from './home';

import {connect} from 'react-redux';
import {actionCreators} from "./reducer.js";

export default class LabW2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataProps : '',
            dataRedux : ''
        }
    }

    onConnectFacebook() {
        LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    //alert('Login success with permissions: '
                    //  +result.grantedPermissions.toString());
                    this.getGraph();
                }
            },
            (error) => {
                alert('Login fail with error: ' + error);
            }
        );
    }

    getGraph() {
        // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest(
            '/me',
            null,
            this._responseInfoCallback,
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    _responseInfoCallback(error: ?Object, result: ?Object) {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        } else {
            alert('Success fetching data: ' + JSON.stringify(result));
            dispatch(actionCreators.storeDataScene1({dataReduxFromScene1: result})); //
            navigator.push({
                title: 'Home',
                component: Home,
                passProps: {dataPropsFromScene1: result}
            });
        }
    }

    render() {

        const {navigator, dispatch} = this.props;


        return (
            <View
            style={{
                flex: 1,
                alignItems: 'center', justifyContent: 'center',
            }}>
            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    width: 200, height: 40,
                    alignItems: 'center', justifyContent: 'center',
                }}
                onPress={this.onConnectFacebook.bind(this)}>
                <Text
                    style={{
                        color: '#fff',
                    }}>
                    Connect with Facebook
                </Text>
            </TouchableOpacity>

        </View>);
    }
}

const mapStateToProps = (state) => {
    return {
        hehehe : state.searchReducer.params
    }
}

export default connect(mapStateToProps)(Scene1);