
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs
// npm install antd --save
// npm install @ant-design/icons --save

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}
      initialRouteName='Page4'>
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Page3" component={Page3} />
        <Tab.Screen name="Page4" component={Page4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

