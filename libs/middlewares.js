const cors = require("cors");
const bodyParser = require("body-parser");
module.exports = app => {
  app.set('port', 3001);
  app.set('json spaces', 4);
  app.use(cors());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
}
