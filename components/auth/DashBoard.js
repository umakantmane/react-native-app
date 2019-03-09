import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage,TouchableOpacity } from 'react-native';

class DashBoard extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            email:""
        };
        this.isAthenticated = this.isAthenticated.bind(this);
        this.userLogout = this.userLogout.bind(this);
        this.clearSession = this.clearSession.bind(this);
    }
    userLogout = () => {
        this.clearSession();
    }
    clearSession = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }
    isAthenticated = async () => {

        let token = await AsyncStorage.getItem("token");
        
        if(token == undefined || token == "" || token == null) {
            
            this.props.navigation.navigate('Login');
        }
        else {
            let userEmail = await AsyncStorage.getItem("userEmail");
            this.setState({
                email:userEmail
            });
        }
    }
   
    componentDidUpdate (previousProps) {
        if (!previousProps.isFocused && this.props.isFocused) {
            this.isAthenticated();
        }
    }

    componentWillReceiveProps(previousProps){
        if (!previousProps.isFocused && this.props.isFocused) {
            this.isAthenticated();
        }
    }

    componentWillMount(){
        this.isAthenticated();
    }
    
    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.text}>Welcome:{ this.state.email}</Text>
                <TouchableOpacity onPress={this.userLogout}>
                    <Text style={styles.logout}>Logout({this.state.email})</Text>
                </TouchableOpacity>
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    logout:{
        fontSize:15,
        fontWeight:'bold',
        color:"purple"
    }
 })
export default DashBoard;