import React from 'react';
import LottieView from 'lottie-react-native';

export default class Animation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/home.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}
