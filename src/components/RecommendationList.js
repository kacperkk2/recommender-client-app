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
      render: (text, record) => <a href={'https://www.8a.nu/scorecard/Search.aspx?SearchType=ASCENTS&CragName=' + record.crag + '&AscentName=' + record.name} target="_blank" rel="noopener noreferrer">{text}</a>
    },
    {
      title: 'Crag',
      dataIndex: 'crag',
      render: (text, record) => <a href={'https://www.8a.nu/scorecard/Search.aspx?Mode=SIMPLE&CragName=' + record.crag} target="_blank" rel="noopener noreferrer">{text}</a>
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
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