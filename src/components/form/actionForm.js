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

const ActionForm = props => {
  const {valPic, setPic, init, name, email} = props;

  return (
    <Form>
      <Item stackedLabel>
        <Label style={styles.labels}>E-mail</Label>
        <Input
          onChangeText={v => email(v)}
          defaultValue={init.length === 0 ? '' : init[0].content.email}
          style={styles.inputs}
        />
      </Item>
      <Item stackedLabel>
        <Label style={styles.labels}>UserName</Label>
        <Input
          onChangeText={v => name(v)}
          defaultValue={init.length === 0 ? '' : init[0].title}
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
            selectedValue={valPic}
            mode="dropdown"
            onValueChange={v => setPic(v)}
            style={{color: '#e5e5e5', width: 150}}>
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Director" value="Director" />
            <Picker.Item
              label="Head of Engineering"
              value="Head of Engineering"
            />
            <Picker.Item label="Operator" value="Operator" />
          </Picker>
        </View>
      </View>
    </Form>
  );
};

export default ActionForm;

const styles = StyleSheet.create({
  inputs: {
    color: '#e5e5e5',
  },
  labels: {
    color: '#c9c9c9',
  },
});
