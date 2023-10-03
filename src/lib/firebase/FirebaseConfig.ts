import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firestoreはログインやユーザー登録の実装には使わないが、今後のことを考えて入れておく
import { getFirestore, Firestore } from 'firebase/firestore'
import {
  getAuth,
  Auth,
} from "firebase/auth";

// .envファイルで設定した環境変数をfirebaseConfigに入れる
const firebaseConfig = {
  apiKey: "AIzaSyDj2YkXz-zgQ91hvZHtZntR3uL-PK0nMIE",
  authDomain: "blue-campus.firebaseapp.com",
  projectId: "blue-campus",
  storageBucket: "blue-campus.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId:"1:625469252529:web:dea589e2a62b0783575390"
};


// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
// 他ファイルで使うために機能をエクスポート
export const auth = getAuth();
export const db = getFirestore();
