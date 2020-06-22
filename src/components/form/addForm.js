import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  View,
  Left,
  Right,
  Text,
} from 'native-base';

const {width, height} = Dimensions.get('window');

const AddForm = props => {
  const {email, username, password, position, initPosition} = props;
  return (
    <Form>
      <Item stackedLabel>
        <Label style={styles.labels}>E-mail</Label>
        <Input onChangeText={v => email(v)} style={styles.inputs} />
      </Item>
      <Item stackedLabel>
        <Label style={styles.labels}>UserName</Label>
        <Input onChangeText={v => username(v)} style={styles.inputs} />
      </Item>
      <Item stackedLabel>
        <Label style={styles.labels}>Password</Label>
        <Input
          secureTextEntry
          onChangeText={v => password(v)}
          style={styles.inputs}
        />
      </Item>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 15}}>
          <Text style={{color: '#e5e5e5'}}>Position :</Text>
        </View>
        <View>
          <Picker
            note
            selectedValue={initPosition}
            mode="dropdown"
            onValueChange={v => position(v)}
            style={{color: '#e5e5e5', width: 150}}>
            <Picker.Item label="Admin" value="is_admin" />
            <Picker.Item label="Director" value="is_director" />
            <Picker.Item label="Head of Engineering" value="is_hoe" />
            <Picker.Item label="Operator" value="is_operator" />
          </Picker>
        </View>
      </View>
    </Form>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  inputs: {
    color: '#e5e5e5',
  },
  labels: {
    color: '#c9c9c9',
  },
});
