import { Flatlist, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Post from './components/Post';

export default function HomeScreen() {
  return (
    <View>
      <Text>H</Text>
    </View>
  )
}

const [ posts, setPosts] = useState([])

useEffect(() => {

    fetch('https://workshop.elyasasmad.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })

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
            <StatusBar style="auto" />
    </View>      
  ); 