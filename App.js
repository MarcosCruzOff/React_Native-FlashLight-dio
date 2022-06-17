import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import imgLight from './assets/eco-light.png';
import imgOff from './assets/eco-light-off.png';
import imgLogoDio from './assets/logo-dio-white.png';
import imgLogoDioOff from './assets/logo-dio.png';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
    console.log('trocou estado luz');
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleChangeToggle();
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          source={toggle ? imgLight : imgOff}
          style={toggle ? style.lightinOn : style.lightinOff}
        />
        <Image
          source={toggle ? imgLogoDioOff : imgLogoDio}
          style={toggle ? style.lightinOn : style.lightinOff}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  containerLight: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  lightinOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginBottom: 2,
  },

  lightinOff: {
    tintColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginBottom: 2,
  },
});
