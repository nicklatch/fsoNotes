const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;
console.log("--------------------");
console.log(`connecting to ${url}`);
console.log("--------------------");

mongoose
  .connect(url)
  .then((result) => {
    console.log("--------------------");
    console.log("connected to MongoDB");
    console.log("--------------------");
  })
  .catch((error) => {
    console.log(`error conneting to MongoDB: ${error.message}`);
  });

const noteSchema = new mongoose.Schema({
  content: String,
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
