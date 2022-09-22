'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        username: 'Leonardo',
        password: '1234',
        admin: false,
      },
      {
        username: 'Tamires',
        password: '1234',
        admin: false,
      },
      {
        username: 'admin',
        password: 's3nh4S3gur4???',
        admin: true,
      },


    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
