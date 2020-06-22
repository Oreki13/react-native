import React from 'react';
import {StyleSheet} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';

const FormLogin = props => {
  const {usernames, password} = props;
  return (
    <Form>
      <Item stackedLabel>
        <Label>Username</Label>
        <Input onChangeText={v => usernames(v)} style={styles.inputs} />
      </Item>
      <Item stackedLabel>
        <Label>Password</Label>
        <Input onChangeText={v => password(v)} style={styles.inputs} />
      </Item>
    </Form>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  inputs: {
    color: '#e5e5e5',
  },
});
