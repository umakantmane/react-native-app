import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';


class Home extends Component{

    // static navigationOptions= {
        
    //     headerLeft:(
    //         <Button 
    //          title="back"
    //          />
    //     ),
    //     title:"XXXXXX",
    //     headerStyle: {
    //       backgroundColor: 'purple'
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold'
    //     }

    // }
    constructor(props){
        super(props);
        this.state={
            name:"Manas",
            email:"manas@gmail.com"
        };
        this.submitForm = this.submitForm.bind(this);
        this.initData = this.initData.bind(this);
        
    }

    componentWillMount(){
        this.initData();
    }
    initData =  async () => {

        await AsyncStorage.setItem("name", "XXXXXXXXX");
        await AsyncStorage.setItem("email", "xxxxxxx@gmail.com");

    }


    submitForm = async () =>{
    //    let name = await AsyncStorage.getItem("name");
    //    let email = await AsyncStorage.getItem("email");

        this.props.navigation.navigate('About')
        
    }
    render(){

        return(

            <View style={styles.container}>

                <Text style={{fontSize:20, color:"blue"}}>Welcome to home page...</Text> 
                <Button
                color="purple"
                title="About"
                onPress={ this.submitForm}
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

export default Home;