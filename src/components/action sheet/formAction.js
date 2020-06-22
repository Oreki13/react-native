import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import {Content, Button} from 'native-base';

// Componnent
import Forms from '../form/actionForm';
import Buttons from '../button/button_v2';

const {height, width} = Dimensions.get('window');
const ActionSheet = props => {
  const {
    edit,
    backdrop,
    slideUp,
    close,
    valPic,
    setPic,
    init,
    email,
    name,
  } = props;
  return (
    <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
      <View style={[styles.sheet]}>
        <Animated.View style={[styles.popup, slideUp]}>
          <Text style={styles.title}>Edit Data</Text>
          <Content>
            <View style={styles.form}>
              <Forms
                valPic={valPic}
                setPic={setPic}
                init={init}
                email={email}
                name={name}
              />
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{width: width / 3}}>
                  <Buttons title="Tutup" color="#6e1717" edits={close} />
                </View>
                <View style={{width: width / 3}}>
                  <Buttons title="Simpan" color="#17306e" edits={edit} />
                </View>
              </View>
            </View>
          </Content>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  cover: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  sheet: {
    position: 'absolute',
    top: height,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  popup: {
    backgroundColor: '#1c1c1c',
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height / 2.3,
  },
  form: {
    marginHorizontal: 10,
    width: width / 1.2,
  },
  title: {
    color: '#e5e5e5',
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 18,
  },
});
