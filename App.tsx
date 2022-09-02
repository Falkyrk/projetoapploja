import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import Cadastro from './screens/cadastro';
import Home from './screens/Home';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={login} options={{headerShown:false}}/>
          <Stack.Screen name="Cadastro" component={Cadastro}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
      <StatusBar style="auto" />  
      </NavigationContainer>
      
 
  );
}