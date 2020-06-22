import React from 'react';
import {View, Text, Icon, Button} from 'native-base';
import {StyleSheet} from 'react-native';

// Componnet
import Buttons from '../button/button_v2';

const Header = props => {
  const {item, expanded, edits, omodal, deleteUser, edit, dataUser} = props;
  // console.log('header', item);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {item.title}</Text>
      {dataUser.superadmin === 1 ? (
        <>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 80, marginRight: 10}}>
              <Button
                small
                onPress={() => edit(item.content.id)}
                style={{backgroundColor: '#17306e', borderRadius: 10}}>
                <Text style={{textAlign: 'center', flex: 1}}>Edit</Text>
              </Button>
            </View>
            <View style={{width: 80}}>
              <Button
                small
                onPress={() => deleteUser(item.content.id)}
                style={{backgroundColor: '#6e1717', borderRadius: 10}}>
                <Text style={{textAlign: 'center', flex: 1}}>Hapus</Text>
              </Button>
            </View>
          </View>
        </>
      ) : dataUser.admin === 1 ? (
        <>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 80, marginRight: 10}}>
              <Button
                small
                onPress={() => edit(item.content.id)}
                style={{backgroundColor: '#17306e', borderRadius: 10}}>
                <Text style={{textAlign: 'center', flex: 1}}>Edit</Text>
              </Button>
            </View>
            <View style={{width: 80}}>
              <Button
                small
                onPress={() => deleteUser(item.content.id)}
                style={{backgroundColor: '#6e1717', borderRadius: 10}}>
                <Text style={{textAlign: 'center', flex: 1}}>Hapus</Text>
              </Button>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
  },
  title: {
    fontWeight: '600',
    color: '#e5e5e5',
  },
});
