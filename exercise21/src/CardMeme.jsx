import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Card, Button, Badge } from '@mui/material';

const baseUrl = 'https://api.chucknorris.io/jokes/random'

const CardMeme = () => {
  const [meme, setMeme] = useState({});
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  useEffect(() => {refreshMeme()},[]);

  function refreshMeme(){
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setMeme(response.data);
        console.log("Got the meme ")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCount = (setCounter, counter) => {
    setCounter(counter + 1)
  };

  return (
    <div
      style={{
        width:'100vw',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}  
    >
        { meme ? (
          <Card
            sx={{
              width: 400,
              height: 400,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              padding:'20px'
            }}
            variant='outlined'
          >
            <img alt='Meme' src={meme.icon_url} style= {{height:100, width:'100px'}}/>
            {meme.value}
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              margin: '5px',
              alignItems:'center'
              }}>
              <ThumbUpIcon onClick = {()=> onCount( setPositiveCount, positiveCount )}/>
              <p>{positiveCount}</p>
              <ThumbDownIcon onClick = {() => onCount( setNegativeCount , negativeCount )}/>
              <p>{negativeCount}</p>
            </div>
            <Button onClick={refreshMeme} style={{backgroundColor:'black', color:'white'}}> Muestrame un nuevo meme </Button>
          </Card>
        ) : (
          <h1>No hay memes</h1>
        )} 
    </div>
  );
};

export default CardMeme;
