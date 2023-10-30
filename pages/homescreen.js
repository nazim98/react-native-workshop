import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Post from '../components/Post';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../config/firebase'



export default function HomeScreen({navigation}) {
  const [ posts, setPosts] = useState([])

useEffect(() => {

    const col = collection(db, "Posts")
    const unsubscribe = onSnapshot(col, (querySnapshot) => {
      const Posts = [];
      querySnapshot.forEach((doc) => {
          Posts.push(doc.data());
      });
      setPosts(Posts)
    });

    return unsubscribe
    // fetch('https://workshop.elyasasmad.com/posts')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPosts(data)
    //   })

}, [] )
  return (
    <View style={styles.container}>
      <FlatList 
        data={posts}
        renderItem={({item}) => (
          <Post
            likes={item.data.likes}
            comments={item.data.comments}
            reposts={item.data.reposts}
            name={item.name}
            username={item.username}
            photoURL={item.photoURL}
            createdAt={item.createdAt}
            >
              {item.content}
            </Post>
        )}
            keyExtractor={(item) => item.name}
            />
            <Pressable onPress={() => navigation.navigate('Content')} className='pt-4'>
              <Text>submit</Text>
            </Pressable>
            <StatusBar style="auto" />
            </View>

            
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
});

