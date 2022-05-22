'use strict';

module.exports = {
  up: async (queryInterface) => {

    var db = await queryInterface.sequelize.query(`SELECT MAX(id) AS id FROM forno`);
    var lastId = 0;
    if (db != undefined) {
      lastId = (db[0][0].id != null) ? db[0][0].id : 0;
    }

    var data = await randomForno(lastId)
    var subdata = await randomFornoDetalhes(data);

    await queryInterface.bulkInsert('forno', data, {});

    await queryInterface.bulkInsert('forno_detalhes', subdata, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('forno', null, {});
  }
};

async function randomForno(lastId) {
  const randomItems = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  var r = [];
  for (var i = 0; i < randomItems; i++) {
    var d = randomDate();
    await r.push({
      id: lastId + 1 + i,
      temperatura_z1: Math.random() * (280 - 220 + 1) + 220,
      temperatura_z2: Math.random() * (280 - 220 + 1) + 220,
      temperatura_z3: Math.random() * (280 - 220 + 1) + 220,
      temperatura_z4: Math.random() * (280 - 220 + 1) + 220,
      temperatura_z5: Math.random() * (280 - 220 + 1) + 220,
      velocidade_esteira: Math.floor(Math.random() * 20) + 1,
      timestamp: d,
    });
  }
  return await r;
}

async function randomFornoDetalhes(data) {
  var r = [];
  for (var i = 0; i < data.length; i++) {
    const randomSubItems = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    for (var j = 0; j < randomSubItems; j++) {
      var d = addSeconds(data[i].timestamp, 60 * j);
      await r.push({
        forno_id: data[i].id,
        temperatura_z1: Math.random() * (280 - 220 + 1) + 220,
        temperatura_z2: Math.random() * (280 - 220 + 1) + 220,
        temperatura_z3: Math.random() * (280 - 220 + 1) + 220,
        temperatura_z4: Math.random() * (280 - 220 + 1) + 220,
        temperatura_z5: Math.random() * (280 - 220 + 1) + 220,
        velocidade_esteira: Math.floor(Math.random() * 60),
        pid_z1: Math.floor(Math.random() * 100),
        pid_z2: Math.floor(Math.random() * 100),
        pid_z3: Math.floor(Math.random() * 100),
        pid_z4: Math.floor(Math.random() * 100),
        pid_z5: Math.floor(Math.random() * 100),
        corrente_motor: Math.random() * 7,
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
