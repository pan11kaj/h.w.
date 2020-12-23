import React, { Component } from 'react';
import {View,Text,Modal, TextInput,TouchableOpacity,StyleSheet, ScrollView,Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../MyHeader';
export default class CheckHomeWork extends React.Component{
    render(){
        return(
            <View>
            <View>
                <MyHeader 
                title="check home-work"/>
            </View>
            </View>
        )
    }
}