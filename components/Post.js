import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { Image } from 'expo-image';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const content = 'KLANG: Diabetes is no longer a disease of the elderly as even teenagers are being afflicted with it. Consultant endocrinologist Dr Malathi Karupiah said a survey conducted by the National Health Institute indicated that one in every five Malaysians was diabetic. She said Type 2 diabetes, which is due to insulin resistance, was the most common in the country. “In addition to this, there are also those who are pre-diabetic, as well as people who are unaware that they have diabetes,” said Dr Malathi.'

const Post = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={props.photoURL}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.topHeader}>
          <Text style={[styles.headerText, styles.bold]}>{props.name}</Text>
          <Text style={[styles.headerText, styles.gray]}>{props.username}</Text>
          <Text style={[styles.headerText, styles.gray]}>{props.createdAt}</Text>
        </View>
          <Text style={styles.contentText}>{props.children}</Text>

        <View style={styles.postActions}>

          <TouchableOpacity style={[styles.icon]}>
            <FontAwesome5 name="comment-dots" size={14} color="black" />
            <Text style={{ marginLeft: 4}}>{props.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.icon]}>
            <FontAwesome5 name="retweet" size={14} color="black" />
            <Text style={{ marginLeft: 4}}>{props.reposts}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.icon]}>
            <EvilIcons name="like" size={21} color="black" />
            <Text style={{ marginLeft: 1}}>{props.likes}</Text>
          </TouchableOpacity>

          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 'auto',
    width: 366,
    borderWidth: 0.8,
    borderColor: '#AAAAAA',
    borderRadius: 20,
    padding: 12,
    marginBottom: 14
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  topHeader: {
    flexDirection: 'row',
  },
  headerText: {
    marginRight: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  gray: {
    color: '#AAAAAA',
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    flexDirection: 'row',
  }
});

export default Post;
