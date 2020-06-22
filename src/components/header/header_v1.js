import React from 'react';
import {Header, Title, Body} from 'native-base';

const HeaderV1 = (props) => {
    const { title, color } = props
        
  return (
      <Header noLeft androidStatusBarColor={color} style={{
          backgroundColor: color
      }}>
      <Body style={{alignItems: 'center'}}>
              <Title>{title}</Title>
      </Body>
    </Header>
  );
};

export default HeaderV1;
