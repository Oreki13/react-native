import React from 'react';
import {Header, Title, Body, Left, Icon, Right} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderV2 = props => {
  const {title, color} = props;

  return (
    <Header
      androidStatusBarColor={color}
      style={{
        backgroundColor: color,
      }}>
      <Left style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Dashboard')}>
          <Icon
            type="AntDesign"
            name="arrowleft"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default HeaderV2;
