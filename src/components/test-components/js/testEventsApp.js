const mongoose = require('mongoose');

// import testable schemas
const TestEvent = require('./testEventSchema');

mongoose.connect('mongodb://localhost:27071/testevents');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", (callback) => {
  console.log("connection succeeded");
})

// add new event
app.post('/testevents', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var newEvent = new TestEvent({
    title: title,
    description: description
  })

  newEvent.save((error) => {
    if (error) console.log(error);
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})