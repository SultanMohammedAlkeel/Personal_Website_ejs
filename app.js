const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const _ = require('lodash')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))
const homeStartingContent =
  ' Lacus vel facilisis volutpat est vetit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit ame luctus venenatis rectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio Lacus vel facilisis volutpat est vetit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit ame luctus venenatis rectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio '

const aboutContent =
  'Hac habitasse platea dictumst vestibulum rhoncus est pettentesque. Dictumst vestibulum rhoncus est pellentesque elit Mauris ultrices eros in cursus turpis massa tincidunt dui.Lacus vel facilisis volutpat est vetit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit ame luctus venenatis rectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio '
const contactContent =
  'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamt,Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut conse Lacus vel facilisis volutpat est vetit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit ame luctus venenatis rectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio '

var posts = [
  {
    title: 'day 1',
    post: 'Sit ame luctus venenatis rectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.',
  },
]
app.get('/', function (req, res) {
  res.render('home', {
    homeContent: homeStartingContent,
    posts: posts,
    truncate: _.truncate,
  })
})
app.get('/about', function (req, res) {
  res.render('about', { aboutContent: aboutContent })
})
app.get('/contact', function (req, res) {
  res.render('contact', { contactContent: contactContent })
})
app.get('/compose', function (req, res) {
  res.render('compose')
})

app.post('/compose', function (req, res) {
  const newPost = req.body.newPost
  const title = req.body.newTitle
  const post = {
    title: title,
    post: newPost,
  }
  posts.push(post)
  res.redirect('/')
})
app.get('/posts/:topic', function (req, res) {
  index = posts.find((post) => post.title == req.params.topic)
  topicTitle = index.title
  topicContent = index.post
  res.render('post', { topic: topicTitle, topicContent: topicContent })
})
app.listen(port, function () {
  console.log('Server is running on port 3000')
})
