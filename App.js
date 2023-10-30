import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './pages/homescreen';
import Contentscreen from './pages/contentscreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Content" component={Contentscreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );

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
  ); }
      
//       <Text style={styles.text}>Hello, React Native!</Text>
//       <Post likes={455} comments={25} reposts={250}>
//       KLANG: Diabetes is no longer a disease of the elderly as even teenagers are being afflicted with it. Consultant endocrinologist Dr Malathi Karupiah said a survey conducted by the National Health Institute indicated that one in every five Malaysians was diabetic. She said Type 2 diabetes, which is due to insulin resistance, was the most common in the country. “In addition to this, there are also those who are pre-diabetic, as well as people who are unaware that they have diabetes,” said Dr Malathi.</Post>
//       <Post likes={255} comments={15} reposts={150}></Post>
//       <Post likes={100} comments={5} reposts={50}></Post>
//     </View>
//   );
// }


