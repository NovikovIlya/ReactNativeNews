import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
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

const truncateTitle = (string) => {
  if (string.length >= 50) {
    return string.substring(0.5) + '...';
  }
  return string;
};

export default function Post({ title, imageUrl, createdAt }) {
  return (
    <View>
      <PostView>
        <PostImage source={{ uri: imageUrl }} />
        <PostDetails>
          <PostTitle>{truncateTitle(title)}</PostTitle>
          <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
        </PostDetails>
      </PostView>
      <StatusBar theme="auto" />
    </View>
  );
}
