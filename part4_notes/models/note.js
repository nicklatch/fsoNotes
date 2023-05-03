const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;
console.log("---");
console.log(`connecting to MongoDB${url.slice(37, 50)}`);
console.log("---");

mongoose
  .connect(url)
  .then((result) => {
    console.log("---");
    console.log("connected");
    console.log("---");
  })
  .catch((error) => {
    console.log(`error conneting to MongoDB: ${error.message}`);
  });

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = String(returnedObject._id);
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
