module.exports = app => {
  const Usuario = app.db.models.usuario;
  //PEGA TODOS OS USUARIOS DO BANCO
  app.get("/user", (req, res) => {
    Usuario.findAll({})
      .then(usuario => res.json(usuario))
      .catch(error => error.status(412).json({msg: error.message}));
  });

  //ADICIONA UM USUARIO NO BANCO - NÂO TESTADO AINDA
  app.post("/user", (req, res) => {
    Usuario.create(req.body)
      .then(usuario => res.json(usuario))
      .catch(error => res.status(412).json({msg: error.message}));
  });

  //PEGA UM USUARIO PELO ID
  app.get("/user/:id", (req, res) => {
    Usuario.findOne({where: {id: req.params.id}})
      .then(usuario => res.json(usuario))
      .catch(error => error.status(412).json({msg: error.message}));
  });

  //ATUALIZA UM USUARIO NO BANCO - NÃO TESTADO
  app.put("/user/:id", (req, res) => {
    Usuario.update(req.body, {where: req.params})
    .then(usuario => res.sendStatus(204))
    .catch(error => error.status(412).json({error: error.message}));
  });

  //DELETA UM USUARIO DO BANCO - NÃO TESTADO
  app.delete("/user/:id", (req, res) => {
    Usuario.destroy({where: {id: req.params.id}})
      .then(usuario => res.sendStatus(204))
      .catch(error => res.status(412).json({msg: error.message}));
  });
}
