import React, { Component } from 'react';
import { View, Text, StyleSheet,AsyncStorage,Button, TextInput } from 'react-native';
import Helper from '../commonHelper/Helper';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            password2:""
        };
        this.setPassword = this.setPassword.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.setSession = this.setSession.bind(this);
        this.setPassword2 = this.setPassword2.bind(this);
    }

    setPassword2(value){
        this.setState({password2:value});
    }
    setPassword(value){
        this.setState({password:value});
    }

    setEmail(value){
        this.setState({email:value});
    }

    setSession = async () => {
        await AsyncStorage.setItem("userEmail", this.state.email);
        await AsyncStorage.setItem("password", this.state.password);
        
        this.setState({
            email:'',
            password:''
        });

        alert("Signup done successfully!");
        this.props.navigation.navigate('Login');
    }    
    submitForm =() => {

        if(this.state.email == ''){
            alert("Please enter email!");
        }
        else if(!Helper.validateEmail(this.state.email)){
            alert('Invalid Email Address');
        }
        else if(this.state.password == ''){
            alert("please enter password!")
        }
        else if(this.state.password2 == ''){
            alert("please enter confirm password!")
        }
        else if (this.state.password != this.state.password2){
            alert("password mismatch!")
        }
        else {
           this.setSession();
        }
    }
    render(){

        return(
            <View style={styles.container}>

                <TextInput 
                style={styles.input}
                placeholder="please enter valid email address"
                value={this.state.email}
                onChangeText={this.setEmail}
                />
                <TextInput 
                secureTextEntry={true}
                style={styles.input}
                placeholder="password..."
                value={this.state.password}
                onChangeText={this.setPassword}
                />
                 <TextInput 
                secureTextEntry={true}
                style={styles.input}
                placeholder="confirm password..."
                value={this.state.password2}
                onChangeText={this.setPassword2}
                />
                <View  style={styles.button}>
                    <Button   
                    title="signup"
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
export default Signup;