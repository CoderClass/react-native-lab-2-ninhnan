/**
 * Created by appable on 3/23/17.
 */
/**
 * Created by appable on 3/23/17.
 */
import React, { Component } from 'react';
import {
    Text,
    ListView,
    View,
    Switch
} from 'react-native';


export default class HomePage extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(["Java", "JavaScript", "Ruby", "Python", "Rails"]),
        };
    }

    componentDidMount() {
        // this.getDataFromGithub().then((repo) => {
        //     console.log(repo)
        //     this.setState({
        //         dataSource: this.state.dataSource.cloneWithRows(repo)
        //     })
        //
        // })
    }

    getDataFromGithub() {
        return fetch("https://api.github.com/search/repositories?q=topic:ruby+topic:rails").
        then((response) => response.json()).
        then((responseJson) => {
            return responseJson.items;
        }).catch((error) => {
            return [];
        })
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={(rowData) => <View>
                          <Text>{rowData}</Text>
                          <Switch
                              onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                              style={{marginBottom: 10}}
                              value={this.state.falseSwitchIsOn} />
                          <Switch
                              onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                              value={this.state.trueSwitchIsOn} />
                      </View>}/>
        );
    }
}