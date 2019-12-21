module.exports = app => {
  const Usuario = app.db.models.usuario;
  app.get("/user", (req, res) => {
    Usuario.findAll({}).then((usuario) =>{
      res.json({Usuario: usuario});
    });
  });
  //put
  //post
  //delete
}
