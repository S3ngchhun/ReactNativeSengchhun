import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-ionicons';

const DetailScreen = ({route}) => {
  return (
    <SafeAreaView>
      <Image
        style={{width: '100%', height: 200}}
        source={require('../assets/img/taylor.jpg')}
      />
      <View style={styles.date}>
        <Icon name="ios-time" color="#9f9f9f" size={25} />
        <Text style={{paddingLeft: 5, color: '#9f9f9f', fontSize: 15}}>
          {route.params.date}
        </Text>
      </View>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.source}>{route.params.source}</Text>
      <Text style={styles.description}>{route.params.description}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  date: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  source: {
    color: '#9f9f9f',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    paddingHorizontal: 10,
  },
  description: {
    paddingHorizontal: 10,
    paddingTop: 10,
    lineHeight: 24,
    fontSize: 18,
  },
});
export default DetailScreen;
