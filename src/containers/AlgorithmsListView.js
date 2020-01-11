import React from 'react';
import Algorithms from '../components/Algorithms';
import axios from 'axios';


class AlgorithmsList extends React.Component {

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
            <Algorithms data={this.state.algorithms}/>
        )
    }
}

export default AlgorithmsList;