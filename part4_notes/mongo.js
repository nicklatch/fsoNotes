const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.MONGODB_PW;

const url = `mongodb+srv://nicklatcham:${password}@fullstackone.lxnhe7w.mongodb.net/testNoteApp?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'supertest(api) is called a superagent',
  important: false,
});

note.save().then((result) => {
  console.log('note saved!');
  mongoose.connection.close();
});

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
