import React from 'react';
import {Button, Text} from 'native-base';

const ButtonV2 = props => {
  const {title, smal, color, edits, param} = props;

  return (
    <Button
      small={smal}
      onPress={() => (param != undefined ? edits(param) : edits())}
      style={{backgroundColor: color ? color : '#fff', borderRadius: 10}}>
      <Text style={{textAlign: 'center', flex: 1}}>
        {title ? title : '???'}
      </Text>
    </Button>
  );
};

export default ButtonV2;
