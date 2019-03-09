import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ImageBackground } from 'react-native';

class ImageView extends Component{

    constructor(props){
        super(props);
        this.state={}
    }

    render(){

        return(
           

            <ImageBackground 
            style={styles.container}
                source={require('../assets/nature.jpeg')}
            >
            <View>
            <Text style={{fontSize:30, color:"blue"}}>All your stuff</Text>
            </View>
            </ImageBackground>

    
        )
    }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
export default ImageView;