const express = require('express');
const app = express();

// app.use(express.static('./build'));
app.use(express.static('build'));

app.get('/api/users', (req, res) => {
  res.send([
    {
      id:1,
      name:"Sanjay",
      age:56
    },
    {
      id:2,
      name:"Sanju",
      age:53
    },
    {
      id:3,
      name:"Shubam",
      age:27
    },
    {
      id:4,
      name:"Shobit",
      age:23
    }
  ]);
});

app.listen(8080, ()=> {console.log(`Listning on port 8080`)});
