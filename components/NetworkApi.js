import React, { Component } from 'react';
import { View,ScrollView, Text,TouchableHighlight,Image,ActivityIndicator,  StyleSheet, TouchableOpacity,Button, TextInput } from 'react-native';
import { API_URL } from './conf';

class NerworkApi extends Component{

    constructor(props){
        super(props);
        this.state={
            flag:true,
            data:[]
        };
        this.stopActivityIndicator = this.stopActivityIndicator.bind(this); 
    }

    stopActivityIndicator(){
        this.setState({
            flag:!this.state.flag
        });
    }
    
    componentWillMount(){

        let data = [
            {
                "id": 10,
                "firstname": "Vikash1",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash2",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash3",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash4",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash5",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash6",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash7",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash8",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash9",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            },
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }
            ,
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }
            ,
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }
            ,
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }
            ,
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }
            ,
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }
            ,
            {
                "id": 10,
                "firstname": "Vikash10",
                "lastname": "Anand",
                "emp_id": 109,
                "salary": "50000"
            }

        ];
        
        fetch(API_URL + "/employees/")
        .then((res)=> res.json())
        .then((res)=>{
            this.setState({
                data:res,
                flag:false
            })
        })
        .catch((err)=>{
            alert(err);
        })
        

    }

    render(){

        return(
            <View style={styles.container}>
                <ActivityIndicator 
                size="large"
                 color="green"
                 animating={this.state.flag}
                  />
                  <ScrollView>
                     {
                         this.state.data.map(row=>(
                            <TouchableOpacity 
                            style={styles.text} >
                            <Text style={styles.text2}>{row.firstname}</Text>

                            </TouchableOpacity>
                         ))
                     }
                  </ScrollView>    
            </View>
        )
    }
 }


 styles = StyleSheet.create({
     container:{
         flex:1,
         justifyContent:"center"
     },
     text:{
         alignItems:"center",
         borderWidth:2,
         padding:5,
         margin:5,
         backgroundColor:'gray'
     },
     text2:{
        color:'blue'
    }

 })
export default NerworkApi;