'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('coffee2s', [
      {
        coffeeshop_name: 'Angkringan Telomoyo',
        desc: 'Sebuah Angkringan kecil di daerah Kepanjen',
        address: 'Jl. Raya Kepanjen',
        img:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coffeeshop_name: 'Kedai Baswara',
        desc: 'Kedai kopi yang sudah berdiri sejak PPKM',
        address: 'Jl. Kawi',
        img:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coffeeshop_name: 'Nogpi Huis',
        desc: 'Nogpi, kedai kecil nan rame',
        address: 'Jl. Sidodadi',
        img:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coffeeshop_name: 'Eshcol Buka Lagi',
        desc: 'Eshcol mulai buka lagi dengan jam normal',
        address: 'Jl. Kawi',
        img:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
          ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('coffee2s', null, {});
  }
};
