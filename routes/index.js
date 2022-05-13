var express = require('express');
var router = express.Router();
const user_queries = require('../util/user-queries')
const answer_queries = require('../util/answer_queries')
const question_queries = require('../util/question_queries')
const topic_query = require('../util/topic_query')
const like_query = require('../util/like_queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  user_queries.insert_in_user_table(req.body).then((data) => {
    if (data.code) {
      const error = {
        error_message: data.sqlMessage
      }
      res.send(error);
    }
  });
});

router.post('/sign-in', function(req, res, next) {
  console.log(req.body);
  user_queries.login_user(req.body).then((data) => {
    if (data.length !== 0) {
      res.sendStatus(200);
    } else {
      res.send({error: 'Invalid Credentials'})
    }
  });
});

router.post('/get-profile', function(req, res, next) {
  console.log(req.body);
  user_queries.get_user(req.body).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.send({error: 'Invalid Credentials'})
    }
  });
});

router.post('/add-question', function(req, res, next) {
  question_queries.insert_in_question_query(req.body).then(data => {
    res.send(data);
  });
});

router.get('/get-topics', function(req, res, next) {
  topic_query.get_topics().then(data => {
    res.send(data);
  })
});

router.get('/get-question-answers', function(req, res, next) {
  question_queries.get_all_questions_answers().then(data => {
    res.send(data);
  })
});

router.post('/get-user-question-answer', function(req, res, next) {
  question_queries.get_user_questions_answers(req.body).then(data => {
    res.send(data);
  });
});

router.post('/add-answer', function(req, res, next) {
  answer_queries.insert_in_answer(req.body).then(data => {
    res.send(data);
  });
});

router.post('/like-answer', function(req, res, next) {
  like_query.insert_in_like(req.body).then(data => {
    res.send(data);
  });
});

router.post('/unlike-answer', function(req, res, next) {
  like_query.delete_in_like(req.body).then(data => {
    res.send(data);
  });
});

module.exports = router;
