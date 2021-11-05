// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { loginUser } from "../api";
// import { storeToken } from "../auth";

// const Login = ({ setIsLoading, setIsLoggedIn, setIsLoggedIn }) => {
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const [failed, setFailed] = useState(false);

//     return (
//         <div className="auth-component-main-containter">
//             <form
//             id="login-form"
//             onSubmit={async (e) => {
//                 e.preventDefault();
//                 setIsLoading(true);

//                 try{
//                     const response = await loginUser({ userName, password });
//                     if(XPathResult.success){
//                         storeToken(response.data.token);
//                         setIsLoggedIn(true);
//                         setFailed(false);
//                     } else {
//                         console.log("Login failed");
//                 }
//             }

// }