module.exports = app => {
  let Video = app.db.models.video;
  //PEGA TODOS OS VIDEOS DO BANCO
  app.get("/video", (req, res) => {
    Video.findAll({})
      .then(video => res.json(video))
      .catch(error => error.status(412).json({msg: error.message}));
  });
  //PEGA O VIDEO SEGUNDO O ID DO VIDEO PASSADO PELA URL
  app.get("/video/:id", (req, res) => {
      Video.findOne({where: {id: req.params.id}})
        .then(video => res.json(video))
        .catch(error => error.status(412).json({msg: error.message}));
  });
  //PEGA VIDEO SEGUNDO O ID DO USUARIO PASSADO PELA URL
  app.get("/user/video/:id_usu", (req, res) => {
      Video.findAll({where: {id_usu_post: req.params.id_usu}})
        .then(video => res.json(video))
        .catch(error => error.status(412).json({msg: error.message}));
  });

  app.post("/video", (req, res) => {
    Video.create(req.body)
      .then(video => res.json(video))
      .catch(error => error.status(412).json({msg: error.message}));
  });

  app.put("/video/:id", (req, res) => {
    Video.update(req.body, {where: req.params})
    .then(video => res.sendStatus(204))
    .catch(error => error.status(412).json({error: error.message}));
  });

  app.delete("/video/:id", (req, res) => {
    Video.destroy({where: {id: req.params.id}})
      .then(video => res.sendStatus(204))
      .catch(error => res.status(412).json({msg: error.message}));
  });
};
