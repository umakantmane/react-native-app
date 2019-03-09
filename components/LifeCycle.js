import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Button } from 'react-native';


class LifeCycle extends Component{

    constructor(props){

        super(props);
        this.state = {
            name:"",
            email:""
        }

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.submitData = this.submitData.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    setName = (value) => {
        this.setState({
            name:value
        })
    }
    setEmail = (value) => {
        this.setState({
            email:value
        })
    }
    submitData = () => {
        if(this.state.name == ''){
            alert("Please enter the name!");
        }
        else if(this.state.email == "") {
            alert("Please enter the email!");
        }
        else if(!this.validateEmail(this.state.email)){
            alert("Invalid email");
        }   
        else {
            alert("Success...");
        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    componentWillUpdate(){

    }

    componentDidUpdate(){

    }

    componentWillReceiveProps(props){
        //alert(props.name);
    }
    componentWillUnmount(){

    }

    shouldComponentUpdate(){

    }

    render(){

        return (

            <View style={styles.container}>

                <TextInput 
                style={styles.input}
                 placeholder="username..."
                 onChangeText={this.setName}

                 />

                <TextInput 
                style={styles.input}
                 placeholder="email..."
                 onChangeText={this.setEmail}

                 />
                 <View style={styles.button}>
                    <Button 
                    onPress={this.submitData}
                    title="submit"
                    color='purple'
                    />
                </View>
            </View>
        )
    }

}


styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    input:{
        borderWidth:2,
        margin:10,
        padding:10
    },
    button:{
        margin:4,
        padding:6,
        height:50,
    }
})

export default LifeCycle;