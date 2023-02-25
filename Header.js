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

const Header = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>Skeleton Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    height: '6%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(28,28,28,1)',
    opacity: 1,
  },
  sectionHeader: {
    fontSize: 24,
    color: '#0055b3',
  },
});

export default Header;
