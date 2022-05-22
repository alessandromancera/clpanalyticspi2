'use strict';

module.exports = {
  up: async (queryInterface) => {

    var db = await queryInterface.sequelize.query(`SELECT MAX(id) AS id FROM esteira`);
    var lastId = 0;
    if (db != undefined) {
      lastId = (db[0][0].id != null) ? db[0][0].id : 0;
    }

    var data = await randomEsteira(lastId)
    var subdata = await randomEsteiraDetalhes(data);

    await queryInterface.bulkInsert('esteira', data, {});

    await queryInterface.bulkInsert('esteira_detalhes', subdata, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('esteira', null, {});
  }
};

async function randomEsteira(lastId) {
  const randomItems = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  var r = [];
  for (var i = 0; i < randomItems; i++) {
    var d = randomDate();
    await r.push({
      id: lastId + 1 + i,
      velocidade_rolo: Math.random() * 20 + 1,
      velocidade_esteira: Math.random() * 20 + 1,
      timestamp: d,
    });
  }
  return await r;
}

async function randomEsteiraDetalhes(data) {
  var r = [];
  for (var i = 0; i < data.length; i++) {
    const randomSubItems = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    for (var j = 0; j < randomSubItems; j++) {
      var d = addSeconds(data[i].timestamp, 60 * j);
      await r.push({
        esteira_id: data[i].id,
        velocidade_rolo: Math.random() * 20 + 1,
        velocidade_esteira: Math.random() * 20 + 1,
        timestamp: d,
      });
    }
  }
  return await r;
}

function randomDate() {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setDate(startDate.getDate() - 10);
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  randomDate.setHours(randomDate.getHours() - Math.floor(Math.random() * (24 - 1 + 1)) + 1);
  randomDate.setMinutes(randomDate.getMinutes() - Math.floor(Math.random() * (60 - 1 + 1)) + 1);
  randomDate.setSeconds(randomDate.getSeconds() - Math.floor(Math.random() * (60 - 1 + 1)) + 1);
  return randomDate;
}

function addSeconds(date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
}
