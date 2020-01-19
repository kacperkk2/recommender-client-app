import React from 'react';
import { Button } from 'antd';

class Greetings extends React.Component {

    render() {
        return (
          <div className="bg-dim full-bg-size" 
          style={{poisiton: 'realtive', top: '0', bottom: '0', height: '100vh', 
          backgroundSize: 'cover', 
          backgroundImage: "url(" + require('../img.jpg') + ")"}}>
          {/* <div style={{
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
          }}> */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -60%)', textAlign: 'center'}}>
                <h1 style={{}}> Recommender system for climbers </h1>
                <p> App consists of few sections: algorithms, data sets, user input and place for results </p>
                <p> Choose algorithm and data set. Enter user id and choose how many relevant items would you like to see. </p>
                <p> Click the button for recommendation list and user history :) </p>
                <div style={{padding: '5px', paddingBottom: '10px', textAlign: 'center'}}>
                    <Button type="default" onClick={this.props.switchToStarted}>Getting started!</Button>
                </div>
          </div>
          </div>
        );
    }
}

export default Greetings;