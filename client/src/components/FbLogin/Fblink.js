import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

function Fblink() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userID, setUserID]= useState("")
  const [username, setUserName] = useState(null);
  const [accessTokenFB, setAccessTokenFB] = useState("")
  // const [isFacebook, isInstagram] = useCheckURL(link && link.hashisOwnProperty('url') && link.url);

  
    const LoginFacebookClicked = data => {
      console.log("userdata",data)
      
    }
   
const responseFacebook = response => {
  // setUserID(response.id)
  // setAccessTokenFB(response.accessToken)
  // setUserName(response.name)
  console.log(response )
}

  // const handleLogin = () => {
  //   axios
  //     .get("http://localhost:3000/auth/facebook")
  //     .then((response) => {
  //       // Handle the success response here
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       // Handle the error here
  //       console.error(error);
  //     });
  // };
  // const handleLogin = async () => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch('http://localhost:5000/auth/facebook');
  //     const data = await response.json();
  //     setUser(data);
  //     console.log("userdata", data)
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
{/*       
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
      {user ? (
        <div>
          Welcome, {user.profile.displayName}!
          Your access token is: {user.accessToken}.
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Facebook</button>
      )} */}
      <FacebookLogin
    appId="5967912659958745"
    autoLoad={true}
    fields="id,name,likes,public_pages"
    onClick={LoginFacebookClicked}
    callback={responseFacebook} />
    </div>
  );
};

export default Fblink