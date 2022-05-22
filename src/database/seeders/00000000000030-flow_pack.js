'use strict';

module.exports = {
  up: async (queryInterface) => {

    var data = await randomForno()
    await queryInterface.bulkInsert('flow_pack', data, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flow_pack', null, {});
  }
};

async function randomForno() {
  const randomItems = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  var r = [];
  for (var i = 0; i < randomItems; i++) {
    var d = randomDate();
    await r.push({
      velocidade_maquina: Math.random() * 300,
      quantidade_produtos_embalados: Math.floor(Math.random() * 999999) + 1,
      quantidade_embalagens: Math.floor(Math.random() * (999999999 - 9999 + 1)) + 9999,
      posicao_figura: Math.random() * 360,
      timestamp: d,
    });
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