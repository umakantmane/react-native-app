import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button, TextInput } from 'react-native';


class Inputs extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            email:""
        };
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    setName(value){
        this.setState({name:value});
    }

    setEmail(value){
        this.setState({email:value});
    }

    submitForm(){

        if(this.state.name == ''){
            alert("Please enter name!");
        }
        else if(this.state.email == ''){
            alert("please enter email!")
        }
        else {
            alert(`Name:${this.state.name} Email:${this.state.email}`);
        }
    }
    render(){

        return(
            <View style={styles.container}>

                <TextInput 
                style={styles.input}
                placeholder="username"
                onChangeText={this.setName}
                />
                <TextInput 
                style={styles.input}
                placeholder="email"
                onChangeText={this.setEmail}
                />
                <View  style={styles.button}>
                    <Button   
                    title="Submit"
                    onPress={this.submitForm}
                    />
                </View>

            </View>
        )
    }
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    input:{
        borderWidth:2,
        padding:10,
        margin:10
    },
    button:{
        margin:4,
        padding:6,
        height: 50,
    }
 })
export default Inputs;