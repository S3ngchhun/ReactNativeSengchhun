import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-ionicons';

export function NewsCard({news}) {
  const {date, title, source} = news;
  return (
    <View style={styles.container}>
      <Image
        style={styles.Thumbnail}
        source={require('../assets/img/taylor.jpg')}
      />
      <Text style={styles.CardTitle}>{title}</Text>
      <View style={styles.CardDateAndSource}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="ios-time" color="#9f9f9f" size={25} />
          <Text style={{paddingLeft: 5}}>{date}</Text>
        </View>
        <Text style={styles.source}>{source}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  CardTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 21,
    lineHeight: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Thumbnail: {
    width: '100%',
  },
  CardDateAndSource: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    paddingTop: 0,
    justifyContent: 'space-between',
  },
});
