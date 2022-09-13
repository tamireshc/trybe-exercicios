'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        full_Name: 'Leonardo',

        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        created_At: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_At: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        full_Name: 'JEduardo',

        created_At: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_At: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};