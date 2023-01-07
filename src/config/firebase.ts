import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCslII07lrPmcWHLkRiewmRyXizDTM52E',
  authDomain: 'test-5fa0a.firebaseapp.com',
  projectId: 'test-5fa0a',
  storageBucket: 'test-5fa0a.appspot.com',
  messagingSenderId: '254037477149',
  appId: '1:254037477149:web:89e547793365fc64eac3f4'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
