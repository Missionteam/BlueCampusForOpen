// "use client";

// import { Auth } from "firebase/auth";
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
// // 後ほどパスワード再設定画面へのリンクを設置するために入れておく
// import Link from "next/link";
// import Header from "@/components/base/LoginHeader";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, setAuth] = useState<Auth | null>(null);

//   useEffect(() => {
//     import("firebase/auth")
//       .then(({ getAuth }) => {
//         setAuth(getAuth());
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const doLogin = useCallback(() => {
//     if (auth) {
//       import("firebase/auth")
//         .then(({ signInWithEmailAndPassword }) => {
//           signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//               const user = userCredential.user;
//               console.log(user);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [auth, email, password]);

//   return (
//     <div>
//       <h1>ログイン</h1>
//       <div style={{ paddingBottom: "1rem" }}>
//         <Header />
//         <Form>
//           <FormGroup>
//             <Label>メールアドレス：</Label>
//             <Input
//               type="email"
//               name="email"
//               style={{ height: 50, fontSize: "1.2rem" }}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>パスワード：</Label>
//             <Input
//               type="password"
//               name="password"
//               style={{ height: 50, fontSize: "1.2rem" }}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormGroup>
//           <Button
//             style={{ width: 220 }}
//             color="primary"
//             // ログインボタンがクリックされたときdoRegister関数が実行されるようにする
//             onClick={() => {
//               doLogin();
//             }}
//           >
//             ログイン
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
