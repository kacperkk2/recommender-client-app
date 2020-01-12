import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

class TopK extends React.Component {

    pickedTopK = (value) => {
        this.props.pickedTopK(value);
    }

    render() {
        return (
            <Select defaultValue={this.props.topK} style={{ width: 120 }} onChange={this.pickedTopK}>
                <Option value="10">Top10</Option>
                <Option value="20">Top20</Option>
                <Option value="50">Top50</Option>
            </Select>
        );
    }
}

export default TopK;