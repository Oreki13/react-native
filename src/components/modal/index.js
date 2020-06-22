import React from 'react';
import {Modal, StyleSheet, Dimensions} from 'react-native';
import {View, Text, Button} from 'native-base';

const {width, height} = Dimensions.get('window');
const Modals = props => {
  const {visible, set, deleteUser} = props;
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={{color: '#e5e5e5'}}>
            Apakah yakin ingin menghapus data inii ?
          </Text>
          <View style={styles.boxbtn}>
            <Button
              style={{marginRight: 10, backgroundColor: '#17306e'}}
              small
              rounded
              onPress={() => set(false)}>
              <Text>Tidak</Text>
            </Button>
            <Button
              style={{backgroundColor: '#6e1717'}}
              small
              rounded
              onPress={() => deleteUser()}>
              <Text>Hapus</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#3b3b3b',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width - 30,
  },
  boxbtn: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
