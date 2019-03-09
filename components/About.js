import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';


class About extends Component{

    // static navigationOptions = {
    //     header:null
    // }
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:""
        };
        this.getData = this.getData.bind();

        this.getData();
    }

    getData = async () =>{
        
        let name = await AsyncStorage.getItem("name");
        let email = await AsyncStorage.getItem("email");

        this.setState({
            name:name,
            email:email
        })
    }

    render(){

        return(

            <View style={styles.container}>

                <Text style={{fontSize:20, color:"blue"}}>Welcome to about page...</Text> 
                <Button
                color="purple"
                title="Contact"
                onPress={()=> this.props.navigation.navigate('Contact')}
                />
                <View>
                    <Text>{this.state.name}</Text>
                    <Text>{this.state.email}</Text>
                </View>
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

export default About;