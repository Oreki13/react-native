import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

// Screen
import Login from '../screen/auth/login';
import Dashboard from '../screen/main/dashboard';
import AddData from '../screen/main/addData';

// redux
import {checkToken} from '../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const response = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   getMultiple();
  // }, []);

  const getMultiple = async () => {
    let values;
    try {
      values = await AsyncStorage.multiGet(['token', 'id']);
    } catch (e) {
      console.log(e);
    }
    const tokens = values[0][1];
    const id = values[1][1];
    setToken(tokens);
    setUserId(id);
    checkTokens();
  };

  const checkTokens = () => {
    dispatch(checkToken(token, String(userId)));
  };

  // getMultiple();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddData" component={AddData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
