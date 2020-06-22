import React from 'react';
import {Header, Title, Body, Right, Text, Left, View, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderV3 = props => {
  const {title, color, logout} = props;

  return (
    <Header
      noLeft
      androidStatusBarColor={color}
      style={{
        backgroundColor: color,
      }}>
      <Body>
        <View style={{alignItems: 'center', marginLeft: 10}}>
          <Title>{title}</Title>
        </View>
      </Body>
      <Right>
        <TouchableOpacity onPress={() => logout()} style={{marginRight: 10}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              type="AntDesign"
              name="logout"
              style={{color: '#e5e5e5', fontSize: 20}}
            />
            <Text style={{color: '#e5e5e5', fontSize: 10}}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

export default HeaderV3;
