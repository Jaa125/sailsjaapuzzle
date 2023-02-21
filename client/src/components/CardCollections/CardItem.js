// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BackSide, Flippy, FrontSide } from 'react-flippy'
import backCard from "../../assets/imgpost/logo.jpeg";
import imgpostt from "../../assets/imgpost/imgpostt.jpeg";
import './card.css'
function CardItem({ rows, columns,i,j,index, height, width,numberOf, fc, setFc ,link}) {
    const [itemflipped, setItemFlipped] = useState(false)
    const [success, setSuccess] = useState(false)
    const [count, setCount] = useState(0);
    const [cardlink, setLink] = useState([]);
    const h = 38  
    const w = 38
    // console.log((link.url))

useEffect(()=> {
setItemFlipped(fc.includes(index)  ? true : false )
setSuccess(fc.includes(index)  ? true : false )

},[])

useEffect(() => {
  console.log(`Number of cards clicked: ${count}`);
  console.log(`Link: ${cardlink}`);
}, [count, cardlink]);

const handleFButton = () => {
  
  setItemFlipped(true)
  if (!fc.includes(index)){
      setFc([...fc,index])
      setSuccess(true)
      
      if (link && link.hasOwnProperty('url') && link.url){
        setLink({...cardlink ,urls :link.url});
      }
   
   
  }

      //   const res = await axios.get('/pageid', {
      //       params: {
      //         link: "https://www.facebook.com/hannibal.palac"
      //       }
      //     })
        
      // console.log("ressfront", res?.data.id)
    
 
    // getPageId("https://www.facebook.com/profile.php?id=100089959095787")
   
}

  return (
    <a href={link && link.hasOwnProperty('url') && link.url} target="_blank">
    <Flippy 
    className="flippycard"
    isFlipped={itemflipped}
    flipOnClick={!itemflipped}
    onClick={handleFButton}
    style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundPosition: `-${j * w}px -${i * h}px`,
        backgroundSize: `${w * columns}px ${h * rows}px`,
        backgroundRepeat: 'no-repeat',
        margin:  '2px',
      
      }}>
        <FrontSide  style={{
                width: `${w}px`,
                height: `${h}px`,
                backgroundImage: `url(${backCard})`,
                backgroundPosition: `-${j * w}px -${i * h}px`,
                backgroundSize: `${w * columns}px ${h * rows}px`,
                backgroundRepeat: 'no-repeat',
              }} >
                    {itemflipped && !success &&  <button onClick={handleFButton}>click</button>}
                    
              </FrontSide>
              <BackSide  

              style={{
                
                width: `${w}px`,
        height: `${h}px`,
        backgroundImage: `url(${ imgpostt})`,
        backgroundPosition: `-${j * w}px -${i * h}px`,
        backgroundSize: `${w * columns}px ${h * rows}px`,
        backgroundRepeat: 'no-repeat',

              }}>
             
              </BackSide>
    </Flippy>
    </a>
  )
}

export default CardItem