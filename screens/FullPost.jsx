import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { useState ,useEffect} from 'react';
import axios from 'axios';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 260px;
  height: 260px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostDate = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
`;

export const FullPostScreen = () => { 
  const [isLoading, setIsLoading] = useState(false);
  const [item,setItems ] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://2500c01dac847703.mokky.dev/ar/1');
      setItems(response.data);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{padding: 15}}>
        <PostImage source={{ uri: item.imageUrl }}/>
        <PostTitle >{item.text}</PostTitle>
    </View>
  )
}
