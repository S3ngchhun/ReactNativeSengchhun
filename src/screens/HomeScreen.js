import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  Pressable,
  Button,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import NewsCard from '../components/NewsCard';

const screen = Dimensions.get('screen');
const windows = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  // News
  const news = {
    img: '../assets/img/taylor.jpg',
    title: 'Taylor Swift Announces Surprise New Album Folklore',
    date: '2020-07-23',
    source: 'BBC News',
    navigation: navigation,
    description: `\tThe 16-track album was written and recorded in isolation during the Covid-19 lockdown, she said on social media. "Most of the things I had planned this summer didn't end up happening," added Swift, who was set to headline Glastonbury's Pyramid stage in June.
    "But there is something I hadn't planned on that DID happen," she told fans, before revealing the new album. Folklore is made up of "songs I've poured all of my whims, dreams, fears, and musings into," she continued, and sees her collaborate (remotely) with "musical heroes" inclduing The National's Aaron Dessner, Bon Iver and Jack Antonoff.`,
  };

  const title = 'Daily News';
  // const img = '../component/'
  return (
    <SafeAreaView style={styles.Container}>
      <Icon name="ios-paper" size={40} />
      <Text style={styles.HomeTitle}>{title}</Text>
      <View style={styles.TabsContainer}>
        <Text style={styles.TabsActive}>Fresh</Text>
        <Text style={styles.Tabs}>Featured</Text>
        <Text style={styles.Tabs}>Top Stories</Text>
      </View>
      <ScrollView style={styles.CardScrollView}>
        <NewsCard news={news} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f5f5f5',
    height: screen.height,
    padding: 20,
    paddingTop: 40,
  },
  HomeTitle: {
    fontFamily: 'impact',
    fontSize: 40,
    paddingTop: 20,
  },
  TabsContainer: {
    // flex: 1,
    flexDirection: 'row',
    marginHorizontal: -20,
    paddingHorizontal: 12,
  },
  TabsActive: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'black',
  },
  Tabs: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#9f9f9f',
  },
  CardScrollView: {
    height: windows.height,
    paddingTop: 20,
  },
});

export default HomeScreen;
