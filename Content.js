import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Content = ({data}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionCard}>
        <Text style={{margin: '1%', color: '#fff'}}>{data.name}</Text>
        <Text style={{margin: '1%', color: '#fff'}}>{data.title}</Text>
        <Text style={{margin: '1%', color: '#fff'}}>{data.description}</Text>
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: '#666666',
  },
});

export default Content;
