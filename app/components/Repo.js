/**
 * Created by appable on 3/23/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';


export default class RepoItem extends Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.stargazers_count}</Text>
                    <Text>{this.props.forks}</Text>
                </View>
            </View>
        )
    }
}