import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, notification } from 'antd';

import AlgorithmList from './components/AlgorithmList';
import DataSetList from './components/DataSetList';
import UserIdTopK from './components/UserIdTopK';
import RecommendationList from './components/RecommendationList';
import HistoryList from './components/HistoryList';
import AlertLabel from './components/AlertLabel';
import axios from 'axios';

const labelStyle = {
  padding: '10px', 
  fontSize: '150%', 
  fontWeight: 'bold', 
  textAlign: 'center', 
  background: '#bee9e6'
};

class App extends React.Component {
  state = {
    pickedAlgorithm: {},
    pickedDataSet: {},
    pickedUserId: '',
    topK: '10',
    recommendations: [],
    userHistory: [],
    errorMessage: ''
  }

  pickedAlgorithm = (algorithm) => {
    // console.log(algorithm)
    this.setState({
      pickedAlgorithm: algorithm,
      errorMessage: ''
    })
  }

  pickedDataSet = (dataSet) => {
    // console.log(dataSet)
    this.setState({
      pickedDataSet: dataSet,
      errorMessage: ''
    })
  }

  pickedTopK = (value) => {
    // console.log(value)
    this.setState({
      topK: value
    })
  }

  userIdSubmit = (userIdInput) => {
    if(Object.getOwnPropertyNames(this.state.pickedAlgorithm).length !== 0 && 
    Object.getOwnPropertyNames(this.state.pickedDataSet).length !== 0) {

      this.setState({
        recommendations: [],
        userHistory: [],
        errorMessage: ''
      })

      // axios.get(`https://recommender-server.herokuapp.com/results?alg=${this.state.pickedAlgorithm.short}&data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
      axios.get(`https://recommender-server.herokuapp.com/results?alg=${this.state.pickedAlgorithm.short}&data=${this.state.pickedDataSet.name}&user_id=${userIdInput}&topK=${this.state.topK}`)
        .then(res => {
            // console.log(res)
            this.setState({
              recommendations: res.data
            });
        })
        .catch(error => {
          if (error.response.data.message === "NO_MODEL") {
            this.setState({
              errorMessage: "There is no model for selected elements! Please choose other"
            });
          }
          else if (error.response.data.message === "INVALID_ID") {
            this.setState({
              errorMessage: "User id not exists in selected data set! Consider using example ids"
            });
          }
          else {
            console.log(error);
          }
          return;
        });

      axios.get(`https://recommender-server.herokuapp.com/histories?data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            // console.log(res)
            this.setState({
              userHistory: res.data
            });
        })
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    notification.open({
      message: 'Welcome!',
      description: 'Client app for recommender system for climbers provides results presentation. ' +
      'Choose an algorithm and data set, enter user id and specify number of items in recommendation list. ' +
      'Results will be presented as set of recommendations for a specified user.',
      duration: 0,
      // style: {
      //   width: 600,
      //   marginLeft: 250 - 600,
      // },
    });
  }

  render() {
      return (
          <div className="App" style={{padding: '20px', background: '#ECECEC'}}>

              <div style={labelStyle}> Algorithms </div>
              <AlgorithmList picked={this.state.pickedAlgorithm} pickedAlgorithm={this.pickedAlgorithm}/>
              
              <div style={labelStyle}> Data sets </div>
              <DataSetList picked={this.state.pickedDataSet} pickedDataSet={this.pickedDataSet}/>

              <UserIdTopK pickedDataSet={this.state.pickedDataSet} pickedAlgorithm={this.state.pickedAlgorithm} 
                      userIdSubmit={this.userIdSubmit} topK={this.state.topK} pickedTopK={this.pickedTopK}/>

              {this.state.errorMessage ? <AlertLabel message={this.state.errorMessage}/> : null}

              <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <Row gutter={[24, 16]}>
                  <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <div style={labelStyle}> Recommendations list </div>
                    <RecommendationList elements={this.state.recommendations}/>
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <div style={labelStyle}> User history </div>
                    <HistoryList elements={this.state.userHistory}/>
                  </Col>
                </Row>
              </div>
          </div>
      );
  }
}

export { labelStyle };
export default App;
