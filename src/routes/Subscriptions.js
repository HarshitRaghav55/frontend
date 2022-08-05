import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
// import Data from "../data.json"
import { useNavigate } from "react-router-dom";
const Subscriptions = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState
  const callSubscriptions = async () => {
    try {
      const res = await fetch("/subscriptions", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      console.log(data);
      setUser(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw new error;
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }
  useEffect(() => {
    callSubscriptions();
  }, []);
  return (
    <div style={styles.container}>
      <Navbar />
      <div>Subscriptions</div>
      <form method="GET">
        <div className="data">
          {
            user.map(post => {
              return (
                <div key={post.id}>
                  {/* <h4>
                  {post.title}
                </h4>
                <p>
                  {post.title}
            </p>*/}

                  {post.google.map((sub) =>
                    <ul>
                      <li>
                        {sub.firstName}
                      </li>
                      <li>
                        {sub.lastName}
                      </li>
                      <li>
                        {sub.email}
                      </li>
                    </ul>
                  )}
                  {post.userName}
                  

                </div>
              )
            })

          }
        </div>
      </form>


    </div>
  );
}
const styles = {
  container: {
    marginTop: '5%',
  },
  button: {
    width: "200",
  },
};
export default Subscriptions;