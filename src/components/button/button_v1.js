import React from 'react';
import {Button, Text} from 'native-base';

const ButtonV1 = props => {
  const {title, go, smal, color} = props;

  return (
    <Button small={smal} onPress={()=> props.navigation.navigate(go)} style={{backgroundColor: color ? color : '#fff', borderRadius: 10}}>
      <Text style={{textAlign: 'center', flex: 1}}>
        {title ? title : '???'}
      </Text>
    </Button>
  );
};

export default ButtonV1;
