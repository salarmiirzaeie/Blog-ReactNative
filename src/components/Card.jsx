import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = ({blog, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={{flex: 0.3}}>
        <Image
          // defaultSource={require('../assets/img/default.jpg')}
          style={styles.image}
          loadingIndicatorSource={require('../assets/img/default.jpg')}
          source={{
            uri: blog.banner,
          }}
        />
        <View style={styles.time}>
          <Text>
            {blog.totalReadingTime}
            {'min'}
          </Text>
        </View>
      </View>
      <View style={styles.det}>
        <Text style={styles.title}>{blog.title}</Text>

        <Text>{blog.summary}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4376FF',
    marginVertical: 3,
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 0.8,
  },
  det: {
    flex: 0.7,
    padding: 8,
  },
  time: {
    padding: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
    borderRadius: 8,
  },
});
export default Card;
