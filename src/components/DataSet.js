import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

class DataSet extends React.Component {
    elementStyle = () => {
        return {
            backgroundColor: (this.props.dataSet.short === this.props.picked.short) 
                ? '#add8e6' : '#f4f4f4',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer'
        }
    }

    pickedDataSet = () => {
        this.props.pickedDataSet(this.props.dataSet);
    }

    render() {
        return (
            <Card title={this.props.dataSet.name ? this.props.dataSet.name : this.props.dataSet.short}
             style={this.elementStyle()} onClick={this.pickedDataSet} bordered={false} >
                <p>Number of users: {this.props.dataSet.users_num}</p>
                <p>Number of items: {this.props.dataSet.items_num}</p>
                <p>Density: {this.props.dataSet.density}%</p>
                <p>{this.props.dataSet.description ? this.props.dataSet.description : "Data set."}</p>
            </Card>
        );
    }
}

DataSet.propTypes = {
    dataSet: PropTypes.object.isRequired
}

export default DataSet;