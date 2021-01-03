import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Catalogue from './src/Catalogue'
import Product from './src/Product'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Catalogue}
          options={{
            title: 'My Catalogue',
            headerStyle: { backgroundColor: '#f4511e', height: 75, borderTopRightRadius: 40, borderTopLeftRadius: 40 },
            // headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Product" component={Product}
          options={{
            title: 'Product Details',
            headerStyle: { backgroundColor: '#f4511e', height: 75, borderTopRightRadius: 40, borderTopLeftRadius: 40 }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// // search: () =>{
// //   headerRight: (
// //     <TouchableOpacity>
// //   <Icon name="search" size={20} color="white" />
// //   </TouchableOpacity>
// //   )
// // }