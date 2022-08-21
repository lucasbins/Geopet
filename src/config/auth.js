import { firebaseConfig } from './firebaseconfig';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import { initializeApp } from '@firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});