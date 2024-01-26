import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import {FullPostScreen} from './FullPostScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Новости' }} />
        <Stack.Screen name="FullPostScreen" component={FullPostScreen} options={{ title: 'Статья' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
