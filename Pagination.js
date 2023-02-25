import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Pagination = ({pageNum, setPageNum, MAX_NUM_PER_PAGE, length}) => {
  const pages = [];
  const numPage = Math.ceil(length / MAX_NUM_PER_PAGE);
  for (var i = 1; i <= numPage; i++) {
    pages.push(i);
  }

  return (
    <View style={styles.sectionContainer}>
      {pages.map(el => (
        <TouchableOpacity
          key={el}
          onPress={() => setPageNum(el)}
          style={[
            styles.sectionPage,
            pageNum == el ? {backgroundColor: '#0062cc'} : '',
          ]}>
          <Text style={{color: '#fff'}}>{el}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    margin: '1%',
    width: '100%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionPage: {
    borderWidth: 1,
    borderColor: '#0062cc',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    margin: '0.5%',
  },
});

export default Pagination;
