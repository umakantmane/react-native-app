import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage,Button, TextInput } from 'react-native';
import Helper from '../commonHelper/Helper';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        };
        this.setPassword = this.setPassword.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }
    authenticate = async () => {
        let email = await AsyncStorage.getItem("userEmail");
        let password = await AsyncStorage.getItem("password");
        let isValid = this.state.email == email && this.state.password == password;

        if(isValid){
            await AsyncStorage.setItem("token", "token");
            this.props.navigation.navigate("DashBoard");
        }
        else {
            alert("Invalid login details!");
        }
        this.setState({
            email:"",
            password:""
        });
    }
    setPassword(value){
        this.setState({password:value});
    }

    setEmail(value){
        this.setState({email:value});
    }

    submitForm(){

        if(this.state.email == ''){
            alert("Please enter email!");
        }
        else if(!Helper.validateEmail(this.state.email)){
            alert('Invalid Email Address');
        }
        else if(this.state.password == ''){
            alert("please enter password!")
        }
        else {
           this.authenticate();
        }
    }
    render(){

        return(
            <View style={styles.container}>

                <TextInput 
                style={styles.input}
                placeholder="please enter valid email address"
                onChangeText={this.setEmail}
                value={this.state.email}
                />
                <TextInput 
                secureTextEntry={true}
                style={styles.input}
                placeholder="password..."
                onChangeText={this.setPassword}
                value={this.state.password}
                />
                <View  style={styles.button}>
                    <Button   
                    title="login"
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
export default Login;