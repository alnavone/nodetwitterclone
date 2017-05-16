const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const home = require('./routes/home');
// const posts = require('./routes/posts');
const cookieParser = require('cookie-parser');



app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use((req, res, next) => {
  const {cookies} = req;
  // above is a shortcut for: const cookies = req.cookies;
  console.log(cookies);
  next();
});

// app.use('/posts', posts);
app.use('/', home);


// app.get('dashboard.ejs', (request, response) => {
//   response.send('home');
// })



const PORT = 4444;
app.listen(
  PORT,
  () => { console.log(`Server listening on http://localhost:${PORT}`); }
);
