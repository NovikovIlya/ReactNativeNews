import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  refreshControl,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Post from './components/Post';
import { useState, useEffect } from 'react';
import Home from './screens/Home';
import { FullPostScreen } from './screens/FullPostScreen';
import { Navigation } from './screens/Navigation';

export default function App() {
  return <Navigation />;
}
