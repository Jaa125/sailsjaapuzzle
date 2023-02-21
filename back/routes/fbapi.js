const express = require("express");
const app = express();

const APP_ID = process.env.REACT_APP_ID;
const APP_SEC = process.env.REACT_APP_SEC;

//Get USER id, name
app.get("/userid", async (req, res) => {
  const accessToken = req.body.access_token;
  try {
    const res = await axios.get(
      `https://graph.facebook.com/v16.0/me?access_token=${accessToken}`,
      {
        headers: {
          token_type: "bearer",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    res.status(200).json(res);
    console.log("ress", res);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get USER long lived access Token
app.get("/longacctok", (req, res) => {
  const useraccessToken = req.body.access_token;

  axios
    .get(
      `https://graph.facebook.com/v16.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SEC}&fb_exchange_token=${useraccessToken}`,
      {
        headers: {
          token_type: "bearer",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((response) => {
      res.send(response.data);
      console.log("accesstocken", response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

//Get USER likes
app.get("/userlikes", (req, res) => {
  const useraccessToken = req.body.access_token;

  axios
    .get(
      `https://graph.facebook.com/v16.0/me?fields=likes&access_token=${useraccessToken}`,
      {
        headers: {
          token_type: "bearer",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((response) => {
      res.send(response.data);
      console.log("accesstocken", response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});
