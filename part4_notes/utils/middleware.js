const logger = require('./logger');

const requestLogger = (request, response, next) => {
  logger.info(`Method: ${request.method}`);
  logger.info(`Path ${request.path}`);
  logger.info(`Body: ${request.path}`);
  logger.info('---');
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(400).send({ error: 'Unknown Endpoint' });
};

const errorHandler = (error, requst, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'Malformated ID' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
