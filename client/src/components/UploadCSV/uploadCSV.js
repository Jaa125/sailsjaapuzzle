import React, { useEffect, useState } from "react";
import axios from "axios";
import './csv.css'
const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [likes, setLikes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://graph.facebook.com/v16.0/me/likes?access_token=${ACCESS_TOKEN}`
  //     );
  //     setLikes(response.data.data);
  //   };
  //   fetchData();
  // }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
    console.log("formdataaa",formData);
    try{
        const res = await axios.post("/impmedia",formData);
       console.log("ressCSV", res)
       
      }catch(err){
       console.log('errCSV', err)
      }
  };
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('instagram-button');
    button.click();
  });



 


  return (
    <div className="csv-container" >
     <input type="file" onChange={handleChange} />
      <button onClick={() => handleUpload(file)}>Upload</button>
      < br/>
    
     
      {/* <div className="fb-like" data-href="https://www.facebook.com/profile.php?id=100089959095787" data-width="400px" data-layout="button" data-action="like" data-size="small" data-share="false"></div> */}
      {/* <div class="instagram-button">
  <a href="https://www.instagram.com/kdpeoplegallery/" onClick={handlePopupInsta}>
    <img src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" alt="Instagram" height="20px"/>

    </a>
</div> */}
    </div>
  );
};

export default UploadCSV;
