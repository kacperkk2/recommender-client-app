import React from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Crag',
      dataIndex: 'crag',
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
    },
    {
      title: 'Country code',
      dataIndex: 'country',
    },
];

class RecommendationList extends React.Component {

    render() {
        return (
            <Table columns={columns} dataSource={this.props.elements} size="middle" rowKey="name"/>
        );
    }
}

export default RecommendationList;