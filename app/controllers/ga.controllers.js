const db = require("../models");
const Post = db.ga;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
  //Validate requests
  if (
    !req.body.judul ||
    !req.body.hadiah ||
    !req.body.jumlah_pemenang ||
    !req.body.angka_awal ||
    !req.body.angka_akhir
  ) {
    res.status(400).send({
      message: "Data can not be empty",
    });
    return;
  }

  //Create post
  const ga = {
    judul: req.body.judul,
    hadiah: req.body.hadiah,
    jumlah_pemenang: req.body.jumlah_pemenang,
    angka_awal: req.body.angka_awal,
    angka_akhir: req.body.angka_akhir,
    aktif: req.body.aktif ? req.body.aktif : false,
  };

  Post.create(ga)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while creating post",
      });
    });
};

//Find All
exports.findAll = (req, res) => {
  const judul = req.query.judul;
  let condition = judul ? { judul: { [Op.like]: `%${judul}%` } } : null;

  Post.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while find post",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findAll({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while find post",
      });
    });
};

//Update a Post with ID
exports.update = (req, res) => {
  const id = req.params.id;

  Post.update(req.body, {
    where: { id: id },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Data was updated successfully",
        });
      } else {
        res.send({
          message: "Cannot update data",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data",
      });
    });
};

//Delete a post
exports.detele = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: { id: id },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Post was deleted successfully",
        });
      } else {
        res.send({
          message: "Cannot delete post",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error when delete post",
      });
    });
};

//Delete All
exports.deleteAll = (req, res) => {
  Post.destroy({
    where: {},
    truncate: true,
  })
    .then((result) => {
      res.send({
        message: "All Post was deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error when delete post",
      });
    });
};

//Find GA Aktif
exports.findActive = (req, res) => {
  Post.findAll({
    where: { aktif: true },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error getting data",
      });
    });
};
