const cors = require("cors");
module.exports = app => {
  app.set('port', 3001);
  app.set('json spaces', 4);
  app.use(cors());
}
