import React, {useContext} from 'react';
import {useWindowDimensions, ScrollView, StyleSheet} from 'react-native';
import MyContext from '../states/selectedItem';
import RenderHTML from 'react-native-render-html';

const DetBlog = () => {
  const {data} = useContext(MyContext);
  const source = {
    html: data?.content,
  };
  const {width} = useWindowDimensions();
  return (
    <ScrollView style={styles.scroll}>
      <RenderHTML contentWidth={width} source={source} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 10,
  },
});
export default DetBlog;
