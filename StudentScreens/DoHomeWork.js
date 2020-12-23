import React from 'react';
import {View,Text} from 'react-native';
import MyHeader from '../MyHeader';
import {Card, ListItem} from 'react-native-elements';
export default class DoHomeWork extends React.Component{
constructor(){
    super();
    this.state={
   
    }
}
renderItme=({item,i})=>{
    return(
        <ListItem
        key={i}
        
        
        />
    )
}
render(){
    return(
        <View>
        <View>
            <MyHeader
            title="home Works"/>
        </View>
        <View>

        </View>

        </View>
    )
}

}