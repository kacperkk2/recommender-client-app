import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

class Algorithm extends React.Component {
    elementStyle = () => {
        return {
            backgroundColor: (this.props.algorithm.short === this.props.picked.short) 
                ? '#add8e6' : '#f4f4f4',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
            minHeight: '300px',
            wordWrap: 'break-word'
        }
    }

    pickedAlgorithm = () => {
        this.props.pickedAlgorithm(this.props.algorithm);
    }

    render() {
        return (
            <Card title={this.props.algorithm.name ? this.props.algorithm.name : this.props.algorithm.short}
             style={this.elementStyle()} onClick={this.pickedAlgorithm} bordered={false} >
                <p>{this.props.algorithm.description ? this.props.algorithm.description : "Recommender algorithm."}</p>
                {this.props.algorithm.link ? <p>{this.props.algorithm.link}</p> : null}
            </Card>
        );
    }
}

Algorithm.propTypes = {
    algorithm: PropTypes.object.isRequired
}

export default Algorithm;