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
    const Invoice = sequelize.define("invoice", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: 'id',
            },
        }
        ,
        themeName: {
            type: Sequelize.STRING,
        },
        domain: {
            type: Sequelize.STRING
        },
        commission: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.ENUM,
            values: ['Pending', 'Paid', 'Failed'],
            defaultValue: "Pending"
        },
    });


    return Invoice;
};


