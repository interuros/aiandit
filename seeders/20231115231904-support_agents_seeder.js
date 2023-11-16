'use strict';

const { randomUUID } = require('crypto');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let rows = [];

    for (let i = 0; i < 10; i++) {
      rows.push({
        id: randomUUID(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('support_agents', rows);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('support_agents', null, {});
  },
};
