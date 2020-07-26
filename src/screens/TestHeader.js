import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Icon from 'react-native-ionicons';

const windowHeight = Dimensions.get('window').height;
const {event, ValueXY} = Animated;
const scrollY = new ValueXY();
const title = 'Daily News';

const text = {
  biography: `The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price.
  The assassin droid IG-11 was also dispatched to terminate him. After working together to storm the encampment the infant was being held in, the Mandalorian and IG-11 found the Child. IG-11 then attempted to terminate the Child. The Mandalorian shot the droid before the he was able to assassinate the Child.
  Shortly after, the Mandalorian took the Child back to his ship. On the way they were attacked by a trio of Trandoshan bounty hunters, who attempted to kill the Child. After the Mandalorian defeated them, he and the Child camped out in the desert for the night. While the Mandalorian sat by the fire, the Child ate one of the creatures moving around nearby. He then approached the bounty hunter and attempted to use the Force to heal one of the Mandalorian's wounds. The Mandalorian stopped him and placed him back into his pod. The next day, the pair made it to the Razor Crest only to find it being scavenged by Jawas. The Mandalorian attacked their sandcrawler for the scavenged parts and attempted to climb it while the Child followed in his pod. However, the Mandalorian was knocked down to the ground`,
  powers: 'Powers and Abilities',
  appearances: 'Appearances',
};

const styles = StyleSheet.create({
  headerCotainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontFamily: 'impact',
    color: 'black',
    paddingLeft: 20,
    fontSize: 20,
  },
  titleStyle: {
    color: 'black',
    fontFamily: 'impact',
    fontSize: 50,
  },
  tabTextContainerStyle: {},
  tabTextContainerActiveStyle: {},
  tabTextStyle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#9F9F9F',
  },
  tabTextActiveStyle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    // lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'black',
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  contentContiner: {
    backgroundColor: 'white',
    height: windowHeight,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
});

const CutomHeaderScreen = () => {
  const renderContent = x => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );

  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 60, 90],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => console.warn('CLICKED')}>
            <Icon name="ios-paper" color="black" />
          </TouchableOpacity>
          <Animated.View style={{opacity}}>
            <Text style={styles.headerText}>{title}</Text>
          </Animated.View>
        </View>
      </View>
    );
  };

  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      backgroundColor={'white'}
      backgroundImage={{
        source: require('../assets/img/509.jpg'),
      }}
      foregroundImage={{}}
      header={renderHeader}
      title={title}
      titleStyle={styles.titleStyle}
      tabs={[
        {
          title: 'Fresh',
          content: renderContent(text.biography),
        },
        {
          title: 'Featured',
          content: renderContent(text.powers),
        },
        {
          title: 'Top Stories',
          content: renderContent(text.appearances),
        },
      ]}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
        useNativeDriver: false,
      })}
    />
  );
};
export default CutomHeaderScreen;
