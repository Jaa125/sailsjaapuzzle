// const Instagram = require("instagram-web-api")


// const instagramLoginFunction = () => {
//     const client = new Instagram ({
//         clientid: process.env.REACT_APP_INSTAGRAM_ID,
//         secret: process.env.REACT_APP_SECRET
//     })

//     const instagramPostPictureFunction = async () => {
//         await client
//         .getPhotosByUsername({clientid: process.env.REACT_APP_INSTAGRAM_ID})
//         .then(res => res.user.edge_owner_to_timeline_media.edges.map((edge)=> edge.node.edge_media_to_caption.edges[0].node.text)[0]
//         ).then((mostRecent) => Number(mostRecent.split(" - ")[0]))
//         .then((latestNumber) => {
//             const updateNumber = latestNumber + 1;
//         })
//     }
//     instagramPostPictureFunction()
// }


// instagramLoginFunction()

// data from frontend
// let code = req.body.code;
// let redirectUri = req.body.redirectUri;

// let accessToken = null;
// try {

//     // send form based request to Instagram API
//     let result = await request.post({
//         url: 'https://api.instagram.com/oauth/access_token',
//         form: {
//             client_id: process.env.INSTA_APP_ID,
//             client_secret: process.env.INSTA_APP_SECRET,
//             grant_type: 'authorization_code',
//             redirect_uri: req.body.redirectUri,
//             code: req.body.code
//         }
//     });

//     // Got access token. Parse string response to JSON
//     accessToken = JSON.parse(result).access_token;
// } catch (e) {
//     console.log("Error=====", e);
// }