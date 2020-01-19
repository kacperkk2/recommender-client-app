import React from 'react';
import TopK from './TopK';
import { InputNumber, Button, Row, Col } from 'antd';
import { labelStyle } from '../App.js'


class UserIdTopK extends React.Component {

    state = {
        userIdInput: '1'
    }

    handleChange = (value) => {
        this.setState( {userIdInput: value} )
    }

    userIdSubmit = (e) => {
        e.preventDefault();
        this.props.userIdSubmit(this.state.userIdInput);
    }

    getUsersIdSample = () => {
        if (Object.getOwnPropertyNames(this.props.pickedDataSet).length === 0) {
            return(
                <p> Pick a dataset to see users ids examples </p>
            )
        }
        else {
            return(
                <p> Example ids: {JSON.parse(this.props.pickedDataSet.users_id_sample).join(", ")} </p>
            )
        }
    }

    isAlgorithmAndDataSetPicked = () => {
        return (Object.getOwnPropertyNames(this.props.pickedDataSet).length !== 0 && 
        Object.getOwnPropertyNames(this.props.pickedAlgorithm).length !== 0) ? false : true;
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Row gutter={[24, 0]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <div style={labelStyle}> User id </div>
                    <div style={{padding: '5px', paddingBottom: '10px', textAlign: 'center'}}>
                        {this.getUsersIdSample()}
                        <InputNumber size='medium' min={1} defaultValue={1} onChange={this.handleChange} />
                    </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <div style={labelStyle}> Number of recommendations </div>
                    <div style={{padding: '5px', textAlign: 'center'}}>
                        <p> Will be presented {this.props.topK} most relevant items </p>
                        <TopK topK={this.props.topK} pickedTopK={this.props.pickedTopK}/>
                    </div>
                </Col>
                </Row>

                <div style={{padding: '30px'}}>
                    <Button style={{ fontSize: '150%', justifyContent: 'center', display: 'flex', margin: '0 auto', height: '70px', width: '320px'}} type="default" onClick={this.userIdSubmit} disabled={this.isAlgorithmAndDataSetPicked()}>Click to get recommendations!</Button>
                </div>
            </div>
        );
    }
}

export default UserIdTopK;