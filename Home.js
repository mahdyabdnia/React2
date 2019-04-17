import React,{Component} from 'react';
import {View,Text,Button,ImageBackground,ProgressBarAndroid } from 'react-native';


export class Home extends Component{


    render(){



        return(

        <View  >
           <ImageBackground style={{fles:1,width:'100%',height:'99%'}} source={require('../images/12.jpg')}>

           <View style={{flex:25}} ></View>
           <ProgressBarAndroid color="#46747a" style={{flex:0.5,marginBottom:2}}  styleAttr="Horizontal" />
           
           </ImageBackground>
          
           
        </View>


        );
    }
}

