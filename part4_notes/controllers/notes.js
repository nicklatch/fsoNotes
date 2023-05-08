const notesRouter = require('express').Router();
const Note = require('../models/note');

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({});
  response.json(notes);
});

notesRouter.get('/:id', async (request, response, next) => {
  try {
    const note = await Note.findById(request.params.id);
    note ? response.json(note) : response.status(404).end();
  } catch (exception) {
    next(exception);
  }
});

notesRouter.post('/', async (request, response, next) => {
  const body = request.body;
  const note = new Note({
    content: body.content,
    important: body.important || false,
  });
  try {
    const savedNote = await note.save();
    response.status(201).json(savedNote);
  } catch (exception) {
    next(exception);
  }
});

notesRouter.delete('/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

notesRouter.put('/:id', (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

module.exports = notesRouter;
