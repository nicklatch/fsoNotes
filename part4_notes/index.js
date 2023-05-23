const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

app.listen(config.PORT || 3002, () => {
  logger.info(`${process.cwd()} | Listening on port ${config.PORT}`);
});
