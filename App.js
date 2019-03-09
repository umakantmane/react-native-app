// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import LifeCycle from './components/LifeCycle';
// import NetworkApi from './components/NetworkApi';
// import ImageView from './components/ImageView';
import Home from './components/Home';
import About from  './components/About';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import DashBoard from './components/auth/DashBoard';

import { withNavigationFocus,createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


/*const stackContainer = createStackNavigator({

  'Home':Home,
  'About':About,
  'Contact':Contact
},
{
  initialRouteName:"Home"
}
); */

const tabNavigator = createBottomTabNavigator({
  // 'Home':Home,
  // 'About':About,
  // 'Contact':Contact,
  'Login':withNavigationFocus(Login),
  'Signup':withNavigationFocus(Signup),
  'DashBoard':withNavigationFocus(DashBoard)
},
{
  tabBarOptions: {
    activeTintColor: 'purple',
    inactiveTintColor: 'gray',
    //activeBackgroundColor:"gray",
    showLabel:true,
    showIcon:false,
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: 'white',
    },
  }
})

const App = createAppContainer(tabNavigator);

export default App;











/*export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:''
    }
  }

  componentDidMount(){

    setTimeout(()=>{
      this.setState({name:"Xyz"})
    }, 10000)
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <ImageView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
