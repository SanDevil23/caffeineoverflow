const express = require('express')

const app = express();

app.listen(port, () =>{
  console.log(`the server is up and running on port ${port}`);
});
