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
import {useState, useEffect} from 'react';
import Header from './Header';
import Skeleton from './Skeleton';
import Pagination from './Pagination';
import Content from './Content';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const MAX_NUM_PER_PAGE = 6;
  const items = [
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      name: 'React',
      title: 'Skeleton',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  ];

  useEffect(() => {
    var timer = setTimeout(() => {
      setLoaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const data = items.slice(
    pageNum * MAX_NUM_PER_PAGE - MAX_NUM_PER_PAGE,
    pageNum * MAX_NUM_PER_PAGE,
  );

  return (
    <View style={styles.sectionContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1C1C1C'} />
      <Header />
      <View style={{flex: 1}}>
        {loaded ? (
          <View style={{flex: 1, paddingTop: '12%'}}>
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
              {data.map((el, index) => (
                <Content data={el} key={index} />
              ))}
            </ScrollView>
            <Pagination
              pageNum={pageNum}
              setPageNum={setPageNum}
              MAX_NUM_PER_PAGE={MAX_NUM_PER_PAGE}
              length={items.length}
            />
          </View>
        ) : (
          <View style={{paddingTop: '12%'}}>{Array(5).fill(<Skeleton />)}</View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // paddingTop: 10,
    flex: 1,
    height: '100%',
    backgroundColor: 'rgb(28, 28, 28)',
  },
});

export default App;
