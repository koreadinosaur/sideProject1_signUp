const express = require('express');
const cors = require('cors');
const app = express();

const port = 3005;


const userInfoRouter = require('./router/userInfoRouter');


app.use(cors());
app.use(express.json());

app.use('/userInfo', userInfoRouter);

app.get('/',(req, res) => 
res.status(200).send('???')
)


app.use((req, res, next) => {
    res.status(404).send('Not Found!');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
      message: 'Internal Server Error',
      stacktrace: err.toString()
    });
});


app.listen(port, () => {
    console.log(`[RUN] signUp server... | http://localhost:${port}`);
  });

  
module.exports = app;