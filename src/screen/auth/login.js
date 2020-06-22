import React, {Component, useState, useEffect} from 'react';
import {Dimensions, Keyboard} from 'react-native';
import {Container, Content, View, Button, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// Redux
import {login, checkToken, GetAll} from '../../redux/actions/user';

// Componnent
import FormLogin from '../../components/form/login';
import Header from '../../components/header/header_v1';
import Buttons from '../../components/button/button_v2';

const {width} = Dimensions.get('window');

const Login = props => {
  const response = useSelector(state => state.user);
  // const response2 = useSelector(state => console.log('INI State', state));

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [Token, setToken] = useState('');
  const [logins, setLogins] = useState(false);

  const submit = async () => {
    const datas = {
      email: name,
      password: password,
    };
    Keyboard.dismiss();
    await dispatch(login(datas));

    setLogins(true);
  };

  useEffect(() => {
    goNext();
  }, [response]);

  const goNext = async () => {
    if (response.dataUser.error === null) {
      multiSet();
      props.navigation.navigate('Dashboard');
    }
  };

  const multiSet = async () => {
    const token = ['token', response.dataUser.token];
    const id = ['id', response.dataUser.userId];
    try {
      await AsyncStorage.multiSet([token, id]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Header title="Login" color="#171717" />
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: width / 1.3}}>
          <FormLogin usernames={setName} password={setPassword} />
          <View style={{alignItems: 'center'}}>
            <View style={{marginTop: 30, width: width / 3}}>
              <Buttons
                title="Login"
                edits={submit}
                color="#17306e"
                {...props}
              />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
