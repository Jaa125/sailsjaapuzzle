import React, { useState } from 'react'
import InstagramLogin from 'react-instagram-login';

import axios from 'axios';


function InstaLogin() {
    // const [accessToken, setAccessToken] = useState(null);

    // const handleLogin = () => {
    //   const clientID = process.env.REACT_APP_INSTAGRAM_APP_ID;
    //   const redirectURI = 'https://test-front-mtfn.onrender.com';
  
    //   // Redirect user to Instagram login page
    //   window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=user_profile,user_media&response_type=code`;
    // };
  
    // const handleTokenExchange = async (code) => {
    //   const clientID = process.env.REACT_APP_INSTAGRAM_APP_ID;
    //   const clientSecret = process.env.REACT_APP_INSTAGRAM_APP_SECRET;
    //   const redirectURI2 = 'https://test-front-mtfn.onrender.com';
  
    //   // Exchange authorization code for access token
    //   const response = await axios.post({
    //     url: 'https://api.instagram.com/oauth/access_token',
    //     form: {
    //       client_id: clientID,
    //       client_secret: clientSecret,
    //       redirect_uri: redirectURI2,
    //       code: code,
    //       grant_type: 'authorization_code',
    //     },
    //   });
  
    //   const { access_token } = JSON.parse(response);
  
    //   setAccessToken(access_token);
    // };

    const responseInstagram = (response) => {
        try{
            console.log(response);
            // Handle the response from Instagram API
        } catch(err){
            console.log('errr', err)
        }
      };
  
    return (
      <div>
           <InstagramLogin
            clientId= '2034984773358818'
            redirectUri="http://localhost:3000/"
            buttonText="Login with Instagram"
            onSuccess={responseInstagram}
            onFailure={responseInstagram}
            scope={['instagram_basic']}
            fields="id,username"
          />
     
      </div>
    );
  };

export default InstaLogin