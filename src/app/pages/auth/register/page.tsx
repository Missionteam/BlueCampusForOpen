// "use client";
// import styles from "../styles/Home.module.css";
// import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
// // 現時点で使わないものもあるが今後のことを考えて入れておく
// import {
//   Col,
//   Container,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Row,
//   Button,
// } from "reactstrap";
// import { useState, useEffect, useCallback } from "react";
// import Header from "@/components/base/LoginHeader";
// import Link from "next/link";

// export default function Register() {
//   // useStateでユーザーが入力したメールアドレスとパスワードをemailとpasswordに格納する
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, setAuth] = useState<Auth | null>(null);

//   // ユーザーが登録ボタンを押したときにdoRegister関数が実行される

//   const doRegister = useCallback(() => {
//     import("firebase/auth").then(
//       ({ createUserWithEmailAndPassword, getAuth }) => {
//         setAuth(getAuth());
//         console.log("feel pressed");
//         // Firebaseで用意されているユーザー登録の関数
//         if (auth)
//           createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//               // ユーザー登録すると自動的にログインされてuserCredential.userでユーザーの情報を取得できる
//               const user = userCredential.user;
//               // ユーザー登録ができたかどうかをわかりやすくするためのアラート
//               alert("登録完了！");
//               console.log(user);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//       }
//     );
//   }, [auth, email, password]);

//   return (
//     <div className="p-4 rounded bg-transparent border border-transparent transition-colors duration-200">
//       <h1>新規登録</h1>
//       <div>
//         <Header />
//         <Form>
//           <FormGroup>
//             <Label>メールアドレス：</Label>
//             <Input
//               type="email"
//               name="email"
//               style={{ height: 50, fontSize: "1.2rem" }}
//               // onChangeでユーザーが入力した値を取得し、その値をemailに入れる
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>パスワード：</Label>
//             <Input
//               type="password"
//               name="password"
//               style={{ height: 50, fontSize: "1.2rem" }}
//               // onChangeでユーザーが入力した値を取得し、その値をpasswordに入れる
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormGroup>
//           <Link href={"/"}>
//             <Button
//               style={{ width: 220 }}
//               color="primary"
//               // 登録ボタンがクリックされたときdoRegister関数が実行されるようにする
//               onClick={() => {
//                 doRegister();
//               }}
//             >
//               登録
//             </Button>
//           </Link>
//         </Form>
//       </div>
//     </div>
//   );
// }
