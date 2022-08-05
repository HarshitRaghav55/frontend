import React, { Component, useState } from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
// import Logout from "../Logout";
// import { CLIENT_ID } from "../constants/credentials";

const Login = () => {
  {/*//save data in local storage so that only one time login is required for id.

  // const [logindata, setLoginData] = useState(
  //   localStorage.getItem("loginData")
  //     ? JSON.parse(localStorage.getItem("loginData"))
  //     : null
  // );
  // const onSuccess = (res) => {
  //   console.log("Login Successful! Current User is :", res.profileObj);
  // };
  // const onFailure = (res) => {
  //   console.log("Login Failed! Res : ", res);
  // };
  // const handleLogin = async (googleData) => {
  //   const res = await fetch("/api/google-login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   setLoginData(data);
  //   localStorage.setItem("loginData", JSON.stringify(data));
// };*/}
const navigate = useNavigate();

const [user,setUser]= useState({
  name:"",password:""
})
const loginUser = async(e)=>{
  e.preventDefault();
  const {name,password}=user;
  const res = await fetch("/login",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      name,password
    })

  });
  const data=await res.json();
  if(data.status===400 || !data){
    window.alert("invalid login");
    console.log("invalid login");

  }
  else{
    console.log("login succesfull");
    navigate("/dashboard")
  }

}
  return (
    <div style={styles.container}>
      
      <div style={styles.box}>
        <img
          style={styles.image}
          src="https://cdn.worldvectorlogo.com/logos/google-sheets-full-logo-1.svg"
          alt="Google sheets Logo"
        />
      </div>
      <div style={styles.box2}>
        <div style={styles.topText}>Login Here!</div>
        <form style={styles.form} method = "post" id="login-form">
          <input type="text" style={styles.input} value={user.name} onChange={event => setUser.name(event.target.value)} placeholder="Username" />

          <input type="password" style={styles.input} value={user.password} onChange={event => setUser.password(event.target.value)} placeholder="Password"/>
          <input type ="submit" name ="login" id ="login" value="login" onClick={loginUser}/>
          
        </form>
        {/* change the isSignedIn to a dynamic one instead of always true */}
        {/* <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          // onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          handleLogin={handleLogin}
          // isSignedIn = {true}
        /> */}
      </div>
    </div>
  );
};

  const styles = {
    container: {
      height: "100vh",

      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
    },

    image: {
      height: 150,
      width: 300,
    },
    box: {
      display: "flex",

      margin: 10,
      justifyContent: "center",
      alignItems: "center",
      // minHeight: "600",
      // border: "2px solid grey",
      borderRadius: 10,
      width: "60vh",
      height: "70vh",
      minWidth: 300,
    },
    box2: {
      display: "flex",
      backgroundColor: "#209C61",
      margin: 10,
      justifyContent: "space-around",
      alignItems: "center",
      // minHeight: "600",
      border: "2px solid grey",
      borderRadius: 50,
      width: "60vh",
      height: "70vh",
      minWidth: 400,
      flexDirection: "column",
      minHeight: 300,
    },
    input: {
      width: "20vw",
      padding: 5,
      borderStyle: "solid",
      // borderWidth: 1,
      borderColor: "green",
      borderRadius: 50,
      color: "green",
      height: 25,
      margin: 10,
      minWidth: 150,
    },
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "60vh",
      flexDirection: "column",
    },
    topText: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 20,
      
    },
  };

export default Login;
