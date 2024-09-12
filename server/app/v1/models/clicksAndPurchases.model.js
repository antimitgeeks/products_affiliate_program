/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize').DataTypes} DataTypes
 * @typedef {import('sequelize').Model} Model
 */

/**
 * @param {Sequelize} sequelize
 * @param {typeof import('sequelize').DataTypes} DataTypes
 * @returns {Model}
 */

const bcrypt = require('bcrypt');
const { ENUM } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    /**
     * @type {Model}
     */
    const ClickAndPurchases = sequelize.define("clickandpurchases", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: 'id',
            },
        },
        affiliateId: {
            type: Sequelize.INTEGER,
            references: {
                model: "affiliate",
                key: 'id',
            },
        },
        type: {
            type: Sequelize.ENUM,
            values: ['Click', 'Purchase'],

        },


    });


    return ClickAndPurchases;
};


