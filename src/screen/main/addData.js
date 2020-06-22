import React, {useState} from 'react';
import {Container, View, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {register, GetAll} from '../../redux/actions/user';

// Commponent
import Header from '../../components/header/header_v2';
import Form from '../../components/form/addForm';
import Buttons from '../../components/button/button_v2';
const AddData = props => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');

  const dispatch = useDispatch();
  const submit = async () => {
    const data = {
      email: email,
      name: username,
      password: password,
      type: position,
      values: '1',
    };
    await dispatch(register(data));
    await dispatch(GetAll());
    props.navigation.navigate('Dashboard');
  };
  return (
    <Container>
      <Header title="Tambahkan Data" color="#171717" {...props} />
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          paddingTop: 10,
        }}>
        <View>
          <Form
            email={setEmail}
            username={setUsername}
            password={setPassword}
            position={setPosition}
            initPosition={position}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 15}}>
          <Buttons edits={submit} title="Save" color="#17306e" />
        </View>
      </View>
    </Container>
  );
};

export default AddData;
