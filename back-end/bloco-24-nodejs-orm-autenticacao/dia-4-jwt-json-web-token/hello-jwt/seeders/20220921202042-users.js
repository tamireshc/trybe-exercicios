'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        username: 'Leonardo',
        password: '1234',
      },
      {
        username: 'Tamires',
        password: '1234',
      },

    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
