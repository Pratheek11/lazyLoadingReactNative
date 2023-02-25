import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
} from 'react-native';

const Skeleton = () => {
  const leftvalue = useState(new Animated.Value(5))[0];

  useEffect(() => {
    Animated.loop(
      Animated.timing(leftvalue, {
        toValue: 230,
        duration: 500,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionCard}>
        <View style={styles.sectionAvatar} />
        <View style={styles.sectionTitle} />
        <View style={styles.sectionBody} />
        <Animated.View
          style={[
            styles.sectionRefresh,
            {transform: [{translateX: leftvalue}, {rotate: '8deg'}]},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: 'auto',
    width: '100%',
    margin: '1%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'inherit',
    overflow: 'hidden',
  },
  sectionCard: {
    width: '90%',
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  sectionAvatar: {
    margin: '1%',
    padding: '5%',
    borderRadius: 50,
    backgroundColor: 'rgb(59, 58, 58)',
  },
  sectionTitle: {
    margin: '1%',
    paddingHorizontal: '20%',
    paddingVertical: '5%',
    borderRadius: 7,
    backgroundColor: 'rgb(59, 58, 58)',
  },
  sectionBody: {
    margin: '1%',
    paddingHorizontal: '40%',
    paddingVertical: '10%',
    borderRadius: 7,
    backgroundColor: 'rgb(59, 58, 58)',
  },
  sectionRefresh: {
    position: 'absolute',
    top: 0,
    left: 12,
    width: '24%',
    height: '100%',
    backgroundColor: 'rgba(288,288,288,0.3)',
    borderRadius: 10,
    opacity: 0.1,
  },
});

export default Skeleton;
