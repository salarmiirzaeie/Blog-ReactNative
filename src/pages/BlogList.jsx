import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {usePosts} from '../services/blogService/blogService';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import MyContext from '../states/selectedItem';

const BlogList = () => {
  const {data, isFetching, refetch} = usePosts();
  const navigation = useNavigation();
  const {setData} = useContext(MyContext);

  const pressHandler = item => {
    setData(item);
    navigation.navigate('DetBlog');
  };

  return (
    <View style={styles.container}>
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={item => item.postId}
          data={data?.result}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refetch} />
          }
          renderItem={({item, i}) => (
            <Card onPress={() => pressHandler(item)} blog={item} />
          )}
          ListEmptyComponent={<Text>No Data</Text>}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
export default BlogList;
