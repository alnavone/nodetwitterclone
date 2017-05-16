const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  // const userName = req.cookies.userName;
  // const comment = req.cookies.comment;
  res.render('index');
});

router.get('/dashboard', (req, res) => {
  const params = req.body;
  // const userName = req.cookies.userName;
  // const comment = req.cookies.comment;
  // res.send(params)
  console.log(params);
  res.render('dashboard', {userName: params.userName, comment: params.comment, submit: null});
});

router.post('/dashboard', (req, res) => {
  const params = req.body;
  // const userName = req.body.userName;
  // const comment = req.body.comment;

  console.log('params: ', params);
  res.cookie('userName', params.userName);
  res.cookie('comment', params.comment);
  res.render('dashboard', params);
});











module.exports = router;
