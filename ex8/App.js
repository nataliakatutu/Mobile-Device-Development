/* eslint-disable prettier/prettier */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  require,
} from 'react-native';
import SignIn from './src/SignInForKelas';

import CoreComponents from './src/CoreComponents';

// function
const App = () => {
  // return <CoreComponents />;
  return <SignIn />;

  // <View>
  //   <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
  //   <Text>Hello Guys</Text>
  //   <View style={{width: 200, height: 100, backgroundColor: 'purple'}} />
  //   <TextInput style={{borderWidth: 5, borderColor: 'black'}} />
  // </View>;
};

// class component
// class App extends React.Component{
//     render(){
//         return(
//             <view>
//                 <text>Hello Guys</text>
//             </view>
//         )
//     }
// }

export default App;
