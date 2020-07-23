import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Image source={require('./img/bird.png')} style={styles.loginLogo} />
          <Text style={styles.logoText}>{'The Phoenix'.toUpperCase()}</Text>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <Text
            style={[styles.forgetPassword, styles.bold, styles.textPrimary]}>
            Forget password?
          </Text>
          <TouchableHighlight style={styles.primaryBtn}>
            <Text style={[styles.bold, styles.textWhite]}>Login</Text>
          </TouchableHighlight>
          {/* <View style={styles.primaryBtn}>
            <Text style={styles.lightText}>Login</Text>
          </View> */}
          <Text style={{color: '#000', fontSize: 18}}>
            Don't have an account?
            <Text style={{color: '#fcc100', fontWeight: 'bold'}}>
              {' '}
              Register
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  forgetPassword: {
    marginBottom: 20,
    textAlign: 'right',
    alignSelf: 'stretch',
  },
  bold: {
    fontWeight: 'bold',
  },
  textWhite: {
    fontSize: 18,
    color: 'white',
  },
  textPrimary: {
    fontSize: 18,
    color: '#fcc100',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#e3e3e3',
    fontSize: 20,
    paddingHorizontal: 15,
  },
  primaryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 24,
    backgroundColor: '#fcc100',
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  lightText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  loginLogo: {
    height: 100,
    width: 100,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop: 100,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: screenHeight,
    width: screenWidth,
    paddingHorizontal: 30,
  },
  sectionContainer: {
    paddingHorizontal: 30,
    width: screenWidth,
  },
});

export default App;
