import React, { Component } from 'react';
import {View,Text,Modal, TextInput,TouchableOpacity,StyleSheet, ScrollView,Alert,FlatList,} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../MyHeader';
import { ListItem  } from 'react-native-elements';
export default class HomeWorks extends Component{
    constructor(){
        super();
        this.state={
        allDetails:[],grade:'',studentName:'',email:firebase.auth().currentUser.email
        }
    }
getStudentDetails=()=>{
    db.collection('students').where('email','==',this.state.email).get()
    .then(snap=>{
        snap.forEach(doc=>{
            this.setState({
                grade:doc.data().grade,
                studentName:doc.data().name,
                allDetails:doc.data()
            })
        })
    })
}
updateCompeleteHomeWork=()=>{
 
}


keyExtractor=(item,index)=>index.toString()
renderItem = ({item,i})=>{
    return(
        <ListItem
        key={i}
        title={item.class}
        ti
        />
    )
      
    
}


    render(){
        return(
            <View>
            <View>
                <MyHeader 
                title="AllHomeWorks"
                navigation={this.props.navigation}
                />
            </View>
            <FlatList
            keyExtractor={this.key}
            renderItem={this.renderItem}
            data={this.state.allDetails}
            />
            </View>
        )
    }
}