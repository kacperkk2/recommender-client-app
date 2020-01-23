import React from 'react';
import Algorithm from './Algorithm';
import axios from 'axios';
import { List } from 'antd';

class AlgorithmList extends React.Component {
    state = {
        algorithms: []
    }

    componentDidMount() {
        axios.get('https://recommender-server.herokuapp.com/algorithms/')
        .then(res => {
            this.setState({
                algorithms: res.data
            });
        })
    }

    render() {
        return (
            <List
                grid={{
                gutter: [24, 0],
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 3,
                xxl: 4,
                }}
                dataSource={this.state.algorithms}
                renderItem={algorithm => (
                <List.Item>
                    <Algorithm key={algorithm.short} picked={this.props.picked} algorithm={algorithm} pickedAlgorithm={this.props.pickedAlgorithm}/>
                </List.Item>
                )}
            />
        );
    }
}

export default AlgorithmList;