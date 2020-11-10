module.exports = (sequelize, Sequelize) => {
  const GA = sequelize.define("giveaway", {
    judul: {
      type: Sequelize.STRING,
    },
    hadiah: {
      type: Sequelize.STRING,
    },
    jumlah_pemenang: {
      type: Sequelize.INTEGER,
    },
    angka_awal: {
      type: Sequelize.INTEGER,
    },
    angka_akhir: {
      type: Sequelize.INTEGER,
    },
    aktif: {
      type: Sequelize.BOOLEAN,
    },
  });

  return GA;
};
