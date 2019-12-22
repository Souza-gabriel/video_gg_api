module.exports = app => {
  const Usuario = app.db.models.usuario;
  app.get("/user", (req, res) => {
    Usuario.findAll({})
      .then(usuario =>{res.json({Usuario: usuario})
      .catch(error => {
        error.status(412).json({msg: error.message});
      });
    });
  });
  
  app.post("/user", (req, res) => {
    Usuario.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({msg: error.message});
    });
  });

  app.get("/user/:id", (req, res) => {
    Usuario.findOne({where: {id: req.params.id}})
      .then(usuario => {res.json({Usuario: usuario})})
      .catch(error => {
        error.status(412).json({msg: error.message});
      });
  });

  app.put("/user/:id", (req, res) => {
    Usuario.update(req.body, {where: req.params})
    .then(result => res.sendStatus(204))
    .catch(error => {
      error.status(412).json({error: error.message})
    });
  });

  app.delete("/user/:id", (req, res) => {
    Usuario.destroy({where: {id: req.params.id}})
      .then(result => res.sendStatus(204))
      .catch(error => res.status(412).json({msg: error.message}));
  });

}
