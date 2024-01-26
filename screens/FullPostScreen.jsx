import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';


const PostImage = styled.Image`
  width: 100%;
  height: 260px;
  border-radius: 12px;
  margin-right: 12px;
  margin-bottom: 20px;
`;

const PostTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;


export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItems] = useState();
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://2500c01dac847703.mokky.dev/ar/' + id);
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
    <View style={{ padding: 15 }}>
      <PostImage source={{ uri: item?.imageUrl }} />
      <PostTitle>{item?.text}</PostTitle>
    </View>
  );
};
