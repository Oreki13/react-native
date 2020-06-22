import React from 'react';
import {Text, View, Form, Item, Label, Input} from 'native-base';

const Content = props => {
  const {item} = props;

  return (
    <View style={{backgroundColor: '#303030', paddingBottom: 10}}>
      <Form>
        <Item stackedLabel>
          <Label style={{color: '#c9c9c9', fontSize: 12}}>E-mail</Label>
          <Input style={{color: '#e5e5e5'}} defaultValue={item.content.email} />
        </Item>
        <Item stackedLabel>
          <Label style={{color: '#c9c9c9', fontSize: 12}}>Position</Label>
          <Input
            style={{color: '#e5e5e5'}}
            defaultValue={item.content.position}
          />
        </Item>
      </Form>
    </View>
  );
};

export default Content;
