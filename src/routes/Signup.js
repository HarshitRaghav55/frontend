import React, { Component, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
const Signup = ()=> {
  const navigate = useNavigate();

  const [user,setUser]= useState({
    name:"",password:""
  })
  const PostData = async(e)=>{
    e.preventDefault();
    const {name,password}=user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,password
      })

    });
    const data=await res.json();
    if(data.status===422 || !data){
      window.alert("invalid signup");
      console.log("invalid signup");

    }
    else{
      console.log("signup succesfull");
      navigate("/dashboard")
    }

  }
    return (
    <React.Fragment>
    <div>
      
      <div style={styles.topText}>Sign up!</div>
        <form style={styles.form} method = "post" id="register-form">
          <input type="text" style={styles.input} value={user.name} onChange={event => setUser.name(event.target.value)} placeholder="Username" />

          <input type="text" style={styles.input} value={user.password} onChange={event => setUser.password(event.target.value)} placeholder="Password"/>
          <input type ="submit" name ="signup" id ="signup" value="signup" onClick={PostData}/>
        </form>
      </div>
      
      <Button text = 'Login With Google'/>
      
      </React.Fragment>
    )
    }
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
    

export default Signup