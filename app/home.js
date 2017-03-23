/**
 * Created by appable on 3/23/17.
 */
import React, { Component } from 'react';
import {
    ListView,
} from 'react-native';

import RepoItem from "./components/Repo";

export default class HomePage extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }

    componentDidMount() {
        this.getDataFromGithub().then((repo) => {
            console.log(repo)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(repo)
            })

        })
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <RepoItem name={rowData.name}
                                                      stargazers_count={rowData.stargazers_count}
                                                        forks={rowData.forks}/>}
                />
        );
    }
}