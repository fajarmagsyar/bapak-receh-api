const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');


app.get('/', (req, res) => {
  var jokesData = "gada candaan";
  fs.readFile('jokes.json', 'utf8', (err, data) => {
      if(err){
        res.send("[FAILED-ERR500] Kamus jokes gw ilang, tolongin dong min!!!!!!");
        return;
      }

      let rand = generateNomor(1, 50);
      console.log(`[${dateHariIni()}] Joke dengan id ${rand} di request dari 100`);

      jokesData = JSON.parse(data);
      res.send(jokesData.lelucon.find(obj => obj.id === rand));

  })
});

app.listen(port, () => {
  console.log(`Server Jalan => http://localhost:${port}`);
});


function generateNomor(min, max){
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInteger;
}

function dateHariIni(){
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return currentDateTime;
}