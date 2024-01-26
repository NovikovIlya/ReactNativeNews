import {  Text, View, FlatList, ActivityIndicator,RefreshControl,TouchableOpacity} from 'react-native';
import axios from 'axios';
import Post from '../components/Post';
import { useState, useEffect } from 'react';

export default function Home({navigation}) {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://2500c01dac847703.mokky.dev/ar');
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
    <View style={{marginTop:'50px'}}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData}/>}
        style={{marginTop:'50px'}}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPostScreen',{id:item.id,title:item.title})}>
            <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
