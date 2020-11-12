const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  //Validate requests
  if (
    !req.body.nama ||
    !req.body.umur ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).send({
      message: "Data can not be empty",
    });
    return;
  }

  const user = {
    nama: req.body.nama,
    umur: req.body.umur,
    email: req.body.email,
    password: req.body.password,
    aktif: req.body.aktif ? req.body.aktif : false,
  };

  User.create(user)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while creating post",
      });
    });
};

exports.SignIn = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findAll({ where: { email: `${email}` } })
    .then((data) => {
      if (data.length - 1) {
        res.status(404).send({
          status: false,
          message: "Incorrect Email",
        });
        return;
      }
      if (data[0].password === `${password}`) {
        res.status(200).send({
          status: true,
          message: "Success Login",
        });
      } else {
        res.status(404).send({
          status: false,
          message: "Incorrect Password",
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        status: false,
        message: "Something error",
      });
    });
};

exports.changePass = (req, res) => {
  const email = req.body.email;
  const passwordOld = req.body.password;
  const passwordNew = req.body.password_new;

  User.update(
    { password: passwordNew },
    {
      where: { email: `${email}`, password: `${passwordOld}` },
    }
  )
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Password was changed successfully",
        });
      } else {
        res.send({
          message: "Cannot change pass",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data",
      });
    });
};

exports.changeState = (req, res) => {
  const email = req.body.email;

  User.findOne({ where: { email: `${email}` } })
    .then((result) => {
      User.update({ aktif: !result.aktif }, { where: { id: result.id } }).then(
        () => {
          res.send({
            message: "State change successfully",
          });
        }
      );
    })
    .catch(() => {
      res.send({ message: "Something Error" });
    });
};
