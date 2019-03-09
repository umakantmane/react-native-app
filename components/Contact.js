import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


class Contact extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    render(){

        return(

            <View style={styles.container}>

                <Text style={{fontSize:20, color:"blue"}}>Welcome to contact page...</Text> 
                <Button
                color="purple"
                title="Home"
                onPress={()=> this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})

export default Contact;