import React, {useState, useEffect} from 'react';
import {Text, Container, Content, View} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

// Component
import Header from '../../components/header/header_v3';
import Acordions from '../../components/acordion/index';
import {TouchableOpacity, Animated, Dimensions} from 'react-native';
import ActionSheet from '../../components/action sheet/formAction';
import Modal from '../../components/modal/index';
import Buttons from '../../components/button/button_v1';
import {
  GetAll,
  deleteUser,
  updateUser,
  checkToken,
  logoutUser,
} from '../../redux/actions/user';
import {useSelector, useDispatch, connect} from 'react-redux';

const {height, width} = Dimensions.get('window');
const Dashboard = props => {
  const response = useSelector(state => ({
    err: state.user.listUser.error,
    data: state.user.listUser.result,
    user: state.user.dataUser.result,
  }));
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(false);
  const [picker, setPicker] = useState('admin');
  const [dataAr, setDataAr] = useState([]);
  const [selected, setSelected] = useState();
  const [filtered, setFiltered] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const getData = async () => {
    await dispatch(GetAll());
  };
  useEffect(() => {
    getData();
    // dispatch(getMultiple());
  }, []);

  let tmp = [];
  if (response.data != undefined) {
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].superadmin != 1) {
        if (response.data[i].userId != response.user.userId)
          if (response.data[i].is_delete != 1) {
            tmp.push({
              title: response.data[i].name,
              content: {
                id: response.data[i].userId,
                email: response.data[i].email,
                position: definePosition(
                  response.data[i].admin,
                  response.data[i].director,
                  response.data[i].hoe,
                  response.data[i].operator,
                ),
              },
            });
          }
      }
    }
  }

  function definePosition(admin, dir, hoe, oper) {
    if (admin === 1) {
      return 'Admin';
    } else if (dir === 1) {
      return 'Director';
    } else if (hoe === 1) {
      return 'Head of Engineering';
    } else if (oper === 1) {
      return 'Operator';
    }
  }
  const convertPosition = val => {
    if (val === 'Admin') {
      return 'is_admin';
    } else if (val === 'Director') {
      return 'is_director';
    } else if (val === 'Head of Engineering') {
      return 'is_hoe';
    } else if (val === 'Operator') {
      return 'is_operator';
    }
  };

  const openAction = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const closeAction = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const screenHeight = Dimensions.get('window').height;

  const backdrop = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [screenHeight, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * screenHeight],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const deletedUser = id => {
    setSelected(id);
    setVisible(true);
  };

  const getEdit = id => {
    const fill = tmp.filter(val => val.content.id === id);
    setFiltered(fill);

    setPicker(fill[0].content.position);

    openAction();
  };

  const goEdit = async () => {
    const data = {
      name: name.length > 0 ? name : filtered[0].title,
      email: email.length > 0 ? email : filtered[0].content.email,
    };
    data[convertPosition(picker)] = 1;

    await dispatch(updateUser(filtered[0].content.id, data));
    await dispatch(GetAll());
    closeAction();
  };

  const goDelete = async () => {
    await dispatch(deleteUser(selected));

    setVisible(false);
  };
  const getMultiple = async () => {
    let values;
    try {
      values = await AsyncStorage.multiGet(['token', 'id']);
    } catch (e) {
      console.log(e);
    }
    const tokens = values[0][1];
    const id = values[1][1];
    setToken(tokens);
    setUserId(id);
    checkTokens();
  };

  const checkTokens = () => {
    dispatch(checkToken(token, String(userId)));
  };

  const logout = async () => {
    AsyncStorage.multiRemove(['token', 'id']);
    await dispatch(logoutUser());
    props.navigation.navigate('Login');
  };
  return (
    <Container>
      <Header logout={logout} title="Dashboard" color="#171717" />

      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{marginTop: 20}}>
          <View style={{alignItems: 'flex-end', marginBottom: 15}}>
            <View style={{width: width / 3, marginRight: 10}}>
              {response.user.superadmin === 1 ? (
                <Buttons
                  smal={true}
                  title="Tambah Data"
                  go="AddData"
                  color="#17306e"
                  {...props}
                />
              ) : response.user.admin === 1 ? (
                <Buttons
                  smal={true}
                  title="Tambah Data"
                  go="AddData"
                  color="#17306e"
                  {...props}
                />
              ) : null}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <Text style={{color: '#e5e5e5'}}>Username</Text>
            <Text style={{color: '#e5e5e5'}}>Action</Text>
          </View>
          <Acordions
            deleteUser={deletedUser}
            datas={tmp}
            edits={openAction}
            omodal={setVisible}
            edit={getEdit}
            dataUser={response.user}
          />
        </View>

        <ActionSheet
          backdrop={backdrop}
          slideUp={slideUp}
          close={closeAction}
          valPic={picker}
          setPic={setPicker}
          init={filtered}
          email={setEmail}
          name={setName}
          position={setPosition}
          edit={goEdit}
        />

        <View>
          <Modal deleteUser={goDelete} visible={visible} set={setVisible} />
        </View>
      </View>
    </Container>
  );
};

// const mapStateToProps = state => {
//   return {
//     errors: state.user.listUser.error,
//     data: state.user.listUser.result,
//   };
// };

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
