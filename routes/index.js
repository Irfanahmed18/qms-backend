var express = require('express');
var router = express.Router();
const user_queries = require('../util/user-queries')
const question_queries = require('../util/question_queries')
const topic_query = require('../util/topic_query')

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

router.post('/add-question', function(req, res, next) {
  res.send("200");
  console.log(req.body);
  question_queries.insert_in_question_query(req.body);
});

router.get('/get-topics', function(req, res, next) {
  topic_query.get_topics().then(data => {
    res.send(data)
  })
});

module.exports = router;
